import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Wrapper = styled.div`
    overflow-x: hidden;
    font-family: sans-serif;
    background: #f8f9fa;
    div {
        // border: 1px solid red;
    }
`;

const Image = styled.img`
    width: inherit;
    height: inherit;
    padding-right: 0px;
    padding-left: 0px;
`;

const LoginWrapper = styled.div`
    border-left: 17px solid darkgrey;
    div {
        // border: 1px solid red;
    }
`;
const RememberMe = styled.div`
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
`;

const Login = () => {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    const history = useHistory();

    const handleSignIn = () => {
        axios
            .post('http://localhost:5000/api/user/login', {
                email: email,
                password: password,
            })
            .then((res) => history.push('/Dashboard'))
            .catch((err) => {
                alert(err.response.data);
            });
    };

    const handleSignUp = () => {
        history.push({
            pathname: '/SignUp',
        });
    };

    return (
        <Wrapper>
            <div className='container-fluid'>
                <div className='row align-items-center'>
                    <div className='col-7 pl-0 pr-0'>
                        <Image
                            src='https://source.unsplash.com/1200x992/?Tech,comapny'
                            alt='Tech Company'
                        />
                    </div>
                    <LoginWrapper className='col-5 '>
                        <div className='row row-cols-1 p-4'>
                            <div className='col align-self-center'>
                                <img
                                    src='Icons/shield.svg'
                                    alt='Shield'
                                    width='50px'
                                    height='50px'
                                />
                            </div>
                            <div className='col align-self-center'>
                                <h3>Sign In</h3>
                            </div>
                            <div className='col input-group input-group-lg pt-3 pb-0'>
                                <div className='input-group-prepend'>
                                    <div className='input-group-text'>
                                        email
                                    </div>
                                </div>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Email'
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className='col input-group input-group-lg pt-3 pb-0'>
                                <div className='input-group-prepend'>
                                    <div className='input-group-text'>
                                        password
                                    </div>
                                </div>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='password'
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </div>
                            <RememberMe className='col pt-3 pb-0 text-left text-muted'>
                                <input
                                    className='mr-3 ml-2 input-group-lg'
                                    type='checkbox'
                                    checked
                                />
                                Remember Me ?
                            </RememberMe>
                            <div className='col pt-5'>
                                <button
                                    type='button'
                                    className='btn btn-primary btn-block btn-lg text-uppercase'
                                    onClick={handleSignIn}
                                >
                                    Sign In
                                </button>
                            </div>
                            <div className='col pt-1'>
                                <div className='row justify-content-between'>
                                    <button
                                        type='button'
                                        class='btn col text-left btn-sm ml-2'
                                    >
                                        Forgot password?
                                    </button>
                                    <button
                                        type='button'
                                        class='btn col text-right btn-sm mr-2'
                                        onClick={handleSignUp}
                                    >
                                        Don't have an account? Sign Up
                                    </button>
                                </div>
                            </div>
                        </div>
                    </LoginWrapper>
                </div>
            </div>
        </Wrapper>
    );
};

export default Login;
