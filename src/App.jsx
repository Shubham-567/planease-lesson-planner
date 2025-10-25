import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import FAQPage from "./pages/FAQPage";

const App = () => {
  return (
    <div className='App'>
      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/planner' element={<p>Ai Lesson Planner</p>} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/faq' element={<FAQPage />} />
        <Route path='*' element={<HomePage />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
