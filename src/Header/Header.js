import './Header.css'
import logo from '../Assets/Logomark_Circle_Black_Small.png'
function Header() {
  return (
    <div className="Header">
      <img src={logo} alt="TS-logo" />
      <h2>TechSmart</h2>
    </div>
  )
}
export default Header;