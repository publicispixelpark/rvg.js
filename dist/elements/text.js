'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var util = require('util');
var React = require('react');
var TextUtils = require('../utils/textUtils');

var DraggableBase = require('./base/draggable');

String.prototype.addSmartQuotes = function () {
    return this.replace(/(\W|^)"(\S)/g, '$1\u201C$2') // beginning "
    .replace(/(\u201c[^"]*)"([^"]*$|[^\u201c"]*\u201c)/g, '$1\u201D$2') // ending "
    .replace(/([^0-9])"/g, '$1\u201D') // remaining " at end of word
    .replace(/(\W|^)'(\S)/g, '$1\u2018$2') // beginning '
    .replace(/([a-z])'([a-z])/ig, '$1\u2019$2') // conjunction's possession
    .replace(/((\u2018[^']*)|[a-z])'([^0-9]|$)/ig, '$1\u2019$3') // ending '
    .replace(/(\u2018)([0-9]{2}[^\u2019]*)(\u2018([^0-9]|$)|$|\u2019[a-z])/ig, '\u2019$2$3') // abbrev. years like '93
    .replace(/(\B|^)\u2018(?=([^\u2019]*\u2019\b)*([^\u2019\u2018]*\W[\u2019\u2018]\b|[^\u2019\u2018]*$))/ig, '$1\u2019') // backwards apostrophe
    .replace(/'''/g, '\u2034') // triple prime
    .replace(/("|'')/g, '\u2033') // double prime
    .replace(/'/g, '\u2032'); // prime
};

var Text = function (_DraggableBase) {
    _inherits(Text, _DraggableBase);

    function Text() {
        _classCallCheck(this, Text);

        return _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).apply(this, arguments));
    }

    _createClass(Text, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                x = _props.x,
                y = _props.y,
                fill = _props.fill,
                fontSize = _props.fontSize,
                fontFamily = _props.fontFamily,
                fontWeight = _props.fontWeight,
                fontStyle = _props.fontStyle,
                textAnchor = _props.textAnchor,
                smartQuotes = _props.smartQuotes,
                backgroundColor = _props.backgroundColor,
                padding = _props.padding;


            var text = this.props.children;

            var lineHeight = this.props.lineHeight || fontSize;

            if (util.isArray(text)) {
                text = text.map(function (line, index) {
                    if (true === smartQuotes) {
                        line = line.addSmartQuotes();
                    }

                    return React.createElement(
                        'tspan',
                        { x: x,
                            y: lineHeight * index + y,
                            alignmentBaseline: 'middle',
                            key: index },
                        line
                    );
                });
            } else {
                if (true === smartQuotes) {
                    text = text.addSmartQuotes();
                }
            }

            return React.createElement(
                'text',
                _extends({ x: x,
                    y: y,
                    fill: fill,
                    textAnchor: textAnchor,
                    fontSize: fontSize,
                    fontFamily: fontFamily,
                    fontWeight: fontWeight,
                    fontStyle: fontStyle
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
    fontStyle: React.PropTypes.string,
    textAnchor: React.PropTypes.string,
    backgroundColor: React.PropTypes.string,
    padding: React.PropTypes.string
};

Text.defaultProps = {
    x: 0,
    y: 0,
    fill: '#000',
    fontSize: 20,
    fontFamily: 'serif',
    fontWeight: 'normal',
    fontStyle: 'normal',
    textAnchor: 'start'
};

module.exports = Text;