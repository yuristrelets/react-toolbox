import PropTypes from 'prop-types';
import React from 'react';
import { IconButton } from '../button';
import Menu from './Menu';
import style from './style.icon_menu';

class IconMenu extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    icon: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element
    ]),
    iconRipple: PropTypes.bool,
    menuRipple: PropTypes.bool,
    onClick: PropTypes.func,
    onHide: PropTypes.func,
    onSelect: PropTypes.func,
    onShow: PropTypes.func,
    position: PropTypes.string,
    selectable: PropTypes.bool,
    selected: PropTypes.any
  };

  static defaultProps = {
    className: '',
    icon: 'more_vert',
    iconRipple: true,
    menuRipple: true,
    position: 'auto',
    selectable: false
  };

  handleButtonClick = (event) => {
    this.refs.menu.show();
    if (this.props.onClick) this.props.onClick(event);
  };

  render () {
    let className = style.root;
    if (this.props.className) className += ` ${this.props.className}`;

    return (
      <div className={className}>
        <IconButton
          className={style.icon}
          icon={this.props.icon}
          onClick={this.handleButtonClick}
          ripple={this.props.iconRipple}
        />
        <Menu
          ref='menu'
          onHide={this.props.onHide}
          onSelect={this.props.onSelect}
          onShow={this.props.onShow}
          position={this.props.position}
          ripple={this.props.menuRipple}
          selectable={this.props.selectable}
          selected={this.props.selected}
        >
          {this.props.children}
        </Menu>
      </div>
    );
  }
}

export default IconMenu;
