import React, { Component } from 'react';
import classNames from 'classnames';
import Wannafish from '../../res/Wannafish.png';
import './SignIn.css';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFocus: '',
      isBlur: '',
      errorMessage: '이메일을 입력하세요.'
    }

    this.inputFocusEvent = this.inputFocusEvent.bind(this);
    this.inputBlurEvent = this.inputBlurEvent.bind(this);
  }

  inputFocusEvent(e) {
    if (e.target.value.length > 0) {
      this.setState({
        isFocus: 'input_focus_event_c'
      });
    } else {
      this.setState({
        isFocus: 'input_focus_event_nc'
      });
    }
  }

  inputBlurEvent(e) {
    if (e.target.value.length > 0) {
      this.setState({
        isFocus: '',
        isBlur: 'input_blur_event'
      });
    } else {
      this.setState({
        isFocus: '',
        isBlur: ''
      });
    }
  }

  onNextBtnClick() {

  }

  render() {
    return (
      <div id="sign_in" className="container">
        <div id="sign_in_wrapper" className="center_in_parent">
          <div id="sign_in_box" className="box">
            <img src={Wannafish} className="logo" />
            <header>로그인</header>
            <section id="input_info">
              <div id="input_email">
                <input type="text" onFocus={this.inputFocusEvent} onBlur={this.inputBlurEvent} />
                <div className={classNames("input_header", this.state.isFocus, this.state.isBlur)}>이메일</div>
                <span className="input_line"></span>
                <div className="error_message">{this.state.errorMessage}</div>
              </div>
              <div className="forget">
                <span>이메일을 잊으셨나요?</span>
              </div>
            </section>
            <button className="next_btn">다음</button>
          </div>
          <div id="sign_in_benefit" className="box">
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;