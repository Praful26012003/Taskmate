import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { AddTask } from './components/AddTask';
import { ShowTask } from './components/ShowTask';

import './App.css';


function App() {
  const [editTask, setEditTask] = useState({})
  const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem("taskList")) || [{
    id: 10001,
    name: "Task A",
    time: "2:09:01 AM 9/14/2030"
  },
  {
    id: 10002,
    name: "Task B",
    time: "2:09:01 AM 9/14/2030"
  },
  {
    id: 10003,
    name: "Task C",
    time: "2:09:01 AM 9/14/2030"
  }])

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList))
  }, [taskList])

  return (
    <div className="App">
      <Header />
      <AddTask taskList={taskList} setTaskList={setTaskList} editTask={editTask} setEditTask={setEditTask} />
      <ShowTask taskList={taskList} setTaskList={setTaskList} editTask={editTask} setEditTask={setEditTask} />
    </div>
  );
}

export default App;
