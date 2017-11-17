'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _checkbox = require('../checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var TableHead = function TableHead(_ref) {
  var model = _ref.model,
      onSelect = _ref.onSelect,
      selectable = _ref.selectable,
      selected = _ref.selected;

  var selectCell = void 0;
  var contentCells = Object.keys(model).map(function (key) {
    var name = model[key].title || key;
    return _react2.default.createElement(
      'th',
      { key: key },
      name
    );
  });

  if (selectable) {
    selectCell = _react2.default.createElement(
      'th',
      { key: 'select', className: _style2.default.selectable },
      _react2.default.createElement(_checkbox2.default, { onChange: onSelect, checked: selected })
    );
  }

  return _react2.default.createElement(
    'thead',
    null,
    _react2.default.createElement(
      'tr',
      null,
      [selectCell].concat(_toConsumableArray(contentCells))
    )
  );
};

TableHead.propTypes = {
  className: _propTypes2.default.string,
  model: _propTypes2.default.object,
  onSelect: _propTypes2.default.func,
  selectable: _propTypes2.default.bool,
  selected: _propTypes2.default.bool
};

TableHead.defaultProps = {
  className: '',
  model: {},
  selected: false
};

exports.default = TableHead;