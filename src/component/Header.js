import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import menuSvg from "../svg/menu.svg";
import cartSvg from "../svg/cart.svg";
import closeSvg from "../svg/close.svg";
import {HeaderLogoLink, HeaderWrapper, HeaderNavWrapper} from "./style";
import { Redirect } from "react-router-dom";
import SignoutAlert from "./SignoutAlert";

export class Header extends Component {

  constructor() {
    super();
    this.state = {
      toggle: false,
      logout: false
    }
  }

  menuToggle = () =>{
    this.setState({toggle: !this.state.toggle})
  }

  setLogout = () => {
    this.setState({logout: true})
  }

  render() {
    const {toggle} = this.state;

    if (this.state.logout) {
      return <Redirect to="signin"/>
    }

    return (
      <HeaderWrapper>
        <div className="menu" onClick={this.menuToggle}>
          <img src={menuSvg} alt="" width="20"/>
        </div>
        <HeaderLogoLink to="/">SHOPAHOLIC</HeaderLogoLink>
        <HeaderNavWrapper>
          <ul className={toggle ? "toggle" : ""}>
            <li><Link to="/product">Home</Link></li>
            <li><Link to="/product">Product</Link></li>
            <li><Link to="/product">Contact</Link></li>
            <li><Link to="/product">About</Link></li>
            <li><SignoutAlert setLogout={this.setLogout}/></li>
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