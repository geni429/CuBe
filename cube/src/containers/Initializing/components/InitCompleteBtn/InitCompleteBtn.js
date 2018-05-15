import React from 'react';
import classNames from 'classnames';
import './InitCompleteBtn.css';

const InitCompleteBtn = ({btnContent, disable, onClickEvent}) => {
  return (
    <div className={classNames("init_task_complete_btn", disable)} onClick={onClickEvent}>
      <span className="center_in_parent">{btnContent}</span>
    </div>
  );
}

export default InitCompleteBtn;