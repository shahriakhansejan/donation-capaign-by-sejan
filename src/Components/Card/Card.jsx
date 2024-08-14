import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Statistics from '../Statistics/Statistics';

const Card = ({ card }) => {
    const { id, category, background_color, title, title_text_color,background_title, image } = card;



    return (
        <Link to={`/card/${id}`}>
        
        <div className={`card px-0 bg-${background_color}`}>
            <figure><img className='pt-4' src={image} alt="" /></figure>
            <div className="card-body">
                <h2 className={`card-title`}><span className={`bg-${background_title} text-${title_text_color} px-2 font-bold rounded`}>{category}</span></h2>
                <p className={`text-xl font-bold text-${title_text_color}`}>{title}</p>

            </div>
        </div>
        
        </Link>
    );
};

Card.propTypes = {

};

export default Card;
