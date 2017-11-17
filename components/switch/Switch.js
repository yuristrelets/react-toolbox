import PropTypes from 'prop-types';
import React from 'react';
import Thumb from './Thumb';
import style from './style';

class Switch extends React.Component {
  static propTypes = {
    checked: PropTypes.bool,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func
  };

  static defaultProps = {
    checked: false,
    className: '',
    disabled: false
  };

  handleToggle = (event) => {
    if (event.pageX !== 0 && event.pageY !== 0) this.blur();
    if (!this.props.disabled && this.props.onChange) {
      this.props.onChange(!this.props.checked, event);
    }
  };

  blur () {
    this.refs.input.blur();
  }

  focus () {
    this.refs.input.focus();
  }

  render () {
    let className = style[this.props.disabled ? 'disabled' : 'field'];
    const switchClassName = style[this.props.checked ? 'on' : 'off'];
    const { onChange, ...others } = this.props; //eslint-disable-line no-unused-vars
    if (this.props.className) className += ` ${this.props.className}`;

    return (
      <label data-react-toolbox='switch' className={className}>
        <input
          {...others}
          checked={this.props.checked}
          className={style.input}
          onClick={this.handleToggle}
          readOnly
          ref='input'
          type='checkbox'
        />
        <span className={switchClassName}>
          <Thumb disabled={this.props.disabled} />
        </span>
        {this.props.label ? <span className={style.text}>{this.props.label}</span> : null}
      </label>
    );
  }
}

export default Switch;
