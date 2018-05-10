import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';
import creatorBtnImg from './res/creator_btn.jpg';
import videoEditorBtnImg from './res/video_editor_btn.jpg';
import othersBtnImg from './res/others_btn.jpg';
import './SelectJob.css';

class SelectJob extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectJob: '',
      isCreator: '',
      isVideoEditor: '',
      isOthers: '',
      isSelected: ''
    }

    this.selectJob = this.selectJob.bind(this);
    this.selectComplete = this.selectComplete.bind(this);
  }

  selectJob(e) {
    this.setState({
      isSelected: 'init_task_complete'
    });
    switch (e.target.id) {
      case 'job_card_creator':
        if (!this.state.isCreator) {
          this.setState({
            isCreator: 'focused job_card_creator',
            isVideoEditor: '',
            isOthers: ''
          });
        } else {
          this.setState({
            isCreator: '',
            isSelected: ''
          });
        }
        break;
      case 'job_card_video_editor':
        if (!this.state.isVideoEditor) {
          this.setState({
            isCreator: '',
            isVideoEditor: 'focused job_card_video_editor',
            isOthers: ''
          });
        } else {
          this.setState({
            isVideoEditor: '',
            isSelected: ''
          });
        }
        break;
      case 'job_card_others':
        if (!this.state.isOthers) {
          this.setState({
            isCreator: '',
            isVideoEditor: '',
            isOthers: 'focused job_card_others'
          });
        } else {
          this.setState({
            isOthers: '',
            isSelected: ''
          });
        }
        break;
    }
  }

  selectComplete() {
    if (this.state.isSelected) 
      this.props.history.push('/init/password');
  }

  render() {
    return (
      <div id="select_job" className="container">
        <div className="init_title">당신은 YouTube 채널내에서 어떤 일을 하시나요?</div>
        <div className="job_card" onClick={this.selectJob} >
          <div id="job_card_creator" className="job_card_wrapper"></div>
          <img src={creatorBtnImg} />
          <div className={classNames("job_card_img_cover", "job_card_creator")}></div>
          <div className="job_introduce">
            <div className="job_introduce_title">Creator</div>
            <div className="job_introduce_content">
              Creator는 YouTube 플랫폼에 올릴 동영상 콘텐츠를 제작하는 개인으로서,<br />
              누구나 볼 수 있는 온라인 환경에서 이야기를 전달하는 사람들입니다.
            </div>
          </div>
        </div>
        <div className="job_card_selected">
          <div className={classNames("focus_border", this.state.isCreator)}></div>
        </div>
        <div className="job_card" onClick={this.selectJob}>
          <div id="job_card_video_editor" className="job_card_wrapper"></div>
          <img src={videoEditorBtnImg} />
          <div className={classNames("job_card_img_cover", "job_card_video_editor")}></div>
          <div className="job_introduce">
            <div className="job_introduce_title">Video Editor</div>
            <div className="job_introduce_content">
              Video Editor는 Creator가 제작한 동영상 콘텐츠를 영상 편집 기술과<br />
              재치있는 효과를 통해서 더욱 가치있게 만들어주는 역할을 합니다.
            </div>
          </div>
        </div>
        <div className="job_card_selected">
          <div className={classNames("focus_border", this.state.isVideoEditor)}></div>
        </div>
        <div className="job_card" onClick={this.selectJob}>
          <div id="job_card_others" className="job_card_wrapper"></div>
          <img src={othersBtnImg} />
          <div className={classNames("job_card_img_cover", "job_card_others")}></div>
          <div className="job_introduce">
            <div className="job_introduce_title">Others</div>
            <div className="job_introduce_content">
              YouTube 채널을 이끌어가는데 필요한 다른 모든 직업을 말합니다.<br />
              Ex) SNS 관리, 마케팅, 행사 기획자
            </div>
          </div>
        </div>
        <div className="job_card_selected">
          <div className={classNames("focus_border", this.state.isOthers)}></div>
        </div>

        <div className={classNames("init_task_complete_btn", this.state.isSelected)} onClick={this.selectComplete}>
          <span className="center_in_parent">선택 완료</span>
        </div>
      </div>
    );
  }
}

export default withRouter(SelectJob);