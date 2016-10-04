const React = require('react');

const {
  SVG,
  Text,
  Rectangle,
  Circle,
  Ellipse,
  Line
} = require('../dist/elements');

class Main extends React.Component {

  render() {
    return (
      <SVG height={462} width={1000} fill="#333">

        {/* Title */}
        <Text x={20} y={100} fontFamily="Georgia" fontSize={40} lineHeight={50} fill="#FFF">
          {'This is my string'}
          {'broken over'}
          {'multiple'}
          {'lines'}
        </Text>

        {/* Head */}
        <Rectangle fill="green" x={200} y={100} height={300} width={500} />
        <Rectangle fill="darkgreen" x={600} y={100} height={300} width={100} />

        {/* Ears */}
        <Rectangle fill="blue" x={250} y={50} height={70} width={50} />
        <Rectangle fill="blue" x={500} y={50} height={70} width={50} />

        {/* Left eye */}
        <Circle x={300} y={200} fill="#FFF" radius={60} />
        <Circle x={320} y={210} fill="#000" radius={20} />

        {/* Right eye */}
        <Circle x={500} y={200} fill="#FFF" radius={60} />
        <Circle x={520} y={210} fill="#000" radius={20} />

        {/* Nose */}
        <Ellipse x={400} y={250} fill="orange" radiusX={20} radiusY={10} />

        {/* Mouth */}
        <Line x={[300, 350]} y={[320, 350]} stroke="darkred" />
        <Line x={[350, 450]} y={[350, 350]} stroke="darkred" />
        <Line x={[450, 500]} y={[350, 320]} stroke="darkred" />

      </SVG>
    );
  }

}

module.exports = Main;