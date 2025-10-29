import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import FaqPage from "./pages/FaqPage";
import PlannerPage from "./pages/PlannerPage";

const App = () => {
  return (
    <div className='App'>
      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/planner' element={<PlannerPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/faq' element={<FaqPage />} />
        <Route path='*' element={<HomePage />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
