import './App.scss'
import Todo from './components/Todo';

function App() {

  const todoList = [
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
  ];  

  return (
    <>
      <div className='app'>
        <div className='app_container bg-sky-500'>
          <form className='app_container_form' placeholder='Insira sua tarefa'>
            <input type="text" />
            <button className='button'>Enviar</button>
          </form>

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
