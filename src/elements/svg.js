const React = require('react');

class SVG extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { height, width, fill, children } = this.props;

    return (
      <svg height="100%"
           width="100%"
           viewBox={'0 0 ' + width + ' ' + height}>

        <rect x="0" y="0" width={width} height={height} fill={fill} />
        
        {children}
      </svg>
      );
  }

}

// Prop types
SVG.propTypes = {
  height: React.PropTypes.number.isRequired,
  width: React.PropTypes.number.isRequired,
  fill: React.PropTypes.string.isRequired
};

SVG.defaultProps = {
  height: 400,
  width: 600,
  fill: 'transparent'
}

module.exports = SVG;