const React = require('react');

const DraggableBase = require('./base/draggable');

class Circle extends DraggableBase {

  render() {
    const {
      x, y,
      fill,
      radius
    } = this.props;
    
    return (
      <circle cx={x}
              cy={y}
              fill={fill}
              r={radius}
              {...this.draggableProps} />
    );
  }

}

// Prop types
Circle.propTypes = {
  x: React.PropTypes.any.isRequired,
  y: React.PropTypes.any.isRequired,
  fill: React.PropTypes.string.isRequired,
  radius: React.PropTypes.any.isRequired
};

Circle.defaultProps = {
  x: 100,
  y: 100,
  fill: '#000',
  radius: 100
}

module.exports = Circle;