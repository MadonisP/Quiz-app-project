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
              QQ means is "Quick Quiz" you <br/>can select category, difficulty, number<br/> of question and you are ready to practice
            </p>
          </Link>
        </div>
      </section>
      <section>
        <div className="productContent">
        <Link to="/questionadd" >
          <h2 className="productTitle" >
            Make an exam
          </h2>
          <p className="productDesc">
            After you logged in you can create <br/>exams and add questions on them also<br/> we have no question limit 
          </p>
          </Link>
        </div>
      </section>
      <section>
        <div className="productContent">
        <Link to="/exam" >
          <h2 className="productTitle" >
            Take an exam
          </h2>
          <p className="productDesc">
            After you logged in you can take exams<br/> and start solve
          </p>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Product