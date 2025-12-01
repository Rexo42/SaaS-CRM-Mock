import { useEffect, useState } from 'react';
import './navbar.css'

export default function Navbar()
{
    return (
        <nav className='navbarContainer'>
                <div className='navbarLeft'>
                    <h1>SaaS CRM App</h1>
                </div>

                <div className='navbarRight'>
                    <a className='homeButton' href='/home'>Home</a>
                    <a className='loginButton' href='/login'>Login</a>
                </div>
        </nav>
    );
}