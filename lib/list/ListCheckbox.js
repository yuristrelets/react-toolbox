'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _checkbox = require('../checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _ListItemContent = require('./ListItemContent');

var _ListItemContent2 = _interopRequireDefault(_ListItemContent);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ListCheckbox = function ListCheckbox(props) {
  var _ClassNames;

  var className = (0, _classnames2.default)([_style2.default.item, _style2.default.checkboxItem], (_ClassNames = {}, _defineProperty(_ClassNames, _style2.default.withLegend, props.legend), _defineProperty(_ClassNames, _style2.default.disabled, props.disabled), _ClassNames), props.className);

  return _react2.default.createElement(
    'li',
    { className: className },
    _react2.default.createElement(_checkbox2.default, {
      checked: props.checked,
      className: _style2.default.checkbox,
      disabled: props.disabled,
      label: _react2.default.createElement(_ListItemContent2.default, { caption: props.caption, legend: props.legend }),
      name: props.name,
      onBlur: props.onBlur,
      onChange: props.onChange,
      onFocus: props.onFocus
    })
  );
};

ListCheckbox.propTypes = {
  caption: _propTypes2.default.string.isRequired,
  checked: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  legend: _propTypes2.default.string,
  name: _propTypes2.default.string,
  onBlur: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onFocus: _propTypes2.default.func
};

ListCheckbox.defaultProps = {
  checked: false,
  disabled: false
};

exports.default = ListCheckbox;