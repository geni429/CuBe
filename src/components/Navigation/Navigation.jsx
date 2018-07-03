import React from 'react';
import menuBtn from '../../res/menu-btn.png';
import backBtn from '../../res/nav-back-btn.png';
import './Navigation.css';

const Navigation = ({ events, data }) => {
  return (
    <aside>
      <div id="sub-nav">
        <div className="sub-nav-icon-btn">
          <img className="center-in-parent" alt="logo" />
        </div>
        <div className="sub-nav-icon-btn">
          <img className="center-in-parent" src={menuBtn} alt="options" />
        </div>
        <div className="sub-nav-icon-btn">
          <img className="center-in-parent" alt="profile" />
        </div>
        <div className="sub-nav-icon-btn">
          <img className="center-in-parent" alt="setting" />
        </div>
      </div>
      <div id="nav">
        <div id="nav-top-menu">
          <div id="nav-back-btn">
            <img src={backBtn} alt="nav-back button" />
          </div>
        </div>
        <div id="nav-header">
          <span>채용관리</span>
          <hr />
        </div>
        <ul id="nav-items">
          <li>지원자 관리</li>
          <hr />
          <li>전문가 검색</li>
          <hr />
        </ul>
      </div>
    </aside>
  );
}

export default Navigation;