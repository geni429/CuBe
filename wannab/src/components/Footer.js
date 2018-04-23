import React from 'react';
import Brand from './Brand';
import '../style/Footer.css';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div id="footer_content">
          <div className="footer_list">
            <div className="footer_list_title">WannaB</div>
            <ul className="footer_list_items">
              <li>서비스 소개</li>
              <li>개발자 소개</li>
              <li>Creator란?</li>
            </ul>
          </div>
          <div className="footer_list">
            <div className="footer_list_title">구인/구직하기</div>
            <ul className="footer_list_items">
              <li>Creator 탐색</li>
              <li>영상 편집자 탐색</li>
              <li>그 외 다른 직종</li>
            </ul>
          </div>
        </div>
        <div id="footer_info">
          <div>{Brand()}</div>
          <div className="footer_legal_link">개인정보 처리방침</div>
          <div className="footer_legal_link">약관</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;