import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/layouts/Navbar";
import Footer from './components/layouts/Footer';
import FloatingWhatsApp from './components/sections/FloatingButton';
import Home from './pages/Home';
import About from './pages/About';
import ProofPage from './pages/ProofPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/successful-transactions" element={<ProofPage />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsApp 
          phoneNumber="254707569122"
          message="Hello! I would like to know more about LexiQuick."
          position="right"
        />
      </div>
    </Router>
  );
};

export default App;