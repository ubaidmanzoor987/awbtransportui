import React, { useState } from 'react';
import {Link} from "react-router-dom";
export default function Team() {
  

  return (
    <div>
        <section className="page-section" id="team">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading color-white">Join Our Team</h2>
                    <h3 className="section-subheading color-white">We're on the look for adding more, customer-focused drivers to our team.  If this is you, find out what it takes and how to apply here.</h3>
                </div>
                <div className="row text-center">
                    <div className="col-lg-10">
                       <img src="assets/img/team/team1.jpg" alt="" width="90%" />
                    </div>
                    <div className="col-lg-2">
                        <h3 className="color-white">100,000 + <br/> Loads Successfully Delivered</h3>
                        <br/>
                        <br/>
                        <br/>
                        <h3 className="color-white">250+ <br/> Satisfied Clients</h3>
                    </div>
                   
                </div>
                <div className="row text-center" style={{marginTop:"50px"}} >
                    <div className="col-lg-8 mx-auto text-center">
                        <Link className="btn btn-primary btn-xl" to="/career">Apply To Be A Driver</Link>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}