import React,{useState,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { Marker} from 'react-map-gl';
import MapUI from '../UI/mapUI/MapUI';
import MarkerIcon from '../../component/UI/icons/MarkerIcon';
import MapPopUp from '../UI/mapUI/MapPopup';
import {fetchAllLocation} from '../../store/action/locAction';


const Map=(props)=>{
    const [showPopup, setPopUp] = useState({});
    const locations = useSelector(state=>state['loc']);
    const[enteries,setEnteries] = useState([{...locations['data']}]);
    const dispatchLocations = useDispatch();

 
    useEffect(()=>{
       setEnteries(locations['data']) ;
    },[locations]);

    useEffect(()=>{
      dispatchLocations(fetchAllLocation());
    },[dispatchLocations]); 
    
    return(
      
        <MapUI>           
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
                clicked={()=>setPopUp({
                  [data._id]: true 
                })}/>
                </Marker>  

                {showPopup[data._id] && <MapPopUp 
                  latitude={data['latitude']}
                  longitude={data['longitude']}
                >
                      <img src={data.image} className="card-img-top rounded " alt="..."/>
                      <div className="mt-4">
                      <h5 className="card-title">{data.title}</h5>
                      <p className="card-text fs-6 fw-light " >{data.description}</p>
{/*                       <p className="text-muted fs-6 fw-lighter"> {}</p>
 */}                      <button 
                      onClick={()=>setPopUp(prev=>!prev)}
                      className="btn btn-primary mb-3">Close</button>
                         

                      <div className="progress " style={{height:'.5rem'}}>
                      <div className={`progress-bar w-${(data.rating*100)/5} justify-content-end`} role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"><p  className="text-white "> </p></div>
                      </div>
                      </div>
                </MapPopUp>
                }

               </>                     
           ))}   
          
           
        </MapUI>
    )

}
     


export default Map;