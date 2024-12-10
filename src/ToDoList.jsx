export default function TodoList({tasks, onToggleTask}) {
    return (
        <div className="list">
            <h2>Todos</h2>
            <ul className="list__todos">
                {tasks.length === 0 ? (
                    <li>Aucune tâche à afficher</li>
                ) : (
                    tasks.map((todo) => (
                        <li key={todo.id}>
                            <label>
                                <input
                                    type="checkbox"
                                    id={todo.id}
                                    name={todo.name}
                                    checked={todo.isDone}
                                    onChange={() => onToggleTask(todo.id)} // Appelle la fonction de basculement
                                />
                                {todo.name}
                            </label>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
}