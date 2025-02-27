import React from 'react';

const PageComp = (props) => {
  const { serverData, goToListPage, size, sort} = props;
  return (
    <div style={{display: 'flex'}}>
      {/* 이전 블록 Prev */}
      {
        serverData.results.pageDto.beginPage === 1 ? 
        <div style={{color: 'silver'}}>Prev</div> :
        <div onClick={() => { goToListPage({page: serverData.results.pageDto.beginPage - 1, size: size, sort: sort}) }}>Prev</div>
      }
      {/* 1 2 3 4 5 6 7 8 9 10 */}
      {
        serverData.results.pageList.length === 0 ?
        <></> :
        serverData.results.pageList.map(p => <div key={p} 
                                                  onClick={() => {goToListPage({page: p, size, sort})}}
                                                  style={{color: p === serverData.results.pageDto.page ? 'red' : 'black'}}>{p}</div>)
      }
      {/* 다음 블록 Next */}
      {
        serverData.results.pageDto.endPage === serverData.results.pageDto.pageCount ? 
        <div style={{color: 'silver'}}>Next</div> :
        <div onClick={() => {goToListPage({page: serverData.results.pageDto.endPage + 1, size: size, sort: sort})}}>Next</div>
      }
    </div>
  );
};

export default PageComp;