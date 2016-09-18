const util = require('util');
const React = require('react');

class Text extends React.Component {

  render() {
    const {
      x, y,
      fill,
      fontSize, fontFamily
    } = this.props;
    
    let text = this.props.children;

    let lineHeight = this.props.lineHeight || fontSize;

    if(util.isArray(text)) {
      text = text.map((string, index) => {
        return (<Text key={index} x={x} y={(lineHeight * index) + y} fill={fill} fontSize={fontSize} fontFamily={fontFamily}>{string}</Text>);
      });

      // Return a group of `<Text />` elements instead, maybe it'll work...
      return (<g>{text}</g>);
    }

    return (
      <text x={x} y={y} fill={fill} textAnchor="start" fontSize={fontSize} fontFamily={fontFamily}>
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
  fontFamily: React.PropTypes.string
};

Text.defaultProps = {
  x: 0,
  y: 0,
  fill: '#000',
  fontSize: 20,
  fontFamily: 'serif'
}

module.exports = Text;