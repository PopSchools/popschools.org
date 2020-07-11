import React from 'react';
import logo from './logo.svg';
import './App.css';
import './css/tailwind.css';
import 'bulma/css/bulma.css'
import Navbar from './components/Navbar.js';
import Home from './components/Home.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
function App() {
  return (
    <>
    <Router>
      <Route exact path="/">
        <Home/>

      </Route>
    </Router>
    </>
  );
}

export default App;
