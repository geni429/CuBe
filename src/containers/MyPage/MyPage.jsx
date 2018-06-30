import React, { Component } from 'react';
import { AsideMenuItem } from '../../components';
import '../MyPage/MyPage.css';

class MyPage extends Component {
  render() {
    return (
      <div id="my-page">
        <aside>
          <div id="my-page-aside-header">마이페이지</div>
          <AsideMenuItem name="채널관리" />
          <AsideMenuItem name="인사관리" />
        </aside>
        <section>
          
        </section>
      </div>
    );
  }
}

export default MyPage;