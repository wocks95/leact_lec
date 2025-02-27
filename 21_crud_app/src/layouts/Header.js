import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <h1><NavLink to="/">Welcome</NavLink></h1>
    </div>
  );
};

export default Header;