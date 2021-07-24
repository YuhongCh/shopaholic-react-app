import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import menuSvg from "../svg/menu.svg";
import cartSvg from "../svg/cart.svg";
import closeSvg from "../svg/close.svg";
import {HeaderLogoLink, HeaderWrapper, HeaderNavWrapper} from "./style";

export class Header extends Component {

  constructor() {
    super();
    this.state = {
      toggle: false
    }
  }
  menuToggle = () =>{
    this.setState({toggle: !this.state.toggle})
  }

  render() {
    const {toggle} = this.state;

    return (
      <HeaderWrapper>
        <div className="menu" onClick={this.menuToggle}>
          <img src={menuSvg} alt="" width="20"/>
        </div>
        <HeaderLogoLink to="/home">SHOPAHOLIC</HeaderLogoLink>
        <HeaderNavWrapper>
          <ul className={toggle ? "toggle" : ""}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/product">Product</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/signin">Login / Register</Link></li>
            <li>
              <Link to="/cart"><img src={cartSvg} alt="" width="21"/></Link>
            </li>
            <li className="close" onClick={this.menuToggle}>
              <img src={closeSvg} alt="" width="20"/>
            </li>
          </ul>
        </HeaderNavWrapper>
      </HeaderWrapper>
    )
  }
}

export default Header