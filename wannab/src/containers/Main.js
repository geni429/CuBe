import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { NavigationBar } from '../components';
import '../style/Main.css';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSignIn: false
    }
  }

  userInfo(isSignIn) {
    if (!isSignIn) return <SignIn />;
    return <UserInfo />;
  }

  render() {
    return (
      <div>
        <header>
          {NavigationBar(this.userInfo(this.state.isSignIn))}
        </header>
        <section className="container"></section>
      </div>
    );
  }
}

const SignIn = () => {
  return <div id="sign_in_btn">로그인</div>;
}

const UserInfo = () => {
  return <div>UserInfo</div>;
}

export default Main;