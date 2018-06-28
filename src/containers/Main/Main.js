import React, { Component } from 'react';
import classNames from 'classnames';
import { withRouter } from 'react-router-dom';
import mainBgImg from '../../res/main_part_1.jpg';
import './Main.css';

class Main extends Component {
  state = {
    email: '',
    isEmail: true
  }

  inputEmail = (e) => {
    let checkEmailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!e.target.value)
      this.setState({ isEmail: true });
    else 
      this.setState({
        email: e.target.value,
        isEmail: checkEmailRegex.test(String(e.target.value).toLowerCase())
      });
  }

  render() {
    return (
      <div id="main-1">
        <div id="main-1-bg-img">
          <img src={ mainBgImg } alt="main background image" />
        </div>
        <div id="main-1-bg-cover"></div>
        <div id="main-1-introduce" className={classNames("center-vertical", "align-parent-right")}>
          <div className="header-title-1-wh">
            CuBe와 함께 YouTube 채널을<br />성공적으로 운영해보세요!
          </div>
          <div id="main-1-introduce-content" className="header-sub-title-1-wh">
            CuBe를 통해 YouTube 채널에서 꼭 필요한 전문가들을 만나고<br />
            트렌드를 빠르게 파악하여 높은 가치의 창작물을 구독자에게 제공하세요
          </div>
          <div id="main-1-get-start">
            <div id="main-1-get-start-email">
              <input placeholder="name@company.com" className={this.state.isEmail === true ? 'email-form-correct' : 'email-form-uncorrect'} onChange={this.inputEmail} />
            </div>
            <div id="main-1-get-start-submit">
              <span className="center-in-parent">시작하기</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Main);