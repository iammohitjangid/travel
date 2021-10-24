import React,{useEffect,useState }from 'react';
import MapUI from '../../UI/mapUI/MapUI';
import MarkerIcon from '../../UI/icons/MarkerIcon';
import { Marker } from 'react-map-gl';
import  LocationForm from '../usermap/locationform/LocationForm';
import MapPopUp from '../../UI/mapUI/MapPopup';
import { useDispatch , useSelector} from 'react-redux';
import {fetchUserLocation} from '../../../store/action/locAction';
import {createUserLocation} from './../../../store/action/locAction'; 

const UserMap=()=>{
    const [addEntryLocation,setAddEntryLocation]= useState(null);
    const userLocationDispatch = useDispatch();
    const userId = useSelector(state=>state['auth']['user']);
    useEffect(()=>{
        userLocationDispatch(fetchUserLocation());
    },[]);

    const onSubmit=(form)=>{
        form['latitude'] = addEntryLocation.latitude;
        form['longitude'] = addEntryLocation.longitude;
        userLocationDispatch(createUserLocation(form));
    }

    const dbClickedListner=(e)=>{
        const [longitude,latitude]=e.lngLat ;
   
        setAddEntryLocation({
            latitude,
            longitude
        });
        console.log(addEntryLocation);

    }
    return(
        <MapUI onDblClick={dbClickedListner}>
            {addEntryLocation ? (<>
           <Marker 
            latitude={addEntryLocation.latitude} 
            longitude={addEntryLocation.longitude} 
            offsetLeft={-10}
            offsetTop={-10}
            >
            <MarkerIcon
             color="red"       
              />
            </Marker >

           
              <MapPopUp
               latitude={addEntryLocation.latitude}
               longitude={addEntryLocation.longitude}
              >
              <LocationForm 
               onSubmit={onSubmit}

              />
              </MapPopUp>
        </>):null}

        </MapUI>
    );
}

export default UserMap