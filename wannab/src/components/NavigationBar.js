import React from 'react';
import Brand from './Brand';
import '../style/NavigationBar.css';

const NavigationBar = (userInfo, visibility) => {
  return (
    <nav id="top_navigation">
      <div className="container">
        {Brand()}
        <div id="navigation_items">
          <ul>
            <li>Creator</li>
            <li>편집자</li>
            <li>탐색</li>
          </ul>
        </div>
        <div id="user_info">
          {userInfo}
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;