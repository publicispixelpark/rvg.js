const util = require('util');
const React = require('react');

const DraggableBase = require('./base/draggable');

const TextUtils = require('../utils/textUtils');

class ForeignObjects extends DraggableBase {

    render() {
        const {
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

        if ( !util.isArray(text) ) {
            text = [text];
        }

        let height = 0;
        let width = 0;
        let result = text.map((line, index) => {
            let dimension = TextUtils.calculateHeightWidth(line, fontFamily, fontSize, padding);
            height = height + dimension[0];
            width = Math.max(width, dimension[1]);

            let styles = {
                color: color,
                backgroundColor: backgroundColor,
                float: 'left',
                fontFamily: fontFamily,
                fontSize: fontSize,
                paddingTop: padding.top + 'px',
                paddingRight: padding.right + 'px',
                paddingBottom: padding.bottom + 'px',
                paddingLeft: padding.left + 'px',
                pointerEvents: 'none',
                whiteSpace: 'nowrap',
            };

            return (
                <span xmlns="http://www.w3.org/1999/xhtml" style={styles} key={index}>
                    {line}
                </span>);
        });

        return (
            <foreignObject
                x={x}
                y={y}
                height={height + padding.top + padding.bottom}
                width={width + padding.left + padding.right}
                {...this.draggableProps}>
                {result}
            </foreignObject>);
    }
}

// Prop types
ForeignObjects.propTypes = {
    x: React.PropTypes.any.isRequired,
    y: React.PropTypes.any.isRequired,
    fontSize: React.PropTypes.any,
    fontFamily: React.PropTypes.string,
    lineHeight: React.PropTypes.any,
    backgroundColor: React.PropTypes.string,
    color: React.PropTypes.string,
    padding: React.PropTypes.any
};

ForeignObjects.defaultProps = {
    x: 0,
    y: 0,
    fontSize: 14,
    fontFamily: 'serif',
    lineHeight: 1.2,
    backgroundColor: 'inherit',
    color: '#0000',
    padding: {top: 0, right: 0, bottom: 0, left: 0}
};

module.exports = ForeignObjects;
