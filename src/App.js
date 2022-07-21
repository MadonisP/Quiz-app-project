import Footer from "./component/footer/Footer";
import Navbar from "./component/navbar/Navbar";
import Home from "./pages/home/Home";
import './app.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import QuizCategories from "./component/quiz/QuizCategories";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import NotFound from "./pages/notFound/NotFound";

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
