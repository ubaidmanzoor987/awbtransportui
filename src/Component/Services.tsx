import React, { useState } from 'react';

export default function Services() {
  

  return (
    <div>
        <section className="page-section" id="services">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Services</h2>
                    <h3 className="section-subheading text-muted">AWB Transport is a renowned, reliable, professional and quality driven company that operates 24 hours a day, 365 days a year on the west coast. Whether you need truckload, or distribution solutions, we offer a vast range of services as detailed below.</h3>
                </div>
                <div className="row text-center">
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">TRUCKLOAD</h4>
                        <p className="text-muted">We have a wide range of truckload solutions. Whether you need local, regional, or long-haul service, we have your back.</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-laptop fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">INTERMODAL</h4>
                        <p className="text-muted">Enjoy the convenience of trucking as well as the cost advantage of rail with our intermodal service.</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-lock fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">CRITICAL CAPACITY</h4>
                        <p className="text-muted">Running short on time? You can rely on us to get your shipment there! We understand that time means money, and your critical need to get your shipment delivered on time. Our drivers are professionals with an understanding for the time-critical nature of highly-sensitive rush shipments.</p>
                    </div>
                </div>
                <br/>
                <div className="row text-center">
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">DEDICATED CAPACITY</h4>
                        <p className="text-muted">Our dedicated capacity service is dedicated towards you! It's almost like having your own private fleet basically. We run our fleet as if it was yours. You get a complete management team, core group of drivers and quality equipment at your disposal.</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-laptop fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">LOGISTICS</h4>
                        <p className="text-muted">We provide linehaul and logistics services for both corporations and manufactures who require superior handling, time-definite delivery, and also full-service logistics management.</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-lock fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">DISTRIBUTION</h4>
                        <p className="text-muted">Our warehousing and distribution center are located strategically in order to provide direct rail access. Which provides you the advantage of both time and cost savings.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}