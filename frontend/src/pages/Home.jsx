import React from 'react';

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section bg-white text-dark py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="display-4 fw-bold mb-4">Discover Your Next Favorite Book</h1>
              <p className="lead mb-4">Explore our vast collection of books across all genres. From bestsellers to hidden gems, we have something for every reader.</p>
              <button className="btn btn-light btn-lg px-4 me-2">Browse Books</button>
              <button className="btn btn-outline-dark btn-lg px-4">Join Club</button>
            </div>
            <div className="col-md-6">
              <img 
                src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Books" 
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="featured-books py-5">
        <div className="container">
          <h2 className="text-center mb-5">Featured Books</h2>
          <div className="row g-4">
            {[1, 2, 3, 4].map((item) => (
              <div className="col-md-3" key={item}>
                <div className="card h-100 shadow-sm">
                  <img 
                    src={`https://picsum.photos/300/200?random=${item}`} 
                    className="card-img-top" 
                    alt={`Book ${item}`}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Book Title {item}</h5>
                    <p className="card-text text-muted">Author Name</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="badge bg-success">$19.99</span>
                      <button className="btn btn-sm btn-outline-primary">
                        <i className="bi bi-cart-plus"></i> Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Books Section */}
      <section className="trending-books py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Trending Now</h2>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card mb-3 h-100">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img 
                      src="https://picsum.photos/200/300?random=5" 
                      className="img-fluid rounded-start h-100" 
                      alt="Trending Book"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Bestseller of the Month</h5>
                      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                      <div className="d-flex justify-content-between">
                        <span className="text-warning">
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-half"></i>
                        </span>
                        <button className="btn btn-sm btn-primary">View Details</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card mb-3 h-100">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img 
                      src="https://picsum.photos/200/300?random=6" 
                      className="img-fluid rounded-start h-100" 
                      alt="Trending Book"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Editor's Choice</h5>
                      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                      <div className="d-flex justify-content-between">
                        <span className="text-warning">
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star"></i>
                        </span>
                        <button className="btn btn-sm btn-primary">View Details</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter py-5 bg-dark text-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <h2 className="mb-4">Subscribe to Our Newsletter</h2>
              <p className="lead mb-4">Stay updated with our latest releases, promotions, and literary events.</p>
              <div className="input-group mb-3">
                <input 
                  type="email" 
                  className="form-control form-control-lg" 
                  placeholder="Your email address" 
                />
                <button className="btn btn-primary btn-lg" type="button">
                  Subscribe <i className="bi bi-envelope-arrow-up"></i>
                </button>
              </div>
              <small className="text-muted">We'll never share your email with anyone else.</small>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;