import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddBooks() {
  const navigate = useNavigate();
  const [bookData, setBookData] = useState({
    bookName: '',
    authorName: '',
    publishedDate: '',
    oldPrice: '',
    newPrice: '',
    stock: '',
    bookImage: '',
    description: '',
    category: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const requiredFields = [
      'bookName', 'authorName', 'publishedDate', 
      'newPrice', 'stock', 'bookImage'
    ];

    requiredFields.forEach(field => {
      if (!bookData[field]) {
        newErrors[field] = 'This field is required';
      }
    });

    if (bookData.oldPrice && isNaN(bookData.oldPrice)) {
      newErrors.oldPrice = 'Must be a number';
    }

    if (isNaN(bookData.newPrice)) {
      newErrors.newPrice = 'Must be a number';
    }

    if (isNaN(bookData.stock)) {
      newErrors.stock = 'Must be a number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await axios.post('https://online-book-store-fll0.onrender.com/api/books', {
        ...bookData,
        oldPrice: bookData.oldPrice || undefined, // Don't send if empty
        description: bookData.description || undefined,
        category: bookData.category || undefined
      });

      if (response.status === 200) {
        navigate('/books'); // Redirect to books list after successful addition
      }
    } catch (err) {
      setSubmitError(err.response?.data?.message || 'Failed to add book. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="add-books-page">
      {/* Hero Section */}
      <section className="add-hero bg-primary text-white py-4">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h1 className="display-6 fw-bold mb-3">Add New Book</h1>
              <p className="mb-0">Fill in the details to add a new book to our collection</p>
            </div>
            <div className="col-md-4 text-md-end">
              <button 
                className="btn btn-light"
                onClick={() => navigate('/books')}
              >
                <i className="bi bi-arrow-left"></i> Back to Books
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Add Book Form */}
      <section className="add-form py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card shadow">
                <div className="card-body p-4">
                  {submitError && (
                    <div className="alert alert-danger mb-4">
                      {submitError}
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      {/* Book Name */}
                      <div className="col-md-6">
                        <label htmlFor="bookName" className="form-label">Book Name *</label>
                        <input
                          type="text"
                          className={`form-control ${errors.bookName ? 'is-invalid' : ''}`}
                          id="bookName"
                          name="bookName"
                          value={bookData.bookName}
                          onChange={handleChange}
                        />
                        {errors.bookName && (
                          <div className="invalid-feedback">{errors.bookName}</div>
                        )}
                      </div>

                      {/* Author Name */}
                      <div className="col-md-6">
                        <label htmlFor="authorName" className="form-label">Author Name *</label>
                        <input
                          type="text"
                          className={`form-control ${errors.authorName ? 'is-invalid' : ''}`}
                          id="authorName"
                          name="authorName"
                          value={bookData.authorName}
                          onChange={handleChange}
                        />
                        {errors.authorName && (
                          <div className="invalid-feedback">{errors.authorName}</div>
                        )}
                      </div>

                      {/* Published Date */}
                      <div className="col-md-6">
                        <label htmlFor="publishedDate" className="form-label">Published Date *</label>
                        <input
                          type="date"
                          className={`form-control ${errors.publishedDate ? 'is-invalid' : ''}`}
                          id="publishedDate"
                          name="publishedDate"
                          value={bookData.publishedDate}
                          onChange={handleChange}
                        />
                        {errors.publishedDate && (
                          <div className="invalid-feedback">{errors.publishedDate}</div>
                        )}
                      </div>

                      {/* Category */}
                      <div className="col-md-6">
                        <label htmlFor="category" className="form-label">Category</label>
                        <select
                          className="form-select"
                          id="category"
                          name="category"
                          value={bookData.category}
                          onChange={handleChange}
                        >
                          <option value="">Select a category</option>
                          <option value="Fiction">Fiction</option>
                          <option value="Non-Fiction">Non-Fiction</option>
                          <option value="Science Fiction">Science Fiction</option>
                          <option value="Biography">Biography</option>
                          <option value="Mystery">Mystery</option>
                          <option value="Romance">Romance</option>
                          <option value="Fantasy">Fantasy</option>
                        </select>
                      </div>

                      {/* Old Price */}
                      <div className="col-md-6">
                        <label htmlFor="oldPrice" className="form-label">Original Price</label>
                        <input
                          type="text"
                          className={`form-control ${errors.oldPrice ? 'is-invalid' : ''}`}
                          id="oldPrice"
                          name="oldPrice"
                          value={bookData.oldPrice}
                          onChange={handleChange}
                          placeholder="Leave empty if no discount"
                        />
                        {errors.oldPrice && (
                          <div className="invalid-feedback">{errors.oldPrice}</div>
                        )}
                      </div>

                      {/* New Price */}
                      <div className="col-md-6">
                        <label htmlFor="newPrice" className="form-label">Current Price *</label>
                        <input
                          type="text"
                          className={`form-control ${errors.newPrice ? 'is-invalid' : ''}`}
                          id="newPrice"
                          name="newPrice"
                          value={bookData.newPrice}
                          onChange={handleChange}
                        />
                        {errors.newPrice && (
                          <div className="invalid-feedback">{errors.newPrice}</div>
                        )}
                      </div>

                      {/* Stock */}
                      <div className="col-md-6">
                        <label htmlFor="stock" className="form-label">Stock Quantity *</label>
                        <input
                          type="text"
                          className={`form-control ${errors.stock ? 'is-invalid' : ''}`}
                          id="stock"
                          name="stock"
                          value={bookData.stock}
                          onChange={handleChange}
                        />
                        {errors.stock && (
                          <div className="invalid-feedback">{errors.stock}</div>
                        )}
                      </div>

                      {/* Book Image */}
                      <div className="col-md-6">
                        <label htmlFor="bookImage" className="form-label">Book Image URL *</label>
                        <input
                          type="url"
                          className={`form-control ${errors.bookImage ? 'is-invalid' : ''}`}
                          id="bookImage"
                          name="bookImage"
                          value={bookData.bookImage}
                          onChange={handleChange}
                          placeholder="https://example.com/book-image.jpg"
                        />
                        {errors.bookImage && (
                          <div className="invalid-feedback">{errors.bookImage}</div>
                        )}
                      </div>

                      {/* Description */}
                      <div className="col-12">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea
                          className="form-control"
                          id="description"
                          name="description"
                          rows="3"
                          value={bookData.description}
                          onChange={handleChange}
                        ></textarea>
                      </div>

                      {/* Preview */}
                      {bookData.bookImage && (
                        <div className="col-12">
                          <label className="form-label">Image Preview</label>
                          <div className="border p-2 text-center">
                            <img 
                              src={bookData.bookImage} 
                              alt="Book preview" 
                              className="img-fluid" 
                              style={{ maxHeight: '200px' }}
                              onError={(e) => {
                                e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Available';
                              }}
                            />
                          </div>
                        </div>
                      )}

                      {/* Submit Button */}
                      <div className="col-12 mt-4">
                        <button 
                          type="submit" 
                          className="btn btn-primary px-4 py-2"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                              Adding...
                            </>
                          ) : (
                            <>
                              <i className="bi bi-plus-circle me-2"></i> Add Book
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AddBooks;