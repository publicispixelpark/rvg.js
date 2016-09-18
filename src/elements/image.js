const React = require('react');

class Image extends React.Component {

  render() {
    const {
      x, y,
      height, width,
      href
    } = this.props;
    
    return (
      <image xlinkHref={href} x={x} y={y} height={height} width={width} preserveAspectRatio="xMinYMin meet" />
    );
  }

}

// Prop types
Image.propTypes = {
  x: React.PropTypes.array.isRequired,
  y: React.PropTypes.array.isRequired,
  href: React.PropTypes.string.isRequired,
  ratio: React.PropTypes.string.isRequired
};

Image.defaultProps = {
  x: 0,
  y: 0,
  height: 100,
  width: 100,
  ratio: "auto"
}

module.exports = Image;