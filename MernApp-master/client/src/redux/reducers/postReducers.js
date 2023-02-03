import { LOGOUT } from '../actions/authType'
import { GET_POST_REQUEST , GET_POST_SUCCESS , GET_POST_FAILED  } from '../actions/PostTypes'

const initState = {
    postList : [] ,
    errors : null ,
    isLoading : false
}





const postReducers = (state = initState , {type , payload}) => {
    switch (type) {
        case GET_POST_REQUEST : 
            return {
                ...state,
                errors :null ,
                isLoading : true
            }
        
        case GET_POST_SUCCESS :
            return {
                ...state,
                postList : payload,
                errors: false  ,
                isLoading:false              
            }
        
        case GET_POST_FAILED : 
            return {
                ...state,
                errors: payload,
                isLoading:false
            }
        
        case LOGOUT : 
            return {
                ...state,
                postList : []
            }



        default:
            return state
    }
}



export default postReducers