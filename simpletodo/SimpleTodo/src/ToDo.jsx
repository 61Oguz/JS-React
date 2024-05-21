import React, {useState} from 'react';

function ToDo(props) {

    const [todos, setTodos] = useState([])
    const [todoText, setTodoText] = useState("");

    const handleClick = () => {
        if (todoText !== "") {
            setTodos([...todos, todoText])
        }
    }
    function handleDelete(index) {
        setTodos(todos.filter((_, i) => i !== index));
    }
    console.log(todos);

    return (
        <div className={"TodoWrapper"}>

            <input className={"todo-input"} type={"text"} placeholder={"Type Your Tasks"} onChange={event => setTodoText(event.target.value)}/>
            <button className={"todo-btn"} onClick={handleClick}>Add Task</button>
            <ul>
                {todos.map( (todo,index) => (
                    <li className={"list-item"} key={index}> {todo}
                        <button className={"delete-btn"} onClick={() => handleDelete(index)}>Delete</button>
                    </li>

                ))}


            </ul>
        </div>
    );
}

export default ToDo;