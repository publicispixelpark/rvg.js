const React = require('react');

class Ellipse extends React.Component {

  render() {
    const {
      x, y,
      fill,
      radiusX, radiusY
    } = this.props;
    
    return (
      <ellipse cx={x} cy={y} fill={fill} rx={radiusX} ry={radiusY} />
    );
  }

}

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
}

module.exports = Ellipse;