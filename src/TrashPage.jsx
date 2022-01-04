import React, { useContext } from 'react';
import { DataContext } from './components/context';
import s from './TrashPage.module.css';

const TrashPage = () => {

    const {trashList, setTrashList, selectPost, setSelectTask, returnTasks} = useContext(DataContext);

    const cleadAll = () => {
        setTrashList([]);
        setSelectTask([]);
    }

    const removeSelectPosts = () => {
        setTrashList(trashList.filter(currentTask => currentTask.complited !== true));
        setSelectTask([]);
    }
    
    trashList.map(currentTask => {
        if (currentTask.done === true){
            currentTask.done = !currentTask.done
        }
        return currentTask
    })

    return (
        <div className={s.trash__list}>

            {trashList.map((task, index) =>
                <div key={task.id}>
                    <label className={s.trash__task__wrapper}>
                        <span className={s.trash__task}>
                            {index + 1}. {task.newTask}
                        </span>
                        <input 
                        type='checkbox' 
                        onClick={() => selectPost(task)}
                        />
                    </label>
                </div>
            )}
                <div className={s.trash__btns__wrapper}>
                    <button className={s.trash__btns} onClick={() => returnTasks()}>RETURN</button>
                    <button className={s.trash__btns} onClick={() => removeSelectPosts()}>CLEAR SELECTED TASKS</button>
                    <button className={s.trash__btns} onClick={cleadAll}>CLEAR ALL</button>
                </div>
        </div>
    );
};

export default TrashPage;