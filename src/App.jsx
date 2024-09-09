import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';  
import Create from './components/create/Create';
function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="create" element={<Create />} /> 
          {/* Other routes */}
        </Routes>
    </Router>
  );
}

export default App;