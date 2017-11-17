import PropTypes from 'prop-types';
import React from 'react';
import ClassNames from 'classnames';
import FontIcon from '../font_icon';
import Avatar from '../avatar';
import ListItemContent from './ListItemContent';
import ListItemActions from './ListItemActions';
import style from './style';

const ListItemLayout = (props) => {
  const className = ClassNames(style.item, {
    [style.disabled]: props.disabled,
    [style.selectable]: props.selectable
  }, props.className);

  const leftActions = [
    props.leftIcon && <FontIcon value={props.leftIcon} key='leftIcon'/>,
    props.avatar && <Avatar image={props.avatar} key='avatar'/>,
    ...props.leftActions
  ];
  const rightActions = [
    props.rightIcon && <FontIcon value={props.rightIcon} key='rightIcon'/>,
    ...props.rightActions
  ];
  const content = props.itemContent || <ListItemContent caption={props.caption} legend={props.legend} />;
  const emptyActions = (item) => !item[0] && !item[1];

  return (
    <span className={className}>
      {!emptyActions(leftActions) > 0 && <ListItemActions type='left'>{leftActions}</ListItemActions>}
      {content}
      {!emptyActions(leftActions) > 0 && <ListItemActions type='right'>{rightActions}</ListItemActions>}
    </span>
  );
};

ListItemLayout.propTypes = {
  avatar: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  caption: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  itemContent: PropTypes.element,
  leftActions: PropTypes.array,
  leftIcon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  legend: PropTypes.string,
  rightActions: PropTypes.array,
  rightIcon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  selectable: PropTypes.bool,
  to: PropTypes.string
};

ListItemLayout.defaultProps = {
  disabled: false,
  selectable: false
};

export default ListItemLayout;
