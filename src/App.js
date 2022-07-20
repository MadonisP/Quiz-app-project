import Footer from "./component/footer/Footer";
import Navbar from "./component/navbar/Navbar";
import Home from "./pages/home/Home";
import './app.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import QuizCategories from "./component/quiz/QuizCategories";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/quiz' element={<QuizCategories />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
