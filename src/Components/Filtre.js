import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {VisibilityTodo} from '../Actions';
import './Filtre.css'
const Filtre = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <ButtonGroup className='btn-group' aria-label="Basic example">
            <Button className='btn' onClick={(e)=>dispatch(VisibilityTodo(e.target.id))} id='Done' variant="secondary">Done</Button>
            <Button className='btn' onClick={(e)=>dispatch(VisibilityTodo(e.target.id))} id='Undone' variant="secondary">Undone</Button>
            <Button className='btn' onClick={(e)=>dispatch(VisibilityTodo(e.target.id))} id='All' variant="secondary">All</Button>
        </ButtonGroup>
        </div>
    )
}

export default Filtre
