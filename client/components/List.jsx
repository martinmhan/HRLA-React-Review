import React from 'react';
import reactDOM from 'react-dom';
import Task from './Task.jsx';

let List = (props) => (
  <div>
    {props.store.map((text, index) => <Task index={index} text={text} handleEdit={props.handleEdit} handleDelete={props.handleDelete}/>)}
  </div>
);

export default List;