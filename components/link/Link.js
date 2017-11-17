import PropTypes from 'prop-types';
import React from 'react';
import ClassNames from 'classnames';
import style from './style';
import FontIcon from '../font_icon';

const Link = ({children, ...props}) => {
  const className = ClassNames(style.root, {
    [style.active]: props.active
  }, props.className);

  return (
    <a {...props} data-react-toolbox='link'className={className}>
      {props.icon ? <FontIcon className={style.icon} value={props.icon} /> : null}
      {props.label ? <abbr>{props.label}</abbr> : null}
      {props.count && parseInt(props.count) !== 0 ? <small>{props.count}</small> : null}
      {children ? children : null}
    </a>
  );
};

Link.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  count: PropTypes.number,
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  label: PropTypes.string
};

Link.defaultProps = {
  active: false,
  className: ''
};

export default Link;
