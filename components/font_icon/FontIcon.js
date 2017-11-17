import PropTypes from 'prop-types';
import React from 'react';
import ClassNames from 'classnames';

const FontIcon = ({ children, className, value, ...other}) => {
  const classes = ClassNames(
    {'material-icons': typeof value === 'string'},
    className
  );
  return (
    <span className={classes} {...other} data-react-toolbox='font-icon'>
      {value}
      {children}
    </span>
  );
};

FontIcon.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ])
};

FontIcon.defaultProps = {
  className: ''
};

export default FontIcon;
