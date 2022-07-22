import Footer from "./component/footer/Footer";
import Navbar from "./component/navbar/Navbar";
import Home from "./pages/home/Home";
import './app.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import ExamMaker from "./pages/examMaker/ExamMaker";
import QuizCategories from "./pages/quizCategories/QuizCategories";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import NotFound from "./pages/notFound/NotFound";
import QuestionAdd from "./pages/questionAdd/QuestionAdd";
import SelectExam from "./pages/selectExam/SelectExam";

function App() {

  const { currentUser } = useContext(AuthContext)

  const RequireAuth = ({ children }) => {
    return currentUser ? (children) : <Navigate to="/login" />
  }

  return (
    <Router>
      <div className="container">
        <Navbar />
        <Routes>
          {!currentUser ? (
            <>
              <Route path="/"></Route>
              <Route index element={<Home />} />
              <Route exact path='/register' element={<Register />} />
              <Route exact path='/login' element={<Login />} />
              <Route path='*' element={<NotFound />} />
            </>
          ) : (
            <>
              <Route path="/"></Route>
              <Route index element={<Home />} />
              <Route exact path='/quiz' element={<RequireAuth><QuizCategories /></RequireAuth>} />
              <Route exact path='/exam' element={<RequireAuth><ExamMaker /></RequireAuth>} />
              <Route exact path='/questionadd' element={<RequireAuth><QuestionAdd /></RequireAuth>} />
              <Route exact path='/select' element={<RequireAuth><SelectExam /></RequireAuth>} />
              <Route path='*' element={<NotFound />} />
            </>
          )}


        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
