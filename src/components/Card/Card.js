import React from 'react';

const Card = (props) => {
  const { todo, editTodo, removeTodo } = props
  const id = todo.id
  return (
    <div> 
      <p>{todo.description}</p>
      {todo.done === true && <p>all done</p>}
      {todo.done === false && <p>not done</p>}
      <button onClick={() => removeTodo(id)}>X</button>
      <button onClick={() => editTodo(id)}>edit</button>
    </div>
  )
};

export default Card;