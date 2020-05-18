import React from 'react';
import logo from './logo.svg';
import {navbar, navbarBrand} from 'reactstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <navbar dark color="primary">
        <div className="container">
          <navbarBrand href="/">Ristorante Con Fusion</navbarBrand>
        </div>
      </navbar>
    </div>
  );
}

export default App;
