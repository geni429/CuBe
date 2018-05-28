import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import CubeReducer from './reducers';
import './index.css';
import { Main, SignIn, Verifying, Initializing } from './containers';
import { TopNavigationBar } from './components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <Fragment>
      <TopNavigationBar />
      <Switch>
        <Route path='/' component={ Main } exact />
        <Route path='/signin' component={ SignIn } />
        <Route path='/verify/:email' component={ Verifying } />
        <Initializing />
      </Switch>
    </Fragment>
  </Router>
, document.getElementById('root'));
registerServiceWorker();