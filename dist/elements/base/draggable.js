'use strict';

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

    _this.draggableProps = {};
    if (_this.props.draggable) {
      _this.draggableProps = {
        'data-draggable': true,
        style: {
          cursor: 'move'
        }
      };
    } else {
      _this.draggableProps = {
        style: {
          'pointerEvents': 'none'
        }
      };
    }
    return _this;
  }

  return DraggableBase;
}(React.Component);

module.exports = DraggableBase;