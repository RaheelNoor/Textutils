import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#333';
      document.title = 'Textutils - Dark';
    } else {
      setMode('light');
      document.body.style.backgroundColor = '#fff';
      document.title = 'Textutils - Light';
    }
  };
  const contactStyle = { width: '26rem' };

  return (
    <Router>
      <>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <div className="container mt-3">
          <Routes>
            <Route
              path="/"
              element={<TextForm heading="UtilsText By This App" mode={mode} toggleMode={toggleMode} />}
            />
            <Route
              path="/about"
              element={<h2>About Page</h2>}
            />
            <Route
              path="/footer"
              element={<Footer mode={mode} toggleMode={toggleMode} />}
            />
            <Route path='contact' element={<Contact style={contactStyle}/>} />
          </Routes>
        </div>
        <Footer mode={mode} toggleMode={toggleMode}/>
        <ToastContainer />
      </>
    </Router>
  );
}

export default App;
