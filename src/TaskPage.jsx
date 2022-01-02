import React from 'react';
import TaskList from './components/TaskList';

const TaskPage = ({newTask, setNewTask, addNewTask, tasksList, removeTask, complitedTask, setTasksList}) => {
    
    const doneTask = (task) => {
        const newList = tasksList.map(currentTask => {
            if (currentTask.id === task.id) {
                task.done = !task.done
            }
            return currentTask
        })
        setTasksList(newList)
    }

    return (
        <div className='wrapper'>
            <div>
                <form className='form'>
                    <input 
                    className='form__input' 
                    value={newTask} 
                    onChange={(e) => setNewTask(e.target.value)} 
                    type='text' 
                    placeholder='CREATE NEW TASK' 
                    />
                    <button className='form__btn' onClick={addNewTask}>ADD NEW TASK</button>
                </form>
            </div>
            <TaskList doneTask={doneTask} setTasksList={setTasksList} tasksList={tasksList} removeTask={removeTask} complitedTask={complitedTask} />
        </div>
    );
};

export default TaskPage;