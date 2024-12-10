import {useRef} from "react";

export default function Form() {

    const inputRef = useRef()

    function handleSubmit() {
        const inputElement = inputRef.current

        console.log(inputElement.value)
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
    )
}