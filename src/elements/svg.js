const React = require('react');

class SVG extends React.Component {

  constructor(props) {
    super(props);

    this.lastTransformation = {
      x: 0,
      y: 0
    };

    this.isDragging = false;

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
  }

  handleMouseDown(e) {
    if(e.target.nodeName === 'tspan') {
      e.target = e.target.parentNode;
    }

    if(e.target.getAttribute('data-draggable')) {
      this.isDragging = e.target;

      this.clickPosition = {
        x: e.pageX,
        y: e.pageY
      }

      const transform = this.isDragging.transform;
    
      const x = transform.animVal[0].matrix.e;
      const y = transform.animVal[0].matrix.f;

      this.lastTransformation = {
        x: x,
        y: y
      };
    } else {
      this.isDragging = false;
    }
  }

  handleMouseMove(e) {
    if(this.isDragging) {
      let targetBaseWidth,
          targetRealWidth;

      try {
        targetBaseWidth = this.isDragging.width.baseVal.value;
        targetRealWidth = this.isDragging.getBoundingClientRect().width;
      } catch(e) {
        targetBaseWidth = 1;
        targetRealWidth = 1;
      }

      const multiplier = parseFloat((targetBaseWidth / targetRealWidth).toFixed(2));
      const xDiff = ((e.pageX - this.clickPosition.x) * multiplier) + this.lastTransformation.x;
      const yDiff = ((e.pageY - this.clickPosition.y) * multiplier) + this.lastTransformation.y;
      const matrix = 'matrix(1 0 0 1 ' + xDiff + ' ' + yDiff + ')';

      this.isDragging.setAttribute('transform', matrix);
    }
  }

  handleMouseUp(e) { 
    if(this.isDragging) {
      const transform = this.isDragging.transform;
    
      const x = transform.animVal[0].matrix.e;
      const y = transform.animVal[0].matrix.f;

      this.isDragging = false;

      this.lastTransformation = {
        x: 0,
        y: 0
      };

    }
  }

  render() {
    const { height, width, fill, children } = this.props;

    return (
      <svg height="100%"
           width="100%"
           onMouseDown={this.handleMouseDown}
           onMouseMove={this.handleMouseMove}
           onMouseUp={this.handleMouseUp}
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