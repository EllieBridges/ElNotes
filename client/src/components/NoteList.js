import * as React from 'react';
import Note from './Note';
import Button from './Button';



export default function NoteList() {
    return (
        <div className='container bg-white w-40 vh-75 ma4 ba bw4 b--light-yellow shadow-5'>
            <ul className='listOfNotes'>
                <Note />
                <Note />
                <Note />
                <Button
                    type='create'
                    pageLink='/noteeditor'
                />
            </ul>

        </div>
    );
}