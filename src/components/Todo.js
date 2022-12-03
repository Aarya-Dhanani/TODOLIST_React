import React from 'react'

export const Todo = ({todo}) => {
  return (
    <div>
<h6>{todo.title}</h6>
<p>{todo.desc}</p>
<button className="btn btn-sm btn-danger">Delete</button>
    </div>
  )
}
export default Todo;

