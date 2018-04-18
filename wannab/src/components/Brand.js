import React from 'react';
import Wannafish from '../res/Wannafish.png';
import Logo from '../res/logo.png';
import '../style/Brand.css';

const Brand = () => {
  return (
    <div className="brand">
      <div className="icon">
        <img src={Wannafish} />
      </div>
      <div className="logo">
        <img src={Logo} />
      </div>
    </div>
  );
}

export default Brand;