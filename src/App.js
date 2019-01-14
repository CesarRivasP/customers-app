import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeContainer from './containers/home-container';
import logo from './logo.svg';
import './App.css';



class App extends Component {

  renderHome = () => <h1>Home</h1>

  renderCustomerContainer = () => <h1>Customer Container</h1>

  renderCustomerListContainer = () => <h1>Customer List Container</h1>

  renderCustomerNewContainer = () => <h1>Customer New Container</h1>

  render() {
    return (
      <Router>
        {/* <div className="App">
          <Link to="/customers">Customers</Link>
          <br />
          <Link to="/customers/25175344">Customers 25.175.344</Link>  example
        </div> */}
        {/* { this.renderHome() }
            { this.renderCustomerContainer() }
            { this.renderCustomerListContainer() }
            { this.renderCustomerNewContainer() }
        */}
        <div>
          {/*
            Before<Route exact path="/" component={ this.renderHome } />
          <Route exact path="/customers" component={ this.renderCustomerContainer } /> */}
          {/* <Route exact path="/customers/:ci" component={ this.renderCustomerListContainer } /> */}

          {/* Es interpretado como 'willcar' => :ci  => mediante dos puntos y un nombre en particular
              indica que cualquier url que sea 'custumers/' y concatenado a algo mas voy a tener la tendencia
              a esta url '/customers/' y lo que venga en ":ci" lo va a tratar como un parametro llamado 'ci'

          */}
          {/* <Route exact path="/customers/new" component={ this.renderCustomerNewContainer } /> */}
          {/* After */}
          {/* <Switch> */}
            {/* <Route path="/customers/new" component={ this.renderCustomerNewContainer } /> */}
            {/* la que tiene el willcar no valida por algo en especial, sino que cada cosa que se ubique donde
              esta el parametro, lo va a tomar como valido */}
            {/* <Route path="/customers/:ci" component={ this.renderCustomerListContainer } /> */}

            {/* <Route exact path="/customers/new" component={ this.renderCustomerNewContainer } />
              ruta mas especifica primero */}

            {/* Otra forma de solucionar */}
            {/* <Switch>
              Mas especifica
              <Route path="/customers/new" component={ this.renderCustomerNewContainer } />
               Willcar
              <Route path="/customers/:ci" component={ this.renderCustomerListContainer } />

              <Route exact path="/customers" component={ this.renderCustomerContainer } />
              <Route exact path="/" component={ this.renderHome } />
          </Switch> */}

            <Route exact path="/" component={HomeContainer} />
            <Route exact path="/customers" component={ this.renderCustomerContainer } />
            <Switch>
              <Route path="/customers/new" component={ this.renderCustomerNewContainer } />
              <Route path="/customers/:ci" component={ this.renderCustomerListContainer } />
            </Switch>

        </div>
      </Router>
    );
  }
}

export default App;

/* Al envolver la app con router se le otorga la capacidad de manejo de rutas */
