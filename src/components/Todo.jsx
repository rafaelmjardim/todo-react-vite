import { ClipboardList, X } from "lucide-react";

const Todo = ({ todo }) => {
    return (
        <li className='app_container_list_item'>
            <div className="app_container_list_item_left">
                <ClipboardList size={20}/>
                <span>{todo.name}</span>
            </div>
            <div className="app_container_list_item_right">
                <div className='app_container_list_item_right_icon' onClick={() => alert(`Ecluiu ID: ${todo.id}`)}>
                    <X size={16}/>
                </div>
            </div>
        </li>  
    );
}


export default Todo;