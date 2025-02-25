import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import NaviBar from './NaviBar';
import Footer from './Footer';


const BasicLayout = () => {
  return (
    <div>
      <Header/>
      <NaviBar/>
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default BasicLayout;