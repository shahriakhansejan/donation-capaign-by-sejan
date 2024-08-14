import React from 'react';
import PropTypes from 'prop-types';

const Donate = ({donation}) => {
    return (
        <div className='flex mt-24 container mx-auto'>
            <div>
            <img src={donation.image} alt="" />
            </div>
            <div className='pl-6'>
                <h2>{donation.category}</h2>
                <h1>{donation.title}</h1>
                <h2>$ 290</h2>
                <button>View Details</button>
            </div>
        </div>
    );
};

Donate.propTypes = {
    
};

export default Donate;