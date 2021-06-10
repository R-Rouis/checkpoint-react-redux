
import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const ListTask = () => {
    const todos = useSelector(state => state.TodoReducer)
    const visibilityFilter = useSelector(state=> state.Filter.filter)
    console.log(todos)
    console.log('visibilityFilter',visibilityFilter)

    const FilteringTodos =(todos,visibilityFilter)=>{
        const showingTodos = todos.map(el=> <Task key={el.id} todo={el} />);
            switch(visibilityFilter){
                case 'All' :
                    return showingTodos;
            
                case 'Done' :
                    return todos.filter(el=> el.completed).map(el=> <Task key={el.id} todo={el} />)
                    
                case 'Undone' :
                    return todos.filter(el=> !el.completed).map(el=> <Task key={el.id} todo={el} />)
                default:
                    return showingTodos;
                
            }
    }
    return (
        <div style={{display:'grid',gridTemplateColumns: 'auto auto',gap: '5px'}}>
           {FilteringTodos(todos,visibilityFilter)}
        </div>
    )
}

export default ListTask
