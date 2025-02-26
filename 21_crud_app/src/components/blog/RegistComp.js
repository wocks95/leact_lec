import { useState } from 'react';
import { registBlog } from '../../api/blogAPI';
import CustomNavigate from '../../hooks/CustomNavigate';

const RegistComp = () => {

  // 페이지 이동 함수
  const { goToListPage } = CustomNavigate();

  // blog 객체 선언 (등록 시 title, content만 전달)
  const [ blog, setBlog ] = useState({
    title: '',
    content: '',
  });

  const onChangeHandler = e => {
    setBlog({
      ...blog,
      [e.target.name]: e.target.value,
    })
  }

  // onClickHandler() : 블로그 저장
  const onClickHandler = () => {
    registBlog(blog)
      .then(jsonData => {
        alert(jsonData.message);
        goToListPage();
      })
  }

  return (
    <div>
      <input type="text" name="title" value={blog.title} placeholder="제목" onChange={onChangeHandler}/>
      <br/>
      <input type="text" name="content" value={blog.content} placeholder="내용" onChange={onChangeHandler}/>
      <br/>
      <button onClick={onClickHandler}>등록하기</button>
    </div>
  );
};

export default RegistComp;