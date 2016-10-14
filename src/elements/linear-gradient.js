const React = require('react');

class LinearGradient extends React.Component {

  render() {
    const {
      name,
      x1, x2, y1, y2,
      stops
    } = this.props;
    
    return (
      <linearGradient id={name} x1={x1} x2={x2} y1={y1} y2={y2}>
        {stops.map((stop, index) => {
          return (<stop key={index}
                        offset={stop.offset}
                        stopColor={stop.color}
                        stopOpacity={stop.opacity} />);
        })}
      </linearGradient>
    );
  }

}

// Prop types
LinearGradient.propTypes = {
  
};

LinearGradient.defaultProps = {
  
}

module.exports = LinearGradient;