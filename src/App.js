import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import DeityDetail from './components/DeityDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deity/:id" element={<DeityDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
