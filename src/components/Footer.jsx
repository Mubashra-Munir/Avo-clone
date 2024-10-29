// components/Footer.jsx
import React from 'react';
import '../assets/style/footer.css';
import {  FaPhone,FaMapMarkerAlt,FaRegEnvelope  } from 'react-icons/fa';
const Footer = () => {
 return(
    <>
    <footer className=" footer bg-black text-white py-4">
      <div className="container footer-top">
        <div className="row">
          {/* Logo and Description */}
          <div className="col-md-2 mb-3">
            <h5> avo</h5>
            <p className="footer-p">
            Far far away, behind the word mountains, far from the countries.
            </p>
            <ul className="list-unstyled d-flex">
            <li className="me-3">
              <a href="/" className="text-light text-decoration-none">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="me-3">
              <a href="/" className="text-light text-decoration-none">
              <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li className="me-3">
              <a href="/" className="text-light text-decoration-none">
                <i className="fab fa-instagram"></i>
              </a>
           </li>
          </ul>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-3">
            <h6>Community</h6>
            <ul className="list-unstyled">
              <li><a href="#home" className="footer-color text-decoration-none footer-color">Home</a></li>
              <li><a href="#about" className="footer-color text-decoration-none">About</a></li>
              <li><a href="#services" className="footer-color text-decoration-none">Services</a></li>
              <li><a href="#portfolio" className="footer-color text-decoration-none">Portfolio</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-md-2 mb-3">
            <h6>About Us</h6>
            <ul className="list-unstyled">
              <li><a href="#design" className="footer-color text-decoration-none">Web Design</a></li>
              <li><a href="#development" className="footer-color text-decoration-none">Development</a></li>
              <li><a href="#marketing" className="footer-color text-decoration-none">Marketing</a></li>
              <li><a href="#branding" className="footer-color text-decoration-none">Branding</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-md-2 mb-3">
            <h6>Company</h6>
            <ul className="list-unstyled">
              <li><a href="#design" className="footer-color text-decoration-none">Web Design</a></li>
              <li><a href="#development" className="footer-color text-decoration-none">Development</a></li>
              <li><a href="#marketing" className="footer-color text-decoration-none">Marketing</a></li>
              <li><a href="#branding" className="footer-color text-decoration-none">Branding</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-2 mb-3">
            <h6>Have a Questions?</h6>
            <p className="footer-color">123 Street, City, State</p>
            <p className="footer-color">Email: contact@avo.com</p>
            <p className="footer-color">Phone: +123 456 789</p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="d-flex justify-content-center mt-3">
          <a href="#facebook" className="text-white mx-2"><i className="bi bi-facebook"></i></a>
          <a href="#twitter" className="text-white mx-2"><i className="bi bi-twitter"></i></a>
          <a href="#instagram" className="text-white mx-2"><i className="bi bi-instagram"></i></a>
          <a href="#linkedin" className="text-white mx-2"><i className="bi bi-linkedin"></i></a>
        </div>

        {/* Copyright */}
        <div className="text-center pt-3">
        <p className="footer-color mb-0">
            Copyright © 2024 All rights reserved | This template is made with <i className="fas fa-heart footer-color"></i> by 
            <a className="clorlib"href="https://colorlib.com" target="_blank">Colorlib</a>
          
          </p>       
           </div>
      </div>
    </footer>
    </>
  );
}

export default Footer;
