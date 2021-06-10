import React, { useState } from 'react';
import { EditTodo, RemoveTodo } from '../Actions';
import {ToggleTodo} from '../Actions';
import {useDispatch} from 'react-redux';
import './Task.css';


const Task = ({todo}) => {
    const dispatch = useDispatch();
    const [isEdited, setIsEdited] = useState(false);
    const [todoTask, setTodoTask] = useState('');
    return (
        <div className='taskContainer'>
            <div className='task'>
            {isEdited? 
            <input onChange={(e)=> setTodoTask(e.target.value)} type='text' value={todoTask}></input>
            : 
            <h5 style={{textDecoration: todo.completed? 'line-through' : 'none'}}>
            {todo.task} </h5> }
            </div>
            <button className='button'  onClick={()=> dispatch(ToggleTodo(todo.id))}>
                {todo.completed? <i class="fas fa-check-double"></i> : <i class="fas fa-times"></i>}</button>
            <button className='button' onClick={()=>{dispatch(EditTodo({...todo,task:todoTask}))
                setIsEdited(!isEdited)
                setTodoTask(todo.task)
                }}>
                {isEdited? 'Update' : <i class="fas fa-edit"></i>} </button>
            <button className='button'><i class="fas fa-trash-alt" onClick={()=> dispatch(RemoveTodo(todo.id))}></i></button>
            
        
        </div>
    )
}

export default Task
