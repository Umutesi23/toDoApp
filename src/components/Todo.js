import React from 'react'
import trashbin from './trashbin.gif';
import edit from './edit.gif';
import verified from './verified.png';

import App from '../App';

const Todo = ({task,toggleComplete,toDelete,toEdit}) => {
  
  
  return (
    <div className='wtd' >
        <p className={`${task.completed ? "completed" : ""}`}>{task.task}</p>
<div className='picD'>
<img  src={verified} alt='check'  className='pic sfi' onClick={()=>toggleComplete(task.id)}/>
  <img src={trashbin} alt='trash'  className='pic' onClick={()=>toDelete(task.id)}/>
<img src={edit} alt='edit' className='pic' onClick={()=>toEdit(task.id)}/>
</div>
</div>

  )
}

export default Todo
