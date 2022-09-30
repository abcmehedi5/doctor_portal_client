import React from 'react';

const ServiceDetails = ({ service }) => {
    return (
        <div className='col-md-4 text-center'>
            <img style={{ height: '60px' }} src={service.img} alt="" />
            <h5 className='mt-4 mb-4'>{service.name}</h5>
            <p className='text-secondary'>{service.description}</p>
        </div>
    );
};

export default ServiceDetails;