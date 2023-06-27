import './App.scss'

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
              <span>Item</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
