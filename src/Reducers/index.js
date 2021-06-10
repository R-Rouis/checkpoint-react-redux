import {TodoReducer} from './TodoReducer';
import {FilterReducer} from './FilterReducer'
import {combineReducers} from 'redux'

export const RootReducer = combineReducers({
    TodoReducer,
    Filter : FilterReducer
})