import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthContext } from './components/context';
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
      const find = taskList.find(p => p.id === post.id)
    setTaskList(taskList.filter(p => p.id !== post.id));
      setTrashList([...trashList, find]);
    // }
    console.log('task', taskList)
  }
  console.log('trash', trashList)

  return (
    <AuthContext.Provider value={{trashList}}>
      <Routes>
        <Route 
          path='/' 
          element={<TaskPage 
              task={task} 
              setTask={setTask} 
              addNewTask={addNewTask} 
              taskList={taskList} 
              removeTask={removeTask}
            />
          } 
        />
        <Route path='/trash' element={<TrashPage task={task}/>} />
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;
