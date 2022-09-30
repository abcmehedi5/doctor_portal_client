import React from 'react';
import Doctros from '../Doctors/Doctros';

const DoctorsDetails = ({doctor}) => {
    return (
        <div className='col-md-4 '>
            <img style={{height:'200px'}} className='img-fluid' src={`http://localhost:4000/${doctor.img}`} alt="" />
            <h5>{doctor.name}</h5>
            <p><i style={{color:'#1cc7c1'}} class="fas fa-envelope"></i> {doctor.email}</p>
            <p><i style={{color:'#1cc7c1'}} class="fa-solid fa-phone"></i> {doctor.phone}</p>
        </div>
    );
};

export default DoctorsDetails;