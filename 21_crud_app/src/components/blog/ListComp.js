import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getBlogList } from '../../api/blogAPI';
import CustomNavigate from '../../hooks/CustomNavigate';

const ListComp = () => {

  const { goToDetailPage } = CustomNavigate();

  const [ serverData, setServerData ] = useState({
    status: 0,
    message: '',
    results: {
      blogList: []
    }
  })

  // useSearchParams() : Query String(쿼리 스트링)으로 전달되는 요청 파라미터 처리
  const [queryParams] = useSearchParams();
  const page =  !queryParams.get('page') ? 1 : parseInt(queryParams.get('page'));   // 요청 파라미터 page가 없으면 page=1
  const size =  !queryParams.get('size') ? 10 : parseInt(queryParams.get('size'));  // 요청 파라미터 size가 없으면 size=2
  const sort =  !queryParams.get('sort') ? 'id,desc' : queryParams.get('sort');     // 요청 파라미터 sort가 없으면 sort=id

  // useEffect() : 최초 렌더링 시 또는 page/size/sort 중 하나가 변하면 블로그 목록 조회
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