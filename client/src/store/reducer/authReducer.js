import {
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from '../actionTypes';

const intialState={
    tokken:localStorage.getItem('tokken'),
    isAuthenticated:null,
    isLoading:false,
    user:null
};

export default  function (state=intialState,action){
    switch (action.type) {
        case USER_LOADING:
            return{
                ...state,
                isLoading:true
            }
          case USER_LOADED:
            localStorage.setItem('tokken',action.payload.token);

              return{
                  ...state,
                  isLoading:false,
                  isAuthenticated:true,
                  user:action.payload
              }  
           case LOGIN_SUCCESS:
           case REGISTER_SUCCESS:
               localStorage.setItem('tokken',action.payload.token);
               return{
                   ...state,
                   ...action.payload,
                   isAuthenticated:true,
                   isLoading:false,
                   user:action.payload
               }   
               case AUTH_ERROR:
               case LOGIN_FAIL:
               case LOGOUT_SUCCESS:
               case REGISTER_FAIL:
                   localStorage.removeItem('tokken');
                   return{
                       ...state,
                       tokken:null,
                       user:null,
                       isAuthenticated:false,
                       isLoading:false
                   } 
        default:
            return state;
            
    }
}