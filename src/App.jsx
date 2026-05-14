import TodoEditor from './components/TodoEditor'
import TodoList from './components/TodoList'
import Header from './components/Header'
import './App.css'


function App() {

  return (
    <div className='App'>
      <Header/>
      <TodoEditor />
      <TodoList/>
    </div>
  )
}


export default App
