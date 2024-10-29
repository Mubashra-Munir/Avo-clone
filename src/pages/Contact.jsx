// pages/Contact.jsx
import React from 'react';
import '../assets/style/contact.css';
const Contact = () => {
  return (
    <>
     {/* Hero Section */}
     <section className="hero-section-contact justify-content-center allign-items-center text-center" >
    <div className="col-md-3  d-none d-md-block">
              <h1 className="display-3 text-white contact-heading">Contact</h1>
            </div>
  </section>

  <div className="container py-5">
      {/* Header */}
      <header className="mb-5 text-center">
        <h5 className="text-danger">Contact Us</h5>
        <h1><b>HAVE A PROJECT</b></h1>
        <p className="text-muted">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
      </header>

      <div className="row">
        {/* Contact Form Section */}
        <div className="col-lg-6 mb-4">
          <h2 className="mb-4">Get in Touch</h2>
          <form className="bg contact-form w-100 p-4">
            <div className="mb-3 ">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Your Name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Your Email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input type="text" className="form-control" id="subject" placeholder="Subject" required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="5" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="btn btn-danger">Send Message</button>
          </form>
        </div>

        {/* Contact Information Section */}
        <div className="col-lg-4">
          <h2 className="mb-4">Contact Information</h2>
          <div className="mb-3">
            <h5>Email:</h5>
            <p>info@example.com</p>
          </div>
          <div className="mb-3">
            <h5>Phone:</h5>
            <p>+1 234 567 890</p>
          </div>
          <div className="mb-3">
            <h5>Address:</h5>
            <p>123 Street Name, City, Country</p>
          </div>
        </div>
      </div>

      {/* Google Maps Section */}
      <div className="mt-5">
        <h2 className="mb-4">Find Us Here</h2>
        <iframe
          title="Google Maps Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.226155502364!2d-122.41941508467262!3d37.774929279759726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085816599c8a6b7%3A0xf9d8b8b14b72f519!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1630453900724!5m2!1sen!2sus"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
    </>
  );
}
export default Contact;
