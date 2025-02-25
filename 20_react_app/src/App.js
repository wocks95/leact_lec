
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BasicLayout from "./layouts/BasicLayout";
import Main from "./pages/Main";
import Blog from "./pages/Blog";
import Guestbook from "./pages/Guestbook";
import Store from "./pages/Store";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<BasicLayout/>}>
            <Route path="/" element={<Main/>}/>
            <Route path="/main" element={<Main/>}/>
            <Route path="/blogs" element={<Blog/>}/>
            <Route path="/guestbooks" element={<Guestbook/>}/>
            <Route path="/stores" element={<Store/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
