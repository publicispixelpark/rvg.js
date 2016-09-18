const React = require('react');

class Circle extends React.Component {

  render() {
    const {
      x, y,
      fill,
      radius
    } = this.props;
    
    return (
      <circle cx={x} cy={y} fill={fill} r={radius} />
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