const React = require('react');
const shallowCompare = require('react-addons-shallow-compare');

class DraggableBase extends React.Component {

  constructor(props) {
    super(props);

    this.lastTransformation = {
      x: 0,
      y: 0
    };
    this.isDragging = false;

    this.state = {
      transform: 'matrix(1 0 0 1 0 0)'
    };

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);

    this.draggableProps = {};
    if(this.props.draggable) {
      this.draggableProps = {
        onMouseDown: this.handleMouseDown,
        onMouseMove: this.handleMouseMove,
        onMouseUp: this.handleMouseUp,
        style: {
          cursor: 'move'
        },
        transform: this.state.transform
      };
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  handleMouseDown(e) {
    this.isDragging = true;
    this.clickPosition = {
      x: e.pageX,
      y: e.pageY
    }
  }

  handleMouseMove(e) {
    if(false !== this.isDragging) {
      let targetBaseWidth,
          targetRealWidth;

      try {
        targetBaseWidth = e.target.width.baseVal.value;
        targetRealWidth = e.target.getBoundingClientRect().width;
      } catch(e) {
        targetBaseWidth = 1;
        targetRealWidth = 1;
      }

      const multiplier = parseFloat((targetBaseWidth / targetRealWidth).toFixed(2));
      const xDiff = ((e.pageX - this.clickPosition.x) * multiplier) + this.lastTransformation.x;
      const yDiff = ((e.pageY - this.clickPosition.y) * multiplier) + this.lastTransformation.y;

      this.setState({
        transform: 'matrix(1 0 0 1 ' + xDiff + ' ' + yDiff + ')'
      });
    }
  }

  handleMouseUp(e) { 
    this.isDragging = false;
    const transform = this.state.transform.match(/matrix\(1 0 0 1 (.*?)\)/)[1].split(' ');

    this.lastTransformation = {
      x: parseInt(transform[0]),
      y: parseInt(transform[1])
    };
  }

  componentDidUpdate() {
    if(this.props.draggable) {
      this.draggableProps.transform = this.state.transform;
    }
  }

}

module.exports = DraggableBase;