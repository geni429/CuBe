import React, { Component } from 'react';
import classNames from 'classnames';
import { StyleInput } from '../../../../components';
import './SetChannelInfo.css';

class SetChannelInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      channelLink: '',
      isChannelLink: ''
    }

    this.inputChannelLink = this.inputChannelLink.bind(this);
  }

  inputChannelLink(e) {
    if (e.target.value) {
      this.setState({
        channelLink: e.target.value,
        isChannelLink: 'init_task_complete'
      });
    } else {
      this.setState({
        channelLink: e.target.value,
        isChannelLink: ''
      });
    }
  }

  render() {
    console.log(this.state);
    return (
      <div id="set_channel_info" className="container">
        <div className="init_title">당신의 채널 정보를 입력하세요</div>
        <div className="init_input">
          <StyleInput
            inputHeader="YouTube 채널링크"
            inputType="text"
            inputEvent={this.inputChannelLink} />
        </div>
        <div className={classNames("init_task_complete_btn", this.state.isChannelLink)}>
          <span className="center_in_parent">불러오기</span>
        </div>
      </div>
    );
  }
}

export default SetChannelInfo;