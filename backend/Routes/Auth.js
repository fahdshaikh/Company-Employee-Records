const express = require('express');
const bcrypt = require('bcryptjs');
const { loginValidation, registerValidation } = require('../validation');
const Admin = require('../Models/Admin');
const dotenv = require('dotenv');

const router = express.Router();
dotenv.config();

router.post('/register', async (req, res) => {
    const { error } = registerValidation(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    const emailExists = await Admin.findOne({ email: req.body.email });
    if (emailExists) {
        return res.status(400).send('Email already exists in the Database');
    }

    const hashedPassword = await bcrypt.hash(
        req.body.password,
        await bcrypt.genSalt(10),
    );

    const admin = new Admin({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
    });

    try {
        const savedAdmin = await admin.save();
        res.status(200).send('Admin Registered Successfully');
    } catch (err) {
        res.statusCode(400).send(err);
    }
});

router.post('/login', async (req, res) => {
    const { error } = loginValidation(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    const admin = await Admin.findOne({ email: req.body.email });
    if (!admin) {
        return res.status(400).send('Email does not Exist');
    }
    const validPass = await bcrypt.compare(req.body.password, admin.password);
    if (!validPass) {
        return res.status(400).send('Invalid Password');
    }
    res.status(200).send(admin);
});

module.exports = router;
