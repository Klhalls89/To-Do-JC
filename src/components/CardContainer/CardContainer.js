import React from 'react';
import Card from '../Card/Card'

const CardContainer = (props) => {
  const { todos, removeTodo, editTodo } = props
  const displayCards = todos.map(todo => {
    return <Card removeTodo={removeTodo} editTodo={editTodo} key={todo.id} todo={todo} />
  })
  return (
    <div>
      {displayCards}
    </div>
  )
};

export default CardContainer;