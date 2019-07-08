const React = require('react');

const DraggableBase = require('./base/draggable');

const TextUtils = require('../utils/textUtils');

class ForeignObjects extends DraggableBase {

    render() {
        let {
            x,
            y,
            fontFamily,
            fontSize,
            html
        } = this.props;

        let dimension = TextUtils.calculateHeightWidth(html, fontFamily, fontSize, '');
        let height = dimension[0];
        let width = dimension[1];

        return (
            <foreignObject x={x}
                  y={y}
                  height={height}
                  width={width}
                  {...this.draggableProps}>
                <div xmlns="http://www.w3.org/1999/xhtml">
                    {html}
                </div>
            </foreignObject>);
    }
}

// Prop types
Rectangle.propTypes = {
    x: React.PropTypes.any.isRequired,
    y: React.PropTypes.any.isRequired,
    fill: React.PropTypes.string.isRequired,
    height: React.PropTypes.any.isRequired,
    width: React.PropTypes.any.isRequired
};

Rectangle.defaultProps = {
    x: 0,
    y: 0,
    fill: '#000',
    height: 100,
    width: 100
};

module.exports = Rectangle;
