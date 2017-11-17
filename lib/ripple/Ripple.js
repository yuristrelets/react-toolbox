'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var _prefixer = require('../utils/prefixer');

var _prefixer2 = _interopRequireDefault(_prefixer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaults = {
  centered: false,
  className: '',
  spread: 2
};

var Ripple = function Ripple() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _defaults$options = _extends({}, defaults, options),
      defaultCentered = _defaults$options.centered,
      defaultClassName = _defaults$options.className,
      defaultSpread = _defaults$options.spread,
      props = _objectWithoutProperties(_defaults$options, ['centered', 'className', 'spread']);

  return function (ComposedComponent) {
    var _class, _temp2;

    return _temp2 = _class = function (_React$Component) {
      _inherits(RippledComponent, _React$Component);

      function RippledComponent() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, RippledComponent);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RippledComponent.__proto__ || Object.getPrototypeOf(RippledComponent)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
          active: false,
          left: null,
          restarting: false,
          top: null,
          width: null
        }, _this.handleEnd = function () {
          document.removeEventListener(_this.touch ? 'touchend' : 'mouseup', _this.handleEnd);
          _this.setState({ active: false });
        }, _this.start = function (_ref2) {
          var pageX = _ref2.pageX,
              pageY = _ref2.pageY;
          var touch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

          if (!_this._isTouchRippleReceivingMouseEvent(touch)) {
            _this.touch = touch;
            document.addEventListener(_this.touch ? 'touchend' : 'mouseup', _this.handleEnd);

            var _this$_getDescriptor = _this._getDescriptor(pageX, pageY),
                top = _this$_getDescriptor.top,
                left = _this$_getDescriptor.left,
                width = _this$_getDescriptor.width;

            _this.setState({ active: false, restarting: true, top: top, left: left, width: width }, function () {
              _this.refs.ripple.offsetWidth; //eslint-disable-line no-unused-expressions
              _this.setState({ active: true, restarting: false });
            });
          }
        }, _this.handleMouseDown = function (event) {
          if (!_this.props.disabled) _this.start(event);
          if (_this.props.onMouseDown) _this.props.onMouseDown(event);
        }, _temp), _possibleConstructorReturn(_this, _ret);
      }

      _createClass(RippledComponent, [{
        key: '_isTouchRippleReceivingMouseEvent',
        value: function _isTouchRippleReceivingMouseEvent(touch) {
          return this.touch && !touch;
        }
      }, {
        key: '_getDescriptor',
        value: function _getDescriptor(pageX, pageY) {
          var _ReactDOM$findDOMNode = _reactDom2.default.findDOMNode(this).getBoundingClientRect(),
              left = _ReactDOM$findDOMNode.left,
              top = _ReactDOM$findDOMNode.top,
              height = _ReactDOM$findDOMNode.height,
              width = _ReactDOM$findDOMNode.width;

          var _props = this.props,
              centered = _props.rippleCentered,
              spread = _props.rippleSpread;

          return {
            left: centered ? 0 : pageX - left - width / 2 - window.scrollX,
            top: centered ? 0 : pageY - top - height / 2 - window.scrollY,
            width: width * spread
          };
        }
      }, {
        key: 'render',
        value: function render() {
          if (!this.props.ripple) {
            return _react2.default.createElement(ComposedComponent, this.props);
          } else {
            var _ClassNames;

            var _props2 = this.props,
                children = _props2.children,
                ripple = _props2.ripple,
                className = _props2.rippleClassName,
                centered = _props2.rippleCentered,
                spread = _props2.rippleSpread,
                other = _objectWithoutProperties(_props2, ['children', 'ripple', 'rippleClassName', 'rippleCentered', 'rippleSpread']);

            var rippleClassName = (0, _classnames2.default)(_style2.default.normal, (_ClassNames = {}, _defineProperty(_ClassNames, _style2.default.active, this.state.active), _defineProperty(_ClassNames, _style2.default.restarting, this.state.restarting), _ClassNames), className);

            var _state = this.state,
                left = _state.left,
                top = _state.top,
                width = _state.width;

            var scale = this.state.restarting ? 0 : 1;
            var rippleStyle = (0, _prefixer2.default)({
              transform: 'translate3d(' + (-width / 2 + left) + 'px, ' + (-width / 2 + top) + 'px, 0) scale(' + scale + ')'
            }, { width: width, height: width });

            return _react2.default.createElement(
              ComposedComponent,
              _extends({}, other, { onMouseDown: this.handleMouseDown }),
              children ? children : null,
              _react2.default.createElement(
                'span',
                _extends({ 'data-react-toolbox': 'ripple', className: _style2.default.wrapper }, props),
                _react2.default.createElement('span', { ref: 'ripple', role: 'ripple', className: rippleClassName, style: rippleStyle })
              )
            );
          }
        }
      }]);

      return RippledComponent;
    }(_react2.default.Component), _class.propTypes = {
      children: _propTypes2.default.any,
      disabled: _propTypes2.default.bool,
      ripple: _propTypes2.default.bool,
      rippleCentered: _propTypes2.default.bool,
      rippleClassName: _propTypes2.default.string,
      rippleSpread: _propTypes2.default.number
    }, _class.defaultProps = {
      disabled: false,
      ripple: true,
      rippleCentered: defaultCentered,
      rippleClassName: defaultClassName,
      rippleSpread: defaultSpread
    }, _temp2;
  };
};

exports.default = Ripple;