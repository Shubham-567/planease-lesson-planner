import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className='App'>
      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/planner' element={<p>Ai Lesson Planner</p>} />
        <Route path='/about' element={<p>about page</p>} />
        <Route path='/faq' element={<p>faq</p>} />
        <Route path='*' element={<p>404</p>} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
