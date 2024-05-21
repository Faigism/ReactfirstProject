import logoSvg from '../../../../assets/images/logo.svg'

const Header = () => {
  return (
    <header>
      <div className="header_section">
        <ul className="header_nav">
          <img src={logoSvg} alt="logoImg" />
          <li>About us</li>
          <li>How it work</li>
          <li>Pricing</li>
          <li>FAQs</li>
        </ul>
        <div className="header_btn">
          <button>Login</button>
          <button>Sign Up</button>
        </div>
      </div>
    </header>
  )
}
export default Header
