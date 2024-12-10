import './App.css'
import ToDoList from './TodoList.jsx'
import Form from "./Form.jsx";

function App() {

    return (
        <>
            <header>
                <h1>Learn React @ BeCode</h1>
            </header>

            <Form/>

            <hr/>

            <ToDoList/>
        </>
    )
}

export default App