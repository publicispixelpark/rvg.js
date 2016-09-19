'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var Ellipse = function (_React$Component) {
  _inherits(Ellipse, _React$Component);

  function Ellipse() {
    _classCallCheck(this, Ellipse);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Ellipse).apply(this, arguments));
  }

  _createClass(Ellipse, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var x = _props.x;
      var y = _props.y;
      var fill = _props.fill;
      var radiusX = _props.radiusX;
      var radiusY = _props.radiusY;


      return React.createElement('ellipse', { cx: x, cy: y, fill: fill, rx: radiusX, ry: radiusY });
    }
  }]);

  return Ellipse;
}(React.Component);

// Prop types


Ellipse.propTypes = {
  x: React.PropTypes.any.isRequired,
  y: React.PropTypes.any.isRequired,
  fill: React.PropTypes.string.isRequired,
  radiusX: React.PropTypes.any.isRequired,
  radiusY: React.PropTypes.any.isRequired
};

Ellipse.defaultProps = {
  x: 100,
  y: 50,
  fill: '#000',
  radiusX: 100,
  radiusY: 50
};

module.exports = Ellipse;
//# sourceMappingURL=ellipse.js.map