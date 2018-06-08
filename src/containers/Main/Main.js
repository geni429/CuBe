import React, { Component } from 'react';
import axios from 'axios';
import classNames from 'classnames';
import GoogleLogin from 'react-google-login';
import { Link, withRouter } from 'react-router-dom';
import { TopNavigationBar } from '../../components';
import mainPart1BgImage from '../../res/main_part_1.jpg';
import './Main.css';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      isEmail: '',
      isGoogle: 'ds_none'
    }

    this.isEmail = this.isEmail.bind(this);
    this.inputStartEmail = this.inputStartEmail.bind(this);
    this.inputBlur = this.inputBlur.bind(this);
    this.inputFocus = this.inputFocus.bind(this);
    this.onGoogleSignIn = this.onGoogleSignIn.bind(this);
    this.verifyEmail = this.verifyEmail.bind(this);
  }

  inputStartEmail(e) {
    if (e.target.value) {
      if (this.isEmail(e.target.value)) {
        this.setState({
          email: e.target.value,
          isEmail: 'email_form_correct'
        });
      } else {
        this.setState({
          isEmail: 'email_form_uncorrect'
        });
      }
    } else {
      this.setState({
        isEmail: 'email_form_correct'
      });
    }
  }

  isEmail(value) {
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(value).toLowerCase());
  }

  inputBlur(e) {
    this.setState({
      isEmail: ''
    });

    if (!e.target.value) this.setState({
      isGoogle: 'ds_none'
    });
  }

  inputFocus() {
    this.setState({
      isEmail: "email_form_correct",
      isGoogle: ''
    });
  }

  onGoogleSignIn(response) {
    console.log(response);
  }

  verifyEmail() {
    axios({
      method: 'POST',
      url: '/email',
      data: {
        email: this.state.email
      }
    }).then(response => {
      console.log(response);
      this.props.history.push(`/verify/${this.state.email}`);
    }).catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <div id="main_part_1">
        <div id="main_part_1_bg_img">
          <img src={ mainPart1BgImage } />
        </div>
        <div id="main_part_1_bg_cover"></div>
        <div id="main_part_1_introduce" className={classNames("center_vertical", "align_parent_right")}>
          <div id="main_part_1_introduce_title">
            CuBe와 함께 YouTube 채널을<br />성공적으로 운영해보세요!
          </div>
          <div id="main_part_1_introduce_content">
            CuBe를 통해 YouTube 채널에서 꼭 필요한 전문가들을 만나고<br />
            트렌드를 빠르게 파악하여 높은 가치의 창작물을 구독자에게 제공하세요
          </div>
          <div id="main_part_1_get_start">
            <div id="main_part_1_get_start_by_google">
              <GoogleLogin
                clientId="580427032589-gk5t3uf8kml3vsb32siht409i55tjkk6.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={this.onGoogleSignIn}
                onFailure={this.onGoogleSignIn}
              />
              <div>OR</div>
            </div>
            <div id="main_part_1_get_start_email">
              <input placeholder="name@company.com" className={this.state.isEmail} onChange={this.inputStartEmail} onBlur={this.inputBlur} onFocus={this.inputFocus} />
            </div>
            <div id="main_part_1_get_start_submit" className={this.state.isGoogle} onClick={this.verifyEmail}>
              <span className="center_in_parent">시작하기</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Main);