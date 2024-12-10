import './App.css';
import Form from "./Form.jsx";
import TodoList from "./TodoList.jsx";
import {useState} from "react";

function App() {
    const [tasks, setTasks] = useState([]); // État pour stocker les tâches

    const addTask = (task) => {
        const newTask = {
            id: tasks.length + 1, // Générer un ID unique
            name: task,
            isDone: false
        };
        setTasks((prevTasks) => [...prevTasks, newTask]); // Ajoutez la nouvelle tâche
    };

    const toggleTask = (id) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? {...task, isDone: !task.isDone} : task
            )
        );
    };

    return (
        <>
            <header>
                <h1>Learn React @ BeCode</h1>
            </header>

            <Form onAddTodo={addTask}/> {/* Passez la fonction d'ajout de tâche */}

            <hr/>

            <TodoList tasks={tasks} onToggleTask={toggleTask}/> {/* Passez la fonction de basculement ici */}
        </>
    );
}

export default App;