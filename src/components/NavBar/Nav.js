import React from "react";
import { Link } from "react-router-dom";
import phoneImg from "../../assets/phone.svg";
import menuImg from "../../assets/imgMenu.svg";
import "./style.css";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

function Menu() {
  return (
    <div>
      <Navbar color="white" light expand="md">
        <NavbarBrand>
          
          <Link to="/years">
            <img
              alt="golend-logo"
              src="http://cdn.golend.com.au/logo-color.svg"
            />
          </Link>
        </NavbarBrand>
        <Nav navbar>
          <NavItem className="contactBtn">
            <NavLink href=""><img src={phoneImg} alt=" "/>1300 GoLend</NavLink>
          </NavItem>
          <NavItem className="menuBtn">
            <NavLink href=""><img src={menuImg} alt=" "/></NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Menu;
