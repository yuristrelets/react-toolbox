import PropTypes from 'prop-types';
import React from 'react';
import ClassNames from 'classnames';
import ActivableRenderer from '../hoc/ActivableRenderer';
import Button from '../button';
import FontIcon from '../font_icon';
import Overlay from '../overlay';
import style from './style';

class Snackbar extends React.Component {
  static propTypes = {
    action: PropTypes.string,
    active: PropTypes.bool,
    className: PropTypes.string,
    icon: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element
    ]),
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    onTimeout: PropTypes.func,
    timeout: PropTypes.number,
    type: PropTypes.string
  };

  componentWillReceiveProps (nextProps) {
    if (nextProps.active && nextProps.timeout) {
      if (this.curTimeout) clearTimeout(this.curTimeout);
      this.curTimeout = setTimeout(() => {
        nextProps.onTimeout();
        this.curTimeout = null;
      }, nextProps.timeout);
    }
  }

  render () {
    const {action, active, icon, label, onClick, type } = this.props;
    const className = ClassNames([style.root, style[type]], {
      [style.active]: active
    }, this.props.className);

    return (
      <Overlay invisible>
        <div data-react-toolbox='snackbar' className={className}>
          {icon ? <FontIcon value={icon} className={style.icon} /> : null}
          <span className={style.label}>{label}</span>
          {action ? <Button className={style.button} label={action} onClick={onClick}/> : null}
        </div>
      </Overlay>
    );
  }
}

export default ActivableRenderer()(Snackbar);
