'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG(props) {
    _classCallCheck(this, SVG);

    var _this = _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).call(this, props));

    _this.lastTransformation = {
      x: 0,
      y: 0
    };

    _this.isDragging = false;

    _this.handleMouseDown = _this.handleMouseDown.bind(_this);
    _this.handleMouseMove = _this.handleMouseMove.bind(_this);
    _this.handleMouseUp = _this.handleMouseUp.bind(_this);
    return _this;
  }

  _createClass(SVG, [{
    key: 'handleMouseDown',
    value: function handleMouseDown(e) {
      if (e.target.nodeName === 'tspan') {
        e.target = e.target.parentNode;
      }

      if (e.target.getAttribute('data-draggable')) {
        this.isDragging = e.target;

        this.clickPosition = {
          x: e.pageX,
          y: e.pageY
        };

        var transform = this.isDragging.transform;

        var x = transform.animVal[0].matrix.e;
        var y = transform.animVal[0].matrix.f;

        this.lastTransformation = {
          x: x,
          y: y
        };
      } else {
        this.isDragging = false;
      }
    }
  }, {
    key: 'handleMouseMove',
    value: function handleMouseMove(e) {
      if (this.isDragging) {
        var targetBaseWidth = void 0,
            targetRealWidth = void 0;

        try {
          targetBaseWidth = this.isDragging.width.baseVal.value;
          targetRealWidth = this.isDragging.getBoundingClientRect().width;
        } catch (e) {
          targetBaseWidth = 1;
          targetRealWidth = 1;
        }

        var multiplier = parseFloat((targetBaseWidth / targetRealWidth).toFixed(2));
        var xDiff = (e.pageX - this.clickPosition.x) * multiplier + this.lastTransformation.x;
        var yDiff = (e.pageY - this.clickPosition.y) * multiplier + this.lastTransformation.y;
        var matrix = 'matrix(1 0 0 1 ' + xDiff + ' ' + yDiff + ')';

        this.isDragging.setAttribute('transform', matrix);
      }
    }
  }, {
    key: 'handleMouseUp',
    value: function handleMouseUp(e) {
      if (this.isDragging) {
        var transform = this.isDragging.transform;

        var x = transform.animVal[0].matrix.e;
        var y = transform.animVal[0].matrix.f;

        this.isDragging = false;

        this.lastTransformation = {
          x: 0,
          y: 0
        };
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var height = _props.height;
      var width = _props.width;
      var fill = _props.fill;
      var children = _props.children;


      return React.createElement(
        'svg',
        { height: '100%',
          width: '100%',
          onMouseDown: this.handleMouseDown,
          onMouseMove: this.handleMouseMove,
          onMouseUp: this.handleMouseUp,
          viewBox: '0 0 ' + width + ' ' + height },
        React.createElement('rect', { x: '0', y: '0', width: width, height: height, fill: fill }),
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