import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { contactUs } from '../services/contactApi';
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import {
    Snackbar,
  } from "@material-ui/core";
import { formatOnlyNumbers, snackbarDuratuion } from '../Common/CommonVariables';

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

export default function Contacts() {
  
    const Forms = useForm({
        shouldFocusError: true,
      });
      const {
        register,
        handleSubmit,
        errors,
        control,
        setError,
        clearErrors,
      } = Forms;
  
  const [succesOrErrorBit, setSuccesOrErrorBit] = useState("success");
  const [phoneNum,setPhoneNum] = useState("");
  const [successSnackOpen, setSuccessSnackOpen] = React.useState(false);
  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setSuccessSnackOpen(false);
    //console.log("CLOSE AUTO");

  };


   const onSubmit = async (data:any) => {
    data.recepient = [data.recepient];

    // console.log("contact us data");
    // console.log(data);
    let res = await contactUs(data);
    // console.log(res);
    try {
        if(res.success){
            setSuccesOrErrorBit("success");
            setSuccessSnackOpen(true);
        }
      } catch (ex) {
        setSuccesOrErrorBit("error");
        setSuccessSnackOpen(true);
      }
   }

  return (
    <div>
        <section className="page-section" id="contact">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading">Contact Us</h2>
                    <h3 className="section-subheading text-muted">For any inquiries, questions or commendations, please call: 916-248-1008 or fill out the following form.</h3>
                </div>
                <form id="contactForm" name="sentMessage" onSubmit={handleSubmit(onSubmit)}  >
                    <div className="row align-items-stretch mb-5">
                        <div className="col-md-6">
                        <div className="form-group">
                                <input className="form-control"  ref={register} name="subject" id="subject" type="text" placeholder="Subject *" required data-validation-required-message="Subject" />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="form-group">
                                <input className="form-control" ref={register} name="name" id="name" type="text" placeholder="Your Name *" required data-validation-required-message="Please enter your name." />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="form-group">
                                <input className="form-control" ref={register} name="email" id="email" type="email" placeholder="Your Email *" required data-validation-required-message="Please enter your email." />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="form-group">
                                <input className="form-control"  ref={register} name="phone" id="phone" type="tel" placeholder="Your Phone *" value={phoneNum} onChange={(e:any)=>{setPhoneNum(formatOnlyNumbers(e.target.value))}} required data-validation-required-message="Please enter your phone number." />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="form-group mb-md-0">
                                <textarea className="form-control"  ref={register} name="message" id="message" placeholder="Your Message *" required data-validation-required-message="Please enter a message." style={{height:"300px"}}></textarea>
                                <p className="help-block text-danger"></p>
                            </div>
                            <input className="form-control" hidden={true}  ref={register} value="abdulrehmanmirza135@gmail.com" name="sender" id="sender" type="email"/>
                            <input className="form-control" hidden={true}  ref={register} value="awbtransportinc@gmail.com" name="recepient" id="recepient" type="email"/>
                            
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
        <Snackbar
          open={successSnackOpen}
          autoHideDuration={snackbarDuratuion}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity={succesOrErrorBit as "success"}>
            {succesOrErrorBit === "success" && "Mail sent successfully"}
            {succesOrErrorBit === "error" && "Server error"}
          </Alert>
        </Snackbar>
    </div>
  )
}