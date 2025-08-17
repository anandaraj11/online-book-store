import React from 'react';

function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero bg-secondary text-white py-5">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h1 className="display-4 fw-bold mb-4">About Our Bookstore</h1>
              <p className="lead mb-4">Discover our story and passion for literature</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="our-story py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="mb-4">Our Story</h2>
              <p className="lead">Founded in 2010, our bookstore began as a small neighborhood shop with just a few shelves of beloved titles.</p>
              <p>Over the years, we've grown into a community hub for book lovers, offering a carefully curated selection of books across all genres. Our mission has always been to connect readers with stories that inspire, educate, and entertain.</p>
              <p>What started as a passion project has now become a thriving business with a team of dedicated book enthusiasts who handpick every title on our shelves.</p>
            </div>
            <div className="col-lg-6">
              <img 
                src="https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Our bookstore" 
                className="img-fluid rounded shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="our-values py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Our Values</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="icon-box bg-primary bg-opacity-10 text-primary rounded-circle p-3 mb-3 mx-auto" style={{width: '60px', height: '60px'}}>
                    <i className="bi bi-book fs-3"></i>
                  </div>
                  <h5 className="card-title">Quality Literature</h5>
                  <p className="card-text text-muted">We carefully select each title to ensure our customers receive only the best reading material.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="icon-box bg-primary bg-opacity-10 text-primary rounded-circle p-3 mb-3 mx-auto" style={{width: '60px', height: '60px'}}>
                    <i className="bi bi-people fs-3"></i>
                  </div>
                  <h5 className="card-title">Community Focus</h5>
                  <p className="card-text text-muted">We host regular book clubs, author events, and reading programs to foster a love of reading.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="icon-box bg-primary bg-opacity-10 text-primary rounded-circle p-3 mb-3 mx-auto" style={{width: '60px', height: '60px'}}>
                    <i className="bi bi-heart fs-3"></i>
                  </div>
                  <h5 className="card-title">Customer Care</h5>
                  <p className="card-text text-muted">Our knowledgeable staff provides personalized recommendations to help you find your next favorite book.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="our-team py-5">
        <div className="container">
          <h2 className="text-center mb-5">Meet Our Team</h2>
          <div className="row g-4">
            {[
              {name: 'Sarah Johnson', role: 'Founder & CEO', bio: 'Book enthusiast with 20+ years in the publishing industry.'},
              {name: 'Michael Chen', role: 'Head Buyer', bio: 'Knows every new release and hidden gem in the market.'},
              {name: 'Emma Rodriguez', role: 'Community Manager', bio: 'Organizes our popular book clubs and author events.'},
              {name: 'David Wilson', role: 'Customer Specialist', bio: 'Can recommend the perfect book for any reader.'}
            ].map((member, index) => (
              <div className="col-md-6 col-lg-3" key={index}>
                <div className="card h-100 border-0 shadow-sm">
                  <img 
                    src={`https://randomuser.me/api/portraits/${index % 2 === 0 ? 'women' : 'men'}/${index + 10}.jpg`} 
                    className="card-img-top" 
                    alt={member.name}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title mb-1">{member.name}</h5>
                    <p className="text-muted small mb-2">{member.role}</p>
                    <p className="card-text small">{member.bio}</p>
                    <div className="social-links">
                      <a href="#" className="text-muted me-2"><i className="bi bi-twitter"></i></a>
                      <a href="#" className="text-muted me-2"><i className="bi bi-linkedin"></i></a>
                      <a href="#" className="text-muted"><i className="bi bi-envelope"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials py-5 bg-dark text-white">
        <div className="container">
          <h2 className="text-center mb-5">What Our Customers Say</h2>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  {[
                    {quote: "This bookstore has the best selection in town. The staff recommendations are always spot on!", author: "Jessica T."},
                    {quote: "I've discovered so many amazing authors thanks to this store. It's my happy place!", author: "Robert K."},
                    {quote: "The community events make this more than just a store - it's a literary hub.", author: "Maria G."}
                  ].map((testimonial, index) => (
                    <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                      <div className="testimonial-item text-center px-5">
                        <i className="bi bi-chat-quote fs-1 text-primary mb-3"></i>
                        <p className="lead mb-4">{testimonial.quote}</p>
                        <p className="text-muted">— {testimonial.author}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta py-5 bg-primary text-white">
        <div className="container text-center">
          <h2 className="mb-4">Ready to Explore Our Collection?</h2>
          <p className="lead mb-4">Visit our store or browse our online catalog today.</p>
          <button className="btn btn-light btn-lg px-4 me-2">Browse Books</button>
          <button className="btn btn-outline-light btn-lg px-4">Contact Us</button>
        </div>
      </section>
    </div>
  );
}

export default About;