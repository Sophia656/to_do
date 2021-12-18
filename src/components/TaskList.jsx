import React, { useState } from 'react';
import cl from './TaskList.module.css';

const TaskList = ({taskList, removeTask}) => {

    const changeComplited = (post) => {
        if(post.complited === true) {
            taskList.map(p => {
                if (p.id === post.id){
                    p.complited = !p.complited
                }
                return p
            })
        }
    }
    const doneTask = (post) => {
        taskList.map(p => {
            if (p.id === post.id){
              p.done = !p.done
            }
            return p
        })
    }
    
    return (
            <div className={cl.list}>
                {taskList.map((post, index) =>
                    <div  
                    value={post} 
                    key={post.id}
                    className={post.done === true ? cl.cross_out : cl.task}
                    onClick={() => doneTask(post)}
                    >
                        <span>{index + 1}. {post.task}</span>

                        <button 
                        className={cl.btn_del} 
                        onClick={() => {removeTask(post); changeComplited(post)}}
                        >
                            Delete
                        </button>

                    </div>
                )}
            </div>
    );
};

export default TaskList;