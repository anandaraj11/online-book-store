import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch book details
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/books/${id}`);
        setBook(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch book details');
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-5">
        <div className="alert alert-danger">{error}</div>
        <button className="btn btn-primary" onClick={() => navigate('/all-books')}>
          Back to Books
        </button>
      </div>
    );
  }

  if (!book) {
    return (
      <div className="container py-5">
        <div className="alert alert-warning">Book not found</div>
        <button className="btn btn-primary" onClick={() => navigate('/all-books')}>
          Back to Books
        </button>
      </div>
    );
  }

  return (
    <div className="book-details-page">
      {/* Hero Section */}
      <section className="details-hero bg-light py-4">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col">
              <button 
                className="btn btn-outline-secondary mb-3" 
                onClick={() => navigate('/books')}
              >
                <i className="bi bi-arrow-left"></i> Back to All Books
              </button>
              <h1 className="display-6 fw-bold mb-3">{book.bookName}</h1>
              <p className="lead mb-0">by {book.authorName}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Book Details */}
      <section className="book-details py-5">
        <div className="container">
          <div className="row">
            {/* Book Image */}
            <div className="col-md-5 mb-4 mb-md-0">
              <div className="card shadow-sm border-0">
                <img 
                  src={book.bookImage || 'https://via.placeholder.com/500x700?text=No+Image'} 
                  className="img-fluid rounded" 
                  alt={book.bookName}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/500x700?text=Image+Not+Available';
                  }}
                />
              </div>
            </div>

            {/* Book Info */}
            <div className="col-md-7">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div>
                      {book.oldPrice && (
                        <span className="badge bg-danger me-2">
                          {Math.round(((book.oldPrice - book.newPrice) / book.oldPrice) * 100)}% OFF
                        </span>
                      )}
                      <span className={`badge ${book.stock > 0 ? 'bg-success' : 'bg-warning'}`}>
                        {book.stock > 0 ? 'In Stock' : 'Out of Stock'}
                      </span>
                    </div>
                    <span className="text-muted">Published: {new Date(book.publishedDate).toLocaleDateString()}</span>
                  </div>

                  <div className="mb-4">
                    <h2 className="mb-3">{book.bookName}</h2>
                    <h4 className="text-muted mb-4">by {book.authorName}</h4>
                    
                    <div className="d-flex align-items-center mb-4">
                      <div className="me-4">
                        <span className="display-6 fw-bold text-primary">${book.newPrice}</span>
                        {book.oldPrice && (
                          <span className="text-decoration-line-through text-muted ms-2">${book.oldPrice}</span>
                        )}
                      </div>
                      {book.stock > 0 && (
                        <span className="text-success">
                          <i className="bi bi-check-circle-fill me-1"></i>
                          {book.stock} available
                        </span>
                      )}
                    </div>

                    {book.category && (
                      <p className="mb-3">
                        <strong>Category:</strong> {book.category}
                      </p>
                    )}
                  </div>

                  <div className="mb-4">
                    <h5 className="mb-3">Description</h5>
                    <p className="card-text">
                      {book.description || 'No description available for this book.'}
                    </p>
                  </div>

                  <div className="d-flex gap-3 mt-4">
                    <button className="btn btn-primary btn-lg flex-grow-1">
                      <i className="bi bi-cart-plus me-2"></i> Buy Now
                    </button>
                    <button className="btn btn-outline-secondary btn-lg">
                      <i className="bi bi-heart"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BookDetails;