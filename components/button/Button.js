import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import FontIcon from '../font_icon';
import Ripple from '../ripple';
import style from './style';

class Button extends React.Component {
  static propTypes = {
    accent: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    flat: PropTypes.bool,
    floating: PropTypes.bool,
    href: PropTypes.string,
    icon: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element
    ]),
    inverse: PropTypes.bool,
    label: PropTypes.string,
    mini: PropTypes.bool,
    neutral: PropTypes.bool,
    onMouseLeave: PropTypes.func,
    onMouseUp: PropTypes.func,
    primary: PropTypes.bool,
    raised: PropTypes.bool,
    type: PropTypes.string
  };

  static defaultProps = {
    accent: false,
    className: '',
    flat: false,
    floating: false,
    mini: false,
    neutral: true,
    primary: false,
    raised: false
  };

  handleMouseUp = (event) => {
    this.refs.button.blur();
    if (this.props.onMouseUp) this.props.onMouseUp(event);
  };

  handleMouseLeave = (event) => {
    this.refs.button.blur();
    if (this.props.onMouseLeave) this.props.onMouseLeave(event);
  };

  render () {
    const { accent, children, className, flat, floating, href, icon,
            inverse, label, mini, neutral, primary, raised, ...others} = this.props;
    const element = href ? 'a' : 'button';
    const level = primary ? 'primary' : accent ? 'accent' : 'neutral';
    const shape = flat ? 'flat' : raised ? 'raised' : floating ? 'floating' : 'flat';

    const classes = ClassNames([style[shape]], {
      [style[level]]: neutral,
      [style.mini]: mini,
      [style.inverse]: inverse
    }, className);

    const props = {
      ...others,
      href,
      ref: 'button',
      className: classes,
      disabled: this.props.disabled,
      onMouseUp: this.handleMouseUp,
      onMouseLeave: this.handleMouseLeave,
      'data-react-toolbox': 'button'
    };

    return React.createElement(element, props,
      icon ? <FontIcon className={style.icon} value={icon}/> : null,
      label,
      children
    );
  }
}

export default Ripple({centered: false})(Button);
export { Button as RawButton };
