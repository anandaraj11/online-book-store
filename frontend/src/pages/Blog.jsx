import React from 'react';

function Blog() {
  // Sample blog post data
  const blogPosts = [
    {
      id: 1,
      title: "The Rise of Independent Bookstores",
      excerpt: "How independent bookstores are thriving in the digital age and what makes them special.",
      date: "May 15, 2023",
      author: "Sarah Johnson",
      category: "Industry News",
      image: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Summer Reading List 2023",
      excerpt: "Our top picks for beach reads, thought-provoking nonfiction, and page-turning thrillers this summer.",
      date: "June 2, 2023",
      author: "Michael Chen",
      category: "Reading Lists",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Interview with Award-Winning Author",
      excerpt: "We sit down with recent literary prize winner to discuss their writing process and inspirations.",
      date: "June 18, 2023",
      author: "Emma Rodriguez",
      category: "Author Interviews",
      image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "The Benefits of Reading Before Bed",
      excerpt: "How establishing a nighttime reading routine can improve your sleep and mental health.",
      date: "July 5, 2023",
      author: "David Wilson",
      category: "Wellness",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const popularPosts = [
    {
      id: 1,
      title: "How to Build a Home Library",
      date: "April 10, 2023"
    },
    {
      id: 2,
      title: "Best Book Club Picks of 2023",
      date: "May 22, 2023"
    },
    {
      id: 3,
      title: "The History of Bookbinding",
      date: "June 8, 2023"
    }
  ];

  const categories = [
    { name: "Industry News", count: 8 },
    { name: "Author Interviews", count: 5 },
    { name: "Reading Lists", count: 12 },
    { name: "Book Reviews", count: 15 },
    { name: "Wellness", count: 4 }
  ];

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero bg-info text-white py-5">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h1 className="display-4 fw-bold mb-4">Bookstore Blog</h1>
              <p className="lead mb-4">Discover literary insights, author interviews, and reading recommendations</p>
              <div className="search-bar mx-auto" style={{ maxWidth: '500px' }}>
                <div className="input-group">
                  <input 
                    type="text" 
                    className="form-control form-control-lg" 
                    placeholder="Search blog posts..." 
                  />
                  <button className="btn btn-light btn-lg" type="button">
                    <i className="bi bi-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="blog-content py-5">
        <div className="container">
          <div className="row">
            {/* Blog Posts Column */}
            <div className="col-lg-8">
              <h2 className="mb-4">Latest Posts</h2>
              
              {blogPosts.map(post => (
                <article key={post.id} className="card mb-4 shadow-sm">
                  <img src={post.image} className="card-img-top" alt={post.title} />
                  <div className="card-body">
                    <div className="d-flex justify-content-between mb-2">
                      <span className="badge bg-primary">{post.category}</span>
                      <small className="text-muted">{post.date}</small>
                    </div>
                    <h3 className="card-title">{post.title}</h3>
                    <p className="card-text">{post.excerpt}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="text-muted">By {post.author}</span>
                      <a href="#" className="btn btn-outline-primary">Read More</a>
                    </div>
                  </div>
                </article>
              ))}

              {/* Pagination */}
              <nav aria-label="Blog pagination">
                <ul className="pagination justify-content-center mt-4">
                  <li className="page-item disabled">
                    <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</a>
                  </li>
                  <li className="page-item active"><a className="page-link" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item">
                    <a className="page-link" href="#">Next</a>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Sidebar Column */}
            <div className="col-lg-4">
              <div className="card mb-4 shadow-sm">
                <div className="card-header bg-light">
                  <h5 className="mb-0">About the Blog</h5>
                </div>
                <div className="card-body">
                  <p>Welcome to our bookstore blog where we share literary news, reading recommendations, author interviews, and book-related content for avid readers.</p>
                  <div className="text-center mt-3">
                    <button className="btn btn-outline-primary btn-sm">Subscribe</button>
                  </div>
                </div>
              </div>

              <div className="card mb-4 shadow-sm">
                <div className="card-header bg-light">
                  <h5 className="mb-0">Popular Posts</h5>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled">
                    {popularPosts.map(post => (
                      <li key={post.id} className="mb-2">
                        <a href="#" className="text-decoration-none">
                          {post.title} <br />
                          <small className="text-muted">{post.date}</small>
                        </a>
                        {post.id !== popularPosts.length && <hr className="my-2" />}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="card mb-4 shadow-sm">
                <div className="card-header bg-light">
                  <h5 className="mb-0">Categories</h5>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled">
                    {categories.map((category, index) => (
                      <li key={index} className="mb-2">
                        <a href="#" className="text-decoration-none d-flex justify-content-between">
                          <span>{category.name}</span>
                          <span className="badge bg-secondary rounded-pill">{category.count}</span>
                        </a>
                        {index !== categories.length - 1 && <hr className="my-2" />}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="card shadow-sm">
                <div className="card-header bg-light">
                  <h5 className="mb-0">Tags</h5>
                </div>
                <div className="card-body">
                  <div className="d-flex flex-wrap gap-2">
                    {['Fiction', 'Nonfiction', 'Bestsellers', 'New Releases', 'Classics', 'Mystery', 'Sci-Fi', 'Biography', 'Book Clubs', 'Reading Tips'].map(tag => (
                      <a key={tag} href="#" className="btn btn-sm btn-outline-secondary">{tag}</a>
                    ))}
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
              <h2 className="mb-4">Never Miss a Post</h2>
              <p className="lead mb-4">Subscribe to our blog newsletter for the latest literary news and reading recommendations.</p>
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
              <small className="text-muted">We respect your privacy. Unsubscribe at any time.</small>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;