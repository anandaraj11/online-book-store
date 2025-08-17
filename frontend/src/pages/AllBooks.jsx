import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AllBooks() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch books from backend
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/books');
        setBooks(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  // Handle delete book
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/books/${id}`);
      setBooks(books.filter(book => book._id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

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
      <div className="alert alert-danger m-4">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="all-books-page">
      {/* Hero Section */}
      <section className="books-hero bg-primary text-white py-4">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="display-6 fw-bold mb-3">Our Book Collection</h1>
              <p className="mb-4">Browse through our complete catalog of books</p>
            </div>
            <div className="col-md-6 text-md-end">
              <Link to={"/add-book"} className="btn btn-light me-2">
                <i className="bi bi-plus-circle"></i> Add New Book
              </Link>
              <button className="btn btn-outline-light">
                <i className="bi bi-filter"></i> Filter
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Books Listing */}
      <section className="books-listing py-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col-md-6">
              <h2 className="mb-0">All Books</h2>
            </div>
            <div className="col-md-6">
              <div className="input-group">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Search books..." 
                />
                <button className="btn btn-outline-secondary" type="button">
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </div>
          </div>

          {books.length === 0 ? (
            <div className="alert alert-info">
              No books found. Please add some books to the collection.
            </div>
          ) : (
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              {books.map(book => (
                <div className="col" key={book._id}>
                  <div className="card h-100 shadow-sm">
                    <div className="position-relative">
                      <img 
                        src={book.bookImage || 'https://via.placeholder.com/300x200?text=No+Image'} 
                        className="card-img-top" 
                        alt={book.bookName}
                        style={{ height: '200px', objectFit: 'cover' }}
                      />
                      {book.oldPrice && (
                        <span className="badge bg-danger position-absolute top-0 end-0 m-2">
                          {Math.round(((book.oldPrice - book.newPrice) / book.oldPrice) * 100)}% OFF
                        </span>
                      )}
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{book.bookName}</h5>
                      <p className="card-text text-muted">{book.authorName}</p>
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <div>
                          <span className="fw-bold text-primary">₹{book.newPrice}</span>
                          {book.oldPrice && (
                            <span className="text-decoration-line-through text-muted ms-2">₹{book.oldPrice}</span>
                          )}
                        </div>
                        <span className={`badge ${book.stock > 0 ? 'bg-success' : 'bg-warning'}`}>
                          {book.stock > 0 ? 'In Stock' : 'Out of Stock'}
                        </span>
                      </div>
                      <p className="card-text small text-muted">{book.description || 'No description available.'}</p>
                    </div>
                    <div className="card-footer bg-transparent">
                      <div className="d-flex justify-content-between">
                        <Link to={`/edit-book/${book._id}`}
                          className="btn btn-sm btn-outline-primary"
                        >
                          <i className="bi bi-pencil"></i> Edit
                        </Link>
                        <button 
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => handleDelete(book._id)}
                        >
                          <i className="bi bi-trash"></i> Delete
                        </button>
                        <Link to={`/book-details/${book._id}`} className="btn btn-sm btn-outline-secondary" >
                          <i className="bi bi-eye"></i> View
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default AllBooks;