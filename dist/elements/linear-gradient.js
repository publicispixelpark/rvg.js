'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var LinearGradient = function (_React$Component) {
  _inherits(LinearGradient, _React$Component);

  function LinearGradient() {
    _classCallCheck(this, LinearGradient);

    return _possibleConstructorReturn(this, (LinearGradient.__proto__ || Object.getPrototypeOf(LinearGradient)).apply(this, arguments));
  }

  _createClass(LinearGradient, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          name = _props.name,
          x1 = _props.x1,
          x2 = _props.x2,
          y1 = _props.y1,
          y2 = _props.y2,
          stops = _props.stops;


      return React.createElement(
        'linearGradient',
        { id: name, x1: x1, x2: x2, y1: y1, y2: y2 },
        stops.map(function (stop, index) {
          return React.createElement('stop', { key: index,
            offset: stop.offset,
            stopColor: stop.color,
            stopOpacity: stop.opacity });
        })
      );
    }
  }]);

  return LinearGradient;
}(React.Component);

// Prop types


LinearGradient.propTypes = {};

LinearGradient.defaultProps = {};

module.exports = LinearGradient;