import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/MyProfile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
