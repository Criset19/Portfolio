import './navbar.css'

const Navbar = () => {
    return (
        <div className='navbar_body'>
            <h1 className='navbar_title'>Portfolio</h1>
            <ul className="navbar_list">
                <li><a href='#about'>About</a></li>
                <li><a href='#proj'>Projects</a></li>
                {/* <li><a href='#future'>Future</a></li> */}
                <li><a href='#cont'>Contact</a></li>
            </ul>
        </div>
    )
}

export default Navbar;