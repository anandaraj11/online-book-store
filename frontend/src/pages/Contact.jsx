import React from 'react';

function Contact() {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero bg-primary text-white py-5">
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h1 className="display-4 fw-bold mb-3">Contact Us</h1>
              <p className="lead mb-0">We'd love to hear from you! Reach out with any questions or feedback.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content py-5">
        <div className="container">
          <div className="row g-4">
            {/* Contact Form */}
            <div className="col-lg-6">
              <div className="card shadow-sm h-100">
                <div className="card-body p-4">
                  <h2 className="mb-4">Send Us a Message</h2>
                  <form>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">Your Name</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email Address</label>
                      <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="subject" className="form-label">Subject</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="subject" 
                        placeholder="How can we help?"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">Message</label>
                      <textarea 
                        className="form-control" 
                        id="message" 
                        rows="5"
                        placeholder="Your message here..."
                      ></textarea>
                    </div>
                    <button type="button" className="btn btn-primary px-4">
                      <i className="bi bi-send me-2"></i> Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="col-lg-6">
              <div className="card shadow-sm h-100">
                <div className="card-body p-4">
                  <h2 className="mb-4">Our Information</h2>
                  
                  <div className="d-flex mb-4">
                    <div className="icon-box bg-primary bg-opacity-10 text-primary rounded-circle p-3 me-4">
                      <i className="bi bi-geo-alt fs-3"></i>
                    </div>
                    <div>
                      <h5 className="mb-1">Visit Us</h5>
                      <p className="text-muted mb-0">
                        123 Book Street<br />
                        Library City, LC 12345<br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div className="d-flex mb-4">
                    <div className="icon-box bg-primary bg-opacity-10 text-primary rounded-circle p-3 me-4">
                      <i className="bi bi-telephone fs-3"></i>
                    </div>
                    <div>
                      <h5 className="mb-1">Call Us</h5>
                      <p className="text-muted mb-0">
                        +1 (123) 456-7890<br />
                        Mon-Fri: 9am-6pm EST
                      </p>
                    </div>
                  </div>

                  <div className="d-flex mb-4">
                    <div className="icon-box bg-primary bg-opacity-10 text-primary rounded-circle p-3 me-4">
                      <i className="bi bi-envelope fs-3"></i>
                    </div>
                    <div>
                      <h5 className="mb-1">Email Us</h5>
                      <p className="text-muted mb-0">
                        info@bookstore.com<br />
                        support@bookstore.com
                      </p>
                    </div>
                  </div>

                  <div className="d-flex">
                    <div className="icon-box bg-primary bg-opacity-10 text-primary rounded-circle p-3 me-4">
                      <i className="bi bi-clock fs-3"></i>
                    </div>
                    <div>
                      <h5 className="mb-1">Store Hours</h5>
                      <p className="text-muted mb-0">
                        Monday-Friday: 9am-8pm<br />
                        Saturday: 10am-6pm<br />
                        Sunday: 12pm-5pm
                      </p>
                    </div>
                  </div>

                  <hr className="my-4" />

                  <h5 className="mb-3">Follow Us</h5>
                  <div className="social-links">
                    <a href="#" className="btn btn-outline-secondary btn-sm me-2">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#" className="btn btn-outline-secondary btn-sm me-2">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="#" className="btn btn-outline-secondary btn-sm me-2">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#" className="btn btn-outline-secondary btn-sm">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section bg-light py-5">
        <div className="container">
          <div className="card shadow-sm">
            <div className="card-body p-0">
              <div className="ratio ratio-16x9">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215209179035!2d-73.9878439245256!3d40.74844097138958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1689877895838!5m2!1sen!2sus" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bookstore Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;