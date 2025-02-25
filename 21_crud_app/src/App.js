import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BasicLayout from './layouts/BasicLayout';
import IndexPage from './pages/IndexPage';
import ListPage from './pages/blog/ListPage';
import RegistPage from './pages/blog/RegistPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<BasicLayout/>}>
            <Route path="/"          element={<IndexPage/>}></Route>
            <Route path="/blog/list" element={<ListPage/>}></Route>
            <Route path="/blog/regist" element={<RegistPage/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
