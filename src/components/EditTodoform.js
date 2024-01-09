

import React, {useState} from 'react';
import App from '../App';

const EditTodoform = ({toEdit,task}) => {
  
  const [value, setValue] = useState(task.task);
  const handleSubmit = (e)=>{
  e.preventDefault();
  toEdit(value,task.id);
  setValue('')
}
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type='text' className='Itext' value={value} placeholder='Update the task' onChange={(e)=>setValue(e.target.value)}/>
      <button type='submit' className='btn'  >Submit</button>
    </form>
  )
}

export default EditTodoform;
