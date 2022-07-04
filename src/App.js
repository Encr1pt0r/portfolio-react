import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <body className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
      
    </body>
  );
}

export default App;
