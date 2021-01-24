import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import User from './Components/User/User';
import NavBar from './Components/NavBar';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
