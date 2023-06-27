import { useState } from 'react';
import './App.scss'
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

function App() {

  const [todoList, setTodoList] = useState([
    {
      id: 1,
      name: 'Primeiro item'
    },
    {
      id: 2,
      name: 'Segundo item'
    },
    {
      id: 3,
      name: 'Terceiro item'
    },
  ]);  

  const addTodo = (name) => {
    const newTodos = [...todoList, {
      id: Math.floor(Math.random() * 1000),
      name,
    }];
    
    
    setTodoList(newTodos);
  }

  return (
    <>
      <div className='app'>
        <div className='app_container'>

          <TodoForm addTodo={addTodo}/>

          <ul className='app_container_list'>
            {
              todoList.map(todo => (

                <Todo todo={todo} key={todo.id} />
                
              ))
            }
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
