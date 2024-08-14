import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='navbar absolute'>
          <div className=" bg-transparent container mx-auto">
  <div className="flex-1 ">
    <img src="Logo.png" alt="" />
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 text-lg font-bold">
      <NavLink to="/">Home</NavLink>
      <NavLink className="mx-12" to="/donation">Donation</NavLink>
      <NavLink to="/statistics">Statistics</NavLink>
      
    </ul>
  </div>
</div>
        </div>
    );
};

Header.propTypes = {
    
};

export default Header;