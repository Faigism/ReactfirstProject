import logoSvg from '../../../../assets/images/logo.svg'

const Header = () => {
  return (
    <header>
      <div className="header_section">
        <img src={logoSvg} alt="logoImg" />
        <ul className="header_nav">
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
