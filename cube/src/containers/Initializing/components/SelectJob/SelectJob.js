import React, { Component } from 'react';
import creatorBtnImg from './res/creator_btn.jpg';
import videoEditorBtnImg from './res/video_editor_btn.jpg';
import othersBtnImg from './res/others_btn.jpg';
import './SelectJob.css';

const SelectJob = () => {
  return (
    <div id="select_job" className="container">
      <div className="init_title">당신은 YouTube 채널내에서 어떤 일을 하시나요?</div>
      <div className="job_card">
        <img src={creatorBtnImg} />
        <div id="job_card_creator" className="job_card_img_cover"></div>
        <div className="job_introduce">
          <div className="job_introduce_title">Creator</div>
          <div className="job_introduce_content">
            Creator는 YouTube 플랫폼에 올릴 동영상 콘텐츠를 제작하는 개인으로서,<br />
            누구나 볼 수 있는 온라인 환경에서 이야기를 전달하는 사람들입니다.
          </div>
        </div>
      </div>
      <div className="job_card">
        <img src={videoEditorBtnImg} />
        <div id="job_card_video_editor" className="job_card_img_cover"></div>
        <div className="job_introduce">
          <div className="job_introduce_title">Video Editor</div>
          <div className="job_introduce_content">
            Video Editor는 Creator가 제작한 동영상 콘텐츠를 영상 편집 기술과<br />
            재치있는 효과를 통해서 더욱 가치있게 만들어주는 역할을 합니다.
          </div>
        </div>
      </div>
      <div className="job_card">
        <img src={othersBtnImg} />
        <div id="job_card_others" className="job_card_img_cover"></div>
        <div className="job_introduce">
          <div className="job_introduce_title">Others</div>
          <div className="job_introduce_content">
            YouTube 채널을 이끌어가는데 필요한 다른 모든 직업을 말합니다.<br />
            Ex) SNS 관리, 마케팅, 행사 기획자
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectJob;