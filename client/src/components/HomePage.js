import React from 'react';
import Title from './Title';
import NoteList from './NoteList';
import './style.css';




export default function HomePage() {
    return (
        <div className='mainContainer'>
            <Title
                text='Important things I must not forget' />
            <NoteList />
        </div>
    );
};

