import React, { Component } from 'react';
import classNames from 'classnames';
import './StyleInput.css';

class StyleInput extends Component {
  state = {
    isFocus: '',
    isBlur: '',
    isError: ''
  }

  inputFocusStyle = (e) => {
    if (e.target.value.length > 0) {
      this.setState({
        isFocus: 'input_focus_event_c'
      });
    } else {
      this.setState({
        isFocus: 'input_focus_event_nc'
      });
    }
  }

  inputBlurStyle = (e) => {
    if (e.target.value.length > 0) {
      this.setState({
        isFocus: '',
        isBlur: 'input_blur_event'
      });
    } else {
      this.setState({
        isFocus: '',
        isBlur: ''
      });
    }
  }

  render() {
    return (
      <div className="style_input">
        <input
          type={this.props.type}
          disabled={this.props.disable ? 'disabled' : ''}
          style={{width: this.props.width}}
          onFocus={(e) => {
            this.inputFocusStyle(e);
            if (this.props.inputFocusEvent) this.props.inputFocusEvent(e);
          }}
          onBlur={this.inputBlurStyle} 
          onChange={this.props.inputEvent} />
        <div className={classNames("input_header", this.state.isFocus, this.state.isBlur, this.props.isError ? 'input_err_header' : '')}>
          {this.props.placeholder}
        </div>
        <span className={classNames("input_line", this.props.isError ? 'input_err_line' : '')}></span>
      </div>
    );
  }
}

export default StyleInput;