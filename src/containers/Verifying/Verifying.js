import React, { Component } from 'react';
import loadingAnimImg from '../../res/loading_icon.gif';
import './Verifying.css';

class Verifying extends Component {
  render() {
    return (
      <div id="verify">
        <div className="center_in_parent">
          <div id="loading_anim">
            <img src={ loadingAnimImg } className="center_horizontal" />
          </div>
          <div id="verify_title">이메일을 확인해주세요.</div>
          <div id="verify_notice">
            이전에 입력하신 이메일(<span style={{ color: "rgb(5, 130, 247)", textDecoration: "underline", cursor: "pointer" }}>{this.props.match.params.email}</span>)로 인증 메일을 발송했습니다.<br />
            <b>한 번의 인증으로 CuBe의 모든 기능을 사용하세요.</b>
          </div>
        </div>
      </div>
    );
  }
}

export default Verifying;