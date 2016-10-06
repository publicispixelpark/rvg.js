'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var shallowCompare = require('react-addons-shallow-compare');

var DraggableBase = function (_React$Component) {
  _inherits(DraggableBase, _React$Component);

  function DraggableBase(props) {
    _classCallCheck(this, DraggableBase);

    var _this = _possibleConstructorReturn(this, (DraggableBase.__proto__ || Object.getPrototypeOf(DraggableBase)).call(this, props));

    _this.lastTransformation = {
      x: 0,
      y: 0
    };
    _this.isDragging = false;

    _this.state = {
      transform: _this.props.transform || 'matrix(1 0 0 1 0 0)'
    };

    _this.handleMouseDown = _this.handleMouseDown.bind(_this);
    _this.handleMouseMove = _this.handleMouseMove.bind(_this);
    _this.handleMouseUp = _this.handleMouseUp.bind(_this);

    _this.draggableProps = {};
    if (_this.props.draggable) {
      _this.draggableProps = {
        onMouseDown: _this.handleMouseDown,
        onMouseMove: _this.handleMouseMove,
        onMouseUp: _this.handleMouseUp,
        style: {
          cursor: 'move'
        },
        transform: _this.state.transform
      };
    }
    return _this;
  }

  _createClass(DraggableBase, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return shallowCompare(this, nextProps, nextState);
    }
  }, {
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
        var targetBaseWidth = void 0,
            targetRealWidth = void 0;

        try {
          targetBaseWidth = e.target.width.baseVal.value;
          targetRealWidth = e.target.getBoundingClientRect().width;
        } catch (e) {
          targetBaseWidth = 1;
          targetRealWidth = 1;
        }

        var multiplier = parseFloat((targetBaseWidth / targetRealWidth).toFixed(2));
        var xDiff = (e.pageX - this.clickPosition.x) * multiplier + this.lastTransformation.x;
        var yDiff = (e.pageY - this.clickPosition.y) * multiplier + this.lastTransformation.y;

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
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.props.draggable) {
        this.draggableProps.transform = this.state.transform;
      }
    }
  }]);

  return DraggableBase;
}(React.Component);

module.exports = DraggableBase;
//# sourceMappingURL=draggable.js.map