const React = require('react');

class Image extends React.Component {

  constructor(props) {
    super(props);

    this.lastTransformation = {
      x: 0,
      y: 0
    };
    this.isDragging = false;

    this.state = {
      transform: 'matrix(1 0 0 1 0 0)'
    };

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
  }

  handleMouseDown(e) {
    this.isDragging = true;
    this.clickPosition = {
      x: e.pageX,
      y: e.pageY
    }
  }

  handleMouseMove(e) {
    if(false !== this.isDragging) {
      const xDiff = e.pageX - this.clickPosition.x + this.lastTransformation.x;
      const yDiff = e.pageY - this.clickPosition.y + this.lastTransformation.y;

      this.setState({
        transform: 'matrix(1 0 0 1 ' + xDiff + ' ' + yDiff + ')'
      });
    }
  }

  handleMouseUp(e) {
    this.isDragging = false;
    const transform = this.state.transform.match(/matrix\(1 0 0 1 (.*?)\)/)[1].split(' ');

    this.lastTransformation = {
      x: parseInt(transform[0]),
      y: parseInt(transform[1])
    };
  }

  render() {
    const {
      x, y,
      height, width,
      href,
      draggable
    } = this.props;


    let handleMouseDown = null;
    let handleMouseMove = null;
    let handleMouseUp = null;
    let style = null;
    if(draggable) {
      handleMouseDown = this.handleMouseDown;
      handleMouseMove = this.handleMouseMove;
      handleMouseUp = this.handleMouseUp;
      style = {
        cursor: 'move'
      };
    }

    const { transform } = this.state;
    
    return (
      <image xlinkHref={href}
             x={x}
             y={y}
             height={height}
             width={width}
             preserveAspectRatio="xMinYMin meet"
             onMouseDown={handleMouseDown}
             onMouseMove={handleMouseMove}
             onMouseUp={handleMouseUp}
             style={style}
             transform={transform} />
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