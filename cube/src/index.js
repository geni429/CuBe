import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Main, SignIn } from './containers';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <SignIn />
, document.getElementById('root'));
registerServiceWorker();