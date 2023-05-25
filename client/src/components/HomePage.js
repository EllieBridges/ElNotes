import React from 'react';
import Navbar from './Navbar';
import Title from './Title';
import NoteList from './NoteList';


export default function HomePage() {
    return (
        <div className=''>
            <Navbar />
            <Title />
            <NoteList />
        </div>
    );
};

