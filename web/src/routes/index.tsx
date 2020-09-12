import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Cart from 'pages/Cart';
import Header from 'components/Header';
import Category from 'pages/Category';
import Dashboard from 'pages/Dashboard';

const Routes: React.FC = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/categories/:category" component={Category} />
      <Route path="/cart" component={Cart} />
    </Switch>
  </Router>
);

export default Routes;
