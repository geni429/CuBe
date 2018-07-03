import React, { Component, Fragment } from 'react';
import { Navigation } from '../../components';
import './Management.css';

class Management extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <Fragment>
        <Navigation />
        <div id="management">
          Manager
        </div>
      </Fragment>
    );
  }
}

Management.defaultProps = {
  defaultModeList: ['channel', 'human']
}

export default Management;