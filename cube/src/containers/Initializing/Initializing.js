import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { SelectJob, SetPassword, SetChannelInfo } from './components';
import './Initializing.css';

class Initializing extends Component {
  render() {
    return (
      <Switch>
        <Route path='/init/job' component={ SelectJob } />
        <Route path='/init/password' component={ SetPassword } />
        <Route path='/init/channel' component={SetChannelInfo } />
      </Switch>
    );
  }
}

export default Initializing;