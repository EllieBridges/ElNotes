import { useState, useEffect } from 'react';
import Note from './Note';
import ButtonIcon from './ButtonIcon';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function NoteList() {
    const [notes, setNotes] = useState([])

    // Will run after the code html has rendered
    // useEffect handles non-user inputs/events
    useEffect(() => {
        //Axios implements the Promise API
        axios.get('http://localhost:3001/notes').then((response) => {
            setNotes(response.data.notes)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    const navigate = useNavigate();
    const setUrl = (noteid) => navigate(`/note/${noteid}`)

    return (
        <div className='container bg-white w-40 vh-75 ma4 ba bw4 b--light-yellow shadow-5'>
            <ul className='listOfNotes'>
                {
                    notes.map(note => {
                        return (<Note setUrl={setUrl} note={note} />)
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