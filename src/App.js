import React, { Component } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Link to="/customers">Customers</Link>
          <br />
          <Link to="/customers/25175344">Customers 25.175.344</Link>
        </div>
      </Router>
    );
  }
}

export default App;

/* Al envolver la app con router se le otorga la capacidad de manejo de rutas */
