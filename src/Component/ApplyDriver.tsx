import React, { useState } from 'react';
import {Link as RouterLink} from 'react-router-dom';

export default function ApplyDriver() {

  return (
    <section className="page-section" id="services">
        <div className="container">
            <div className="text-center">
                <h2 className="section-heading applyDriver">Apply To Be A Driver</h2>
                <hr className="myHr" />
            </div>
            <div className="row ">
                <div className="col-md-12">
                    <h4 className="my_3_1" >What You'll Do:</h4>
                    <p className="my_3_1">AWB TRANSPORTATION is Hiring CDL-A Drivers in the Sacramento, CA Area!  At AWB, we strive to maintain a flexible, 
                    stress-free work environment where drivers feel valued and have enough work-life balance to spend time with family and maintain their passion 
                    for logging hours on the road. We have immediate openings for full-time drivers. If you’re looking to find a home on the road, join the AWB 
                    Transportation team today!</p>
                </div>
                <div className="col-md-12">
                    <h4 className="my_3_1" >What You’ll Get:</h4>
                    <p className="my_3_1">Our drivers enjoy a great balance between work and life, as well as COMPETITIVE pay.  
                    As a professional truck driver with AWB, you can enjoy the following benefits:</p>
                    <ul>
                        <li className="my_3_1">Starting pay up to $0.62 per mile for teams and $0.45-$0.50 per mile DOE</li>
                        <li className="my_3_1">Activity, Training, and Mileage Pay from Day 1 </li>
                        <li className="my_3_1">Quarterly Safe Driving Bonuses</li>
                        <li className="my_3_1">No Loading or Unloading Freight</li>
                        <li className="my_3_1">Home Once a Week as Well as Reset Hours Not Spent on the Road </li>
                        <li className="my_3_1">Opportunity to Earn Up to 21 Paid Days Off in Your First Year</li>
                    </ul>
                </div>
                <div className="col-md-12">
                    <h4 className="my_3_1" >Minimum Qualifications:</h4>
                    <ul>
                        <li className="my_3_1">Must be 25 years of age or over, with social security enrollment.</li>
                        <li className="my_3_1">A Class A Commercial Driver's License (Hazmat or Tanker endorsement a plus)</li>
                        <li className="my_3_1">A DOT cleared background check</li>
                        <li className="my_3_1">A minimum of 12 months experience working in a full-time Class A tractor/trailer driving position in the previous 3 years.</li>
                        <li className="my_3_1">No more than two (2) moving violations while operating a personal or commercial motor vehicle in the last three (3) years. </li>
                        <li className="my_3_1">No serious traffic violations, DUI's, DWI's, or OUI's</li>
                        <li className="my_3_1">TWIC card is a plus (optional).</li>
                        <li className="my_3_1">Must maintain full PPE (i.e. FRC’s, hard hat, safety glasses, steel toe boots, safety vest). </li>
                        <li className="my_3_1">Must check for all required securement equipment is retained for your type of truck. </li>
                        <li className="my_3_1">Must be able to read a key map. </li>
                        <li className="my_3_1">Great customer service skills.</li>
                    </ul>
                </div>
                <br /> 
                <div className="col-md-12">
                    <p className="my_3_1" style={{fontWeight:"bold"}} >We believe skills can be taught, but the right attitude and personality are hard to find. We are always looking for 
                    the right person and the right fit for AWB Transport.  If this is a description of you, then please apply!</p>
                </div>
                <div className="col-md-12">
                    <RouterLink className="btn btn-primary btn-md btn-apply-now" to="/register">Apply Now</RouterLink> 
                </div>
            </div>
        </div>
    </section>
  )
}