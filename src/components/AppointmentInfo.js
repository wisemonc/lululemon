import React from 'react';


const AppointmentInfo = ({ infoTitle, infoValue }) =>{
    return <div className="appointment-info" >
        <label>{infoTitle}: </label>
        <p>{infoValue}</p>
    </div>
}

export default AppointmentInfo;

