// pages/Portfolio.jsx
import React from 'react';
import '../assets/style/work.css';
import work1 from '../assets/images/work-1.jpg';
import work2 from '../assets/images/work-2.jpg';
import work3 from '../assets/images/work-3.jpg';
import per1 from '../assets/images/person_1.jpg';

const Work = () => {
  return (
  <>
      {/* Hero Section */}
      <section className="hero-section-work justify-content-center allign-items-center text-center" >
      <div className="container">
    <div className="col-md-3  d-none d-md-block">
              <h1 className="display-3 text-white contact-heading">WORK</h1>
            </div>
            </div>
    </section>

      {/* Our Works */}
      <section className="py-5" id="works">
      <div className="container work">
        <div className="text-center mb-5">
          <h2 className="display-4">OUR WORKS</h2>
        </div>
        <div className="row align-items-center mb-5">
          <div className="col-lg-6">
            <img
              src={work1}
              className="img-fluid"
              alt="Work 1"
            />
          </div>
          <div className="col-lg-6">
            <h6>Web Design</h6>
            <h3>Cassette tape</h3>
            <p>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            </p>
            <div>
              <blockquote className="blockquote">
                <img
                  src={per1}
                  className="person"
                  alt="Course 2"
                />
                <br></br>
                <br></br>
                <footer className="blockquote-footer follower-name">Jamie Jonson<br></br><p>avo.com</p></footer>
              </blockquote>
              </div>
            

            <a href="/work" className="btn btn-outline-secondary" >VIEW PORTFOLIO</a>
          </div>
        </div>

        <div className="row align-items-center mb-5">
          <div className="col-lg-6 order-lg-2">
            <img
              src={work2}
              className="img-fluid"
              alt="Work 2"
            />
          </div>
          <div className="col-lg-6 order-lg-1">
            <h6>Application</h6>
            <h3>Miniwall Clock</h3>
            <p>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            </p>

            <div>
              <blockquote className="blockquote">
                <img
                  src={per1}
                  className="person"
                  alt="Course 2"
                />
                <br></br>
                <br></br>
                <footer className="blockquote-footer follower-name">Jamie Jonson<br></br><p>avo.com</p></footer>
              </blockquote>
              </div>
            
            <a href="/work" className="btn btn-outline-secondary" >VIEW PORTFOLIO</a>
          </div>
        </div>

        <div className="row align-items-center mb-5">
          <div className="col-lg-6">
            <img
              src={work3}
              className="img-fluid"
              alt="Work 3"
            />
          </div>
          <div className="col-lg-6">
            <h6>UI/UX Design</h6>
            <h3>Avo Portfolio Agency</h3>
            <p>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            </p>

            <div>
              <blockquote className="blockquote">
                <img
                  src={per1}
                  className="person"
                  alt="Course 2"
                />
                <br></br>
                <br></br>
                <footer className="blockquote-footer follower-name">Jamie Jonson<br></br><p>avo.com</p></footer>
              </blockquote>
              </div>
            
            <a href="/work" className="btn btn-outline-secondary" >VIEW PORTFOLIO</a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Work;
