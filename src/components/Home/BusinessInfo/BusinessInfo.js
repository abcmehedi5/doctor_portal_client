import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
const infosData = [
    {
        title: 'opening Hours',
        description: 'We are open 7 days',
        icon: <i class="fa-solid fa-clock"></i>,
        background: 'primary'
    },

    {
        title: 'Visit Our Location',
        description: 'Brookly,NY 7876,Usa',
        icon: <i class="fa-solid fa-location-dot"></i>,
        background: 'dark'
    },

    {
        title: 'Contact us now',
        description: '+045877893168',
        icon: <i class="fa-solid fa-phone"></i>,
        background: 'primary'
    }
]
const BusinessInfo = () => {
    return (
        <section className='d-flex justify-content-center'>
            <div className='w-75 row'>
                {
                    infosData.map(info => <InfoCard info={info}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;