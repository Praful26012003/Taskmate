export const ShowTask = ({taskList, setTaskList, editTask, setEditTask}) => {
    const handleClear = () => {
        setTaskList([])
    }

    const handleDelete = (id) => {
        const updatedTaskList = taskList.filter((task) => { return task.id !== id});
        setTaskList(updatedTaskList)
    }

    const handleUpdate = (id) => {
        const taskToEdit = taskList.find((task) => task.id === id);
        setEditTask(taskToEdit);
    }

    return (
        <section className="showTask">
            <div className="head">
                <div>
                    <span className="title">Todo</span>
                    <span className="count">{taskList.length}</span>
                </div>
                <button onClick={handleClear} className="clearAll">Clear All</button>
            </div>
            <ul>
                {taskList.map((task) => (
                    <li key={task.id}>
                        <p>
                            <span className="name">{task.name}</span>
                            <span className="time">{task.time}</span>
                        </p>
                        <i onClick={() => handleUpdate(task.id)} className="bi bi-pencil-square"></i>
                        <i onClick={() => handleDelete(task.id)} className="bi bi-trash"></i>
                    </li>
                ))}
            </ul>
        </section>
    )
}
