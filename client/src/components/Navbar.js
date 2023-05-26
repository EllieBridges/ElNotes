
import * as React from 'react';
import { Link } from 'react-router-dom';



export default function Navbar() {
    return (
        <nav className='navbar bg-light-purple w-100 pa3' position="static">
            <Link to="/" className='anchorButton bg-light-purple pa2' component="div" sx={{ flexGrow: 1 }}>
                <img className='smallIcon' src='./home.svg'></img>
                Home
            </ Link>
        </nav>
    );
}
