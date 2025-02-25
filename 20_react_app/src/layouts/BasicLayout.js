import React from 'react';
import Header from '../components/Header';
import NaviBar from '../components/NaviBar';
import { Outlet } from 'react-router-dom';


const BasicLayout = () => {
  return (
    <>
      <Header/>
      <NaviBar />
      <Outlet/> 
    </>
  );
};
// <Outlet/> 는 App.js의 <Rotue>안에 작성된 것이 여기서 보여진다.
export default BasicLayout;