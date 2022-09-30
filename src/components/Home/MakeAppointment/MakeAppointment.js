import React from 'react';
import './MakeAppointment.css'
import doctor from '../../../images/doctor.png'
const MakeAppointment = () => {
    return (
        <section className='make-appointment'>
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img className='img-fluid' src={doctor} alt="" />
                    </div>

                    <div className="col-md-7 py-5 text-white">
                        <h5>APPOINTMENT</h5>
                        <h1 className='my-4'>Make an appointment <br /> Today</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, magnam repellendus! Dolore alias blanditiis velit?</p>
                        <button className='btn btn-primary my-4'>Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;