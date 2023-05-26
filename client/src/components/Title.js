import Logo from './Logo';


export default function Title() {
    return (
        <div className='titleHolder tc pa3 bg-light-yellow ma4 w-40 shadow-5'>
            <div className='bg-light-blue pa1'>
                <Logo />
                <h1 className='title bg-light-blue'>Important things I must not forget </h1>
            </div>
        </div>
    )
}

