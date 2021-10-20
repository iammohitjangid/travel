import React from 'react';
import {Popup } from "react-map-gl";

export default function Pop({children,lat,long,clicked}) {
    return (
        <>
          <Popup
          dynamicPosition={true}
          offsetTop={13}
          latitude={lat}
          longitude={long}
          closeButton={true}
          closeOnClick={false}
          onClose={clicked}
          anchor="top" >
          <div >
              {children}           
            </div>
        </Popup>
        </>
    )
}
