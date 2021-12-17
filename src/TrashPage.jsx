import React, { useContext } from 'react';
import { AuthContext } from './components/context';
import cl from './TrashPage.module.css';

const TrashPage = () => {

    const {trashList, setTrashList, selectPost, setSelectTask, selectTasksToReturn} = useContext(AuthContext);

    const cleadAll = () => {
        setTrashList([]);
        setSelectTask([]);
    }
    const removeSelectPosts = () => {
        setTrashList(trashList.filter(p => p.complited !== true));
        setSelectTask([]);
      }

    const returnTasks = () => {
        if (selectTasksToReturn) {
            setTrashList(trashList.filter(p => p.complited !== true));
            setSelectTask([]);
        }
    }
    
    return (
        <div className={cl.trash__list}>

            {trashList.map((post, index) =>
                <div key={post.id}>
                    <label className={cl.trash__task__wrapper}>
                        <span className={cl.trash__task}>
                            {index + 1}. {post.task}
                        </span>
                        <input type='checkbox' onChange={() => selectTasksToReturn()} onClick={() => selectPost(post)}/>
                    </label>
                </div>
            )}
                <div className={cl.trash__btns__wrapper}>
                    <button className={cl.trash__btns} onClick={() => returnTasks()}>RETURN</button>
                    <button className={cl.trash__btns} onClick={() => removeSelectPosts()}>CLEAR SELECTED TASKS</button>
                    <button className={cl.trash__btns} onClick={cleadAll}>CLEAR ALL</button>
                </div>
        </div>
    );
};

export default TrashPage;