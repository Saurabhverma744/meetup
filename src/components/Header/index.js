import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div>
    <nav>
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
          alt="website logo"
          className="logo-image"
        />
      </Link>
    </nav>
  </div>
)

export default Header
