import React,{useState,useEffect}from 'react';
import ReactMapGl from 'react-map-gl';

import {useDispatch} from 'react-redux'
import {fetchAllLocation} from '../../../store/action/locAction';

const MapUI = ({children})=>{

    const [viewport, setViewport] = useState({
        latitude: 22.719568,
        longitude: 75.857727,
        zoom: 5
      });
     
     const dispatchLocations = useDispatch();


      useEffect(()=>{
          dispatchLocations(fetchAllLocation());
      },[dispatchLocations]); 

    return(
        <ReactMapGl
        {...viewport}
         width="100%"
         height="100%"
         mapStyle="mapbox://styles/mannu304/cknwnppyx1xmk17qvi0cxh84e"
         mapboxApiAccessToken={process.env.REACT_APP_MAPBOXTOKEN}
         onViewportChange={(viewport) => setViewport(viewport)}
        >
            {children}
        </ReactMapGl>
    );
};

export default MapUI;