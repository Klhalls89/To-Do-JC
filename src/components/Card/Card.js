import React from 'react';

const Card = (props) => {
  const { todo } = props
  return (
    <div> 
      <p>{todo.description}</p>
      {todo.done === true && <p>all done</p>}
      {todo.done === false && <p>not done</p>}
    </div>
  )
};

export default Card;