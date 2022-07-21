import './product.css'
import { Link } from 'react-router-dom'
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Product = () => {

  const { currentUser } = useContext(AuthContext)

  return (
    <div className="product">
      <section>
        <div className="productContent">
          <Link to="/quiz" >
            <h2 className="productTitle" >
              QQ
            </h2>
            <p className="productDesc">
              QQ means is "Quick Quiz" you can select category, difficulty, number of question and you are ready to practice
            </p>
          </Link>
        </div>
      </section>
      <section>
        <div className="productContent">
        <Link to="/" >
          <h2 className="productTitle" >
            Take an exam
          </h2>
          <p className="productDesc">
            after you logged in you can press button and after write your pass you can make ur online exam
          </p>
          </Link>
        </div>
      </section>
      <section>
        <div className="productContent">
        <Link to="/" >
          <h2 className="productTitle" >
            Make an exam
          </h2>
          <p className="productDesc">
            come upload your questions then share your pass and make your exam
          </p>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Product