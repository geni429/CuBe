import React from 'react';

const Weekly = (weeklyYoutubeLink, weeklyCreator, weeklyEditor) => {
  return (
    <div id="weekly">
      <div id="weekly_" className="main_sub_title">금주의 영상</div>
      <div id="weekly_wrapper">
        <div id="weekly_youtube">
          <iframe frameBorder="0" src={weeklyYoutubeLink}></iframe>
        </div>
        <div id="weekly_youtube_member">
          <div id="weekly_creator">
            <div className="profile">
              <div className="profile_image">
                <img src={weeklyCreator} />
              </div>
              <div className="info">
                <div className="channel_name">ITSub잇섭</div>
                <div className="info_content">분야: IT/리뷰</div>
              </div>
            </div>
            <div className="weekly_why">
              <div>Why?</div>
              <div className="line"></div>
              <div>누군가는 가성비가 좋다고 추천할 수 있는 것을 솔직한 자신의 생각을 표현함으로써 진실성이 보였습니다.</div>
            </div>
          </div>
          <div id="weekly_editor">
            <div className="profile">
              <div className="profile_image">
                <img src={weeklyEditor} />
              </div>
              <div className="info">
                <div className="channel_name">geni429</div>
                <div className="info_content">경력: 1년</div>
              </div>
            </div>
            <div className="weekly_why">
              <div>Why?</div>
              <div className="line"></div>
              <div>적절한 시점에 등장하는 자막, 크리에이터가 전달하고자하는 내용을 편집으로서 잘 담았습니다.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weekly;