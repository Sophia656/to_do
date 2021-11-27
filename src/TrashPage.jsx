import React, { useContext } from 'react';
import { AuthContext } from './components/context';
import './App.css';

const TrashPage = () => {
const {trashList} = useContext(AuthContext);

    return (
        <div className='trash__list'>
            {trashList.map((post, index) =>
                <div className='trash__task'>{index + 1}. {post.task}</div>    
            )}
        </div>
    );
};

export default TrashPage;