const util = require('util');
const React = require('react');

const DraggableBase = require('./base/draggable');

class Text extends DraggableBase {

  render() {
    const {
      x, y,
      fill,
      fontSize, fontFamily, fontWeight,
      textAnchor
    } = this.props;
    
    let text = this.props.children;

    let lineHeight = this.props.lineHeight || fontSize;

    if(util.isArray(text)) {
      text = text.map((string, index) => {
        return (<tspan key={index} x={x} y={(lineHeight * index) + y} alignmentBaseline="before-edge">{string}</tspan>);
      });
    }

    return (
      <text x={x}
            y={y}
            fill={fill}
            textAnchor={textAnchor}
            fontSize={fontSize}
            fontFamily={fontFamily}
            fontWeight={fontWeight}
            {...this.draggableProps}>
        {text}
      </text>
    );
  }

}

// Prop types
Text.propTypes = {
  x: React.PropTypes.any.isRequired,
  y: React.PropTypes.any.isRequired,
  fill: React.PropTypes.string.isRequired,
  fontSize: React.PropTypes.number,
  fontFamily: React.PropTypes.string,
  textAnchor: React.PropTypes.string
};

Text.defaultProps = {
  x: 0,
  y: 0,
  fill: '#000',
  fontSize: 20,
  fontFamily: 'serif',
  textAnchor: 'start'
}

module.exports = Text;