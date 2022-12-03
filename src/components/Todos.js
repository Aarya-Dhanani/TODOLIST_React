import React from 'react'
import Todo from '../components/Todo';

export const Todos = (props) => {
  return (
    <div className="container">
      <h3 className="text-center my-3">Todos List</h3>
        {/* {props.todos} */}
        <Todo todo={props.todos[0]}/>
    </div>
  )
}
export default Todos;

