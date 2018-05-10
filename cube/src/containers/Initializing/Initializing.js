import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { SelectJob, SetPassword } from './components';
import './Initializing.css';

class Initializing extends Component {
  render() {
    return (
      <Switch>
        <Route path='/init/job' component={ SelectJob } />
        <Route path='/init/password' component={ SetPassword } />
      </Switch>
    );
  }
}

export default Initializing;