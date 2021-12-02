import React, { useContext } from 'react';
import { AuthContext } from './components/context';
import cl from './TrashPage.module.css';

const TrashPage = () => {

const {trashList, setTrashList, selectPost, bool, setSelectTask} = useContext(AuthContext);

const cleadAll = () => {
    setTrashList([]);
    setSelectTask([]);
}

const clearedSelectTask = (post) => {
    // типо if selectTask === trashlist(даже если for по каждому массиву и сравнить id - не работает) -> trashlist.filter
} 
const classes = [cl.trash__task__btn];
// по идее
if (bool) {
    classes.push(cl.choose) // добавляется на ВСЕ элем - ???
}
// но это не работает
    return (
        <div className={cl.trash__list}>
            {trashList.map((post, index) =>
                <div key={post.id}>
                    <div className={cl.trash__task__wrapper}>
                        <span className={cl.trash__task}>
                            {index + 1}. {post.task}
                        </span>
                        <button className={classes.join(' ')} onChange={() => clearedSelectTask(post)} onClick={() => selectPost(post)}/>
                    </div>
                    <div className={cl.trash__btns__wrapper}>
                        <button className={cl.trash__btns} onChange={() => selectPost(post)}  onClick={() => clearedSelectTask(post)}>CLEAR SELECTED TASKS</button>
                        <button className={cl.trash__btns} onClick={cleadAll}>CLEAR ALL</button>
                    </div>
                </div>
                
            )}
        </div>
    );
};

export default TrashPage;