import React,{useState} from 'react'
import TodoItem from './TodoItem'
import "./TodoList.css"
const TodoList = ({todos}) => {
  const [search,setSearch]=useState("")
  const onChangeSearch = (e) => {
    setSearch(e.target.value)
  }

  const getFilteredData = () => {
    if (search==="") {
      return todos
    }
    return todos.filter((todo)=>
      todo.content
        .toLowerCase()
        .includes(search.toLocaleLowerCase)
    )
  }

  const filteredTodos = getFilteredData()
  return (
    <div className='TodoList'>
        <h4>Todo List 🌱</h4>
        <input type="text" 
        onChange={onChangeSearch}
        placeholder='검색어를 입력하세요'/>
        <div className='todo_wrapper'>
            {todos.map((todo) => {
              <TodoItem {...todo} key={todo.id}/>
              
            })}
            
        
        </div>
    </div>
  )
}

export default TodoList