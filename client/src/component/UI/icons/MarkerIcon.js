import React from 'react'
import './icons.css';

export default function MarkerIcon({color,clicked}) {
    return (
        <div onClick={clicked} className="MarkerClick">
            <svg 
            style={{
                "fill":color
            }}
            
            viewBox="0 0 24 24"
             stroke="currentColor" 
             strokeWidth="2" 
             height="24px"
             width="22px"
             fill="none" 
             strokeLinecap="round" 
             strokeLinejoin="round"
              className="css-i6dzq1">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z">
                 </path>
                 <circle cx="12" cy="10" r="3">
                </circle></svg>
        </div>
    )
}
