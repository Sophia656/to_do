import React, { useContext } from 'react';
import { AuthContext } from './context';
import cl from './TaskList.module.css';

const TaskList = ({taskList, removeTask}) => {

        const {returnPost} = useContext(AuthContext);

    return (
            <div className={cl.list}>
                {taskList.map((post, index) =>
                    <div className={cl.task} value={post} key={post.id} onChange={() => returnPost()}>
                        <span>{index + 1}. {post.task}</span>
                        <button className={cl.btn_del} onClick={() => removeTask(post)}>Delete</button>
                    </div>
                )}
            </div>
    );
};

export default TaskList;