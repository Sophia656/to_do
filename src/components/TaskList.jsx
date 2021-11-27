import React from 'react';
import cl from './TaskList.module.css';

const TaskList = ({taskList, removeTask, addToTrash}) => {
    return (
        <div className={cl.list}>
            {taskList.map((post, index) =>
                <div className={cl.task} value={post} key={post.id}>
                    <span>{index + 1}. {post.task}</span>
                    <button className={cl.btn_del} onClick={() => removeTask(post)}>Delete</button>
                </div>
            )}
      </div>
    );
};

export default TaskList;