import React, { Component } from 'react';
import classNames from 'classnames';
import axios from 'axios';
import InitCompleteBtn from '../InitCompleteBtn/InitCompleteBtn';
import { BeatLoader } from 'react-spinners';
import { StyleInput } from '../../../../components';
import './SetChannelInfo.css';

class SetChannelInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      channelLink: '',
      isChannelLink: '',
      isLoading: false,
      isLoadingComplete: false,
      channelInfo: {
        channelName: '',
        subscriberCount: '',
        views: '',
        profileImgSrc: ''
      }
    }

    this.inputChannelLink = this.inputChannelLink.bind(this);
    this.getChannelInfo = this.getChannelInfo.bind(this);
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

  getChannelInfo() {
    this.setState({ isLoading: true }, () => {
      axios({
        method: 'GET',
        url: '/channel',
        params: {
          channelLink: this.state.channelLink
        }
      }).then(response => {
        console.log(response);
        this.setState({
          isLoading: false,
          isLoadingComplete: true,
          channelInfo: response.data,
        });
      }).catch(err => {
        console.log(err);
      });
    })
  }

  render() {
    return (
      <div id="set_channel_info" className="container">
        <div className="init_title">당신의 채널 정보를 불러오세요</div>
        <div className="init_input">
          <StyleInput
            inputHeader="YouTube 채널링크"
            inputType="text"
            inputEvent={this.inputChannelLink} />
        </div>
        {this.state.isLoading ? 
          <Loading isLoading={this.state.isLoading} /> 
          : <InitCompleteBtn btnContent="불러오기" disable={this.state.isChannelLink} onClickEvent={this.getChannelInfo} />}
        <div id="get_channel_info_result" className={this.state.isLoadingComplete ? '' : 'ds_none'}>
          <div className="channel_info_card">
            <div className="channel_profile_img">
              <img src={this.state.channelInfo.profileImgSrc} />
            </div>
            <div className="channel_profile_info">
              <div className="channel_info">채널명: <span>{this.state.channelInfo.channelName}</span></div>
              <div className="channel_info">구독자 수: <span>{this.state.channelInfo.subscriberCount}</span></div>
              <div className="channel_info">총 조회수: <span>{this.state.channelInfo.views}</span></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const Loading = ({ isLoading }) => {
  return (
    <div id="loading">
      <BeatLoader color={'#b94f55'} loading={isLoading} />
    </div>
  );
}

export default SetChannelInfo;