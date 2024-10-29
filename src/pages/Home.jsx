// pages/Home.jsx
import React from 'react';
import '../assets/style/home.css';
import bg1 from '../assets/images/bg_1.jpg';
import bg2 from '../assets/images/bg_2.jpg';
import about from '../assets/images/about.jpg';
import work1 from '../assets/images/work-1.jpg';
import work2 from '../assets/images/work-2.jpg';
import work3 from '../assets/images/work-3.jpg';
import image1 from '../assets/images/image_1.jpg';
import image2 from '../assets/images/image_2.jpg';
import per1 from '../assets/images/person_1.jpg';
  const Home = () => {
  return (
    <>
           {/* Hero Section */}
       <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={bg1}
              className="d-block w-100 "
              alt="Slide 1"
            />
            <div className="col-md-3 carousel-caption d-none d-md-block">
              <h1 className="display-3 text-white ">WE CREATE MODERN & MINIMAL WEBSITES</h1>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              <a href="#about" className="btn btn-danger btn-lg">Explore Project</a>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src={bg2}
              className="d-block w-100"
              alt="Slide 2"
            />
            <div className="col-md-3 carousel-caption d-none d-md-block">
              <h1 className="display-3 text-white">WE CREATE MODERN & MINIMAL WEBSITES</h1>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
              <a href="#about" className="btn btn-danger btn-lg">Start Project</a>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> 
      
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

      {/* Portfolio Section */}
      <section id="portfolio" className="py-5">
        <div className="container">
          <h2 className="text-center display-4">Recent Blog</h2>
          <div className="row mt-4">
            <div className="col-md-3">
              <div className="card mb-4 border-0">
                <img src={image1} className="card-img-top" alt="Portfolio 1" />
                <div className="card-body">
                  <h5 className="card-title">Project One</h5>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card mb-4 border-0">
                <img src={image2} className="card-img-top" alt="Portfolio 2" />
                <div className="card-body">
                  <h5 className="card-title">Project Two</h5>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card mb-4 border-0">
                <img src={image2} className="card-img-top" alt="Portfolio 2" />
                <div className="card-body">
                  <h5 className="card-title">Project Two</h5>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card mb-4 border-0">
                <img src={image2} className="card-img-top" alt="Portfolio 2" />
                <div className="card-body">
                  <h5 className="card-title">Project Two</h5>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section> 
  </>
  );
};

export default Home;
