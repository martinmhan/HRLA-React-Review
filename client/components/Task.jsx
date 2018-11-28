import React from 'react';

let Task = (props) => (
  <li>
    {props.text}
    <button onClick={() => {props.handleDelete(props.index)}}>Delete</button>
    <button onClick={() => {props.handleEdit(props.index)}}>Edit</button>
  </li>
)

export default Task;