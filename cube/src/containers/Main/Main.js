import React, { Component } from 'react';
import classNames from 'classnames';
import { TopNavigationBar } from '../../components';
import mainPart1BgImage from '../../res/main_part_1.jpg';
import './Main.css';

class Main extends Component {
  render() {
    return (
      <div id="main_part_1">
        <div id="main_part_1_bg_img">
          <img src={ mainPart1BgImage } />
        </div>
        <div id="main_part_1_bg_cover"></div>
        <div id="main_part_1_introduce" className={classNames("center_vertical", "align_parent_right")}>
          <div id="main_part_1_introduce_title">
            CuBe와 함께 YouTube 채널을<br />성공적으로 운영해보세요
          </div>
          <div id="main_part_1_introduce_content">
            CuBe에서 YouTube 채널에서 꼭 필요한 전문가들을 만나고<br />
            트렌드를 빠르게 파악하여 높은 가치의 창작물을 구독자에게 제공하세요
          </div>
          <div id="main_part_1_get_start">
            <div id="main_part_1_get_start_email">
              <input placeholder="name@company.com" />
            </div>
            <div id="main_part_1_get_start_submit">
              <span className="center_in_parent">시작하기</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;