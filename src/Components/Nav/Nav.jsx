import React from 'react';
import PropTypes from 'prop-types';

const Nav = () => {
    return (
        <div className="bg-center bg-opacity-90 bg-cover bg-[url('Clothing.png')] bg-no-repeat bg-white bg-blend-overlay">

            <div className="container mx-auto ">

                <div className='text-center py-80'>
                    <h1 className='text-5xl font-bold'>I Grow By Helping People In Need</h1>
                    <div className="join">

                        <div className='mt-10 '>
                            <input className="input input-bordered join-item" placeholder="Search Here..." />
                            <button className="btn join-item rounded-r-lg text-white bg-[#FF444A]">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Nav.propTypes = {
    
};

export default Nav;