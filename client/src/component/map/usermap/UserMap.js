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
    
    const[showPopUp , setPopUP] = useState({});
    const locations = useSelector(state=>state['loc']['userLocations']);
    const[enteries , setEnteries] = useState([]);


    useEffect(()=>{
        setEnteries(locations) 
     },[locations]);
    
    useEffect(()=>{
        userLocationDispatch(fetchUserLocation());

    },[userLocationDispatch]);



    const onSubmit=(form)=>{
        form['latitude'] = addEntryLocation.latitude;
        form['longitude'] = addEntryLocation.longitude;
        userLocationDispatch(createUserLocation(form));
        setAddEntryLocation(null);
        userLocationDispatch(fetchUserLocation());
    }

    const dbClickedListner=(e)=>{
        const [longitude,latitude]=e.lngLat ;
   
        setAddEntryLocation({
            latitude,
            longitude
        });
     

    }
    return(
        <MapUI 
        onDblClick={dbClickedListner}
        lon={11.555}
        lat={15.55}
        >

            {enteries && enteries.map(data=>(
                <>
                <Marker
                key={data['_id']}
                latitude={data['latitude']}
                longitude={data['longitude']}
                offsetLeft={-10}
                offsetTop={-10}
               >
                 <MarkerIcon 
                className=""
                color="#E9851B" 
                clicked={()=>setPopUP({
                  [data._id]: true 
                })}/>
               </Marker>
               {showPopUp[data._id] && <MapPopUp 
                  latitude={data['latitude']}
                  longitude={data['longitude']}
                >
                      <img src={data.image} className="card-img-top rounded " alt="..."/>
                      <div className="mt-4">
                      <h5 className="card-title">{data.title}</h5>
                      <p className="card-text fs-6 fw-light " >{data.description}</p>
{/*                       <p className="text-muted fs-6 fw-lighter"> {}</p>
 */}                      <button 
                      onClick={()=>setPopUP(prev=>!prev)}
                      className="btn btn-primary mb-3">Close</button>
                         

                      <div className="progress " style={{height:'.5rem'}}>
                      <div className={`progress-bar w-${(data.rating*100)/5} justify-content-end`} role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"><p  className="text-white "> </p></div>
                      </div>
                      </div>
                </MapPopUp>
                }
                </>
            ))}



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