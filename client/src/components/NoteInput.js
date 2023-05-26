import Button from "./Button";

export default function NoteInput() {
    return (
        <div>
            <textarea
                className='container bg-white w-40 vh-75 ma4 ba bw4 b--light-yellow shadow-5'
                placeholder='Start typing your note here'>
            </textarea>
            <Button
                type='save'
                pageLink='/'
            />

        </div>
    )
}
