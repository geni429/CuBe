import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { StyleInput } from '../../components';
import './Recruit.css';

class Recruit extends Component {
  state = {
    recruitCardList: [
      { id: 'geni429', name: 'Sample', career: '1년', tools: ['Photoshop', 'Affter Effect'] },
      { id: 'geni429', name: 'Sample', career: '1년', tools: ['Photoshop', 'Affter Effect'] },
      { id: 'geni429', name: 'Sample', career: '1년', tools: ['Photoshop', 'Affter Effect'] },
      { id: 'geni429', name: 'Sample', career: '1년', tools: ['Photoshop', 'Affter Effect'] },
      { id: 'geni429', name: 'Sample', career: '1년', tools: ['Photoshop', 'Affter Effect'] },
      { id: 'geni429', name: 'Sample', career: '1년', tools: ['Photoshop', 'Affter Effect'] },
      { id: 'geni429', name: 'Sample', career: '1년', tools: ['Photoshop', 'Affter Effect'] },
      { id: 'geni429', name: 'Sample', career: '1년', tools: ['Photoshop', 'Affter Effect'] },
      { id: 'geni429', name: 'Sample', career: '1년', tools: ['Photoshop', 'Affter Effect'] },
      { id: 'geni429', name: 'Sample', career: '1년', tools: ['Photoshop', 'Affter Effect'] },
      { id: 'geni429', name: 'Sample', career: '1년', tools: ['Photoshop', 'Affter Effect'] },
      { id: 'geni429', name: 'Sample', career: '1년', tools: ['Photoshop', 'Affter Effect'] }
    ]
  }

  render() {
    const careers = ['설정안함', '6개월 이하', '1년', '2년', '3년'];
    const tools = ['설정안함', 'Photoshop', 'After Effect', 'Windows movie maker', 'iMovie'];

    return (
      <div id="recruit" className="container">
        <header>
          <div>
            <span className="header-title-1">창작물 제작을 함께할 편집자를 구하세요!</span>
          </div>
          <div id="recruit-condition-bar">
            <SetConditionBox 
              condition="경력"
              options={
                careers.map((ele, index) => 
                  <option value={ele} key={index}>{ele}</option>)
              }
            />
            <SetConditionBox 
              condition="사용 툴"
              options={
                tools.map((ele, index) => 
                  <option value={ele} key={index}>{ele}</option>)
              }
            />
            <StyleInput type="text" width="200px" />
            <button className="director-search-btn">검색</button>
          </div>
        </header>
        <section id="recruit-card-list">
          {
            this.state.recruitCardList.map((recruitCard, index) => 
              <RecruitCard
                name={recruitCard.name}
                career={recruitCard.career}
                tools={recruitCard.tools}
                event={() => {this.props.history.push(`/recruit/info/${recruitCard.id}`)}}
                key={index} />)
          }
        </section>
      </div>
    );
  }
}

const RecruitCard = ({ name, career, tools, event }) =>
  <article className="recruit-card" onClick={event}>
    <div className="recruit-card-body">
      <div className="align-parent-right">{name}</div>
    </div>
    <div className="recruit-card-footer">
      <div className="center-vertical">
        <p>경력: {career}</p>
        <p>사용 툴: {tools[0]}</p>
      </div>
    </div>
  </article>

const SetConditionBox = ({ condition, options }) =>
  <Fragment>
    <span>{`${condition}: `}</span>
    <select>
      {options}
    </select>
  </Fragment>

export default withRouter(Recruit);