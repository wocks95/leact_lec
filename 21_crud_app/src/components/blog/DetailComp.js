import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const DetailComp = ({ id }) => {

  // blog 객체 선언
  const [blog, setBlog] = useState({
    id: 0,
    title: '',
    content: '',
    createDt: '',
  });

  // 최초 렌더링 and id가 변하면 서버에 상세 정보를 요청
  useEffect = (() => {
    const getBlog = async () => {
      const response = await axios.get(`http://localhost:8080/blogs/${id}`);
      const jsonData = await response.data;
      setBlog(jsonData.results.blog);
    };
    getBlog();
  }, [id]);

  // 페이지 이동하는 useNavigate()
  const navigate = useNavigate();

  // 편집 페이지로 이동하는 fnEditPage()
  const fnEditPage = (id) => {
    navigate({
      pathname: `/blog/edit/${id}`,
    })
  }

  // <div> 태그를 만드는 함수
  const div = (label, value) => {
    return (
      <div style={{display: 'flex'}}>
        <div style={{width: '100px', color: 'blue'}}>{label}</div>
        <div style={{width: '500px'}}>{value}</div>
      </div>
    )
  }

  return (
    <>    
      <div>
        { div('ID', blog.id) }
        { div('TITLE', blog.title) }
        { div('CONTENT', blog.content) }
        { div('CREATE_DT', blog.createDt.replace('T', ' ')) }
        <div>
          <button onClick={() => { fnEditPage(blog.id) }}>편집하기</button>
          <button onClick={() => { fnEditPage(blog.id) }}></button>
        </div>
      </div>
    </>

  );
};

export default DetailComp;