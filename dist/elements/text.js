'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var util = require('util');
var React = require('react');

var DraggableBase = require('./base/draggable');

String.prototype.addSmartQuotes = function () {
  return this.replace(/(\W|^)"(\S)/g, '$1“$2') // beginning "
  .replace(/(\u201c[^"]*)"([^"]*$|[^\u201c"]*\u201c)/g, '$1”$2') // ending "
  .replace(/([^0-9])"/g, '$1”') // remaining " at end of word
  .replace(/(\W|^)'(\S)/g, '$1‘$2') // beginning '
  .replace(/([a-z])'([a-z])/ig, '$1’$2') // conjunction's possession
  .replace(/((\u2018[^']*)|[a-z])'([^0-9]|$)/ig, '$1’$3') // ending '
  .replace(/(\u2018)([0-9]{2}[^\u2019]*)(\u2018([^0-9]|$)|$|\u2019[a-z])/ig, '’$2$3') // abbrev. years like '93
  .replace(/(\B|^)\u2018(?=([^\u2019]*\u2019\b)*([^\u2019\u2018]*\W[\u2019\u2018]\b|[^\u2019\u2018]*$))/ig, '$1’') // backwards apostrophe
  .replace(/'''/g, '‴') // triple prime
  .replace(/("|'')/g, '″') // double prime
  .replace(/'/g, '′'); // prime
};

var Text = function (_DraggableBase) {
  _inherits(Text, _DraggableBase);

  function Text() {
    _classCallCheck(this, Text);

    return _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).apply(this, arguments));
  }

  _createClass(Text, [{
    key: 'height',
    value: function height() {
      console.log(this);
      return 10;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var x = _props.x;
      var y = _props.y;
      var width = _props.width;
      var wrapping = _props.wrapping;
      var fill = _props.fill;
      var fontSize = _props.fontSize;
      var fontFamily = _props.fontFamily;
      var fontWeight = _props.fontWeight;
      var textAnchor = _props.textAnchor;
      var smartQuotes = _props.smartQuotes;


      var text = this.props.children;

      var lineHeight = this.props.lineHeight || fontSize;

      var svgPropsToStyle = {
        color: fill || null,
        fontSize: fontSize,
        fontFamily: fontFamily,
        fontWeight: fontWeight,
        margin: 0
      };

      if (util.isArray(text)) {
        text = text.map(function (string, index) {
          if (true === smartQuotes) {
            string = string.addSmartQuotes();
          }

          if (wrapping && width) {
            return React.createElement(
              'p',
              { key: index, xmlns: 'http://www.w3.org/1999/xhtml', style: svgPropsToStyle },
              string
            );
          } else {
            return React.createElement(
              'tspan',
              { key: index, x: x, y: lineHeight * index + y, alignmentBaseline: 'before-edge' },
              string
            );
          }
        });
      } else {
        if (true === smartQuotes) {
          text = text.addSmartQuotes();
        }
      }

      if (wrapping && width) {
        return React.createElement(
          'foreignObject',
          _extends({ x: x,
            y: y,
            width: width,
            ref: 'text'
          }, this.draggableProps),
          text
        );
      }

      return React.createElement(
        'text',
        _extends({ x: x,
          y: y,
          fill: fill,
          textAnchor: textAnchor,
          fontSize: fontSize,
          fontFamily: fontFamily,
          fontWeight: fontWeight
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