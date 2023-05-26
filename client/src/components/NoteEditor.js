import NoteInput from "./NoteInput";
import Title from "./Title";

export default function NoteEditor() {
    return (
        <div className='mainContainer'>
            <Title
                text='Note Editor' />
            <NoteInput />
        </div >
    )
}