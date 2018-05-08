import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Main, SignIn } from './containers';
import { TopNavigationBar } from './components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <div>
      <TopNavigationBar />
      <Switch>
        <Route path='/' component={ Main } exact />
      </Switch>
    </div>
  </Router>
, document.getElementById('root'));
registerServiceWorker();