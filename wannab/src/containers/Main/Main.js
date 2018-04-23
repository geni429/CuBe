import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { NavigationBar, Banner, IntroduceSummary, Brand, Footer, Weekly, InfoCardList } from '../../components';
import creatorImg1 from '../../res/ex_who.jpg';
import creatorImg2 from '../../res/ex_creator_1.jpg';
import creatorImg3 from '../../res/ex_creator_2.jpg';
import creatorImg4 from '../../res/ex_creator_3.jpg';
import creatorImg5 from '../../res/ex_creator_4.jpg';
import creatorImg6 from '../../res/ex_creator_5.jpg';
import editorImg1 from '../../res/ex_editor_1.png';
import editorImg2 from '../../res/ex_editor_2.png';
import editorImg3 from '../../res/ex_editor_3.jpeg';
import editorImg4 from '../../res/ex_editor_4.jpeg';
import editorImg5 from '../../res/ex_editor_5.jpeg';
import editorImg6 from '../../res/ex_editor_6.png';
import bannerImg from '../../res/ex_banner_img_1.jpg'
import './Main.css';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSignIn: false,
      whoCardDisplay: 'none',
      editors: [
        { 
          name: 'geni429',
          profileImg: editorImg1,
          yearInCareer: '1년',
          useTool: 'XD'
        },
        { 
          name: 'planB',
          profileImg: editorImg2,
          yearInCareer: '2년',
          useTool: 'PS'
        },
        { 
          name: 'W-Vertex',
          profileImg: editorImg3,
          yearInCareer: '3년',
          useTool: 'Sketch'
        },
        { 
          name: 'jieun',
          profileImg: editorImg4,
          yearInCareer: '1개월',
          useTool: 'Oven'
        },
        { 
          name: 'Nooheat',
          profileImg: editorImg5,
          yearInCareer: '5년',
          useTool: 'AI'
        },
        { 
          name: 'yeon',
          profileImg: editorImg6,
          yearInCareer: '10년',
          useTool: 'C4D'
        },
      ],
      creators: [
        { 
          name: '보겸',
          profileImg: creatorImg1,
          channelName: '보겸 TV',
          field: '게임/토크',
          subscriberCount: new Intl.NumberFormat().format(2051152),
          yearInCareer: '4년'
        },
        { 
          name: '잇섭', 
          profileImg: creatorImg2,
          channelName: 'ITSub잇섭',
          field: 'IT/리뷰',
          subscriberCount: new Intl.NumberFormat().format(192611),
          yearInCareer: '2년'
        },
        { 
          name: '대도서관', 
          profileImg: creatorImg3,
          channelName: '대도서관TV',
          field: '게임/토크',
          subscriberCount: new Intl.NumberFormat().format(1707421),
          yearInCareer: '4년'
        },
        { 
          name: '이사배', 
          profileImg: creatorImg4,
          channelName: 'RISABE',
          field: '뷰티',
          subscriberCount: new Intl.NumberFormat().format(1571972),
          yearInCareer: '4년'
        },
        { 
          name: '윽박', 
          profileImg: creatorImg5,
          channelName: '최고다윽박',
          field: '야생/다큐',
          subscriberCount: new Intl.NumberFormat().format(961784),
          yearInCareer: '1년'
        },
        { 
          name: '공대생네 가족', 
          profileImg: creatorImg6,
          channelName: '/공대생네 가족',
          field: '실험',
          subscriberCount: new Intl.NumberFormat().format(553861),
          yearInCareer: '1년'
        },
      ],
      headerMarginTop: 0,
      headerPhraseOpacity: 1,
      weeklyYoutubeLink: 'https://www.youtube.com/embed/-ASahQw6cWc',
      bannerContent: {
        profileImg: creatorImg1,
        channelName: '보겸 TV',
        subscriberCount: new Intl.NumberFormat().format(2051152),
        bannerPhrase: '시청자들과 소통하는 Creator',
        bannerImg: bannerImg
      }
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
      whoCardDisplay: 'block'
    });
  }

  whoCardOff() {
    this.setState({
      whoCardDisplay: 'none'
    });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.headerCoverUp);
  }

  headerCoverUp() {
    this.setState({
      headerMarginTop: window.scrollY / 4,
      headerPhraseOpacity: 1 - window.scrollY / 250
    });
  }

  render() {
    return (
      <div>
        <header id="main_header" style={{ marginTop: `-${this.state.headerMarginTop}px` }}>
          {NavigationBar(this.userInfo(this.state.isSignIn))}
          <article>
            {Banner(
              this.state.bannerContent,
              this.state.whoCardDisplay, 
              this.whoCardOn,
              this.whoCardOff,
              this.state.headerPhraseOpacity)}
          </article>
        </header>
        <section id="main_section">
          <article className="container">
            {IntroduceSummary()}
            {InfoCardList('editor', this.state.editors)}
            {InfoCardList('creator', this.state.creators)}
            {Weekly(this.state.weeklyYoutubeLink, creatorImg2, editorImg1)}
          </article>
        </section>
        {Footer()}
      </div>
    );
  }
}

const SignIn = () => {
  return <div id="sign_in_btn" className="center_vertical">로그인</div>;
}

const UserInfo = () => {
  return <div>UserInfo</div>;
}

export default Main;