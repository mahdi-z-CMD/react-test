import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isActive, setActive] = useState(false);

  function handleClick() {
    setActive(!isActive);
  }

  function closeMenu() {
    setActive(false);
  }

  return (
    <nav className="navbar">
        <Link to='/react-test'><a href="#" class="nav-logo">LOGO</a></Link>
      <button className={`hamburger ${isActive ? 'active' : ''}`} onClick={handleClick}>
            <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
      </button>
      <ul className={`nav-menu ${isActive ? 'active' : ''}`}>
        <li className="nav-item">
          <Link to="/Login" className='login-btn '>ورود / ثبت نام </Link>
        </li>
        <li className="nav-item">
          <a href="#about" className="nav-link" onClick={closeMenu}>پیگیری ثبت نام</a>
        </li>
        <li className="nav-item">
          <a href="#services" className="nav-link" onClick={closeMenu}>چرا فرزندم را اینجا ثبت نام کنم ؟</a>
        </li>
        <li className="nav-item">
          <a href="#contact" className="nav-link" onClick={closeMenu}>تخفیف ها</a>
        </li>
        <li className="nav-item">
          <a href="#contact" className="nav-link" onClick={closeMenu}>برترین ها</a>
        </li>
        <li className="nav-item">
          <a href="#contact" className="nav-link" onClick={closeMenu}>تماس با ما</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;