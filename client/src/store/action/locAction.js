import axios from 'axios';
import {clearErrors} from '../action/errorAction';
import { 
    CREATE_USER_LOCATION,
    FETCH_ALL_LOCATION,
    FETCH_USER_LOCATION,
    LOADING_LOCATIONS,
    CREATE_USER_LOCATION_FAILED,
    FETCH_ALL_LOCATION_FAILED,
    FETCH_USER_LOCATION_FAILED
} from '../actionTypes';
import { returnErrors } from './errorAction';

export const fetchAllLocation=()=>(dispatch,getState)=>
{
    dispatch({type:LOADING_LOCATIONS});
    axios.get('http://localhost:1337/api/log/').then(res=>{
        dispatch({
            type:FETCH_ALL_LOCATION,
            payload:res.data
           });

    }).catch(err=>{
        dispatch(returnErrors(err.response.data.message,err.response.status,FETCH_ALL_LOCATION_FAILED));
        dispatch({type:FETCH_ALL_LOCATION_FAILED})
    });
}


/* export const fetchUserLocation=(user)=>(dispatch,getState)=>{
    dispatch({type:LOADING_LOCATIONS});
//errr
    axios.get('http://localhost:1337/api/log/userlocation',user,tokkenConfig(getState)).then(res=>{     
    dispatch({
         type:FETCH_USER_LOCATION,
         payload:res.data
        });
    }).catch(err=>{
        dispatch(returnErrors(err.response.data.message,err.response.status,FETCH_USER_LOCATION_FAILED));
        dispatch({
            type:FETCH_USER_LOCATION_FAILED
        });
    })
} */

export const fetchUserLocation=()=>(dispatch,getState)=>{
    dispatch({type:LOADING_LOCATIONS});
    axios.get('http://localhost:1337/api/log/userlocation',tokkenConfig(getState)).then(res=>{
        dispatch({
            type:FETCH_USER_LOCATION,
            payload:res.data
        });
        dispatch(clearErrors());
    }).catch(err=>{ 
        dispatch(returnErrors(err.response.data,err.response.status,FETCH_USER_LOCATION_FAILED));
        dispatch({
            type:FETCH_USER_LOCATION_FAILED
        })
    })
}

export const createUserLocation=(locationData)=>(dispatch,getState)=>{
    dispatch({type:LOADING_LOCATIONS});
       // const body = JSON.stringify(locationData);
       
    axios.post('http://localhost:1337/api/log/',locationData,tokkenConfig(getState)).then(res=>{
        dispatch({
         type:CREATE_USER_LOCATION,
         payload:res.data
        });
    }).catch(err=>{
        dispatch(returnErrors(err.response.data.message,err.response.status,CREATE_USER_LOCATION_FAILED));
        dispatch({
            type:CREATE_USER_LOCATION_FAILED
        })
    })
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

