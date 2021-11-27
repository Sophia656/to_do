import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import TaskList from './components/TaskList';
import TaskPage from './TaskPage';
import TrashPage from './TrashPage';

function App() {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState('');
  const [trashList, setTrashList] = useState([]);

  const addNewTask = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      task
    }
    setTaskList([newTask, ...taskList]);
    setTask('');
  }

  const removeTask = (post) => {
    setTaskList(taskList.filter(p => p.id !== post.id))
  }
  
  const addToTrash = () => {
    if (removeTask) {
      setTaskList([...taskList, task]);
    }
  }


  return (
    <Routes>
      <Route path='/' element={<TaskPage task={task} setTask={setTask} addNewTask={addNewTask} taskList={taskList} removeTask={removeTask} addToTrash={addToTrash} />} />
      <Route path='/trash' element={<TrashPage />} />
    </Routes>
  );
}

export default App;
