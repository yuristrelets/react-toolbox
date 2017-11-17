import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import style from './style';

const NavDrawer = (props) => {
  const rootClasses = classnames([style.navDrawer], {
    [style['permanent-' + props.permanentAt]]: props.permanentAt,
    [style.wide]: (props.width === 'wide'),
    [style.active]: props.active,
    [style.pinned]: props.pinned
  }, props.className);

  const drawerClasses = classnames(style.drawerContent, {
      [style.scrollY]: props.scrollY
  });

  return (
    <div data-react-toolbox='nav-drawer' className={rootClasses} onClick={props.onOverlayClick}>
      <div data-react-toolbox='nav-drawer-scrim' className={style.scrim}>
        <aside data-react-toolbox='nav-drawer-content' className={drawerClasses}>
          {props.children}
        </aside>
      </div>
    </div>
  );
};

NavDrawer.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.any,
  className: PropTypes.string,
  onOverlayClick: PropTypes.func,
  permanentAt: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'xxl', 'xxxl']),
  pinned: PropTypes.bool,
  scrollY: PropTypes.bool,
  width: PropTypes.oneOf(['normal', 'wide'])
};

NavDrawer.defaultProps = {
  active: false,
  className: '',
  scrollY: false,
  width: 'normal'
};

export default NavDrawer;
