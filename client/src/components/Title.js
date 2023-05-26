import Logo from './Logo';


export default function Title({ text }) {
    return (
        <div className='titleHolder tc pa3 bg-light-yellow ma4 w-40 shadow-5'>
            <div className='bg-light-blue pa1'>
                <Logo />
                <h1 className='title bg-light-blue'>{text}</h1>
            </div>
        </div>
    )
}

