import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Main, SignIn, Verifying, Initializing, Recruit, RecruitInfo, Management } from './containers';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <Fragment>
      <Route path='/' component={Main} exact />
      <Route path='/user/signin' component={SignIn} />
      <Route path='/user/verify/:email' component={Verifying} />
      <Route path='/management' component={Management} exact />
      <Route path='/management/recruit' component={Recruit} exact />
      <Route path='/management/recruit/info/:id' component={RecruitInfo} />
      <Initializing />
    </Fragment>
  </Router>
, document.getElementById('root'));
registerServiceWorker();