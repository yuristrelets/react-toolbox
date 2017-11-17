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

var NavDrawer = function NavDrawer(props) {
  var _classnames;

  var rootClasses = (0, _classnames4.default)([_style2.default.navDrawer], (_classnames = {}, _defineProperty(_classnames, _style2.default['permanent-' + props.permanentAt], props.permanentAt), _defineProperty(_classnames, _style2.default.wide, props.width === 'wide'), _defineProperty(_classnames, _style2.default.active, props.active), _defineProperty(_classnames, _style2.default.pinned, props.pinned), _classnames), props.className);

  var drawerClasses = (0, _classnames4.default)(_style2.default.drawerContent, _defineProperty({}, _style2.default.scrollY, props.scrollY));

  return _react2.default.createElement(
    'div',
    { 'data-react-toolbox': 'nav-drawer', className: rootClasses, onClick: props.onOverlayClick },
    _react2.default.createElement(
      'div',
      { 'data-react-toolbox': 'nav-drawer-scrim', className: _style2.default.scrim },
      _react2.default.createElement(
        'aside',
        { 'data-react-toolbox': 'nav-drawer-content', className: drawerClasses },
        props.children
      )
    )
  );
};

NavDrawer.propTypes = {
  active: _propTypes2.default.bool,
  children: _propTypes2.default.any,
  className: _propTypes2.default.string,
  onOverlayClick: _propTypes2.default.func,
  permanentAt: _propTypes2.default.oneOf(['sm', 'md', 'lg', 'xl', 'xxl', 'xxxl']),
  pinned: _propTypes2.default.bool,
  scrollY: _propTypes2.default.bool,
  width: _propTypes2.default.oneOf(['normal', 'wide'])
};

NavDrawer.defaultProps = {
  active: false,
  className: '',
  scrollY: false,
  width: 'normal'
};

exports.default = NavDrawer;