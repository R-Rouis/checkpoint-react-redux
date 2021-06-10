import React, { useState } from 'react'
import {Form,Button} from 'react-bootstrap';
import {addtodo} from '../Actions/index';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import './AddTask.css';



const AddTask = () => {
const [totask, setTotask] = useState('') 
const dispatch = useDispatch()
 
const condition =()=>{ 
    if (totask ===''){return alert('the input is empty')}
};

    return (
        
        <div>
            <Form  style={{display: 'flex', justifyContent:'center'}}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control className='inputadd' type="text" placeholder="write a task"
                    value={totask} onChange={(e) =>setTotask(e.target.value)}/>
                </Form.Group>
                <Button className='add-btn' variant="outline-primary" onClick={()=>{if(totask.length>0) {dispatch(addtodo({
                id: uuidv4(),
                completed: false,
                task: totask, 
                })) 
                setTotask('')
                }
                condition(totask)}}>Add the task</Button>
            </Form>
        </div>
    )
}

export default AddTask