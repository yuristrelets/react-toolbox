import PropTypes from 'prop-types';
import React from 'react';
import Portal from '../hoc/Portal';
import ClassNames from 'classnames';
import style from './style';

class Overlay extends React.Component {
  static propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    invisible: PropTypes.bool,
    onClick: PropTypes.func,
    onEscKeyDown: PropTypes.func
  };

  static defaultProps = {
    invisible: false
  };

  componentDidMount () {
    if (this.props.active) {
      this.escKeyListener = document.body.addEventListener('keydown', this.handleEscKey.bind(this));
    }
  }

  componentDidUpdate () {
    if (this.props.active && !this.escKeyListener) {
      this.escKeyListener = document.body.addEventListener('keydown', this.handleEscKey.bind(this));
    }
  }

  componentWillUnmount () {
    if (this.escKeyListener) {
      document.body.removeEventListener('keydown', this.handleEscKey);
      this.escKeyListener = null;
    }
  }

  handleEscKey (e) {
    if (this.props.active && this.props.onEscKeyDown && e.which === 27) {
      this.props.onEscKeyDown(e);
    }
  }

  render () {
    const className = ClassNames(style.root, {
      [style.active]: this.props.active,
      [style.invisible]: this.props.invisible
    }, this.props.className);

    return (
      <Portal lockBody={!this.props.invisible}>
        <div className={className}>
          <div className={style.overlay} onClick={this.props.onClick} />
          {this.props.children}
        </div>
      </Portal>
    );
  }
}

export default Overlay;
