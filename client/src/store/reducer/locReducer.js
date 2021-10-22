import { 
    CREATE_USER_LOCATION,
    FETCH_USER_LOCATION, 
    FETCH_ALL_LOCATION,
    LOADING_LOCATIONS,
    CREATE_USER_LOCATION_FAILED,
    FETCH_ALL_LOCATION_FAILED,
    
} from '../actionTypes';

const intialState={
    data:null,
    loadingLocation:null,
    userLocations:null
};

export default function (state=intialState,action){
    switch(action.type){
        case LOADING_LOCATIONS:
            return{
                ...state,
                loadingLocation:true
            }
        case CREATE_USER_LOCATION:
            return {
                ...state,
                data:action.payload.data,
                loadingLocation:false
            }
            case FETCH_USER_LOCATION:
                return{
                    ...state,
                    userLocations:action.payload,
                    loadingLocation:false
                }
            case FETCH_ALL_LOCATION:
                return{
                    ...state,
                    data:action.payload,
                    loadingLocation: false
                }
            case CREATE_USER_LOCATION_FAILED:
            case FETCH_ALL_LOCATION_FAILED:
           
            return{
                ...state,
                loadingLocation:false
            }
            default:
                return state
    }
}