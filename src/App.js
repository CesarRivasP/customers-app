import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/header';
import HomeContainer from './containers/home-container';
import CustomersContainer from './containers/customers-container';
import CustomerContainer from './containers/customer-container.js';
import NewCustomerContainer from './containers/new-customer-container.js';
import './App.css';



class App extends Component {

  // renderHome = () => <h1>Home</h1>

  // renderCustomerContainer = () => <h1>Customer Container</h1>

  renderCustomerListContainer = () => <h1>Customer List Container</h1>

  // renderCustomerNewContainer = () => <h1>Customer New Container</h1>

  render() {
    return (
      <div>
        <Header />
        <Router>
          <div>
            <Switch>
              <Route exact path="/home" component={HomeContainer} />
              <Route exact path="/">
                <Redirect to="/home" />
              </Route>
              <Route exact path="/customers" component={CustomersContainer} />
              <Route path="/customers/new" component={NewCustomerContainer} />
              <Route
                path="/customers/:ci"
                render={(props) =>
                  <CustomerContainer
                    ci={props.match.params.ci} // de estas propiedades, obtener el ci
                  />
                }
              />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

/* Al envolver la app con router se le otorga la capacidad de manejo de rutas
- Para desacoplar el component de la route para que no tenga que acceder mediante la cmobinatoria de
props.match.params.ci, puesto que de esta manera si estaria aceptando el componente que conozca a la
estructura de datos, que sepa que datos se le estan inyectando a la ruta.
Asi que se va a usar la funcion render, que es otra variante.
- Pasar todas las propiedades que vengan -> { ...props }
- El nombre del wildcar es equivalente al valor que nos encontramos en  props.match.params.{nombre del wildcar}
*/
