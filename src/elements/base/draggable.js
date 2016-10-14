const React = require('react');
const shallowCompare = require('react-addons-shallow-compare');

class DraggableBase extends React.Component {

  constructor(props) {
    super(props);

    this.draggableProps = {};
    if(this.props.draggable) {
      this.draggableProps = {
        'data-draggable': true,
        style: {
          cursor: 'move'
        }
      };
    } else {
      this.draggableProps = {
        style: {
          'pointerEvents': 'none'
        }
      }
    }
  }

}

module.exports = DraggableBase;