const util = require('util');
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

        let lineHeight = this.props.lineHeight || fontSize;

        let result = [];

        if ( !util.isArray(text) ) {
            text = [text];
        }

        result = text.map((line, index) => {
            let dimension = TextUtils.calculateHeightWidth(line, fontFamily, fontSize, padding);
            let height = dimension[0];
            let width = dimension[1];

            let styles = {
                color: color,
                backgroundColor: backgroundColor,
                padding: padding,
                fontFamily: fontFamily,
                fontSize: fontSize
            };

            return (
                <foreignObject
                    x={x}
                    y={(lineHeight * index) + y}
                    height={height}
                    width={width}
                    {...this.draggableProps}
                    key={'fo_' + index}>

                    <div xmlns="http://www.w3.org/1999/xhtml" style={styles}>
                        {line}
                    </div>
                </foreignObject>);
        });

        return result;
    }
}

// Prop types
ForeignObjects.propTypes = {
    x: React.PropTypes.any.isRequired,
    y: React.PropTypes.any.isRequired,
    fontSize: React.PropTypes.number,
    fontFamily: React.PropTypes.string,
    lineHeight: React.PropTypes.any,
    backgroundColor: React.PropTypes.string,
    color: React.PropTypes.string,
    padding: React.PropTypes.string
};

ForeignObjects.defaultProps = {
    x: 0,
    y: 0,
    fontSize: 14,
    fontFamily: 'serif',
    lineHeight: 1.2,
    backgroundColor: 'inherit',
    color: '#000',
    padding: '0'
};

module.exports = ForeignObjects;
