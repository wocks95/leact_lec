import React from 'react';
import { NavLink } from 'react-router-dom';

const NaviBar = () => {
  return (
    <div>
      <li><NavLink to="/blog/list">블로그</NavLink></li>
      <li><NavLink to="/blog/list">블로그</NavLink></li>
      <li><NavLink to="/blog/list">블로그</NavLink></li>
    </div>
  );
};

export default NaviBar;