
import { useNavigate, createSearchParams, useSearchParams } from 'react-router-dom';

const CustomNavigate = () => {

  // useNavigate() : 페이지 이동 Hooks
  const navigate = useNavigate();

  // useSearchParams() : Query String(쿼리 스트링)으로 전달되는 요청 파라미터 처리
  const [queryParams] = useSearchParams();
  const page =  !queryParams.get('page') ? 1 : parseInt(queryParams.get('page'));   // 요청 파라미터 page가 없으면 page=1
  const size =  !queryParams.get('size') ? 2 : parseInt(queryParams.get('size'));  // 요청 파라미터 size가 없으면 size=2
  const sort =  !queryParams.get('sort') ? 'id,desc' : queryParams.get('sort');     // 요청 파라미터 sort가 없으면 sort=id,desc 사용

  const defaultQueryString = createSearchParams({page, size, sort}).toString(); // `page= ${page}&size=${size}&sort=${sort}` = createSearchParams

  // 목록 페이지로 이동
  const goToListPage = (pageParam) => {
    let queryString = '';
    if(pageParam) {
      const page = !pageParam.page ? 1 :parseInt(pageParam.page);
      const size = !pageParam.size ? 2 :parseInt(pageParam.size);
      const sort = !pageParam.sort ? 'id.desc' : (pageParam.sort);
      queryString = createSearchParams({page, size, sort}).toString(); // `page= ${page}&size=${size}&sort=${sort}` = createSearchParams
    } else {
      queryString = defaultQueryString;
    }
    navigate({
      pathname: `/blog/list`,
      search: queryString,// 요청 파라미터 (쿼리 스트링 형태로 추가)
    })
  }

  // 상세 페이지로 이동
  const goToDetailPage = (id) => {
    navigate({
      pathname: `/blog/detail/${id}`, // 상세 페이지로 이동하는 링크
      search: defaultQueryString,
    })
  }

  // 편집 페이지로 이동
  const goToEditPage = (id) => {
    navigate({
      pathname: `/blog/edit/${id}`,
    })
  }


  return { goToListPage, goToDetailPage, goToEditPage }
};

export default CustomNavigate;