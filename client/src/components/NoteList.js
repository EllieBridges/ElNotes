import * as React from 'react';
import Note from './Note';



export default function NoteList() {
    return (
        <div className='listHolder bg-white w-40 vh-75 ma4 ba bw4 b--light-yellow shadow-5'>
            <ul className='listOfNotes'>
                <Note />
                <Note />
                <Note />
            </ul>

        </div>
    );
}