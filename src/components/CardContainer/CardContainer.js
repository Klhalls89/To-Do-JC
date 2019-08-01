import React from 'react';
import Card from '../Card/Card'

const CardContainer = (props) => {
  const { todos } = props
  const displayCards = todos.map(todo => {
    return <Card key={todo.id} todo={todo} />
  })
  return (
    <div>
      {displayCards}
    </div>
  )
};

export default CardContainer;