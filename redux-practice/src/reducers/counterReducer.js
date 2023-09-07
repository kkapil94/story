const initialState = {
    counter:0
}
export const  counterReducer = (state=initialState,action)=>{
    switch (action.type) {
        case 'INC':return {
            ...state,
            counter:state.counter+1
        }
        case 'DEC':{
            if (state.counter>0) {
                return{
                    ...state,
                    counter:state.counter-1
            }
        }}
        default:return state
        
    }
}