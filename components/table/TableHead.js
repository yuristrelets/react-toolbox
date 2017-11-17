import PropTypes from 'prop-types';
import React from 'react';
import Checkbox from '../checkbox';
import style from './style';

const TableHead = ({model, onSelect, selectable, selected}) => {
  let selectCell;
  const contentCells = Object.keys(model).map((key) => {
    const name = model[key].title || key;
    return <th key={key}>{name}</th>;
  });

  if (selectable) {
    selectCell = (
      <th key='select' className={style.selectable}>
        <Checkbox onChange={onSelect} checked={selected} />
      </th>
    );
  }

  return (
    <thead>
      <tr>{[selectCell, ...contentCells]}</tr>
    </thead>
  );
};

TableHead.propTypes = {
  className: PropTypes.string,
  model: PropTypes.object,
  onSelect: PropTypes.func,
  selectable: PropTypes.bool,
  selected: PropTypes.bool
};

TableHead.defaultProps = {
  className: '',
  model: {},
  selected: false
};

export default TableHead;
