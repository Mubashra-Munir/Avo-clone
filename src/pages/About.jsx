// pages/About.jsx
import React from 'react';
import '../assets/style/about.css';
import about from '../assets/images/about.jpg';
import person1 from '../assets/images/person_1.jpg';
import person2 from '../assets/images/person_2.jpg';
import person3 from '../assets/images/person_3.jpg';
// import person1 from '../assets/images/person_1.jpg';
// import person1 from '../assets/images/person_1.jpg';
const About = () => {
  return (
<>
 {/* Hero Section */}
 <section className="hero-section-about justify-content-center allign-items-center text-center" >
 <div className="container">
    <div className="col-md-3  d-none d-md-block">
              <h1 className="display-3 text-white contact-heading">ABOUT</h1>
            </div>
            </div>
     </section>
       {/* About Section */}

       <section className="py-5" id="about">
      <div className="container ">
      <div className="row text-center about-sec">
        <div className="text-center mb-5">
          <h2 className="display-4">About Us</h2>
        </div>
            <div className="col-md-2">
              <div className="p-3">
                <i className="fa fa-code fa-3x mb-4"></i>
                <h3 className="mb-3">Web Development</h3>
              </div>
              </div>
              <div className="col-md-2">
              <div className="p-3">
                <i className="fa fa-code fa-3x mb-4"></i>
                <h3 className="mb-3">Web Development</h3>
              </div>
              </div>
              <div className="col-md-2">
              <div className="p-3">
                <i className="fa fa-code fa-3x mb-4"></i>
                <h3 className="mb-3">Web Development</h3>
              </div>
              </div>
            <div className="col-md-2">
              <div className="p-3">
                <i className="fa fa-paint-brush fa-3x mb-4"></i>
                <h3 className="mb-3">UI/UX Design</h3>
              </div>
            </div>
            <div className="col-md-2">
              <div className="p-3 ">
                <i className="fa fa-chart-bar fa-3x mb-4"></i>
                <h3 className="mb-3">Digital Marketing</h3>
              </div>
            </div>
          </div>
          </div>
        <div className="row">
          <div className="col-lg-4 text-center">
            <h3>Welcome to AVO A Personal Porfolio Web Agency</h3>
            <p>
            Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
          </div>

          <div className="col-lg-4 text-center">
            <img 
              src={about} 
              alt="Vision" 
              className="img-fluid mb-3" 
              // style={{ width: "80px", height: "80px" }} 
            />
            {/* <h5>Our Vision</h5> */}
            {/* <p>
              To be a leader in our industry, known for our commitment to quality and customer satisfaction.
            </p> */}
          </div>

          <div className="col-lg-4 text-center">
            <p>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
            </p>
            <button type="button" class="btn btn-danger">View All Project</button>
          </div>
        </div>
    </section>
    {/* Image */}
   <section className="intro justify-content-center allign-items-center text-center" >
        <div className="container">
         
          {/* <p className="lead">
            <a href="/" className="text-light text-decoration-underline">Colorlib.</a>
            Download and share!</p>
          <a href="#" className="btn btn-outline-light btn-lg">
            VISIT COLORLIB
          </a> */}
          <div className="col-md-3 banner ">
              <h5 className="Get">Get Started</h5>
              <p className="text-light mt-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
              <a href="#about" className="btn btn-danger btn-lg">Get Started</a>
            </div>
        </div>
      </section>
      {/* Team Section */}
      <section className="team-section py-5">
        <div className="container">
          <h2 className="text-center mb-4">Expert Team</h2>
          <div className="row">
            {/* Team Member 1 */}
            <div className="col-md-3">
              <div className="card">
                <img
                  src={person1}
                  className="card-img-top"
                  alt="Team Member 1"
                />
                <div className="card-body">
                  <h5 className="card-title">John Doe</h5>
                  <p className="card-text">CEO & Founder</p>
                </div>
              </div>
            </div>
            {/* Team Member 2 */}
            <div className="col-md-3">
              <div className="card">
                <img
                  src={person2}
                  className="card-img-top"
                  alt="Team Member 2"
                />
                <div className="card-body">
                  <h5 className="card-title">Jane Smith</h5>
                  <p className="card-text">Project Manager</p>
                </div>
              </div>
            </div>
            {/* Team Member 3 */}
            <div className="col-md-3">
              <div className="card">
                <img
                  src={person3}
                  className="card-img-top"
                  alt="Team Member 3"
                />
                <div className="card-body">
                  <h5 className="card-title">Mike Johnson</h5>
                  <p className="card-text">Lead Developer</p>
                </div>
              </div>
            </div>
             {/* Team Member 4 */}
             <div className="col-md-3">
              <div className="card">
                <img
                  src={person3}
                  className="card-img-top"
                  alt="Team Member 3"
                />
                <div className="card-body">
                  <h5 className="card-title">Mike Johnson</h5>
                  <p className="card-text">Lead Developer</p>
                </div>
              </div>
            </div>
                        {/* Team Member 1 */}
                        <div className="col-md-3">
              <div className="card">
                <img
                  src={person1}
                  className="card-img-top"
                  alt="Team Member 1"
                />
                <div className="card-body">
                  <h5 className="card-title">John Doe</h5>
                  <p className="card-text">CEO & Founder</p>
                </div>
              </div>
            </div>
            {/* Team Member 2 */}
            <div className="col-md-3">
              <div className="card">
                <img
                  src={person2}
                  className="card-img-top"
                  alt="Team Member 2"
                />
                <div className="card-body">
                  <h5 className="card-title">Jane Smith</h5>
                  <p className="card-text">Project Manager</p>
                </div>
              </div>
            </div>
            {/* Team Member 3 */}
            <div className="col-md-3">
              <div className="card">
                <img
                  src={person3}
                  className="card-img-top"
                  alt="Team Member 3"
                />
                <div className="card-body">
                  <h5 className="card-title">Mike Johnson</h5>
                  <p className="card-text">Lead Developer</p>
                </div>
              </div>
            </div>
             {/* Team Member 4 */}
             <div className="col-md-3">
              <div className="card">
                <img
                  src={person3}
                  className="card-img-top"
                  alt="Team Member 3"
                />
                <div className="card-body">
                  <h5 className="card-title">Mike Johnson</h5>
                  <p className="card-text">Lead Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
  );
}

export default About;
