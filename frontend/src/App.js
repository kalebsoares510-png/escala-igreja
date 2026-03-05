import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './components/Login';
import PorteiroDashboard from './components/PorteiroDashboard';
import RecepcionistaDashboard from './components/RecepcionistaDashboard';
import AdminDashboard from './components/AdminDashboard';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/porteiro' component={PorteiroDashboard} />
        <Route path='/recepcionista' component={RecepcionistaDashboard} />
        <Route path='/admin' component={AdminDashboard} />
      </Switch>
    </Router>
  );
};

export default App;