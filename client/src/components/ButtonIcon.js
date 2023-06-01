import React from 'react';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Icon from './Icon';

export default function ButtonIcon({ pageLink, type }) {
    const navigate = useNavigate();
    const handleOnClick = () => navigate(pageLink);

    return (
        <IconButton
            className='createButton'
            aria-label='create'
            style={{
                borderRadius: 50,
                backgroundColor: "#96ccff",
                padding: "18px 18px",
                alignItems: "center"
            }}
            onClick={handleOnClick}
        >
            {<Icon type={type} />}
        </IconButton >
    );
}
