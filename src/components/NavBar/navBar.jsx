import React from 'react';
import './navBar.css';
import logo from '../../assets/MAMBA.png';
import { Link } from 'react-scroll';
import contactImg from '../../assets/contact-logo.jpg'
function NavBar() {
   
    return(
        <nav className='NavBar'>
            <img src={logo} alt='Logo' className='logo'></img>
            <div className='desktopMenu'>
              <Link className='desktopMenuListItem'>Home</Link>
              <Link className='desktopMenuListItem'>About</Link> 
              <Link className='desktopMenuListItem'>Portfolio</Link> 
              <Link className='desktopMenuListItem'>Clients</Link>   
            </div>
            <button className='desktopMenuBtn'>
                <img src= {contactImg} alt='Contact Image' className='desktopMenuImg'></img>
                Contact Me
            </button>
        </nav>
    )
}

export default NavBar;
