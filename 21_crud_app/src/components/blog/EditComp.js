import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const EditComp = ({id}) => {

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
      }
      getBlog();
    }, [id]);


  // onChangeHandler()
  const onChangeHandler = (e) => {
    setBlog({
      ...blog,
      [e.target.name]: e.target.value,
    })
  }

    // 페이지 이동하는 useNavigate
    const navigate = useNavigate();

  // onCLickModifyHandler
  const onCLickModifyHandler = async () => {
    const response = await axios.put(`http://localhost:8080/blogs/${id}`, blog);
    const jsonData = await response.data;
    alert(jsonData.message);
    navigate({
      pathname: `/blog/detail/${id}`,
    })
  }

  // onCLickDeleteHandler
  const onCLickDeleteHandler = async () => {
    if(!window.confirm('블로그를 삭제할까요?'))
      return;
    const response = await axios.delete(`http://localhost:8080/blogs/${id}`);
    const jsonData = await response.data;
    window.alert(jsonData.message);
    navigate({
      pathname: '/blog/list',
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
    <div>
      { div('ID', blog.id) }
      { div('CREATE_DT', blog.createDt) }
      { div('TITLE', <input type="text" name="title" value={blog.title} onChange={onChangeHandler}/>) }
      { div('CONTENT', <input type="content" name="content" value={blog.content} onChange={onChangeHandler}/>) }
      <div>
        <button onClick={onCLickModifyHandler}>수정하기</button>
        <button onClick={onCLickDeleteHandler}>삭제하기</button>
      </div>
    </div>
  );
};

export default EditComp;