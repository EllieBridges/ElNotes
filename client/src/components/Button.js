
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Button({ pageLink, type }) {
    const navigate = useNavigate();
    const handleOnClick = () => navigate(pageLink);

    return (
        <button className='createButton grow' onClick={handleOnClick}>
            <img className='createIcon smallIcon b-light-blue' src={type + '.svg'}></img>
        </button>
    );
}
