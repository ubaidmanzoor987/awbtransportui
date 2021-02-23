import React, { useState } from 'react';

export default function Clients() {
  

  return (
    <div>
        <div className="py-5">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">PARTNERSHIPS</h2>
                </div>
                <div className="row">
                    <div className="col-md-4 col-sm-6 my-3">
                        <a href="#!"><img className="img-fluid d-block mx-auto" src="assets/img/partners/California.jpg" alt="" /></a>
                    </div>
                    <div className="col-md-4 col-sm-6 my-3">
                         <a href="#!"><img className="img-fluid d-block mx-auto" src="assets/img/partners/AmericanTruckingAssociations_logo.jpg" alt="" /></a>
                    </div>
                    <div className="col-md-4 col-sm-6 my-3">
                         <a href="#!"><img className="img-fluid d-block mx-auto" src="assets/img/partners/smart_way.jpg" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }