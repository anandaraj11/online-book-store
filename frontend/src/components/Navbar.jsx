import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <i className="bi bi-book me-2"></i> Book Store
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 gap-lg-5 fs-5 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                <i className="bi bi-house-door me-1"></i> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <i className="bi bi-info-circle me-1"></i> About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-link">
                <i className="bi bi-journal-text me-1"></i> Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/books" className="nav-link">
                <i className="bi bi-book-half me-1"></i> Books
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                <i className="bi bi-envelope me-1"></i> Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
