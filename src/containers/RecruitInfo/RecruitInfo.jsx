import React, { Component } from 'react';
import likeImg from '../../res/like.png';
import dislikeImg from '../../res/dislike.png';
import './RecruitInfo.css';

class RecruitInfo extends Component {
  state = {
    info: {
      movieUrl: 'https://www.youtube.com/embed/-ASahQw6cWc',
      phone: '01028962001',
      email: 'geni429@gmail.com'
    },
    isLike: false
  }

  onLikeClick = () => {
    this.setState(prevState => ({
      isLike: !prevState.isLike
    }));
  }

  onContactClick = () => {
    this.setState(prevState => ({
      isContact: !prevState.isContact
    }))
  }

  render() {
    return (
      <div id="recruit-info" className="container">
        <div id="director-portfolio">
          <div id="portfolio-movie">
            <iframe frameBorder="0" src={this.state.info.movieUrl}></iframe>
          </div>
          <div id="director-info">
            <header>
              <div id="director-profile-img"></div>
              <div id="director-profile">
                <p id="director-profile-name">geni429</p>
                <p id="director-career">
                  <span>1년</span> ∙ <span>Photoshop, After Effect</span>
                </p>
              </div>
            </header>
            <section>
              <article id="director-introduce">
                Fusce id eros sed neque vehicula sagittis. Aliquam finibus posuere dolor, id condimentum sem condimentum in. Sed tellus arcu, placerat sit amet erat in, dignissim porttitor tortor. Sed in arcu in leo facilisis ullamcorper. Fusce laoreet nec sapien eu pulvinar. Suspendisse ullamcorper, felis eget tempor egestas, sapien arcu euismod nisl, nec semper justo risus at lacus. Nunc tempus nisi dolor, a pretium neque hendrerit vel. Aenean dignissim mollis eros non porta. Maecenas pellentesque ut leo non gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                <br /><br />
                Aliquam ante erat, elementum at nulla nec, tristique iaculis sapien. Praesent imperdiet est non lacus porttitor tincidunt. Aliquam in metus imperdiet, efficitur purus nec, mattis eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in lorem malesuada, lacinia mauris vel, consectetur lectus. Nam semper suscipit nulla id consequat. Fusce viverra rhoncus mi ultricies lacinia. Quisque at commodo diam. Sed vel ultricies ligula, non consectetur est. Quisque metus erat, elementum vel lobortis quis, faucibus vel nisi. In id interdum turpis. Aenean at posuere magna. Cras sit amet ex at dui accumsan bibendum.
              </article>
            </section>
          </div>
        </div>
        <aside id="recruit-helper">
          <button id="recruit-like-btn" onClick={this.onLikeClick}>
            <img src={this.state.isLike ? likeImg : dislikeImg} className="center-in-parent" />
          </button>
          <div id="helper-act-btns">
            <button>공유하기</button>
            <button onClick={this.onContactClick}>연락하기</button>
          </div>
        </aside>
      </div>
    );
  }
}

export default RecruitInfo;