import React from 'react';
import classNames from 'classnames';
import './style/Banner.css';

const Banner = (bannerContent, whoCardDisplay, whoCardOn, whoCardOff, phraseOpacity) => {
  return (
    <div id="banner">
      <div id="banner_img_wrapper">
        <div id="banner_img">
          <div id="banner_cover"></div>
          <img src={bannerContent.bannerImg} />
        </div>
      </div>
      <div id="banner_phrase" className="center_in_parent" style={{ opacity: phraseOpacity }}>
        {bannerContent.bannerPhrase}
      </div>
      <div id="banner_item" className="center_horizontal">
        <div id="who_button" onMouseEnter={whoCardOn} onMouseLeave={whoCardOff}>
          <span className={classNames("center_in_parent", "pr_ft_white")}>Who?</span>
        </div>
      </div>
      <div id="who_card_wrapper" className="center_horizontal" style={{ display: whoCardDisplay }}>
        <div id="who_card">
          <div id="who_img">
            <img className="center_vertical" src={bannerContent.profileImg} />
          </div>
          <div id="who_profile" className="center_vertical">
            <div id="channel_name">{bannerContent.channelName}</div>
            <div id="subscribe_number">구독자 {bannerContent.subscriberCount}명</div>
          </div>
        </div>
        <div className="arrow_down"></div>
      </div>
    </div>
  );
}

export default Banner;