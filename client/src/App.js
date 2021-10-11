import React,{useState,useEffect} from 'react';
import ReactMapGL,{ Marker } from 'react-map-gl';
import { listLogEntries} from './api';
import  './App.css';
import MarkerIcon from './icons/MarkerIcon';
import Popup from "./Popup/Pop";
import Form from './Popup/LogEntryForm/LogEntryForm'; 

function App() {
  const [popUp ,setPopUp] = useState({});
  const [addEntryLocation,setAddEntryLocation]= useState(null);
  const [entries,setEntries] = useState([]);
  const [viewport, setViewport] = useState({
    latitude: 22.719568,
    longitude: 75.857727,
    zoom: 5
  });

 async function loadLocations(){
  const data = await listLogEntries();
  setEntries(data);
  }
  
  useEffect(()=>{
      loadLocations();
  },[])

  const showAddMarkerPopUp=(e)=>{
    const [longitude,latitude]=e.lngLat 
    console.log(e)
  setAddEntryLocation({
    latitude,
    longitude
  });
  }

  return (
    <div className="App">
       <ReactMapGL
      {...viewport}
      onDblClick={showAddMarkerPopUp}
      width="100%"
      height="100%"
      mapStyle="mapbox://styles/mannu304/cknwnppyx1xmk17qvi0cxh84e"
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOXTOKEN}
      onViewportChange={(viewport) => setViewport(viewport)}
    >
      { entries.map((data)=>(
        <div key={data._id} >
        <Marker 
        
        latitude={data.latitude} 
        longitude={data.longitude} 
        offsetLeft={-10}
        offsetTop={-10}
       >
        
         <MarkerIcon color="#E9851B" clicked={()=>setPopUp({
           [data._id]: true 
         })} />
               </Marker >
       {popUp[data._id] && (
       <Popup 
          lat={data.latitude}
          long={data.longitude}
          clicked={()=>setPopUp(prev=>!prev)}>
         <>
         <h4 style={{textAlign:"center"}}>{data.title}</h4>
         <p style={{textAlign:"center"}}><strong>{data.description}</strong></p>
         <p style={{textAlign:"center"}}><strong>{data.comments}</strong></p>
         <p style={{textAlign:"center"}}>Date Of Visit <br/><strong>{new Date(data.visitDate).toLocaleDateString()}</strong></p> 
         </>
         </Popup>)}


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

            <Popup 
              lat={addEntryLocation.latitude}
              long={addEntryLocation.longitude}
              clicked={()=>setAddEntryLocation(null)
              }
              >
                <Form 
                onClose={()=>setAddEntryLocation(null)}
                onRefresh={()=>loadLocations()}
                long={addEntryLocation.longitude} 
                lat={addEntryLocation.latitude}  />
              </Popup>
        </>):null}

       </div>
      ))}
      
      
    </ReactMapGL>
    </div>
  );
}

export default App;
