import axios from 'axios';
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


export const fetchUserLocation=(userTokken,locationData)=>(dispatch,getState)=>{
    dispatch({type:LOADING_LOCATIONS});
    const body = JSON.stringify(locationData);
    axios.get('http://localhost:1337/api/log/userlocation',tokkenConfig(userTokken),body).then(res=>{
        dispatch({
         type:FETCH_USER_LOCATION,
         payload:res.data
        });
    }).catch(err=>{
        dispatch(returnErrors(err.response.data.message,err.response.status,CREATE_USER_LOCATION_FAILED));
        dispatch({
            type:CREATE_USER_LOCATION_FAILED
        });
    })
}

export const createUserLocation=(userTokken)=>dispatch=>{
    dispatch({type:LOADING_LOCATIONS});
    axios.post('http://localhost:1337/api/log/',tokkenConfig(userTokken)).then(res=>{
        dispatch({
         type:CREATE_USER_LOCATION,
         payload:res.data
        });
    }).catch(err=>{
        dispatch(returnErrors(err.response.data.message,err.response.status,FETCH_USER_LOCATION_FAILED));
        dispatch({
            type:FETCH_USER_LOCATION_FAILED
        })
    })
}
export const tokkenConfig = tokken=>{
    const config = {
        header:{
        "Content-type":"application/json"}
    };
    if(tokken){
        config.header['x-auth-tokken'] = tokken;
    }
    return config;
}

