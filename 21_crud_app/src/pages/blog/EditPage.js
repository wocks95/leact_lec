import React from 'react';
import EditComp from '../../components/blog/EditComp';
import { useParams } from 'react-router-dom';

const EditPage = () => {

  // 경로 변수(Path Variable)를 처리하는 useParams()
  const { id } = useParams();

  return (
    <div>
      <h1>블로그 편집 페이지 ({id})</h1>
      <EditComp id={id} />
    </div>
  );

};

export default EditPage;