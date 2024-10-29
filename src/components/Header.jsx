//import React from 'react'
import React, { useEffect, useState } from 'react';
import '../assets/style/header.css';

const Header = () => {
    const [navbarScrolled, setNavbarScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setNavbarScrolled(window.scrollY > 50);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  return (
    <>
      <nav className={`navbar fixed-top navbar-expand-lg ${navbarScrolled ? 'navbar-scrolled' : ''}`}>
         <div className="container">
          <a className="navbar-brand fw-bold" href="/">a<span className="logo">v</span>o</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span> 
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="/work">Work</a></li>
              <li className="nav-item"><a className="nav-link" href="/blog">Blog</a></li>
              <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
            </ul>
          </div>
        </div>
    </nav>
    </>
  )
}

export default Header
