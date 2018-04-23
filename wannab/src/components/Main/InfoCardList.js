import React from 'react';
import './style/InfoCardList.css';

const InfoCardList = (job, registers) => {
  function registerList(job) {
    switch (job) {
      case 'creator': 
        return registers.map((register, index) => {
          return CreatorInfoCard(job, register);
        });
      case 'editor':
        return registers.map((register, index) => {
          return EditorInfoCard(job, register);
        });
    }
  }

  function registerJob(job) {
    return job === 'creator' ? '크리에이터' : '영상 편집자';
  }

  return (
    <div id="registers">
      <div id={`${job}_`} className="main_sub_title">{registerJob(job)}</div>
      <div className="register_list">
        {registerList(job)}
      </div>
    </div>
  );
}

const CreatorInfoCard = (job, profile) => {
  return (
    <div className="info_card">
      <div className="profile_image">
        <img src={profile.profileImg} />
        <div className="cover"></div>
      </div>
      <div className="profile_name">
        <span>{profile.name}</span>
      </div>
      <div className="profile">
        <div>분야: {profile.field}</div>
        <div>구독자: {profile.subscriberCount}명</div>
        <div>활동 경력: {profile.yearInCareer}</div>
      </div>
    </div>
  );
}

const EditorInfoCard = (job, profile) => {
  return (
    <div className="info_card">
      <div className="profile_image">
        <img src={profile.profileImg} />
        <div className="cover"></div>
      </div>
      <div className="profile_name">
        <span>{profile.name}</span>
      </div>
      <div className="profile">
        <div>경력: {profile.yearInCareer}</div>
        <div>사용 툴: {profile.useTool}</div>
      </div>
    </div>
  );
}

export default InfoCardList;