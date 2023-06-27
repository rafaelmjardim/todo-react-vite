import { useState } from "react";

const TodoForm = ({addTodo}) => {

    const [task, setTask] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!task) {
            return
        }
        addTodo(task)
        
        //Limpar inputs (a tag value do input precisa reseber a task para limpar)
        setTask('');
    }
    return (
        <form className='app_container_form' onSubmit={handleSubmit}>
            <input type="text"  placeholder='Insira sua tarefa' value={task} onChange={event => setTask(event.target.value)}/>
            <button className='button'>Enviar</button>
        </form>
    );
}

export default TodoForm;