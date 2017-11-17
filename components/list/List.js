import PropTypes from 'prop-types';
import React from 'react';
import ListItem from './ListItem';
import style from './style';

class List extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    ripple: PropTypes.bool,
    selectable: PropTypes.bool
  };

  static defaultProps = {
    className: '',
    ripple: false,
    selectable: false
  };

  renderItems () {
    return React.Children.map(this.props.children, (item) => {
      if (item.type === ListItem) {
        return React.cloneElement(item, {
          ripple: this.props.ripple,
          selectable: this.props.selectable
        });
      } else {
        return React.cloneElement(item);
      }
    });
  }

  render () {
    let className = style.list;
    if (this.props.className) className += ` ${this.props.className}`;
    return (
      <ul data-react-toolbox='list' className={className}>
        {this.renderItems()}
      </ul>
    );
  }
}

export default List;
