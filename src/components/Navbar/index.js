// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const onClickToggleTheme = () => {
        toggleTheme()
      }
      const darkThemeClass = isDarkTheme ? 'nav-bar-dark' : ''
      return (
        <nav className={`nav-bar-light ${darkThemeClass}`}>
          <img
            className="nav-bar-icon"
            alt="website logo"
            src={
              isDarkTheme
                ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
            }
          />
          <ul className="nav-bar-list">
            <Link to="/" className={`navbar-link-item ${darkThemeClass}`}>
              <li>Home</li>
            </Link>
            <Link to="/about" className={`navbar-link-item ${darkThemeClass}`}>
              <li>About</li>
            </Link>
          </ul>
          <button
            data-testid="theme"
            className="nav-bar-theme-btn"
            type="button"
            onClick={onClickToggleTheme}
          >
            <img
              className="nav-bar-icon"
              alt="theme"
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
              }
            />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
