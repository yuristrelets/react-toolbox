'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames3 = require('classnames');

var _classnames4 = _interopRequireDefault(_classnames3);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Sidebar = function Sidebar(props) {
  var wrapperClasses = (0, _classnames4.default)(_style2.default.sidebar, _style2.default['width-' + props.width], _defineProperty({}, _style2.default.pinned, props.pinned), props.className);

  var innerClasses = (0, _classnames4.default)(_style2.default.sidebarContent, _defineProperty({}, _style2.default.scrollY, props.scrollY));

  return _react2.default.createElement(
    'div',
    { 'data-react-toolbox': 'sidebar', className: wrapperClasses },
    _react2.default.createElement(
      'aside',
      { 'data-react-toolbox': 'sidebar-content', className: innerClasses },
      props.children
    )
  );
};

Sidebar.propTypes = {
  children: _propTypes2.default.any,
  className: _propTypes2.default.string,
  pinned: _propTypes2.default.bool,
  scrollY: _propTypes2.default.bool,
  width: _propTypes2.default.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 25, 33, 50, 66, 75, 100])
};

Sidebar.defaultProps = {
  className: '',
  pinned: false,
  scrollY: false,
  width: 5
};

exports.default = Sidebar;