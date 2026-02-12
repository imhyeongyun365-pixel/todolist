import React from 'react'
import "./TodoItem.css"
const TodoItem = ({id, isDone, content,date}) => {
  return (
    <div className='TodoItem'>
        <input type="checkbox"
         readOnly checked={isDone}
        />
        <div className='content'>Todo...</div>
        <div className="date">{new Date(date).toLocaleDateString()}</div>
        <button>삭제</button>
    </div>
  )
}

export default TodoItem