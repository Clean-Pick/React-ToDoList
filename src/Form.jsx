import {useRef} from "react";

// eslint-disable-next-line react/prop-types
export default function Form({onAddTodo}) {
    const inputRef = useRef();

    function handleSubmit(event) {
        event.preventDefault();

        const inputElement = inputRef.current;
        const todoValue = inputElement.value;

        if (todoValue) {
            onAddTodo(todoValue);
            inputElement.value = "";
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="todo"
                placeholder="Type a new todo"
                ref={inputRef}
            />
            <br/>
            <button type="submit">Add Todo</button>
        </form>
    );
}