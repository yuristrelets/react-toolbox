import PropTypes from 'prop-types';
import React from 'react';
import ClassNames from 'classnames';
import Radio from './Radio';
import style from './style';

class RadioButton extends React.Component {
  static propTypes = {
    checked: PropTypes.bool,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    value: PropTypes.any
  };

  static defaultProps = {
    checked: false,
    className: '',
    disabled: false
  };

  handleClick = (event) => {
    const {checked, disabled, onChange} = this.props;
    if (event.pageX !== 0 && event.pageY !== 0) this.blur();
    if (!disabled && !checked && onChange) onChange(event, this);
  };

  blur () {
    this.refs.input.blur();
  }

  focus () {
    this.refs.input.focus();
  }

  render () {
    const className = ClassNames(style[this.props.disabled ? 'disabled' : 'field'], this.props.className);
    const { onChange, ...others } = this.props; //eslint-disable-line no-unused-vars

    return (
      <label data-react-toolbox='radio-button' className={className}>
        <input
          {...others}
          className={style.input}
          onClick={this.handleClick}
          readOnly
          ref='input'
          type='radio'
        />
        <Radio checked={this.props.checked} disabled={this.props.disabled}/>
        {this.props.label ? <span className={style.text}>{this.props.label}</span> : null}
      </label>
    );
  }
}

export default RadioButton;
