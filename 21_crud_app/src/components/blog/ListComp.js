import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getBlogList } from '../../api/blogAPI';
import blogCustomNavigate from '../../hooks/blogCustomNavigate';

const ListComp = () => {

  const { goToDetailPage } = blogCustomNavigate();

  const [ serverData, setServerData ] = useState({
    status: 0,
    message: '',
    results: {
      blogList: []
    }
  })

  const [queryParams] = useSearchParams();
  const page =  !queryParams.get('page') ? 1 : parseInt(queryParams.get('page'));
  const size =  !queryParams.get('size') ? 10 : parseInt(queryParams.get('size'));
  const sort =  !queryParams.get('sort') ? 'id,desc' : queryParams.get('sort');

  useEffect(() => {
    getBlogList({ page, size, sort })
      .then(jsonData => {
        console.log(jsonData);
        setServerData(jsonData);   
      }) 
  }, [page, size, sort]); // page, size, sort 가 변경되면 리렌더링합니다.



  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <td></td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {
            serverData.results.blogList.map(blog =>
              <tr key={blog.id}>
                <td>
                  <span onClick={() => { goToDetailPage(blog.id) }}>{blog.title}</span>
                </td>
                <td>{blog.createDt.replace('T', ' ')}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
};

export default ListComp;