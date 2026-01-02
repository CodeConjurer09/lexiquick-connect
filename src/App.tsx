import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/layouts/Navbar";
import Footer from './components/layouts/Footer';
import FloatingWhatsApp from './components/sections/FloatingButton';
import InstallPrompt from './components/sections/InstallPrompt';
import Home from './pages/Home';
import About from './pages/About';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsApp 
          phoneNumber="254750518501"
          message="Hello! I would like to know more about LexiQuick."
          position="right"
        />
        <InstallPrompt extensionUrl="https://chrome.google.com/webstore/detail/your-extension-id" />
      </div>
    </Router>
  );
};

export default App;