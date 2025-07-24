import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
 // Adjust path based on your structure

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>} />
      {/* Add other routes here */}
    </Routes>
  );
};

export default App;
