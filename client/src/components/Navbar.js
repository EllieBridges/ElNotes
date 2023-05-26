
import * as React from 'react';



export default function Navbar() {
    return (
        <div className='navbar bg-light-purple w-100 pa3' position="static">
            <a className='anchorButton bg-light-purple pa2' component="div" sx={{ flexGrow: 1 }}>
                <img className='smallIcons' src='./home.svg'></img>
                Home
            </a>
        </div>
    );
}