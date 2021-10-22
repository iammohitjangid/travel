import axios from 'axios';
import { 
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    AUTH_ERROR,
    USER_LOADED,
    USER_LOADING,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGOUT_SUCCESS,

} from '../actionTypes';

import {returnErrors,clearErrors} from './errorAction';

export const loadUser=()=>(dispatch,getState)=>{
    dispatch({type:USER_LOADING});
    axios.get('http://localhost:1337/user/getuser',tokkenConfig(getState)).then(res=>{
        dispatch({
            type:USER_LOADED,
            payload:res.data
        });
        dispatch(clearErrors());
    }).catch(err=>{ 
        dispatch(returnErrors(err.response.data,err.response.status,AUTH_ERROR));
        dispatch({
            type:AUTH_ERROR
        })
    })
}
export const register=(newUser)=>(dispatch,getState)=>{

    const config=tokkenConfig(getState);
    axios.post('http://localhost:1337/user/register',newUser,config).then(res=>dispatch({
        type:REGISTER_SUCCESS,
        payload:res.data
    })).catch(err=>{
        dispatch(returnErrors(err.response.data,err.response.status,REGISTER_FAIL));
        dispatch({
            type:REGISTER_FAIL
        })
    })
}
export const login = (body) => (dispatch , getState) => {
    // headers
    const config = tokkenConfig(getState);

    //request body
   

    axios.post('http://localhost:1337/user/login',body,config)
        .then(res => dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, LOGIN_FAIL));
            dispatch({
                type: LOGIN_FAIL
            });
        });
}
// logout user
export const logout = ()=>dispatch => {
    dispatch(clearErrors());
    dispatch ({
        type: LOGOUT_SUCCESS
    });
}


export const tokkenConfig = getState=>{
    const tokken = getState().auth['tokken'];
    let config = {
        headers:{
        "Content-Type":"application/json"}
    };
    if(tokken){
        config.headers['x-auth-tokken'] = tokken;
    }
    return config;
}