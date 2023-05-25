import * as React from 'react';
import Note from './Note';


export default function NoteList() {
    return (
        <div className='listHolder bg-light-yellow tc w-50 h-100'>
            <ul>
                <Note />
                <Note />
                <Note />
            </ul>
        </div>
    );
}