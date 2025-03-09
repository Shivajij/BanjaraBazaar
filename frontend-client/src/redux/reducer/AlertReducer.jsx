import { actiontype } from "./actionType"

const initialstate= {
    message:"",
    type:"",
    loading:false
}

export const alertReducer = (state = initialstate, action)=>{
    switch(action.type){
        case actiontype.ALERT_SUCCESS:
            return {
                ...state,
                message: "",
                loading: false
            }
        case actiontype.LOADING:
            return {
                ...state,
                loading: true
            }
        case actiontype.LOADED:
            return {
                ...state,
                loading: false
            }
            default:
              return  state;
        
    }
}
