import React, { useState } from 'react';

export default function Contacts() {
  

  return (
    <div>
        <section className="page-section" id="contact">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading">Contact Us</h2>
                    <h3 className="section-subheading text-muted">For any inquiries, questions or commendations, please call: 916-248-1008 or fill out the following form.</h3>
                </div>
                <form id="contactForm" name="sentMessage" >
                    <div className="row align-items-stretch mb-5">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input className="form-control" id="name" type="text" placeholder="Your Name *" required data-validation-required-message="Please enter your name." />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="form-group">
                                <input className="form-control" id="email" type="email" placeholder="Your Email *" required data-validation-required-message="Please enter your email address." />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="form-group">
                                <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required data-validation-required-message="Please enter your phone number." />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="form-group mb-md-0">
                                <textarea className="form-control" id="message" placeholder="Your Message *" required data-validation-required-message="Please enter a message." style={{height:"300px"}}></textarea>
                                <p className="help-block text-danger"></p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <img src="assets/img/awbfulllogo.jpg" alt=""/>
                                <div className="myDiv">
                                    <p>AWB TRANSPORT 5751<br/>La Venta Way Sacramento, CA 95835<br/>Way Sacramento, CA 95835</p>
                                </div>
                            </div>
                            <div className="myDiv">
                                <h6>Employment</h6>
                                <p>To apply for a job with AWB Transport,<br/>please send your resume to:<br/>awbtransportinc@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <div id="success"></div>
                        <button className="btn btn-primary myContactButton" id="sendMessageButton" type="submit">Send Message</button>
                    </div>
                </form>
            </div>
        </section>
    </div>
  )
}