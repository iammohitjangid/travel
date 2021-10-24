import React,{useState,useEffect}from 'react';
import ReactMapGl from 'react-map-gl';

import {useDispatch,useSelector} from 'react-redux'
import {fetchAllLocation} from '../../../store/action/locAction';
import Loader from '../loader/Loader';

const MapUI = ({children ,onDblClick,lat = 22.719568,lon = 75.857727})=>{

    const [viewport, setViewport] = useState({
        latitude: lat,
        longitude: lon,
        zoom: 5
      });
     
     const loading = useSelector(state=>state['loc']['loadingLocation']);
      
 
      useEffect(()=>{
          setViewport({
            latitude: lat,
            longitude: lon,
            zoom: 5
          })
      },[lat,lon]); 
 
    return(
        <>
      
       <ReactMapGl
       onDblClick={onDblClick}
        {...viewport}
         width="100%"
         height="100%"
         mapStyle="mapbox://styles/mannu304/cknwnppyx1xmk17qvi0cxh84e"
         mapboxApiAccessToken={process.env.REACT_APP_MAPBOXTOKEN}
         onViewportChange={(viewport) => setViewport(viewport)}
        >
            {children}
        </ReactMapGl>
        
        </>
    );
};

export default MapUI;