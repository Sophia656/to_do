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
  const [selectTask, setSelectTask] = useState([]);


  const addNewTask = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      complited: false,
      done: false,
      task
    }
    setTaskList([newTask, ...taskList]);
    setTask('');
  }

  const removeTask = (post) => {
    const find = taskList.find(p => p.id === post.id)
    setTaskList(taskList.filter(p => p.id !== post.id));
    setTrashList([...trashList, find]);
    post.done = !post.done
  }

  //SELECT TASKS
  const selectPost = (post) => {
    const selectItem = trashList.find(p => p.id === post.id);
    setSelectTask([...selectTask, selectItem]);

    trashList.map(p => {
      if (p.id === post.id){
        p.complited = !p.complited
      }
      return p
    })
  }

  // RETURN TASKS
  const selectTasksToReturn = () => {
    trashList.map(p => {
      if(p.complited === true){
        setTaskList([...taskList, p]);
      }
      return p
    })
  }

  const returnTasks = () => {   
    if (selectTasksToReturn) {
        setTrashList(trashList.filter(p => p.complited !== true));
        setSelectTask([]);
    }
  }
  trashList.map(p => {
    if(returnTasks){
      p.done = !p.done
    }
    return p
  })

  return (
    <AuthContext.Provider value={{trashList, setTrashList, selectPost, setSelectTask, selectTasksToReturn, returnTasks}}>
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
