import React from 'react';
import Wannafish from '../res/Wannafish.png';
import '../style/NavigationBar.css';

const NavigationBar = (userInfo) => {
  return (
    <nav id="top_navigation">
      <div id="logo">
        <img src={Wannafish} />
      </div>
      <div id="navigation_items">
        <ul>
          <li>Creator</li>
          <li>구인</li>
          <li>구직</li>
        </ul>
      </div>
      <div id="user_info">
        {userInfo}
      </div>
    </nav>
  );
}

export default NavigationBar;