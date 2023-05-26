import React from 'react';
import Navbar from './Navbar';
import Title from './Title';
import NoteList from './NoteList';
import './style.css';




export default function HomePage() {
    return (
        <div className='mainContainer'>
            <Navbar />
            <Title />
            <NoteList />
        </div>
    );
};

