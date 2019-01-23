import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  render() {
    return(
      <div style={itemStyle}>
        <p>{this.props.todo.title}</p>
      </div>
    );
  }
}
// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}
// inline style
const itemStyle = { 
  backgroundColor: '#f4f4f4' 
}

export default TodoItem;
