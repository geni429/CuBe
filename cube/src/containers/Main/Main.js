import React, { Component } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
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

  render() {
    return (
      <div id="main_part_1">
        <div id="main_part_1_bg_img">
          <img src={ mainPart1BgImage } />
        </div>
        <div id="main_part_1_bg_cover"></div>
        <div id="main_part_1_introduce" className={classNames("center_vertical", "align_parent_right")}>
          <div id="main_part_1_introduce_title">
            CuBe와 함께 YouTube 채널을<br />성공적으로 운영해보세요
          </div>
          <div id="main_part_1_introduce_content">
            CuBe를 통해 YouTube 채널에서 꼭 필요한 전문가들을 만나고<br />
            트렌드를 빠르게 파악하여 높은 가치의 창작물을 구독자에게 제공하세요
          </div>
          <div id="main_part_1_get_start">
            <div id="main_part_1_get_start_by_google">
              <div className="g-signin2" data-onsuccess="onSignIn"></div>
              <div>OR</div>
            </div>
            <div id="main_part_1_get_start_email">
              <input placeholder="name@company.com" className={this.state.isEmail} onChange={this.inputStartEmail} onBlur={this.inputBlur} onFocus={this.inputFocus} />
            </div>
            <Link to={`/verify/${this.state.email}`}>
              <div id="main_part_1_get_start_submit" className={this.state.isGoogle}>
                <span className="center_in_parent">시작하기</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;