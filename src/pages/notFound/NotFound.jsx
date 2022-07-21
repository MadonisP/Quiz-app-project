import { Link } from 'react-router-dom'
import './notFound.css'

const NotFound = () => {
  return (
    <section>
    <div className="notFound">
        <h1 className="errorTitle">
            Error 404
        </h1>
        <p className="errorDesc">
           Sorry, we couldn't find the page you were looking for.<br/> Would you like to go to the main page
        </p>
        <br/>
        <Link to="/" className="errorLink">Click Here</Link>
    </div>
   
</section>
  )
}

export default NotFound