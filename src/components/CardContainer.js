import React from 'react';
import Card from './Card'

const CardContainer = (props) => {
  const { todos, removeTodo, putTodo } = props
  const displayCards = todos.map(todo => {
    return <Card removeTodo={removeTodo} putTodo={putTodo} key={todo.id} todo={todo} />
  })
  return (
    <div className="container">
      {displayCards}
    </div>
  )
};

export default CardContainer;