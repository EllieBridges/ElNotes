
export default function Note({ note }) {
    return (
        <div>
            <li>
                <a>
                    <h2 className='listNoteTitle grow'>{note.title}</h2>
                </a>
            </li>
        </div>
    )
}