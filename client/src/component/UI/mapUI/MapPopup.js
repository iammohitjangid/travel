import React from "react";
import {Popup} from 'react-map-gl';
const MapPopUp=({children,latitude,longitude})=>{
    
    return(
        <React.Fragment>
        <Popup
            dynamicPosition={true}
            offsetTop={13}
            latitude={latitude}
            longitude={longitude}
            closeButton={false}
            closeOnClick={false}
            anchor="top" 
            >
            <div className="row">
            <div className="col-sm-12 col-md-12  ">
            <div className="card  text-center text-white bg-dark " 
               style={{maxWidth:'20em'}} 
            >
                {children}
            </div>
            </div>
            </div>
          </Popup>
          </React.Fragment>
        
    );
};

export default MapPopUp;