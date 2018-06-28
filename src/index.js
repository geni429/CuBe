import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Main, SignIn, Verifying, Initializing, Recruit } from './containers';
import { TopNavigationBar } from './components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <Fragment>
      <TopNavigationBar />
      <Fragment>
        <Route path='/' component={ Main } exact />
        <Route path='/signin' component={ SignIn } />
        <Route path='/verify/:email' component={ Verifying } />
        <Route path='/recruit' component={ Recruit } />
        <Route path='/recruit/info/:id' />
        <Initializing />
      </Fragment>
    </Fragment>
  </Router>
, document.getElementById('root'));
registerServiceWorker();