// App.jsx
import React from 'react';
//import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Work from './pages/Work';
import Contact from './pages/Contact';
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
      <Router>
        <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/work" element={<Work />} />
      </Routes>
      </Layout>
      </Router>
  );
}

export default App;

