import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Dashboard from 'pages/Dashboard';
import Cart from 'pages/Cart';
import Product from 'pages/Product';
import Header from 'components/Header';

const Routes: React.FC = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/products/:product+" component={Product} />
      <Route path="/cart" component={Cart} />
    </Switch>
  </Router>
);

export default Routes;
