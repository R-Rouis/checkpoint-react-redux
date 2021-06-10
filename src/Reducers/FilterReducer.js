

export const FilterReducer = (state= '', action)=>{

    switch(action.type){
        case 'FILTER_IN_STATE' :
            return {...state,filter: action.payload};
        default:
            return state;
    }
}