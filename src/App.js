import React, { useState } from 'react';
import './App.css';
import { AuthContext, DataContext } from './components/context';
import AppRouter from './AppRouter';
import NavBar from './NavBar';

const App = () => {
  const [tasksList, setTasksList] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [trashList, setTrashList] = useState([]);
  const [selectTask, setSelectTask] = useState([]);
  const [isAuth, setIsAuth] = useState(false);

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
    <AuthContext.Provider value={{isAuth, setIsAuth}}>
    <DataContext.Provider 
      value={{trashList,
      handleKeyPress,
      newTask,
      setNewTask,
      addNewTask,
      tasksList,
      removeTask,
      setTasksList,
      setTrashList, 
      selectPost, 
      setSelectTask, 
      returnTasks}}
    >
      <NavBar />
      <AppRouter />
    </DataContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;