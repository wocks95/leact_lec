import React from 'react';
import { NavLink } from 'react-router-dom';
import ListComp from '../../components/blog/ListComp';

const ListPage = () => {
  return (
    <div>
      <h1>블로그 목록 페이지</h1>
      <NavLink to="/blog/regist"><button>블로그 등록</button></NavLink>
      <br/><br/>
      {/* 서버로부터 목록을 가져와서 화면에 렌더링하는 작업은 ListComp 컴포넌트가 담당합니다. */}
      <ListComp/>
    </div>
  );
};

export default ListPage;