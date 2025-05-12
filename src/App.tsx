import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Sacs from './pages/Sacs';
import Bijoux from './pages/Bijoux';
import Vetements from './pages/Vetements';
import Nouveautes from './pages/Nouveautes';
import Compte from './pages/Compte';
import Boutiques from './pages/Boutiques';

function App() {
  return (
    <Router>
    <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sacs" element={<Sacs />} />
            <Route path="/bijoux" element={<Bijoux />} />
            <Route path="/vetements" element={<Vetements />} />
            <Route path="/nouveautes" element={<Nouveautes />} />
            <Route path="/compte" element={<Compte />} />
            <Route path="/boutiques" element={<Boutiques />} />
          </Routes>
        </main>
        <Footer />
    </div>
    </Router>
  );
}

export default App;
