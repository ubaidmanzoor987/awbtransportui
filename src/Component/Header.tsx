import React from "react";
import { Link } from "react-scroll";
import { UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: "assets/img/trucks/4.jpeg",
    caption: "IT'S NICE TO MEET YOU",
    header: "Welcome To Our Team!",
    key: "4",
  },
  {
    src: "assets/img/trucks/5.jpeg",
    caption: "IT'S NICE TO MEET YOU",
    header: "Welcome To Our Team!",
    key: "5",
  },
  {
    src: "assets/img/trucks/6.jpeg",
    caption: "IT'S NICE TO MEET YOU",
    header: "Welcome To Our Team!",
    key: "6",
  },
];

export default function Header() {
  return (
    <header className="" id="page-top">
      <UncontrolledCarousel
        items={items}
        autoPlay={true}
        className="myCarousel"
      />
      <Link
        className="btn btn-primary btn-xl"
        to="services"
        spy={true}
        smooth={true}
        duration={1000}
      >
        Tell Me More
      </Link>
    </header>
  );
}
