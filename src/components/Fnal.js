import React from 'react';
import { useLocation } from 'react-router-dom';

const Fnal = () => {
    const { state } = useLocation();
    const { username } = state;
    console.log({ state });
    return (
        <div>
            <h1>Thank you for filling the form {username}</h1>
        </div>
    )
}

export default Fnal