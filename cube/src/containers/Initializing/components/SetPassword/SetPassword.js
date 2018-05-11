import React, { Component } from 'react';
import classNames from 'classnames';
import { withRouter } from 'react-router-dom';
import { StyleInput } from '../../../../components';
import './SetPassword.css';

class SetPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: '',
      confirm: '',
      isError: false,
      isUnMatched: false,
      isConfirmFocus: false
    }

    this.inputPassword = this.inputPassword.bind(this);
    this.inputConfirm = this.inputConfirm.bind(this);
    this.focusInputConfirm = this.focusInputConfirm.bind(this);
    this.isSetPasswordComplete = this.isSetPasswordComplete.bind(this);
    this.setPasswordComplete = this.setPasswordComplete.bind(this);
  }

  inputPassword(e) {
    if (e.target.value.length >= 8 || e.target.value.length === 0) {
      if (e.target.value !== this.state.confirm && this.state.isConfirmFocus && this.state.confirm !== '') {
        this.setState({
          isUnMatched: true
        });
      } else {
        this.setState({
          isUnMatched: false
        });
      }
      this.setState({
        password: e.target.value,
        isError: false
      });
    } else {
      this.setState({
        password: e.target.value,
        isError: true
      });
    }
  }

  inputConfirm(e) {
    if (e.target.value === this.state.password || e.target.value.length === 0) {
      this.setState({
        confirm: e.target.value,
        isUnMatched: false
      });
    } else {
      this.setState({
        confirm: e.target.value,
        isUnMatched: true
      });
    }
  }

  focusInputConfirm(e) {
    if (!this.state.isConfirmFocus)
      this.setState({
        isConfirmFocus: true
      });
  }

  isSetPasswordComplete() {
    if (this.state.password && this.state.confirm && !this.state.isError && !this.state.isUnMatched)
      return 'init_task_complete';
    return '';
  }

  setPasswordComplete() {
    if (this.isSetPasswordComplete())
      this.props.history.push('/init/job');
  }

  render() {
    return (
      <div id="init_set_password" className="container">
        <div className="init_title">비밀번호를 등록해주세요</div>
        <div className="init_input">
          <StyleInput 
            inputHeader="비밀번호" 
            inputType="password"
            inputEvent={this.inputPassword}
            isError={this.state.isError} />
        </div>
        <div className="input_notice">비밀번호는 8자 이상으로 해주세요.</div>
        <div className="init_input">
          <StyleInput 
            inputHeader="비밀번호 확인" 
            inputType="password"
            inputEvent={this.inputConfirm}
            inputFocusEvent={this.focusInputConfirm}
            isError={this.state.isUnMatched}
            disable={(() => {
              if (this.state.isError) {
                return true;
              } else if (this.state.password === '') {
                return true;
              } else {
                return false;
              }
            })()} />
        </div>

        <div className={classNames("init_task_complete_btn", this.isSetPasswordComplete())} onClick={this.setPasswordComplete}>
          <span className="center_in_parent">설정 완료</span>
        </div>
      </div>
    );
  }
}

export default withRouter(SetPassword);