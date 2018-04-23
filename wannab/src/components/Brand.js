import React from 'react';
import Wannafish from '../res/Wannafish.png';
import Logo from '../res/logo.png';
import '../style/Brand.css';

const Brand = () => {
  return (
    <div className="brand">
      <div className="icon">
        <img className="center_vertical" src={Wannafish} />
      </div>
      <div className="logo">
        <img className="center_vertical" src={Logo} />
      </div>
    </div>
  );
}

export default Brand;