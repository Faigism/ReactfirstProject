import { useState } from 'react'
import logoSvg from '../../../../assets/images/logo.svg'

const Header = () => {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <header>
      <div
        className={
          darkMode ? 'header_section header_sectionDark' : 'header_section'
        }
      >
        <ul className="header_nav">
          <img src={logoSvg} alt="logoImg" />
          <li>About us</li>
          <li>How it work</li>
          <li>Pricing</li>
          <li>FAQs</li>
        </ul>
        <span onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? 'Light Header' : 'Dark Header'}
        </span>
        <div className="header_btn">
          <button>Login</button>
          <button>Sign Up</button>
        </div>
      </div>
    </header>
  )
}
export default Header
