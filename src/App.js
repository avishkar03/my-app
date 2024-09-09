import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import  PrivacyAndPolicy from './Pages/PrivacyAndPolicy';
import Team from './Pages/Team';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact component={Home} />
          <Route path='/PrivacyAndPolicy' component={PrivacyAndPolicy} />
          <Route path='/Team' component={Team} />
        </Routes>
      </Router>
    </>
  );
}

export default App;