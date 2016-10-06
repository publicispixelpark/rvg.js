const React = require('react');

const DraggableBase = require('./base/draggable');

class Image extends DraggableBase {

  render() {
    const {
      x, y,
      height, width,
      href,
      opacity
    } = this.props;

    return (
      <image xlinkHref={href}
             x={x}
             y={y}
             height={height}
             width={width}
             preserveAspectRatio="xMinYMin meet"
             opacity={opacity}
             {...this.draggableProps} />
    );
  }

}

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
}

module.exports = Image;