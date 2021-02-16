import React, { Component, useEffect, useRef, useState } from 'react';

export default function Header() {
  const ref1 = useRef<HTMLElement>(null);
  useEffect(()=>{
    window.addEventListener('scroll', () => {
      let y = 1 + (window.scrollY || window.pageYOffset) / 150
      y = y < 1 ? 1 : y // ensure y is always >= 1 (due to Safari's elastic scroll)
      if (ref1!= null && ref1.current != null) {
        console.log(y);
        if (y > 6) {
          ref1.current.style.backgroundColor = 'black';
        }
        else {
          ref1.current.style.backgroundColor = 'transparent';
        }

      }
    })

    return () => {

    };
  }, []);

  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav" ref={ref1} >
            <div className="container">
                <a className="navbar-brand js-scroll-trigger" href="#page-top"><img src="assets/img/navbar-logo.png" alt=""/></a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars ml-1"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ml-auto">
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#services">Services</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#team">Team</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        
        <header className="masthead">
            <div className="container">
                <div className="masthead-subheading">Welcome To Our Team!</div>
                <div className="masthead-heading text-uppercase">It's Nice To Meet You</div>
                <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>
            </div>
        </header>
        </div>
  );
}
