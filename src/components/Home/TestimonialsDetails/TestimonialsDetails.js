import React from 'react';

const TestimonialsDetails = ({ testimonials }) => {
    return (
        <div className='col-md-4 text-secondary my-5'>
            <p>{testimonials.quote}</p>

            <div>
                <div className='d-flex  mt-5 testimonials-footers'>
                    <img style={{ width: '50px', height: '50px' }} src={testimonials.img} alt="" />
                    <div className='ms-2'>
                        <h5 style={{color:'#1cc7c1'}}>{testimonials.name}</h5>
                        <p>{testimonials.from}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialsDetails;