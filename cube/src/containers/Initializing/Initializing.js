import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { SelectJob } from './components';
import './Initializing.css';

class Initializing extends Component {
  render() {
    return (
      <Switch>
        <Route path='/init/job' component={ SelectJob } />
      </Switch>
    );
  }
}

export default Initializing;