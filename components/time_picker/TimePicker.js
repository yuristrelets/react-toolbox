import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import events from '../utils/events';
import timeUtil from '../utils/time';
import style from './style';
import Input from '../input';
import TimePickerDialog from './TimePickerDialog';

class TimePicker extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    error: PropTypes.string,
    inputFormat: PropTypes.func,
    format: PropTypes.oneOf(['24hr', 'ampm']),
    inputClassName: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.object
  };

  static defaultProps = {
    className: '',
    format: '24hr'
  };

  state = {
    active: false
  };

  handleDismiss = () => {
    this.setState({active: false});
  };

  handleInputMouseDown = (event) => {
    events.pauseEvent(event);
    this.setState({active: true});
  };

  handleSelect = (value, event) => {
    if (this.props.onChange) this.props.onChange(value, event);
    this.setState({active: false});
  };

  render () {
    const { value, format, inputClassName } = this.props;
    const inputFormat = this.props.inputFormat || timeUtil.formatTime;
    const formattedValue = value ? inputFormat(value, format) : '';

    return (
      <div data-react-toolbox='time-picker'>
        <Input
          className={classnames(style.input, {[inputClassName]: inputClassName })}
          error={this.props.error}
          label={this.props.label}
          onMouseDown={this.handleInputMouseDown}
          readOnly
          type='text'
          value={formattedValue}
        />
        <TimePickerDialog
          active={this.state.active}
          className={this.props.className}
          format={format}
          onDismiss={this.handleDismiss}
          onSelect={this.handleSelect}
          value={this.props.value}
        />
      </div>
    );
  }
}

export default TimePicker;
