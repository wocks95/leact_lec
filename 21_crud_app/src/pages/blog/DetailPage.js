import React from 'react';
import DetailComp from '../../components/blog/DetailComp';
import { useParams } from 'react-router-dom';

const DetailPage = () => {

  // 경로 변수(Path Variable)를 처리하는 useParams()
  const { id } = useParams();

  return (
    <div>
      <h1>블로그 상세 페이지 ({id})</h1>
      <DetailComp id={id} />
    </div>
  );

};

export default DetailPage;