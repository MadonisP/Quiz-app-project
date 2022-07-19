import Footer from "./component/footer/Footer";
import HeroSection from "./component/heroSection/HeroSection";
import Navbar from "./component/navbar/Navbar";
import Home from "./pages/home/Home";
import './app.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
