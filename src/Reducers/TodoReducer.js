
export let todos=[
    {
        id:1,
        completed: true,
        task: "Learn React"
    },
    {
        id:2,
        completed: false,
        task:" Learn Redux"
    }]

export const TodoReducer = (state=todos, action)=>{
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.payload];
        case 'REMOVE_TODO' :   
            return state.filter(el=> el.id !== action.payload)
        case 'TOGGLE_TODO' :
            return state.map(el => el.id === action.payload ? {...el,completed:!el.completed} : el)
        case 'EDIT_TODO' :
            return state.map(el=> el.id === action.payload.id ? {...el, task:action.payload.task} : el)
        default:
            return state;
    }
}