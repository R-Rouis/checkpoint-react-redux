

export const addtodo =(Todo)=>{
    return{
        type: 'ADD_TODO',
        payload : Todo,
    }
}

export const RemoveTodo =(id)=>{
    return{
        type: 'REMOVE_TODO',
        payload : id,
    }
}

export const ToggleTodo =(id)=>{
    return{
        type: 'TOGGLE_TODO',
        payload : id,
    }
}

export const EditTodo =(todo)=>{
    return{
        type: 'EDIT_TODO',
        payload : todo,
    }
}

export const VisibilityTodo =(filter)=>{
    return{
        type: 'FILTER_IN_STATE',
        payload : filter,
    }
}