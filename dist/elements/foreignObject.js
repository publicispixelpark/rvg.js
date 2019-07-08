'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var DraggableBase = require('./base/draggable');

var TextUtils = require('../utils/textUtils');

var ForeignObjects = function (_DraggableBase) {
    _inherits(ForeignObjects, _DraggableBase);

    function ForeignObjects() {
        _classCallCheck(this, ForeignObjects);

        return _possibleConstructorReturn(this, (ForeignObjects.__proto__ || Object.getPrototypeOf(ForeignObjects)).apply(this, arguments));
    }

    _createClass(ForeignObjects, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                x = _props.x,
                y = _props.y,
                fontFamily = _props.fontFamily,
                fontSize = _props.fontSize,
                backgroundColor = _props.backgroundColor,
                color = _props.color,
                padding = _props.padding;


            var text = this.props.children;

            var dimension = TextUtils.calculateHeightWidth(text, fontFamily, fontSize, padding);
            var height = dimension[0];
            var width = dimension[1];

            var styles = '\n            color: ' + color + '; \n            background-color: ' + backgroundColor + '; \n            padding: ' + padding + '; \n            font-family:' + fontFamily + ';\n            font-size:' + fontSize + ';\n        ';
            return React.createElement(
                'foreignObject',
                _extends({ x: x,
                    y: y,
                    height: height,
                    width: width
                }, this.draggableProps),
                React.createElement(
                    'div',
                    { xmlns: 'http://www.w3.org/1999/xhtml', style: styles },
                    text
                )
            );
        }
    }]);

    return ForeignObjects;
}(DraggableBase);

// Prop types


ForeignObjects.propTypes = {
    x: React.PropTypes.any.isRequired,
    y: React.PropTypes.any.isRequired,
    fontSize: React.PropTypes.number,
    fontFamily: React.PropTypes.string,
    backgroundColor: React.PropTypes.string,
    color: React.PropTypes.string,
    padding: React.PropTypes.string
};

ForeignObjects.defaultProps = {
    x: 0,
    y: 0,
    fontSize: 14,
    fontFamily: 'serif',
    backgroundColor: 'none',
    color: '#000',
    padding: '0'
};

module.exports = ForeignObjects;