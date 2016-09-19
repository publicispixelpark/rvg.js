"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG(props) {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(SVG).call(this, props));
  }

  _createClass(SVG, [{
    key: "render",
    value: function render() {
      var _props = this.props;
      var height = _props.height;
      var width = _props.width;
      var fill = _props.fill;
      var children = _props.children;


      return React.createElement(
        "svg",
        { height: "100%",
          width: "100%",
          viewBox: '0 0 ' + width + ' ' + height },
        React.createElement("rect", { x: "0", y: "0", width: width, height: height, fill: fill }),
        children
      );
    }
  }]);

  return SVG;
}(React.Component);

// Prop types


SVG.propTypes = {
  height: React.PropTypes.number.isRequired,
  width: React.PropTypes.number.isRequired,
  fill: React.PropTypes.string.isRequired
};

SVG.defaultProps = {
  height: 400,
  width: 600,
  fill: 'transparent'
};

module.exports = SVG;
//# sourceMappingURL=svg.js.map