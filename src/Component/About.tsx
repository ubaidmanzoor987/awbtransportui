import React, { useState } from "react";
import { Link } from "react-scroll";
export default function About() {
  return (
    <div>
      <section className="page-section" id="about">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">About</h2>
            <h3 className="section-subheading text-muted">
              LEADERS IN QUALITY TRANSPORTATION
            </h3>
          </div>
          <ul className="timeline">
            <li>
              <div className="timeline-image">
                <img
                  className="rounded-circle img-fluid"
                  src="assets/img/about/1.jpg"
                  alt=""
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2013</h4>
                  <h4 className="subheading">Our Humble Beginnings</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    At AWB Transport, we have understand the importance and
                    value of being a reliable, professional and quality driven
                    shipping provider for our customers. Renown for our services
                    and recognized for quality, we will continue to reinforce
                    our commitment to these values.
                  </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img
                  className="rounded-circle img-fluid"
                  src="assets/img/about/2.jpeg"
                  alt=""
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>March 2013</h4>
                  <h4 className="subheading">An Agency is Born</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    We are glad you have made a choice to consider us to handle
                    your shipping needs. You can feel confident that your
                    requirements and fullest satisfaction have been, and will
                    always be our main concern and priority - 24 hours a day,
                    365 days a year.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-image">
                <img
                  className="rounded-circle img-fluid"
                  src="assets/img/about/3.jpg"
                  alt=""
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>December 2013</h4>
                  <h4 className="subheading">Transition to Full Service</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    We are glad you have made a choice to consider us to handle
                    your shipping needs. You can feel confident that your
                    requirements and fullest satisfaction have been, and will
                    always be our main concern and priority - 24 hours a day,
                    365 days a year.
                  </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img
                  className="rounded-circle img-fluid"
                  src="assets/img/about/2.jpeg"
                  alt=""
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>July 2014</h4>
                  <h4 className="subheading">Phase Two Expansion</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    We are glad you have made a choice to consider us to handle
                    your shipping needs. You can feel confident that your
                    requirements and fullest satisfaction have been, and will
                    always be our main concern and priority - 24 hours a day,
                    365 days a year.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <Link
                className="timeline-image"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={1000}
                style={{ textDecoration: "None", cursor: "pointer" }}
              >
                <h4>
                  Be Part
                  <br />
                  Of Our
                  <br />
                  Story!
                </h4>
              </Link>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4></h4>
                  <h4 className="subheading"></h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    To learn more about our company and transportation services,
                    please contact us today. You can request a freight quote for
                    any trucking service by completing our online form, or for
                    immediate service, please call our staff directly!
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
