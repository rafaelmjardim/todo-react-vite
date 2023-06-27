import './App.scss'
import { ClipboardList, X } from "lucide-react";

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
                <li className='app_container_list_item' key={todo.id}>
                  <div className="app_container_list_item_left">
                    <ClipboardList size={20}/>
                    <span>{todo.name}</span>
                  </div>
                  <div className="app_container_list_item_right">
                    <div className='app_container_list_item_right_icon' onClick={() => alert('Excluiu')}>
                      <X size={16}/>
                    </div>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
