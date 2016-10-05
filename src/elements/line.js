const React = require('react');

const DraggableBase = require('./base/draggable');

class Line extends DraggableBase {

  render() {
    const {
      x, y,
      stroke
    } = this.props;
    
    return (
      <line x1={x[0]}
            x2={x[1]}
            y1={y[0]}
            y2={y[1]}
            stroke={stroke}
            {...this.draggableProps} />
    );
  }

}

// Prop types
Line.propTypes = {
  x: React.PropTypes.array.isRequired,
  y: React.PropTypes.array.isRequired,
  stroke: React.PropTypes.string.isRequired
};

Line.defaultProps = {
  x: [100, 200],
  y: [50, 100],
  stroke: '#000'
}

module.exports = Line;