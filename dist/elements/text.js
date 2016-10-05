'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var util = require('util');
var React = require('react');

var DraggableBase = require('./base/draggable');

var Text = function (_DraggableBase) {
  _inherits(Text, _DraggableBase);

  function Text() {
    _classCallCheck(this, Text);

    return _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).apply(this, arguments));
  }

  _createClass(Text, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var x = _props.x;
      var y = _props.y;
      var fill = _props.fill;
      var fontSize = _props.fontSize;
      var fontFamily = _props.fontFamily;
      var textAnchor = _props.textAnchor;


      var text = this.props.children;

      var lineHeight = this.props.lineHeight || fontSize;

      if (util.isArray(text)) {
        text = text.map(function (string, index) {
          return React.createElement(
            'tspan',
            { key: index, x: x, y: lineHeight * index + y, alignmentBaseline: 'before-edge' },
            string
          );
        });
      }

      return React.createElement(
        'text',
        _extends({ x: x,
          y: y,
          fill: fill,
          textAnchor: textAnchor,
          fontSize: fontSize,
          fontFamily: fontFamily
        }, this.draggableProps),
        text
      );
    }
  }]);

  return Text;
}(DraggableBase);

// Prop types


Text.propTypes = {
  x: React.PropTypes.any.isRequired,
  y: React.PropTypes.any.isRequired,
  fill: React.PropTypes.string.isRequired,
  fontSize: React.PropTypes.number,
  fontFamily: React.PropTypes.string,
  textAnchor: React.PropTypes.string
};

Text.defaultProps = {
  x: 0,
  y: 0,
  fill: '#000',
  fontSize: 20,
  fontFamily: 'serif',
  textAnchor: 'start'
};

module.exports = Text;
//# sourceMappingURL=text.js.map