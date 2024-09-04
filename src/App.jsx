import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';  
import Navbar from './components/navbar'; 

function App() {
  return (
    <Router>
      <div> 

        <Routes>
          <Route path="/" element={<Home />} /> 
          {/* Other routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;