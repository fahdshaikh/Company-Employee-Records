import React from 'react';
import data from '../Utils/data.json';
import EmpCard from './EmpCard';
import styled from 'styled-components';

const Wrapper = styled.div`
    overflow-x: hidden;
    font-family: sans-serif;
    background: #e9ecef;
    div {
        // border: 1px solid red;
    }
`;

const Heading = styled.div`
    font-size: 44px;
    font-weight: bold;
    padding-top: 20px;
    padding-bottom: 20px;
    background: #e9ecef;
`;

const Dashboard = () => {
    // console.log(data);
    return (
        <>
            <Heading>Dashboard</Heading>
            <Wrapper>
                <div className='container'>
                    <div className='row row-cols-2 p-1 '>
                        {data &&
                            data.map((item) => (
                                <EmpCard data={item} key={item.id} />
                            ))}
                    </div>
                </div>
            </Wrapper>
        </>
    );
};

export default Dashboard;
