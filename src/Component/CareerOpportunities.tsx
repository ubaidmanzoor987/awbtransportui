import React, { useEffect, useRef } from 'react';
import NavbarCareer from './NavbarCareer';
import ApplyDriver from './ApplyDriver';
import Footer from './Footer';

export default function Career() {
  return (
    <>
    <NavbarCareer addLogout={false} />
        <ApplyDriver/>
    <Footer/>
    </>
  );
}

