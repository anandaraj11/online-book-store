import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import AllBooks from './pages/AllBooks';
import AddBooks from './pages/AddBooks';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookDetails from './pages/BookDetails';
import EditBook from './pages/EditBook';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/books' element={<AllBooks />} />
        <Route path='/add-book' element={<AddBooks />} />
        <Route path='/book-details/:id' element={<BookDetails />} />
        <Route path='/edit-book/:id' element={<EditBook />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App