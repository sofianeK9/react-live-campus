import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Acceuil from './Components/Acceuil';
import CardBlog from './Components/CardBlog';
import Contact from './Components/Contact';
import Menu from './Components/Menu';

const App = () => {
  return (
    <Router>
      <div>
        <Menu />
        <Routes>
          <Route path="/" element={<Acceuil />} />
          <Route path="/blogs" element={<CardBlog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
