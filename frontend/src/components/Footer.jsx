import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-4">
            <h5>BookStore</h5>
            <p className="text-white">Your one-stop shop for all your reading needs since 2010.</p>
            <div className="social-icons">
              <a href="#" className="text-white me-2"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-white me-2"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-white me-2"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-white"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Home</a></li>
              <li><a href="#" className="text-white">Books</a></li>
              <li><a href="#" className="text-white">Categories</a></li>
              <li><a href="#" className="text-white">About Us</a></li>
              <li><a href="#" className="text-white">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h5>Categories</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Fiction</a></li>
              <li><a href="#" className="text-white">Non-Fiction</a></li>
              <li><a href="#" className="text-white">Science Fiction</a></li>
              <li><a href="#" className="text-white">Biography</a></li>
              <li><a href="#" className="text-white">Children's Books</a></li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h5>Contact Us</h5>
            <address className="text-white">
              <p><i className="bi bi-geo-alt me-2"></i> 123 Book Street, Library City</p>
              <p><i className="bi bi-telephone me-2"></i> (123) 456-7890</p>
              <p><i className="bi bi-envelope me-2"></i> info@bookstore.com</p>
            </address>
          </div>
        </div>
        <hr className="my-4 bg-secondary" />
        <div className="row">
          <div className="col-md-6 text-center text-md-start">
            <p className="text-white mb-0">&copy; {new Date().getFullYear()} BookStore. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p className="text-white mb-0">
              <a href="#" className="text-white me-3">Privacy Policy</a>
              <a href="#" className="text-white">Terms of Service</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;