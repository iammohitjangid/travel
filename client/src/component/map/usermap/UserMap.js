import React,{useEffect }from 'react';
import MapUI from '../../UI/mapUI/MapUI';

import { useDispatch , useSelector} from 'react-redux';
import {fetchUserLocation} from '../../../store/action/locAction';

const UserMap=()=>{
    const userLocationDispatch = useDispatch();
    const userId = useSelector(state=>state['auth']['user']);
    useEffect(()=>{
        userLocationDispatch(fetchUserLocation());
    },[])

    return(
        <MapUI>
        </MapUI>
    );
}

export default UserMap