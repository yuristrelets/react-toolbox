'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListSubHeader = function ListSubHeader(props) {
  var className = _style2.default.subheader;
  if (props.className) className += ' ' + props.className;
  return _react2.default.createElement(
    'h5',
    { className: className },
    props.caption
  );
};

ListSubHeader.propTypes = {
  caption: _propTypes2.default.string,
  className: _propTypes2.default.string
};

exports.default = ListSubHeader;