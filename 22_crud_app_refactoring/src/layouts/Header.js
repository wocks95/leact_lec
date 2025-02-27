import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <NavLink to="/"><h1>Welcome</h1></NavLink> 
    </div>
  );
};

export default Header;