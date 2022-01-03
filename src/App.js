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

  //ADD TASK
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
  const handleKeyPress = (e) => {
    if (e.key === 'Shift') {
      addNewTask()
    }
  }

  //REMOVE TASK
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
  const returnTasks = () => {  
    trashList.map(currentTask => {
      if (currentTask.complited === true) {
        const foundTasks = trashList.filter(currentTask => currentTask.complited === true);
        setTrashList(trashList.filter(currentTask => currentTask.complited !== true));

        foundTasks.map(currentTask => {
          if (currentTask.complited === true) {
            currentTask.complited = !currentTask.complited
          }
          return currentTask
        })

        setTasksList([...tasksList, ...foundTasks])
        setSelectTask([]);
      }
      return currentTask
    }) 
  }

  trashList.map(currentTask => {
    if(returnTasks){
      currentTask.done = !currentTask.done
    }
    return currentTask
  })
  
  return (
    <AuthContext.Provider value={{trashList, setTrashList, selectPost, setSelectTask, returnTasks}}>
      <Routes>
        <Route 
          path='/' 
          element={<TaskPage 
            handleKeyPress={handleKeyPress}
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