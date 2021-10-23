import React,{useState,useEffect}from 'react';
import ReactMapGl from 'react-map-gl';

import {useDispatch,useSelector} from 'react-redux'
import {fetchAllLocation} from '../../../store/action/locAction';
import Loader from '../loader/Loader';

const MapUI = ({children ,onDblClick})=>{

    const [viewport, setViewport] = useState({
        latitude: 22.719568,
        longitude: 75.857727,
        zoom: 5
      });
     
     const dispatchLocations = useDispatch();
     const loading = useSelector(state=>state['loc']['loadingLocation']);
      

      useEffect(()=>{
          dispatchLocations(fetchAllLocation());
      },[dispatchLocations]); 

    return(
        <>
       { !loading ?
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
        :<Loader />
       }
        </>
    );
};

export default MapUI;