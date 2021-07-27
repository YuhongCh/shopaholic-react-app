import React, {useState} from 'react'
import {Link, Redirect} from 'react-router-dom'
import Index from "./signout";
import menuImage from "../static/menu.svg";
import cartImage from "../static/cart.png";
import closeImage from "../static/close.svg";
import {
  HeaderLogoLink, HeaderWrapper,
  HeaderNavWrapper, HeaderCloseImageWrapper
} from "../style";

const Header = () => {

  const [toggle, setToggle] = useState(false);
  const [logout, setLogout] = useState(false);

  const menuToggle = () => {
    setToggle(!toggle)
  }

  const logoutAndClearCookie = () => {
    setLogout(true);
    localStorage.removeItem('token');
  }

  if (logout) {
    return <Redirect to="signin"/>
  }

  return (
    <HeaderWrapper>
      <div className="menu" onClick={menuToggle}>
        <img src={menuImage} alt="" width="20"/>
      </div>
      <HeaderLogoLink to="/">SHOPAHOLIC</HeaderLogoLink>
      <HeaderNavWrapper>
        <ul className={toggle ? "toggle" : ""}>
          <li><Link to="/product">Home</Link></li>
          <li><Link to="/product">Product</Link></li>
          <li><Link to="/product">Contact</Link></li>
          <li>
            <Index setLogout={logoutAndClearCookie}/>
          </li>
          <li className="close" onClick={menuToggle}>
            <HeaderCloseImageWrapper src={closeImage} alt="" width="20"/>
          </li>
        </ul>
      </HeaderNavWrapper>
      <Link to="/cart">
        <img className="cartLogo" src={cartImage} alt="" width="21"/>
      </Link>
    </HeaderWrapper>
  )
}

export default Header;