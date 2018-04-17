import React from 'react';
import BannerImg1 from '../res/ex_banner_img_1.jpg';
import CreatorImg from '../res/ex_who.jpg';
import '../style/Banner.css';

const Banner = (subscribe_number, who_card_display, whoCardOn, whoCardOff) => {
  return (
    <div id="banner">
      <div id="banner_img_wrapper">
        <div id="banner_img">
          <div id="banner_cover"></div>
          <img src={BannerImg1} />
        </div>
      </div>
      <div id="banner_phrase">
        시청자들과 소통하는 Creator
      </div>
      <div id="banner_item">
        <div id="who_button" onMouseEnter={whoCardOn} onMouseLeave={whoCardOff}>
          <span>Who?</span>
        </div>
      </div>
      <div id="who_card_wrapper" style={{ display: who_card_display }}>
        <div id="who_card">
          <div id="who_img">
            <img src={CreatorImg} />
          </div>
          <div id="who_profile">
            <div id="channel_name">보겸 TV</div>
            <div id="subscribe_number">구독자 {subscribe_number}명</div>
          </div>
        </div>
        <div className="arrow_down"></div>
      </div>
    </div>
  );
}

export default Banner;