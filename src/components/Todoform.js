

import React, {useState} from 'react';
import App from '../App';

const Todoform = ({addToDo}) => {
const [value, setValue]=useState('')
const handleSubmit = e=>{
  e.preventDefault();
  addToDo(value);
  setValue('');
}
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type='text' className='Itext' value={value} placeholder='Whats the task today' onChange={(e)=>setValue(e.target.value)}/>
      <button type='submit' className='btn'  >Submit</button>
    </form>
  )
}

export default Todoform;
