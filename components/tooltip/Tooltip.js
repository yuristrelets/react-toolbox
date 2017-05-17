import React from 'react';
import ClassNames from 'classnames';
import style from './style';

const Tooltip = (ComposedComponent) => class extends React.Component {
  static propTypes = {
    children: React.PropTypes.any,
    className: React.PropTypes.string,
    onClick: React.PropTypes.func,
    onMouseEnter: React.PropTypes.func,
    onMouseLeave: React.PropTypes.func,
    tooltip: React.PropTypes.node,
    tooltipDelay: React.PropTypes.number,
    tooltipHideOnClick: React.PropTypes.bool
  };

  static defaultProps = {
    className: '',
    tooltipDelay: 0,
    tooltipHideOnClick: true
  };

  state = {
    active: false,
    top: 0,
    left: 0,
  };

  timeout = null;

  componentWillUnmount() {
    this.clearTimeout();
  }

  clearTimeout() {
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }
  }

  calculatePosition(element) {
    const { top, left, height, width } = element.getBoundingClientRect();
    const xOffset = window.scrollX || window.pageXOffset;
    const yOffset = window.scrollY || window.pageYOffset;

    return {
      top: top + height + yOffset,
      left: left + (width / 2) + xOffset,
    };
  }

  handleMouseEnter = (event) => {
    const { top, left } = this.calculatePosition(event.currentTarget);

    this.clearTimeout();

    this.timeout = setTimeout(() => {
      this.setState({ active: true, top, left });
    }, this.props.tooltipDelay);

    if (this.props.onMouseEnter) this.props.onMouseEnter(event);
  };

  handleMouseLeave = (event) => {
    this.clearTimeout();
    if (this.state.active) this.setState({active: false});
    if (this.props.onMouseLeave) this.props.onMouseLeave(event);
  };

  handleClick = (event) => {
    this.clearTimeout();
    if (this.props.tooltipHideOnClick) this.setState({active: false});
    if (this.props.onClick) this.props.onClick(event);
  };

  render () {
    const {
      children,
      className,
      tooltip,
      tooltipDelay,  //eslint-disable-line no-unused-vars
      tooltipHideOnClick, //eslint-disable-line no-unused-vars
      ...other,
    } = this.props;
    const {
      top,
      left,
      active,
    } = this.state;

    const composedClassName = ClassNames(style.root, className);
    const tooltipClassName = ClassNames(style.tooltip, {
      [style.active]: active,
    });

    return (
      <ComposedComponent
        {...other}
        className={composedClassName}
        onClick={this.handleClick}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {children ? children : null}

        <span data-react-toolbox="tooltip" className={tooltipClassName} style={{ top, left }}>
          {tooltip}
        </span>
      </ComposedComponent>
    );
  }
};

export default Tooltip;
