import React from 'react';
import TaskList from './components/TaskList';

const TaskPage = ({task, setTask, addNewTask, taskList, removeTask, trashList}) => {

    return (
        <div>
            <div style={{color: 'red'}}>{trashList}</div>
      <div >
        <form className='form'>
          <input className='form__item' value={task} onChange={(e) => setTask(e.target.value)} type='text' placeholder='create' />
          <button className='form__item' onClick={addNewTask}>Add new task</button>
        </form>
      </div>

      <TaskList taskList={taskList} removeTask={removeTask}/>

    </div>
    );
};

export default TaskPage;