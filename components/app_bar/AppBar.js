import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import style from './style';

const AppBar = (props) => {
  const className = ClassNames(style.root, {
    [style.fixed]: props.fixed,
    [style.flat]: props.flat
  }, props.className);

  return (
    <header className={className} data-react-toolbox='app-bar'>
      {props.children}
    </header>
  );
};

AppBar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  fixed: PropTypes.bool,
  flat: PropTypes.bool
};

AppBar.defaultProps = {
  className: '',
  fixed: false,
  flat: false
};

export default AppBar;
