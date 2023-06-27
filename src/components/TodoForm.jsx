const TodoForm = () => {
    return (
        <form className='app_container_form'>
            <input type="text"  placeholder='Insira sua tarefa'/>
            <button className='button'>Enviar</button>
        </form>
    );
}

export default TodoForm;