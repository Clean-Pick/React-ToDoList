import {useState} from "react";

export default function TodoList() {
    const initialTodos = [
        {
            id: 1,
            name: `Boire l'eau des pâtes`,
            isDone: false
        },
        {
            id: 2,
            name: `Faire un truc`,
            isDone: false
        },
        {
            id: 3,
            name: `Arrêter`,
            isDone: false
        },
        {
            id: 4,
            name: `Moucher le chat`,
            isDone: false
        }
    ]

    const [todos, setTodos] = useState(initialTodos)

    const handleCheck = (id) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {

                return {
                    ...todo,
                    done: !todo.done
                }
            }
            return todo
        }))
    }

    return (
        <div className="list">
            <h2>Todos </h2>
            <ul className="list__todos">
                {todos.map((todo) => (

                    <li key={todo.id}>
                        <input
                            type="checkbox"
                            id={todo.id}
                            name={todo.name}
                            checked={todo.isDone}
                            onChange={() => handleCheck(todo.id)}/>
                        {todo.name}
                    </li>

                ))}
            </ul>
        </div>
    )
}