import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<p>home page</p>} />
      <Route path='/planner' element={<p>Ai Lesson Planner</p>} />
      <Route path='/about' element={<p>about page</p>} />
      <Route path='/faq' element={<p>faq</p>} />
      <Route path='*' element={<p>404</p>} />
    </Routes>
  );
};

export default App;
