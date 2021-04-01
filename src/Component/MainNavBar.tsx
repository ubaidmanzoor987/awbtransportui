import React, { Component, RefObject } from "react";
import {
  Collapse,
  Navbar as ReactStrapNavbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { for_production } from "../shared/baseUrl";


  let links = [
    { href: "services", text: "Services" },
    // { href: "portfolio", text: "Portfolio" },
    { href: "about", text: "About" },
    { href: "team", text: "Team" },
    { href: "contact", text: "Contact" },
    { href: "/career", text: "Career Opportunities" },
    // { href: "/hrportal/login", text: "Admin Panel" },
  ];


type createNavItemProps = {
  href: string;
  text: string;
};

const CreateNavItem = ({ href, text }: createNavItemProps) => (
  <NavItem className="nav-item">
    {text == "Career Opportunities" || text == "Admin Panel" ? (
      <RouterLink className="nav-link" to={href}>
        {text}
      </RouterLink>
    ) : (
      <Link
        className="nav-link"
        activeClass="active"
        to={href}
        spy={true}
        smooth={true}
        duration={1000}
      >
        {text}
      </Link>
    )}
  </NavItem>
);

type NavbarState = {
  isOpen: boolean;
  backgroundColor: string;
  paddingTop: string;
  paddingBottom: string;
};

export default class Navbar extends Component<{}, NavbarState> {
  ref1: RefObject<HTMLElement>;
  constructor(props: any) {
    super(props);
    this.ref1 = React.createRef<HTMLElement>();

    this.state = {
      isOpen: false,
      backgroundColor: "transparent",
      paddingTop: "1rem",
      paddingBottom: "1rem",
    };

    this.toggle = this.toggle.bind(this);
    if(for_production === false)
    {
      links = [
        { href: "services", text: "Services" },
        // { href: "portfolio", text: "Portfolio" },
        { href: "about", text: "About" },
        { href: "team", text: "Team" },
        { href: "contact", text: "Contact" },
        { href: "/career", text: "Career Opportunities" },
        { href: "/hrportal/login", text: "Admin Panel" },
      ];
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  onScroll1 = () => {
    let y = 1 + (window.scrollY || window.pageYOffset) / 150;
    y = y < 1 ? 1 : y; // ensure y is always >= 1 (due to Safari's elastic scroll)
    if (y > 5) {
      this.setState({
        ...this.state,
        backgroundColor: "#212529",
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem",
      });
    } else {
      this.setState({
        ...this.state,
        backgroundColor: "transparent",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      });
    }
  };
  componentDidMount() {
    window.addEventListener("scroll", this.onScroll1, false);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll1, false);
  }

  render() {
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
            <Link
              activeClass="active"
              to="page-top"
              spy={true}
              smooth={true}
              duration={1000}
            >
              <img src="assets/img/navbar-logo.png" alt="" />
            </Link>
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
