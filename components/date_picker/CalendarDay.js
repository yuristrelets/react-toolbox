import PropTypes from 'prop-types';
import React from 'react';
import ClassNames from 'classnames';
import time from '../utils/time';
import style from './style.calendar';

class Day extends React.Component {
  static propTypes = {
    day: PropTypes.number,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    selectedDate: PropTypes.object,
    viewDate: PropTypes.object
  };

  dayStyle () {
    if (this.props.day === 1) {
      return {
        marginLeft: `${time.getFirstWeekDay(this.props.viewDate) * 100 / 7}%`
      };
    }
  }

  isSelected () {
    const sameYear = this.props.viewDate.getFullYear() === this.props.selectedDate.getFullYear();
    const sameMonth = this.props.viewDate.getMonth() === this.props.selectedDate.getMonth();
    const sameDay = this.props.day === this.props.selectedDate.getDate();
    return sameYear && sameMonth && sameDay;
  }

  render () {
    const className = ClassNames(style.day, {
      [style.active]: this.isSelected(),
      [style.disabled]: this.props.disabled
    });

    return (
      <div data-react-toolbox='day' className={className} style={this.dayStyle()}>
        <span onClick={this.props.onClick}>
          {this.props.day}
        </span>
      </div>
    );
  }
}

export default Day;
