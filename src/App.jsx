import TodoEditor from './components/TodoEditor'
import TodoList from './components/TodoList'
import Header from './components/Header'
import './App.css'
import { useState,useRef } from 'react'
const mockdata=[
  {
    id:0,
    isDone:false,
    content: 'react 공부하기',
    date: new date().getTime()
  },
  {
    id:1,
    isDone:false,
    content: '빨래하기',
    date: new date().getTime()
  },
  {
    id:2,
    isDone:false,
    content: '노래연습하기',
    date: new date().getTime()
  }
]
function App() {
  const [todos, setTodos]=useState(mockdata)
  const idRef= useRef(3)


  const onCreate=(content)=>{
    const newTodo={
      id:idRef.current++,
      isDone: false,
      content:content,
      date: new Date().getTime()
    }

    setTodos([newTodo,...todos])
  }

  return (
    <div className='App'>
      <Header/>
      <TodoEditor onCreate={onCreate}/>
      <TodoList todos={todos}/>
    </div>
  )
}

export default App
