'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var Image = function (_React$Component) {
  _inherits(Image, _React$Component);

  function Image(props) {
    _classCallCheck(this, Image);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Image).call(this, props));

    _this.lastTransformation = {
      x: 0,
      y: 0
    };
    _this.isDragging = false;

    _this.state = {
      transform: 'matrix(1 0 0 1 0 0)'
    };

    _this.handleMouseDown = _this.handleMouseDown.bind(_this);
    _this.handleMouseMove = _this.handleMouseMove.bind(_this);
    _this.handleMouseUp = _this.handleMouseUp.bind(_this);
    return _this;
  }

  _createClass(Image, [{
    key: 'handleMouseDown',
    value: function handleMouseDown(e) {
      this.isDragging = true;
      this.clickPosition = {
        x: e.pageX,
        y: e.pageY
      };
    }
  }, {
    key: 'handleMouseMove',
    value: function handleMouseMove(e) {
      if (false !== this.isDragging) {
        var xDiff = e.pageX - this.clickPosition.x + this.lastTransformation.x;
        var yDiff = e.pageY - this.clickPosition.y + this.lastTransformation.y;

        this.setState({
          transform: 'matrix(1 0 0 1 ' + xDiff + ' ' + yDiff + ')'
        });
      }
    }
  }, {
    key: 'handleMouseUp',
    value: function handleMouseUp(e) {
      this.isDragging = false;
      var transform = this.state.transform.match(/matrix\(1 0 0 1 (.*?)\)/)[1].split(' ');

      this.lastTransformation = {
        x: parseInt(transform[0]),
        y: parseInt(transform[1])
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var x = _props.x;
      var y = _props.y;
      var height = _props.height;
      var width = _props.width;
      var href = _props.href;
      var draggable = _props.draggable;


      var handleMouseDown = null;
      var handleMouseMove = null;
      var handleMouseUp = null;
      var style = null;
      if (draggable) {
        handleMouseDown = this.handleMouseDown;
        handleMouseMove = this.handleMouseMove;
        handleMouseUp = this.handleMouseUp;
        style = {
          cursor: 'move'
        };
      }

      var transform = this.state.transform;


      return React.createElement('image', { xlinkHref: href,
        x: x,
        y: y,
        height: height,
        width: width,
        preserveAspectRatio: 'xMinYMin meet',
        onMouseDown: handleMouseDown,
        onMouseMove: handleMouseMove,
        onMouseUp: handleMouseUp,
        style: style,
        transform: transform });
    }
  }]);

  return Image;
}(React.Component);

// Prop types


Image.propTypes = {
  x: React.PropTypes.number.isRequired,
  y: React.PropTypes.number.isRequired,
  href: React.PropTypes.string.isRequired,
  ratio: React.PropTypes.string.isRequired
};

Image.defaultProps = {
  x: 0,
  y: 0,
  ratio: "auto"
};

module.exports = Image;
//# sourceMappingURL=image.js.map