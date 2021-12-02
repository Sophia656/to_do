import React from 'react';
import TaskList from './components/TaskList';

const TaskPage = ({task, setTask, addNewTask, taskList, removeTask}) => {

    return (
        <div className='wrapper'>
            <div>
                <form className='form'>
                    <input className='form__input' value={task} onChange={(e) => setTask(e.target.value)} type='text' placeholder='CREATE NEW TASK' />
                    <button className='form__btn' onClick={addNewTask}>ADD NEW TASK</button>
                </form>
            </div>
            <TaskList taskList={taskList} removeTask={removeTask}/>
        </div>
    );
};

export default TaskPage;