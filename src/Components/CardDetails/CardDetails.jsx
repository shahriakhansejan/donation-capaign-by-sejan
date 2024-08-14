import PropTypes from 'prop-types';
import { useLoaderData, useParams } from 'react-router-dom';
import { saveApplication } from '../../utility/localStorage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CardDetails = () => {
    const details = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const detail = details.find(detail => detail.id === idInt);

    const {image,title,title_text_color,description} = detail;

    const handleToast =()=>{
        saveApplication(idInt);
        toast('You have Donate $290 Successfully')
    }
    return (
        <div className='container mx-auto'>
            <img className='w-full pt-24 max-h-[1024px]' src={image} alt="" />
            <div>
                <div className='relative -mt-[132px] bg-opacity-30 bg-black p-9'>
                <button onClick={handleToast} className={`text-xl font-semibold bg-${title_text_color} hover:bg-gray-600 rounded px-6 py-4 text-white`}>Donate $290</button>
                </div>
            </div>
            <div className='mt-12'>
            <h2 className='text-4xl font-bold'>{title}</h2>
            <p className='my-4'>{description}</p>
            </div>
            <ToastContainer/>
        </div>
    );
};

CardDetails.propTypes = {
    
};

export default CardDetails;