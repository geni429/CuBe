import React from 'react';
import '../style/IntroduceSummary.css';

const IntroduceSummary = () => {
  return (
    <div id="introduce_summary">
      <div className="wave wave_one"></div>
      <div className="wave wave_two"></div>
      <div className="wave wave_three"></div>
      <div id="introduce_summary_content">
        <header>Creator와 영상 편집자를 연결합니다.</header>
        <section><span className="bold">WannaB는</span> Creator는 원하는 영상 편집자를 <span className="bold">구인</span>, 영상 편집자는 원하는 Creator의 채널에 <span className="bold">구직</span>할 수 있는 공간입니다.</section>
      </div>
    </div>
  );
}

export default IntroduceSummary;