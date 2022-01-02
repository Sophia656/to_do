import React from 'react';
import s from './TaskList.module.css';

const TaskList = ({tasksList, removeTask, doneTask}) => {

    return (
            <div className={s.list}>
                {tasksList.map((task, index) =>
                
                    <div value={task} key={task.id}>
                        <span
                        className={task.done === true ? s.cross_out : s.task}
                        onClick={() => doneTask(task)}
                        >
                            {index + 1}. {task.newTask}
                        </span>

                        <button 
                        className={s.btn_del} 
                        onClick={() => removeTask(task)}
                        >
                            Delete
                        </button>

                    </div>
                )}
            </div>
    );
};

export default TaskList;