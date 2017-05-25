'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Tab = require('./Tab');

var _Tab2 = _interopRequireDefault(_Tab);

var _TabContent = require('./TabContent');

var _TabContent2 = _interopRequireDefault(_TabContent);

var _IconButton = require('../button/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _font_icon = require('../font_icon');

var _font_icon2 = _interopRequireDefault(_font_icon);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tabs = function (_React$Component) {
  _inherits(Tabs, _React$Component);

  function Tabs() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Tabs);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      pointer: {},
      arrows: {
        left: false,
        right: false,
        height: 0
      }
    }, _this.handleHeaderClick = function (idx) {
      if (_this.props.onChange) _this.props.onChange(idx);
    }, _this.handleHeaderRemove = function (idx) {
      if (_this.props.onRemoveTab) _this.props.onRemoveTab(idx);
    }, _this.handleResize = function () {
      if (_this.resizeTimeout) clearTimeout(_this.resizeTimeout);

      _this.resizeTimeout = setTimeout(function () {
        _this.updatePointer(_this.props.index);
        _this.scrollNavigation(_this.props.index);
      }, 100);
    }, _this.scrollRight = function () {
      _this.refs.navigation.scrollLeft += _this.refs.navigation.clientWidth;
      _this.updateArrows();
      _this.updatePointer(_this.props.index);
    }, _this.scrollLeft = function () {
      _this.refs.navigation.scrollLeft -= _this.refs.navigation.clientWidth;
      _this.updateArrows();
      _this.updatePointer(_this.props.index);
    }, _this.scrollNavigation = function (idx) {
      var child = _this.refs.navigation.children[idx];

      if (!child) {
        _this.refs.navigation.scrollLeft = 0;
        _this.updateArrows();
        return false;
      }

      var rect = child.getBoundingClientRect();
      var navRect = _this.refs.navigation.getBoundingClientRect();
      var navScrollPosition = _this.refs.navigation.scrollLeft;

      if (navRect.right < rect.right) {
        _this.refs.navigation.scrollLeft = Math.ceil(rect.right - navRect.right + navScrollPosition);
      }

      if (rect.left - navRect.left < 0) {
        _this.refs.navigation.scrollLeft = Math.round(rect.left - navRect.left + navScrollPosition);
      }

      _this.updateArrows();
    }, _this.updateArrows = function () {
      var idx = _this.refs.navigation.children.length - 2;
      var navRect = _this.refs.navigation.getBoundingClientRect();
      var lastChildRect = _this.refs.navigation.children[idx].getBoundingClientRect();

      _this.setState({
        arrows: {
          left: _this.refs.navigation.scrollLeft,
          right: navRect.right < lastChildRect.right,
          height: navRect.height + 'px'
        }
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Tabs, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('resize', this.handleResize);
      this.handleResize();

      if (!this.props.disableAnimatedBottomBorder) {
        this.updatePointer(this.props.index);
        this.scrollNavigation(this.props.index);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!this.props.disableAnimatedBottomBorder) {
        this.updatePointer(nextProps.index);
        this.scrollNavigation(nextProps.index);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize);

      clearTimeout(this.pointerTimeout);
      clearTimeout(this.resizeTimeout);
    }
  }, {
    key: 'parseChildren',
    value: function parseChildren() {
      var headers = [];
      var contents = [];

      _react2.default.Children.forEach(this.props.children, function (item) {
        if (item.type === _Tab2.default) {
          headers.push(item);
          if (item.props.children) {
            contents.push(_react2.default.createElement(_TabContent2.default, { children: item.props.children }));
          }
        } else if (item.type === _TabContent2.default) {
          contents.push(item);
        }
      });

      return { headers: headers, contents: contents };
    }
  }, {
    key: 'updatePointer',
    value: function updatePointer(idx) {
      var _this2 = this;

      clearTimeout(this.pointerTimeout);
      this.pointerTimeout = setTimeout(function () {
        var child = _this2.refs.navigation.children[idx];
        var rect = child ? child.getBoundingClientRect() : null;
        var navRect = _this2.refs.navigation.getBoundingClientRect();

        var width = rect ? rect.width : 0;
        var left = rect ? rect.left - navRect.left + _this2.refs.navigation.scrollLeft : 0;

        _this2.setState({
          pointer: {
            top: _this2.refs.navigation.getBoundingClientRect().height + 'px',
            left: left + 'px',
            width: width + 'px'
          }
        });
      }, 20);
    }
  }, {
    key: 'renderHeaders',
    value: function renderHeaders(headers) {
      var _this3 = this;

      return headers.map(function (item, idx) {
        return _react2.default.cloneElement(item, {
          key: idx,
          active: _this3.props.index === idx,
          onClick: _this3.handleHeaderClick.bind(_this3, idx, item),
          onRemove: _this3.handleHeaderRemove.bind(_this3, idx)
        });
      });
    }
  }, {
    key: 'renderContents',
    value: function renderContents(contents) {
      var _this4 = this;

      var activeIdx = contents.findIndex(function (item, idx) {
        return _this4.props.index === idx;
      });

      if (contents && contents[activeIdx]) {
        return _react2.default.cloneElement(contents[activeIdx], {
          key: activeIdx,
          active: true,
          tabIndex: activeIdx
        });
      }
    }
  }, {
    key: 'renderArrows',
    value: function renderArrows() {
      if (!this.state.arrows.left && !this.state.arrows.right) {
        return null;
      }

      var styles = {
        height: this.state.arrows.height
      };

      return _react2.default.createElement(
        'div',
        {
          className: _style2.default.arrowsContainer + ' ' + this.props.arrowsClassName,
          style: styles,
          ref: 'arrows'
        },
        _react2.default.createElement(_font_icon2.default, {
          value: 'keyboard_arrow_left',
          className: _style2.default.arrowButton,
          onClick: this.scrollLeft,
          disabled: !this.state.arrows.left
        }),
        _react2.default.createElement(_font_icon2.default, {
          value: 'keyboard_arrow_right',
          className: _style2.default.arrowButton,
          onClick: this.scrollRight,
          disabled: !this.state.arrows.right
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var className = _style2.default.root;

      var _parseChildren = this.parseChildren(),
          headers = _parseChildren.headers,
          contents = _parseChildren.contents;

      if (this.props.className) className += ' ' + this.props.className;
      if (this.state.arrows.left || this.state.arrows.right) className += ' ' + _style2.default.withArrows;

      return _react2.default.createElement(
        'div',
        { ref: 'tabs', 'data-react-toolbox': 'tabs', className: className },
        _react2.default.createElement(
          'nav',
          { className: _style2.default.navigation, ref: 'navigation' },
          this.renderHeaders(headers),
          this.props.onAddTab ? _react2.default.createElement(_IconButton2.default, {
            icon: 'add',
            className: _style2.default.add,
            onClick: this.props.onAddTab,
            title: this.props.addTabButtonTitle,
            disabled: this.props.addTabButtonDisabled
          }) : null,
          _react2.default.createElement('span', { className: _style2.default.pointer, style: this.state.pointer })
        ),
        this.renderArrows(),
        this.renderContents(contents)
      );
    }
  }]);

  return Tabs;
}(_react2.default.Component);

Tabs.propTypes = {
  children: _react2.default.PropTypes.node,
  className: _react2.default.PropTypes.string,
  arrowsClassName: _react2.default.PropTypes.string,
  disableAnimatedBottomBorder: _react2.default.PropTypes.bool,
  addTabButtonTitle: _react2.default.PropTypes.string,
  addTabButtonDisabled: _react2.default.PropTypes.bool,
  index: _react2.default.PropTypes.number,
  onChange: _react2.default.PropTypes.func,
  onAddTab: _react2.default.PropTypes.func,
  onRemoveTab: _react2.default.PropTypes.func
};
Tabs.defaultProps = {
  index: 0,
  addTabButtonDisabled: false
};
exports.default = Tabs;