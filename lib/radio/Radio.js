'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RawRadio = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ripple = require('../ripple');

var _ripple2 = _interopRequireDefault(_ripple);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Radio = function Radio(_ref) {
  var checked = _ref.checked,
      children = _ref.children,
      onMouseDown = _ref.onMouseDown;

  var className = _style2.default[checked ? 'radio-checked' : 'radio'];
  return _react2.default.createElement(
    'div',
    { 'data-react-toolbox': 'radio', onMouseDown: onMouseDown, className: className },
    children
  );
};

Radio.propTypes = {
  checked: _propTypes2.default.bool,
  children: _propTypes2.default.any,
  onMouseDown: _propTypes2.default.func
};

exports.default = (0, _ripple2.default)({
  className: _style2.default.ripple,
  spread: 2.6,
  centered: true
})(Radio);
exports.RawRadio = Radio;