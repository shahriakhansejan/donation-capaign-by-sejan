import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';

const Cards = () => {
    const [cards, setCards] = useState([]);

        useEffect(() =>{
            fetch('donate.json')
            .then(res => res.json())
            .then(data => setCards(data));
        },[])
    return (
        
        <div className='container mx-auto'>
            <h2>Cards: {cards.length}</h2>
            <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {
                cards.map(card => <Card key={card.id} card={card}></Card>)
            }
            </div>
        </div>
    );
};

Cards.propTypes = {
    
};

export default Cards;