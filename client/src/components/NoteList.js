import { useState, useEffect } from 'react';
import Note from './Note';
import ButtonIcon from './ButtonIcon';
import axios from 'axios';



export default function NoteList() {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/notes').then((response) => {
            console.log(response)
            setNotes(response.data.notes)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    return (
        <div className='container bg-white w-40 vh-75 ma4 ba bw4 b--light-yellow shadow-5'>
            <ul className='listOfNotes'>
                {
                    notes.map(note => {
                        return (<Note note={note} />)
                    })
                }
                < ButtonIcon
                    type='create'
                    pageLink='/noteeditor'
                />
            </ul>
        </div>
    );
}