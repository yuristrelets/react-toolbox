import PropTypes from 'prop-types';
import React from 'react';
import ClassNames from 'classnames';
import Checkbox from '../checkbox';
import ListItemContent from './ListItemContent';
import style from './style';

const ListCheckbox = (props) => {
  const className = ClassNames([style.item, style.checkboxItem], {
    [style.withLegend]: props.legend,
    [style.disabled]: props.disabled
  }, props.className);

  return (
    <li className={className}>
      <Checkbox
        checked={props.checked}
        className={style.checkbox}
        disabled={props.disabled}
        label={<ListItemContent caption={props.caption} legend={props.legend} />}
        name={props.name}
        onBlur={props.onBlur}
        onChange={props.onChange}
        onFocus={props.onFocus}
      />
    </li>
  );
};

ListCheckbox.propTypes = {
  caption: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  legend: PropTypes.string,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func
};

ListCheckbox.defaultProps = {
  checked: false,
  disabled: false
};

export default ListCheckbox;
