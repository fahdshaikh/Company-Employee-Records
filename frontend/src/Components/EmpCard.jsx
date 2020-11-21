import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Wrapper = styled.div`
    border: 1px solid darkgrey;
    background: #fff;
    div {
        // border: 1px solid red;
    }
    button {
        border-radius: 0px;
        box-shadow: 0 4px 7px 0 rgba(218, 220, 230, 7.9);
    }
    box-shadow: 0 4px 7px 0 rgba(218, 220, 230, 7.9);

    &:hover {
        transform: scale(0.98);
    }
`;

const EmpCard = (props) => {
    const history = useHistory();
    const { data } = props;
    const [totalAmmount, setTotalAmmount] = useState(0);
    const [totalMonths, setTotalMonths] = useState(0);
    // console.log(data);

    useEffect(() => {
        salary();
    }, []);

    const salary = () => {
        let temp = data.joining_date.split('/');
        let months = Number(temp[1]);
        setTotalMonths(months);
        let sal = Number(data.salary);
        setTotalAmmount(Math.round(months * sal));
    };

    const viewDetails = () => {
        history.push({
            pathname: '/Details',
            data: data,
        });
    };

    return (
        <Wrapper className='my-3'>
            <div className='row'>
                <div className='col-md-auto pl-4 pr-0 pt-2 pb-2'>
                    <img src={data.img_url} alt='profile' />
                </div>
                <div className='col pt-3'>
                    <div className='row-cols-1'>
                        <div className='col text-capitalize text-left pl-0'>
                            <h5 className='font-weight-bold'>
                                {data.first_name} {data.last_name}
                            </h5>
                        </div>
                        <div className='col mb-4 text-left pl-0 text-capitalize'>
                            total salary: ${totalAmmount} in {totalMonths}{' '}
                            month/s
                        </div>
                        <div className='col text-capitalize text-right pl-0 mr-3'>
                            <button
                                type='button'
                                class='btn btn-info'
                                onClick={viewDetails}
                            >
                                Details
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default EmpCard;
