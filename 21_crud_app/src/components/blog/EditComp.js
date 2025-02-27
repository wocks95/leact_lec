import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditComp = ({ id }) => {
  
  // blog 객체 선언
  const [blog, setBlog] = useState({
    id: 0,
    title: '',
    content: '',
    createDt: '',
  });

  // useEffect() : 최초 렌더링 시 또는 id가 변하면 블로그 상세 조회
  useEffect(() => {
    const getBlog = async () => {
      const response = await axios.get(`http://localhost:8080/blogs/${id}`);
      const jsonData = await response.data;
      setBlog(jsonData.results.blog);
    }
    getBlog();
  }, [id]);

  // onChangeHandler() : 입력한 title, content 내용을 blog에 저장
  const onChangeHandler = e => {
    setBlog({
      ...blog,
      [e.target.name]: e.target.value,
    })
  }

  // useNavigate() : 페이지 이동 Hooks
  const navigate = useNavigate();

  // onClickModifyHandler() : 블로그 수정
  const onClickModifyHandler = async () => {
    const response = await axios.put(`http://localhost:8080/blogs/${id}`, blog);
    const jsonData = await response.data;
    window.alert(jsonData.message);
    navigate({
      pathname: `/blog/detail/${id}`,
    })
  }

  // onClickDeleteHandler() : 블로그 삭제
  const onClickDeleteHandler = async () => {
    if(!window.confirm('블로그를 삭제할까요?'))
      return;
    const response = await axios.delete(`http://localhost:8080/blogs/${id}`);
    const jsonData = await response.data;
    window.alert(jsonData.message);
    navigate({
      pathname: `/blog/list`,
    })
  }

  // div() : <div> 태그 반환 함수
  const div = (label, value) => {
    return (
      <div style={{display: 'flex'}}>
        <div style={{width: '100px', color: 'blue'}}>{label}</div>
        <div style={{width: '500px'}}>{value}</div>
      </div>
    )
  }

  return (
    <div>
      { div('ID', blog.id) }
      { div('CREATE_DT', blog.createDt.replace('T', ' ')) }
      { div('TITLE', <input type="text" name="title" value={blog.title} onChange={onChangeHandler}/>) }
      { div('CONTENT', <input type="text" name="content" value={blog.content} onChange={onChangeHandler}/>) }
      <div>
        <button onClick={onClickModifyHandler}>수정하기</button>
        <button onClick={onClickDeleteHandler}>삭제하기</button>
      </div>
    </div>
  );

};

export default EditComp;