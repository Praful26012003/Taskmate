import { useRef } from "react";

export const AddTask = ({taskList, setTaskList, editTask, setEditTask}) => {
  const taskRef = useRef("")

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date();
    if(editTask.id) {
      const updatedTaskList = taskList.map((task) => (
        task.id === editTask.id ? {id : editTask.id, name: editTask.name, time : `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`} : task
      ))
      setTaskList(updatedTaskList)
      setEditTask({})
    }

    else {
      if(taskRef.current.value === "") return
      const task = {
        id   : date.getTime(),
        name : taskRef.current.value,
        time : `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
      }
  
      setTaskList([...taskList, task]);
      setEditTask({})
    }
  }

  return (
    <section className="addTask">
        <form onSubmit={handleSubmit}>
            <input onChange={e => setEditTask({...editTask, name: e.target.value})} type="text" name="task" value={editTask.name || ""} autoComplete="off" placeholder="add task" maxLength="25" ref={taskRef} />
            <button type="submit">{editTask.id ? "Update" : "Add"}</button>
        </form>
    </section>
  )
}
