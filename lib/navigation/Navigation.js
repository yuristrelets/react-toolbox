'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _link = require('../link');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Navigation = function Navigation(props) {
  var className = '' + _style2.default[props.type];
  if (props.className) className += ' ' + props.className;

  var buttons = props.actions.map(function (action, index) {
    return _react2.default.createElement(_button2.default, _extends({ className: _style2.default.button, key: index }, action));
  });

  var links = props.routes.map(function (route, index) {
    return _react2.default.createElement(_link2.default, _extends({ className: _style2.default.link, key: index }, route));
  });

  return _react2.default.createElement(
    'nav',
    { 'data-react-toolbox': 'navigation', className: className },
    links,
    buttons,
    props.children
  );
};

Navigation.propTypes = {
  actions: _propTypes2.default.array,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  routes: _propTypes2.default.array,
  type: _propTypes2.default.oneOf(['vertical', 'horizontal'])
};

Navigation.defaultProps = {
  actions: [],
  className: '',
  type: 'horizontal',
  routes: []
};

exports.default = Navigation;