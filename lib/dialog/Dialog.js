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

var _ActivableRenderer = require('../hoc/ActivableRenderer');

var _ActivableRenderer2 = _interopRequireDefault(_ActivableRenderer);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _overlay = require('../overlay');

var _overlay2 = _interopRequireDefault(_overlay);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Dialog = function Dialog(props) {
  var actions = props.actions.map(function (action, idx) {
    var className = (0, _classnames2.default)(_style2.default.button, _defineProperty({}, action.className, action.className));
    return _react2.default.createElement(_button2.default, _extends({ key: idx }, action, { className: className }));
  });

  var className = (0, _classnames2.default)([_style2.default.root, _style2.default[props.type]], _defineProperty({}, _style2.default.active, props.active), props.className);

  return _react2.default.createElement(
    _overlay2.default,
    {
      active: props.active,
      onClick: props.onOverlayClick,
      onMouseDown: props.onOverlayMouseDown,
      onMouseUp: props.onOverlayMouseUp,
      onMouseMove: props.onOverlayMouseMove,
      onEscKeyDown: props.onEscKeyDown
    },
    _react2.default.createElement(
      'div',
      { 'data-react-toolbox': 'dialog', className: className },
      _react2.default.createElement(
        'section',
        { role: 'body', className: _style2.default.body },
        props.title ? _react2.default.createElement(
          'h6',
          { className: _style2.default.title },
          props.title
        ) : null,
        props.children
      ),
      actions ? _react2.default.createElement(
        'nav',
        { role: 'navigation', className: _style2.default.navigation },
        actions
      ) : null
    )
  );
};

Dialog.propTypes = {
  actions: _propTypes2.default.array,
  active: _propTypes2.default.bool,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  onEscKeyDown: _propTypes2.default.func,
  onOverlayClick: _propTypes2.default.func,
  onOverlayMouseDown: _propTypes2.default.func,
  onOverlayMouseMove: _propTypes2.default.func,
  onOverlayMouseUp: _propTypes2.default.func,
  title: _propTypes2.default.string,
  type: _propTypes2.default.string
};

Dialog.defaultProps = {
  actions: [],
  active: false,
  type: 'normal'
};

exports.default = (0, _ActivableRenderer2.default)()(Dialog);