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
            backgroundColor,
            color,
            padding,
        } = this.props;

        let text = this.props.children;

        let dimension = TextUtils.calculateHeightWidth(text, fontFamily, fontSize, padding);
        let height = dimension[0];
        let width = dimension[1];

        let styles = `
            color: ${color}; 
            background-color: ${backgroundColor}; 
            padding: ${padding}; 
            font-family:${fontFamily};
            font-size:${fontSize};
        `;
        return (
            <foreignObject x={x}
                  y={y}
                  height={height}
                  width={width}
                  {...this.draggableProps}>
                <div xmlns="http://www.w3.org/1999/xhtml" style={styles}>
                    {text}
                </div>
            </foreignObject>);
    }
}

// Prop types
ForeignObjects.propTypes = {
    x: React.PropTypes.any.isRequired,
    y: React.PropTypes.any.isRequired,
    fontSize: React.PropTypes.number,
    fontFamily: React.PropTypes.string,
    backgroundColor: React.PropTypes.string,
    color: React.PropTypes.string,
    padding: React.PropTypes.string
};

ForeignObjects.defaultProps = {
    x: 0,
    y: 0,
    fontSize: 14,
    fontFamily: 'serif',
    backgroundColor: 'none',
    color: '#000',
    padding: '0'
};

module.exports = ForeignObjects;