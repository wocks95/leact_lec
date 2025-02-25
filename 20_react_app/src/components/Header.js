import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <NavLink to="/main">Welcome To Homepage</NavLink>
    </div>
  );
};

export default Header;