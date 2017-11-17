import PropTypes from 'prop-types';
import React from 'react';
import ClassNames from 'classnames';
import ActivableRenderer from '../hoc/ActivableRenderer';
import Overlay from '../overlay';
import style from './style';

const Drawer = (props) => {
  const className = ClassNames([style.root, style[props.type]], {
    [style.active]: props.active
  }, props.className);

  return (
    <Overlay active={props.active} onClick={props.onOverlayClick}>
      <div data-react-toolbox='drawer' className={className}>
        <aside className={style.content}>
          {props.children}
        </aside>
      </div>
    </Overlay>
  );
};

Drawer.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  onOverlayClick: PropTypes.func,
  type: PropTypes.oneOf(['left', 'right'])
};

Drawer.defaultProps = {
  active: false,
  className: '',
  type: 'left'
};

export default ActivableRenderer()(Drawer);
