import { useEffect, useState } from 'react';
import { getBlog, modifyBlog, deleteBlog } from '../../api/blogAPI';
import CustomNavigate from '../../hooks/CustomNavigate';


const EditComp = ({id}) => {

  // 페이지 이동 함수
  const { goToDetailPage, goToListPage} = CustomNavigate();

    // blog 객체 선언
    const [blog, setBlog] = useState({
      id: 0,
      title: '',
      content: '',
      createDt: '',
    });
  
    // useEffect() : 최초 렌더링 시 또는 id가 변하면 블로그 상세 조회
    useEffect(() => {
      getBlog(id)
        .then(jsonData => {
          setBlog(jsonData.results.blog);
        })
    }, [id]);


  // onChangeHandler() : 입력한 title, content 내용을 blog에 저장
  const onChangeHandler = e => {
    setBlog({
      ...blog,
      [e.target.name]: e.target.value,
    })
  }

  // onCLickModifyHandler() : 블로그 수정
  const onCLickModifyHandler = async () => {
    modifyBlog(blog)
      .then(jsonData => {
        window.alert(jsonData.message);
        goToDetailPage(blog.id);
      })
  }

  // onCLickDeleteHandler() : 블로그 삭제 
  const onCLickDeleteHandler = async () => {
    if(!window.confirm('블로그를 삭제할까요?'))
      return;
    deleteBlog(id)
     .then(jsonData => {
        window.alert(jsonData.message);
        goToListPage();
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