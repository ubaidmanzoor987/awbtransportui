import React, { Component, RefObject } from "react";
import {
  Collapse,
  Navbar as ReactStrapNavbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import { Link as RouterLink } from "react-router-dom";
import { baseUrl } from "../shared/baseUrl";

type createNavItemProps = {
  href: string;
  text: string;
};

const CreateNavItem = ({ href, text }: createNavItemProps) => (
  <NavItem className="nav-item">
    <RouterLink className="nav-link " to={href}>
      {text}
    </RouterLink>
  </NavItem>
);

type NavbarState = {
  isOpen: boolean;
  backgroundColor: string;
  paddingTop: string;
  paddingBottom: string;
};

type NavbarProps = {
  addLogout?: Boolean;
  adminLogout?: Boolean;
};

export default class NavbarCareer extends Component<NavbarProps, NavbarState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isOpen: false,
      backgroundColor: "#212529",
      paddingTop: "0.5rem",
      paddingBottom: "0.5rem",
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const links = [
      { href: "/", text: "Home" },
      { href: "/career", text: "Career Opportunities" },
      { href: "/login", text: "Sign In" },
    ];
    if (this.props.addLogout) {
      links.pop();
      links.push({ href: "/logout", text: "Sign Out" });
    }
    if (this.props.adminLogout) {
      links.pop();
      links.push({ href: "/hrportal/logout/", text: "Sign Out" });
    }
    return (
      <div>
        <ReactStrapNavbar
          className="navbar-expand-lg navbar-dark fixed-top"
          id="mainNav"
          style={{
            backgroundColor: this.state.backgroundColor,
            paddingTop: this.state.paddingTop,
            paddingBottom: this.state.paddingBottom,
            paddingRight: "5%",
          }}
        >
          <NavbarBrand>
            <img src={baseUrl + "/assets/img/navbar-logo.png"} alt="" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle}></NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {links.map((link) => (
                <CreateNavItem
                  href={link.href}
                  text={link.text}
                  key={link.href}
                />
              ))}
            </Nav>
          </Collapse>
        </ReactStrapNavbar>
      </div>
    );
  }
}
