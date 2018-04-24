import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Main, SignIn } from './containers';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" component={Main} exact />
      <Route path="/signin" component={SignIn} />
    </Switch>
  </Router>
, document.getElementById('root'));
registerServiceWorker();