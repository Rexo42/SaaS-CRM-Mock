import './navbar.css'

export default function Navbar()
{
    return (
        <nav className='navbarContainer'>
                <div className='navbarLeft'>
                    <h1>SaaS CRM App</h1>
                </div>

                <div className='navbarRight'>
                    <li><a className='homeButton' href='/home'>Home</a></li>
                    <li><a className='loginButton' href='/login'>Login</a></li>
                </div>
        </nav>
    );
}