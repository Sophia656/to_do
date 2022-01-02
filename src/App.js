import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthContext } from './components/context';
import TaskPage from './TaskPage';
import TrashPage from './TrashPage';

const App = () => {
  const [tasksList, setTasksList] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [trashList, setTrashList] = useState([]);
  const [selectTask, setSelectTask] = useState([]);


  const addNewTask = (e) => {
    e.preventDefault();
    const createTask = {
      id: Date.now(),
      done: false,
      complited: false,
      newTask
    }
    setTasksList([...tasksList, createTask]);
    setNewTask('');
  }

  const removeTask = (task) => {
    const find = tasksList.find(currentTask => currentTask.id === task.id)
    setTasksList(tasksList.filter(currentTask => currentTask.id !== task.id));
    setTrashList([...trashList, find]);
    task.done = !task.done
  }

  //SELECT TASKS
  const selectPost = (task) => {
    const selectItem = trashList.find(currentTask => currentTask.id === task.id);
    setSelectTask([...selectTask, selectItem]);

    trashList.map(currentTask => {
      if (currentTask.id === task.id){
        currentTask.complited = !currentTask.complited
      }
      return currentTask
    })
  }

  // RETURN TASKS
  const selectTasksToReturn = () => {
    trashList.map(currentTask => {
      if (currentTask.complited === true){
        setTasksList([...tasksList, currentTask]);
      }
      return currentTask
    })
  }

  const returnTasks = () => {   
    if (selectTasksToReturn) {
      setTrashList(trashList.filter(currentTask => currentTask.complited !== true));
      setSelectTask([]);
    }
  }
  trashList.map(currentTask => {
    if(returnTasks){
      currentTask.done = !currentTask.done
    }
    return currentTask
  })

  return (
    <AuthContext.Provider value={{trashList, setTrashList, selectPost, setSelectTask, selectTasksToReturn, returnTasks}}>
      <Routes>
        <Route 
          path='/' 
          element={<TaskPage 
              newTask={newTask} 
              setNewTask={setNewTask} 
              addNewTask={addNewTask} 
              tasksList={tasksList} 
              removeTask={removeTask}
              setTasksList={setTasksList}
            />
          } 
        />
        <Route path='/trash' element={<TrashPage newTask={newTask}/>} />
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;