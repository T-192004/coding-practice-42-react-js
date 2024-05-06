// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const Home = () => (
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
              alt="home"
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
              }
            />
            <h1 className={`home-light-title ${homeDarkThemeClass}`}>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
