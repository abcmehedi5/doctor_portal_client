import React, { useEffect, useState } from 'react';
import './Doctors.css'
import caudi from '../../../images/doctor-small.png'
import DoctorsDetails from '../DoctorsDetails/DoctorsDetails';
const doctorsData = [
    {
        name: 'Dr.Caudi',
        img: caudi,
        phone: '+124566874'
    },

    {
        name: 'Dr.Caudi',
        img: caudi,
        phone: '+124566874'
    },

    {
        name: 'Dr.Caudi',
        img: caudi,
        phone: '+124566874'
    },
]
const Doctros = () => {

    const [doctor, setDoctor] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:4000/doctors')
            .then(res => res.json())
            .then(data => setDoctor(data))
    }, [])
    return (
        <section>
            <div className="container">
                <div className="section-header text-center my-5">
                    <h3 style={{ color: '#1cc7c1' }}>Our Doctros</h3>
                </div>
                <div className="row">
                    {
                        doctor.map(doctor => <DoctorsDetails doctor={doctor}></DoctorsDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctros;