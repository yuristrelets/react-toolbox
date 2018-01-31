import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import DatePickerDialog from './DatePickerDialog';
import events from '../utils/events';
import Input from '../input';
import style from './style';
import time from '../utils/time';

class DatePicker extends React.Component {
  static propTypes = {
    autoOk: PropTypes.bool,
    className: PropTypes.string,
    error: PropTypes.string,
    inputClassName: PropTypes.string,
    inputFormat: PropTypes.func,
    label: PropTypes.string,
    maxDate: PropTypes.object,
    minDate: PropTypes.object,
    onChange: PropTypes.func,
    value: PropTypes.object
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
    const { inputClassName, value } = this.props;
    const inputFormat = this.props.inputFormat || time.formatDate;
    const formattedValue = value ? inputFormat(value) : '';

    return (
      <div data-react-toolbox='date-picker'>
        <Input
          className={classnames(style.input, {[inputClassName]: inputClassName })}
          error={this.props.error}
          onMouseDown={this.handleInputMouseDown}
          label={this.props.label}
          readOnly
          type='text'
          value={formattedValue}
        />
        <DatePickerDialog
          autoOk={this.props.autoOk}
          active={this.state.active}
          className={this.props.className}
          maxDate={this.props.maxDate}
          minDate={this.props.minDate}
          onDismiss={this.handleDismiss}
          onSelect={this.handleSelect}
          value={this.props.value}
        />
      </div>
    );
  }
}

export default DatePicker;
