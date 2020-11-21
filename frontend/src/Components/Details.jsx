import React from 'react';
import styled from 'styled-components';

// let data = {
//     id: 2,
//     first_name: 'Reg',
//     last_name: 'MacAindreis',
//     email: 'rmacaindreis1@xrea.com',
//     gender: 'Male',
//     img_url: 'https://randomuser.me/api/portraits/men/2.jpg',
//     joining_date: '04/07/2020',
//     salary: '2546.13',
//     job_title: 'Web Designer III',
// };

const Wrapper = styled.div`
    padding: 160px;
    overflow-x: hidden;
    font-family: sans-serif;
    div {
        // border: 1px solid red;
    }
`;

const Name = styled.div`
    font-size: 28px;
    font-weight: bold;
`;

const Heading = styled.div`
    font-size: 44px;
    font-weight: bold;
    padding-top: 20px;
    background: #e9ecef;
`;

const Details = (props) => {
    const data = props.location.data;
    console.log(props.location.data);
    console.log(data);
    return (
        <>
            <Heading>Employee Details</Heading>
            <Wrapper>
                <div className='container'>
                    <div className='row  justify-content-center'>
                        <div
                            className='col-2'
                            style={{
                                borderLeft: '10px solid darkgrey',
                                boxShadow:
                                    '0 4px 7px 0 rgba(218, 220, 230, 7.9)',
                                background: '#f8f9fa',
                            }}
                        >
                            <img
                                src={data.img_url}
                                alt='profile'
                                className='p-2'
                            />
                        </div>
                        <div
                            className='col-5'
                            style={{
                                boxShadow:
                                    '0 4px 7px 0 rgba(218, 220, 230, 7.9)',
                                background: '#f8f9fa',
                            }}
                        >
                            <div className='row-cols-1 text-left'>
                                <Name className='col'>
                                    Name: {data.first_name} {data.last_name}
                                </Name>
                                <div className='col'>Email: {data.email}</div>
                                <div className='col'>Gender: {data.gender}</div>
                                <div className='col'>
                                    Joining Date: {data.joining_date}
                                </div>
                                <div className='col'>
                                    Position: {data.job_title}
                                </div>
                                <div className='col'>
                                    Salary per month: $ {data.salary}
                                </div>
                            </div>
                        </div>
                        <div class='w-100'></div>
                    </div>
                </div>
            </Wrapper>
        </>
    );
};

export default Details;
