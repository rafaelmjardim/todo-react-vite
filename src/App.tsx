import './App.scss'
import { ClipboardList, X, ClipboardEdit } from "lucide-react";

function App() {

  return (
    <>
      <div className='app'>
        <div className='app_container bg-sky-500'>
          <form className='app_container_form' placeholder='Insira sua tarefa'>
            <input type="text" />
            <button>Enviar</button>
          </form>

          <ul className='app_container_list'>
            <li className='app_container_list_item'>
              <div className="app_container_list_item_left">
              <ClipboardList size={20}/>
                <span>Título da tarefa</span>
              </div>
              <div className="app_container_list_item_right">
              <X size={16}/>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
