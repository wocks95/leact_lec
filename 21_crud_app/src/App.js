import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BasicLayout from './layouts/BasicLayout';
import IndexPage from './pages/IndexPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<BasicLayout/>}>
            <Route path="/" element={<IndexPage/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
