import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredApplication } from '../../utility/localStorage';
import Donate from '../Donate/Donate';

const Donation = () => {
    const cards = useLoaderData();

    const [donate, setDonate] = useState([]);

    useEffect( () =>{
        const donateCards = getStoredApplication();
        if(cards.length){
            const cardsDonate =[];
            for(const id of donateCards){
                const card = cards.find(card => card.id ===id);
                if(card){
                    cardsDonate.push(card)
                }
            }
            setDonate(cardsDonate);
        }
    },[cards])
    return (
        <div>
            <h2>Donation page : {donate.length}</h2>
            <ul>
                {
                    donate.map(donation => <Donate key={donation.id} donation={donation}></Donate>)
                }
            </ul>
        </div>
    );
};

Donation.propTypes = {
    
};

export default Donation;