import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { NavigationBar, Banner } from '../components';
import creatorImg1 from '../res/ex_who.jpg';
import creatorImg2 from '../res/ex_creator_1.jpg';
import creatorImg3 from '../res/ex_creator_2.jpg';
import creatorImg4 from '../res/ex_creator_3.jpg';
import creatorImg5 from '../res/ex_creator_4.jpg';
import creatorImg6 from '../res/ex_creator_5.jpg';
import editorImg1 from '../res/ex_editor_1.png';
import editorImg2 from '../res/ex_editor_2.png';
import editorImg3 from '../res/ex_editor_3.jpeg';
import editorImg4 from '../res/ex_editor_4.jpeg';
import editorImg5 from '../res/ex_editor_5.jpeg';
import editorImg6 from '../res/ex_editor_6.png';
import '../style/Main.css';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSignIn: false,
      who_card_display: 'none',
      editors: [
        { 
          name: 'geni429',
          profileImg: editorImg1,
          year: '1년',
          tool: 'XD'
        },
        { 
          name: 'planB',
          profileImg: editorImg2,
          year: '2년',
          tool: 'PS'
        },
        { 
          name: 'W-Vertex',
          profileImg: editorImg3,
          year: '3년',
          tool: 'Sketch'
        },
        { 
          name: 'jieun',
          profileImg: editorImg4,
          year: '1개월',
          tool: 'Oven'
        },
        { 
          name: 'Nooheat',
          profileImg: editorImg5,
          year: '5년',
          tool: 'AI'
        },
        { 
          name: 'yeon',
          profileImg: editorImg6,
          year: '10년',
          tool: 'C4D'
        },
      ],
      creators: [
        { 
          name: '보겸', 
          profileImg: creatorImg1,
          field: '게임/토크',
          subscriber_number: new Intl.NumberFormat().format(2051152),
          year: '4년'
        },
        { 
          name: '잇섭', 
          profileImg: creatorImg2,
          field: 'IT/소개',
          subscriber_number: new Intl.NumberFormat().format(192611),
          year: '2년'
        },
        { 
          name: '대도서관', 
          profileImg: creatorImg3,
          field: '게임/토크',
          subscriber_number: new Intl.NumberFormat().format(1707421),
          year: '4년'
        },
        { 
          name: '이사배', 
          profileImg: creatorImg4,
          field: '뷰티',
          subscriber_number: new Intl.NumberFormat().format(1571972),
          year: '4년'
        },
        { 
          name: '윽박', 
          profileImg: creatorImg5,
          field: '야생/다큐',
          subscriber_number: new Intl.NumberFormat().format(961784),
          year: '1년'
        },
        { 
          name: '/공대생네 가족', 
          profileImg: creatorImg6,
          field: '실험',
          subscriber_number: new Intl.NumberFormat().format(553861),
          year: '1년'
        },
      ]
    }

    this.whoCardOn = this.whoCardOn.bind(this);
    this.whoCardOff = this.whoCardOff.bind(this);
  }

  userInfo(isSignIn) {
    if (!isSignIn) return <SignIn />;
    return <UserInfo />;
  }

  whoCardOn() {
    this.setState({
      who_card_display: 'block'
    });
  }

  whoCardOff() {
    this.setState({
      who_card_display: 'none'
    });
  }

  render() {
    return (
      <div>
        <header>
          {NavigationBar(this.userInfo(this.state.isSignIn))}
        </header>
        <section>
          <article>
            {Banner(
              new Intl.NumberFormat().format(2051152), 
              this.state.who_card_display, 
              this.whoCardOn,
              this.whoCardOff)}
          </article>
          <article className="container">
            <div id="editor" className="list_title">영상 편집자</div>
            <div className="info_card_list">
              {this.state.editors.map((editor, index) => {
                return EditorInfoCard(
                  editor.profileImg, 
                  editor.name,
                  editor.year,
                  editor.tool
                )
              })}
            </div>
            <div id="creator" className="list_title">크리에이터</div>
            <div className="info_card_list">
              {this.state.creators.map((creator, index) => {
                return CreatorInfoCard(
                  creator.profileImg, 
                  creator.name,
                  creator.field,
                  creator.subscriber_number,
                  creator.year)
              })}
            </div>
          </article>
        </section>
      </div>
    );
  }
}

const SignIn = () => {
  return <div id="sign_in_btn">로그인</div>;
}

const UserInfo = () => {
  return <div>UserInfo</div>;
}

const EditorInfoCard = (profile_image, name, year, tool) => {
  return (
    <div className="info_card">
      <div className="profile_image">
        <img src={profile_image} />
        <div className="cover"></div>
      </div>
      <div className="profile_name">
        <span>{name}</span>
      </div>
      <div className="profile">
        <div>경력: {year}</div>
        <div>사용 툴: {tool}</div>
      </div>
    </div>
  );
}

const CreatorInfoCard = (profile_image, name, field, subscriber_number, year) => {
  return (
    <div className="info_card">
      <div className="profile_image">
        <img src={profile_image} />
        <div className="cover"></div>
      </div>
      <div className="profile_name">
        <span>{name}</span>
      </div>
      <div className="profile">
        <div>분야: {field}</div>
        <div>구독자: {subscriber_number}명</div>
        <div>활동 경력: {year}</div>
      </div>
    </div>
  );
}

export default Main;