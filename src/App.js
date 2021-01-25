import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Contacts from './Components/User/Contacts';
import NavBar from './Components/NavBar';

import ContactState from './Context/ContactState';

const App = () => {
  return (
    <ContactState>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ContactState>
  );
};

export default App;
