import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { NavigationBar, Banner, IntroduceSummary } from '../components';
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
          field: 'IT/리뷰',
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
      ],
      header_margin_top: 0,
      header_phrase_opacity: 1
    }

    this.whoCardOn = this.whoCardOn.bind(this);
    this.whoCardOff = this.whoCardOff.bind(this);
    this.headerCoverUp = this.headerCoverUp.bind(this);
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

  componentDidMount() {
    window.addEventListener('scroll', this.headerCoverUp);
  }

  headerCoverUp() {
    this.setState({
      header_margin_top: window.scrollY / 4,
      header_phrase_opacity: 1 - window.scrollY / 250
    });
  }

  render() {
    return (
      <div>
        <header id="main_header" style={{ marginTop: `-${this.state.header_margin_top}px` }}>
          {NavigationBar(this.userInfo(this.state.isSignIn))}
          <article>
            {Banner(
              new Intl.NumberFormat().format(2051152), 
              this.state.who_card_display, 
              this.whoCardOn,
              this.whoCardOff,
              this.state.header_phrase_opacity)}
          </article>
        </header>
        <section id="main_section">
          <article className="container">
            {IntroduceSummary()}
            <div id="editor" className="list_title">영상 편집자</div>
            <div className="info_card_list">
              {this.state.editors.map((editor, index) => {
                return EditorInfoCard(
                  editor.profileImg, 
                  editor.name,
                  editor.year,
                  editor.tool,
                  {key: index})
                })
              }
            </div>
            <div id="creator" className="list_title">크리에이터</div>
            <div className="info_card_list">
              {this.state.creators.map((creator, index) => {
                return CreatorInfoCard(
                  creator.profileImg, 
                  creator.name,
                  creator.field,
                  creator.subscriber_number,
                  creator.year,
                  {key: index})
              })}
            </div>
            <div id="weekly" className="list_title">금주의 영상</div>
            <div id="weekly_wrapper">
              <div id="weekly_youtube">
                <iframe frameBorder="0" src="https://www.youtube.com/embed/-ASahQw6cWc"></iframe>
              </div>
              <div id="weekly_youtube_member">
                <div id="weekly_creator">
                  <div className="profile">
                    <div className="profile_image">
                      <img src={creatorImg2} />
                    </div>
                    <div className="info">
                      <div className="channel_name">ITSub잇섭</div>
                      <div className="info_content">분야: IT/리뷰</div>
                    </div>
                  </div>
                  <div className="weekly_why">
                    <div>Why?</div>
                    <div className="line"></div>
                    <div>누군가는 가성비가 좋다고 추천할 수 있는 것을 솔직한 자신의 생각을 표현함으로써 진실성이 보였습니다.</div>
                  </div>
                </div>
                <div id="weekly_editor">
                  <div className="profile">
                    <div className="profile_image">
                      <img src={editorImg1} />
                    </div>
                    <div className="info">
                      <div className="channel_name">geni429</div>
                      <div className="info_content">경력: 1년</div>
                    </div>
                  </div>
                  <div className="weekly_why">
                    <div>Why?</div>
                    <div className="line"></div>
                    <div>적절한 시점에 등장하는 자막, 크리에이터가 전달하고자하는 내용을 편집으로서 잘 담았습니다.</div>
                  </div>
                </div>
              </div>
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