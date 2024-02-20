import {Link} from 'react-router-dom'
import Header from '../Header'
import RegisterContext from '../../context/RegisterContext'

const Home = props => {
  const onRegister = () => {
    const {history} = props
    history.replace('/register')
  }

  return (
    <RegisterContext.Consumer>
      {value => {
        const {isRegistered, name, topic} = value
        return (
          <div>
            <Header />
            {isRegistered === true ? (
              <div>
                <h1 className="heading">Hello {name}</h1>
                <p className="para">Welcome to {topic}</p>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                  className="register-image"
                />
              </div>
            ) : (
              <div>
                <h1 className="heading">Welcome to Meetup</h1>
                <p className="para">Please register for the topic</p>
                <Link to="/register">
                  <button type="button" className="button" onClick={onRegister}>
                    Register
                  </button>
                </Link>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                  className="register-image"
                />
              </div>
            )}
          </div>
        )
      }}
    </RegisterContext.Consumer>
  )
}

export default Home
