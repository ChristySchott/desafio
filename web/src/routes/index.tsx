import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Dashboard from 'pages/Dashboard';
import Cart from 'pages/Cart';

const Routes: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/cart" component={Cart} />
    </Switch>
  </Router>
);

export default Routes;
