import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthContext } from './components/context';
import TaskPage from './TaskPage';
import TrashPage from './TrashPage';

function App() {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState('');
  const [trashList, setTrashList] = useState([]);
  const [selectTask, setSelectTask] = useState([]); // массив выбранных постов
  const [bool, setBool] = useState(false); // если true, добавляем css cl на кнопку

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
  }
  //SELECT POST
  const selectPost = (post) => {
    const selectItem = trashList.find(p => p.id === post.id);
    setSelectTask(selectTask.filter(p => p.id !== post.id));
    setSelectTask([...selectTask, selectItem]); 

    if (selectItem) {
      setBool(true) 
      console.log(bool)
    }
  }
  console.log('selectTask', selectTask);
  return (
    <AuthContext.Provider value={{trashList, setTrashList, selectPost, bool, setSelectTask}}>
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
