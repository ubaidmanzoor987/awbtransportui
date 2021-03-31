import React from "react";
import Navbar from "./MainNavBar";
import Header from "./Header";
import Services from "./Services";
import Portfolio from "./Portfolio";
import About from "./About";
import Team from "./Team";
import Clients from "./Clients";
import Contacts from "./Contacts";
import Footer from "./Footer";

export default function MainPage() {
  return (
    <>
      <Navbar />
      <Header />
      <Services />
      {/* <Portfolio /> */}
      <About />
      <Team />
      <Clients />
      <Contacts />
      <Footer />
    </>
  );
}
