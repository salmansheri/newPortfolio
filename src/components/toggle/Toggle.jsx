import React from 'react'; 
import "./toggle.css"; 
import Sun from '../../assets/images/sun.png'; 
import Moon from '../../assets/images/moon.png'
function Toggle() {
    return (
        <div className="t">
            <img src={Sun} alt="" className="t-icon"/>
            <img src={Moon} alt="" className="t-icon"/>
            <button className="t-button"></button>
        </div>
    )
}

export default Toggle; 