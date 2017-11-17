'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var _font_icon = require('../font_icon');

var _font_icon2 = _interopRequireDefault(_font_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Link = function Link(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ['children']);

  var className = (0, _classnames2.default)(_style2.default.root, _defineProperty({}, _style2.default.active, props.active), props.className);

  return _react2.default.createElement(
    'a',
    _extends({}, props, { 'data-react-toolbox': 'link', className: className }),
    props.icon ? _react2.default.createElement(_font_icon2.default, { className: _style2.default.icon, value: props.icon }) : null,
    props.label ? _react2.default.createElement(
      'abbr',
      null,
      props.label
    ) : null,
    props.count && parseInt(props.count) !== 0 ? _react2.default.createElement(
      'small',
      null,
      props.count
    ) : null,
    children ? children : null
  );
};

Link.propTypes = {
  active: _propTypes2.default.bool,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  count: _propTypes2.default.number,
  icon: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  label: _propTypes2.default.string
};

Link.defaultProps = {
  active: false,
  className: ''
};

exports.default = Link;