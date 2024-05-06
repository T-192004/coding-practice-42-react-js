// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const homeDarkThemeClass = isDarkTheme ? 'home-dark' : ''
      return (
        <>
          <Navbar />
          <div className={`home-light-container ${homeDarkThemeClass}`}>
            <img
              className="home-logo"
              alt="not found"
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
            />
            <h1 className={`home-light-title ${homeDarkThemeClass}`}>
              Lost Your Way?
            </h1>
            <p className={`light-description ${homeDarkThemeClass}`}>
              We cannot seem to find the page you're looking for.
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
