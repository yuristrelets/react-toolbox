import PropTypes from 'prop-types';
import React from 'react';
import ClassNames from 'classnames';
import ActivableRenderer from '../hoc/ActivableRenderer';
import Button from '../button';
import Overlay from '../overlay';
import style from './style';

const Dialog = (props) => {
  const actions = props.actions.map((action, idx) => {
    const className = ClassNames(style.button, {[action.className]: action.className});
    return <Button key={idx} {...action} className={className} />;
  });

  const className = ClassNames([ style.root, style[props.type] ], {
    [style.active]: props.active
  }, props.className);

  return (
    <Overlay
      active={props.active}
      onClick={props.onOverlayClick}
      onMouseDown={props.onOverlayMouseDown}
      onMouseUp={props.onOverlayMouseUp}
      onMouseMove={props.onOverlayMouseMove}
      onEscKeyDown={props.onEscKeyDown}
    >
      <div data-react-toolbox='dialog' className={className}>
        <section role='body' className={style.body}>
          {props.title ? <h6 className={style.title}>{props.title}</h6> : null}
          {props.children}
        </section>
        {actions
          ? <nav role='navigation' className={style.navigation}>
              {actions}
            </nav>
          : null
        }
      </div>
    </Overlay>
  );
};

Dialog.propTypes = {
  actions: PropTypes.array,
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  onEscKeyDown: PropTypes.func,
  onOverlayClick: PropTypes.func,
  onOverlayMouseDown: PropTypes.func,
  onOverlayMouseMove: PropTypes.func,
  onOverlayMouseUp: PropTypes.func,
  title: PropTypes.string,
  type: PropTypes.string
};

Dialog.defaultProps = {
  actions: [],
  active: false,
  type: 'normal'
};

export default ActivableRenderer()(Dialog);
