import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { NavigationBar, Banner } from '../components';
import '../style/Main.css';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSignIn: false,
      who_card_display: 'none'
    }

    this.whoCardOn = this.whoCardOn.bind(this);
    this.whoCardOff = this.whoCardOff.bind(this);
  }

  userInfo(isSignIn) {
    if (!isSignIn) return <SignIn />;
    return <UserInfo />;
  }

  whoCardOn() {
    this.setState({
      who_card_display: 'block'
    });
  }

  whoCardOff() {
    this.setState({
      who_card_display: 'none'
    });
  }

  render() {
    return (
      <div>
        <header>
          {NavigationBar(this.userInfo(this.state.isSignIn))}
        </header>
        <section>
          {Banner(
            new Intl.NumberFormat().format(2051152), 
            this.state.who_card_display, 
            this.whoCardOn, 
            this.whoCardOff)}
        </section>
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