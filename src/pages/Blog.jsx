// pages/Portfolio.jsx
import React from 'react';
import '../assets/style/blog.css';
import image1 from '../assets/images/image_1.jpg';
import image2 from '../assets/images/image_2.jpg';
const Blog = () => {
  return (
 <>
     {/* Hero Section */}
     <section className="hero-section-blog justify-content-center allign-items-center text-center" >
    <div className="container">
    <div className="col-md-3  d-none d-md-block">
              <h1 className="display-3 text-white contact-heading">BLOG</h1>
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
}

export default Blog;
