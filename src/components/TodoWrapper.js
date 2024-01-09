import React,{useState} from 'react';
import Todoform from './Todoform';
import { v4 as uuidv4 } from "uuid";
import Todo from './Todo';
import App from '../App';
import sweat from'./sweat.gif'
import EditTodoform from './EditTodoform';
uuidv4();
const TodoWrapper = () => {
  const[todos, setTodos]=useState([]);
  const addToDo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    console.log(todos);
  }

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  const toDelete =(id)=>{
setTodos(todos.filter((todo)=>todo.id!==id))

  }

  const toEdit=(id)=>{
setTodos(todos.map((todo)=>todo.id===id? {...todo, isEditing:!todo.isEditing} :todo))

  }

  const editTask=(task,id)=>{ setTodos(todos.map((todo) => todo.id===id ? {...todo, task, isEditing: !todo.isEditing} : todo)
    
    )
  
  }

  return (
    <div className='TodoW'>  
      <h2>Get Things Done!<img src={sweat} alt='smileyface' className='pichead ' /></h2>
<Todoform addToDo={addToDo}/>
{todos.map((todo,index)=>
  todo.isEditing? (<EditTodoform toEdit={editTask} task={todo}/>):(<Todo task={todo} key={index} toggleComplete={toggleComplete} toDelete={toDelete} toEdit={toEdit}/>
  )
) }  


    </div>
  )
}

export default TodoWrapper
