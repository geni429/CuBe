import React from 'react';
import './AsideMenuItem.css';

const AsideMenuItem = ({ name }) =>
  <div className="my-page-aside-menu-item">
    <span className="center-vertical">{name}</span>
  </div>

export default AsideMenuItem;