import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import style from './style';

const Sidebar = (props) => {
  const wrapperClasses = classnames(style.sidebar, style[`width-${props.width}`], {
    [style.pinned]: props.pinned
  }, props.className);

  const innerClasses = classnames(style.sidebarContent, {
    [style.scrollY]: props.scrollY
  });

  return (
    <div data-react-toolbox='sidebar' className={wrapperClasses}>
      <aside data-react-toolbox='sidebar-content' className={innerClasses}>
        {props.children}
      </aside>
    </div>
  );
};

Sidebar.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  pinned: PropTypes.bool,
  scrollY: PropTypes.bool,
  width: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 25, 33, 50, 66, 75, 100])
};

Sidebar.defaultProps = {
  className: '',
  pinned: false,
  scrollY: false,
  width: 5
};

export default Sidebar;
