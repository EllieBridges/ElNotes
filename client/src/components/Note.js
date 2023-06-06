import { useState, useEffect } from 'react';
import axios from 'axios';


export default function Note({ note, setUrl }) {
    const [noteInstance, setNote] = useState({})

    useEffect(() => {
        const noteUrl = `http://localhost:3001/ ${note.title}`;
        axios.get(noteUrl).then((response) => {
            setNote(response.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <div>
            <li onClick={() => setUrl(note.id)}>
                <a>
                    <h2 className='listNoteTitle grow'>{note.title}</h2>
                </a>
            </li>
        </div>
    )
}