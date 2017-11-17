import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import style from './style';

const Panel = ({ children, className, scrollY }) => {
  const _className = classnames(style.panel, {
    [style.scrollY]: scrollY
  }, className);

  return (
    <div data-react-toolbox='panel' className={_className}>
      {children}
    </div>
  );
};

Panel.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  scrollY: PropTypes.bool
};

Panel.defaultProps = {
  className: '',
  scrollY: false
};

export default Panel;
