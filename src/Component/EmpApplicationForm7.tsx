import React from "react";
import styleClasses from "../Common/styleClasses";
import { useForm } from "react-hook-form";
import {
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Typography,
  Select,
  TextField,
} from "@material-ui/core";
import * as Scroll from "react-scroll";
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";

import { Accordion, Col, Container, Row } from "react-bootstrap";
import { update } from "../services/updateApi";
import SignatureCanvas from "react-signature-canvas";
import ReactHookFormSelect from "./SubComponents/ReactHookFormSelect";
import RadioQuestions from "./SubComponents/RadioQuestions";
import { reqBits, RequireError, states } from "../Common/CommonVariables";
import { useRef, useState } from "react";
import ReactAutoComplete from "./SubComponents/ReactAutoComplete";
import { formatPhoneNumberIntl } from "react-phone-number-input";
import { snackbarDuratuion } from "../Common/CommonVariables";
import AlertComponent from "./SubComponents/AlertComponent";
import { useEffect } from "react";

type Props = { data?: any; handler?: any; setData: any };

export default function EmpApplicationForm7(props: Props) {
  const classes = styleClasses.useStyles();
  const Forms = useForm({
    defaultValues: props.data,
  });
  const { register, handleSubmit, errors, control } = Forms;
  const [phonePattern, setPhonePatten] = useState("");
  const [prevEmplpoyerPhonePattern, setprevEmplpoyerPhonePattern] = useState("");
  const [nameOfPersonProvidingInformationPhone, setNameOfPersonProvidingInformationPhone] = useState("");

  const sigPad = useRef<any>();
  let base64SignatureImage = "";

  const clearSigPad = () => {
    if (sigPad && sigPad.current) {
      sigPad.current?.clear();
      base64SignatureImage = "";
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let Link = Scroll.Link;
  let Element = Scroll.Element;
  let Events = Scroll.Events;
  let scroll = Scroll.animateScroll;
  let scrollSpy = Scroll.scrollSpy;

  const saveImage = () => {
    if (sigPad.current && !sigPad.current.isEmpty()) {
      base64SignatureImage = sigPad.current?.getTrimmedCanvas().toDataURL("image/png");
    }
  };

  function errorChecking() {
    if (errors && errors.nameOfPersonProvidingInformationDate) {
      return "Date: " + errors.nameOfPersonProvidingInformationDate.message;
    }
    return "Date";
  }

  console.log("errorChecking()");
  console.log(errorChecking());

  //-------------SNACKBAR-------------
  const [succesOrErrorBit, setSuccesOrErrorBit] = useState("success");
  const [snackOpen, setSnackOpen] = React.useState(false);

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackOpen(false);
    console.log("CLOSE AUTO");
    if (succesOrErrorBit === "success") {
      props.handler[0]();
    }
  };
  //-------------SNACKBAR-------------

  const [signatureError, setSignatureError] = useState("");

  const onSubmit = async (data: any) => {
    if (sigPad.current && sigPad.current.isEmpty()) {
      setSignatureError("text-danger");
      console.log("scroller");
      console.log(scroller);
      scroller.scrollTo("sigPadElement", {
        duration: 100,
        delay: 100,
        smooth: false,
        containerId: "MyContainerId",
        offset: 50, // Scrolls to element + 50 pixels down the page
      });
      return;
    }
    {
      setSignatureError("");
      base64SignatureImage = sigPad.current.getTrimmedCanvas().toDataURL("image/png");
    }
    data.employeeSignature = base64SignatureImage;
    data.user_name = props.data.user_name;
    const resdata = await update(data);
    try {
      props.setData(resdata.data.data);
      //-------------SNACKBAR-------------
      setSuccesOrErrorBit("success");
      setSnackOpen(true);
      //-------------SNACKBAR-------------
      // props.handler[0]();
    } catch (ex) {
      console.log("Error Exaption Seerver Error");
      console.log(ex);
      //-------------SNACKBAR-------------
      setSuccesOrErrorBit("error");
      setSnackOpen(true);
      //-------------SNACKBAR-------------
    }
  };

  return (
    <React.Fragment>
      <Container id="MyContainerId" style={{ backgroundColor: "#fafafa" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container direction="row" justify="center" alignItems="baseline" spacing={3}>
            <Grid item xs={10} style={{ marginBottom: "10px" }}>
              <Paper
                elevation={3}
                style={{ paddingLeft: "40px", paddingRight: "60px" }}
                className={(classes.heading, classes.paperProminantStyle)}
              >
                <Grid container direction="row" justify="center" alignItems="baseline" spacing={3}>
                  <Grid item xs={10}>
                    <Typography align="justify" variant="body2">
                      <b>
                        Suggested Format: "Release of Information Form -- 49 CFR Part 40 Drug and Alcohol Testing"
                        <br />
                        Section I. To be completed by the new employer, signed by the employee, and transmitted to the previous
                        employer:
                      </b>
                    </Typography>
                  </Grid>

                  <Grid item xs={10}>
                    <Grid container direction="row" justify="space-between" alignItems="baseline" spacing={3}>
                      <Grid item xs={6}>
                        <TextField
                          name="employeePrintedName"
                          variant="outlined"
                          size="small"
                          type="text"
                          label="Employee Printed Name"
                          className="col-12"
                          error={errors && errors.employeePrintedName !== undefined ? true : false}
                          inputRef={register({
                            required: {
                              value: reqBits.employeePrintedName,
                              message: RequireError,
                            },
                          })}
                          helperText={errors && errors.employeePrintedName && errors.employeePrintedName.message}
                        ></TextField>
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          name="employeeSSNNumber"
                          variant="outlined"
                          size="small"
                          type="text"
                          label="Employee SSN or ID Number"
                          className="col-12"
                          error={errors && errors.employeeSSNNumber !== undefined ? true : false}
                          inputRef={register({
                            required: {
                              value: reqBits.employeeSSNNumber,
                              message: RequireError,
                            },
                          })}
                          helperText={errors && errors.employeeSSNNumber && errors.employeeSSNNumber.message}
                        ></TextField>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={10}>
                    <Typography align="justify" variant="subtitle2">
                      I hereby authorize release of information from my Department of Transportation regulated drug and alcohol
                      testing records by my previous employer, listed in Section I-B, to the employer listed in Section I-A. This
                      release is in accordance with DOT Regulation 49 CFR Part 40, Section 40.25. I understand that information to
                      be released in Section II-A by my previous employer, is limited to the following DOT-regulated testing
                      items:
                      <ol>
                        <li>Alcohol tests with a result of 0.04 or higher;</li>
                        <li>Verified positive drug tests;</li>
                        <li>Refusals to be tested;</li>
                        <li>Other violations of DOT agency drug and alcohol testing regulations;</li>
                        <li>Information obtained from previous employers of a drug and alcohol rule violation;</li>
                        <li>Documentation, if any, of completion of the return-to-duty process following a rule violation.</li>
                      </ol>
                    </Typography>
                  </Grid>

                  <Grid item xs={10}>
                    <Paper
                      elevation={3}
                      style={{ paddingLeft: "40px", paddingRight: "60px" }}
                      className={(classes.heading, classes.paperProminantStyle)}
                    >
                      <Typography align="left" variant="h6" className={signatureError}>
                        Employee Signature
                      </Typography>
                      <Element name="sigPadElement" className="element">
                        <div></div>
                      </Element>
                      <SignatureCanvas
                        penColor="black"
                        ref={sigPad}
                        canvasProps={{
                          width: 500,
                          height: 200,
                          className: "sigCanvas",
                        }}
                      />

                      <Grid container direction="row" justify="space-between" alignItems="baseline" spacing={3}>
                        <Grid item xs={3}></Grid>
                        <Grid item xs={3}>
                          <Button type="button" className="col-12" variant="contained" color="primary" onClick={clearSigPad}>
                            Clear
                          </Button>
                        </Grid>
                        <Grid item xs={3}>
                          <Button className="col-12" variant="contained" color="primary" onClick={saveImage}>
                            Save
                          </Button>
                        </Grid>
                        <Grid item xs={3}></Grid>
                      </Grid>
                    </Paper>
                  </Grid>

                  <Grid item xs={8}>
                    <TextField
                      name="employeeDate"
                      variant="outlined"
                      size="small"
                      type="date"
                      className="col-12"
                      error={errors && errors.employeeDate}
                      inputRef={register({
                        required: {
                          value: reqBits.employeeDate,
                          message: RequireError,
                        },
                      })}
                      helperText={(() => {
                        if (errors && errors.employeeDate) {
                          return "Employee Date: " + errors.employeeDate.message;
                        }
                        return "Employee Date";
                      })()}
                    ></TextField>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>

            {/* I-A */}
            <Grid item xs={10} style={{ marginBottom: "10px" }}>
              <Paper
                elevation={3}
                style={{
                  paddingLeft: "40px",
                  paddingRight: "60px",
                  paddingBottom: "60px",
                }}
                className={(classes.heading, classes.paperProminantStyle)}
              >
                <Grid container direction="row" justify="center" alignItems="baseline" spacing={3}>
                  <Grid item xs={10}>
                    <Typography align="justify" variant="body2">
                      <b>I-A.</b>
                    </Typography>
                  </Grid>

                  <Grid item xs={10}>
                    <Grid container direction="row" justify="space-between" alignItems="baseline" spacing={3}>
                      <Grid item xs={6}>
                        <TextField
                          name="newEmployeerName"
                          variant="outlined"
                          size="small"
                          type="text"
                          label="New Employer Name"
                          className="col-12"
                          error={errors && errors.newEmployeerName !== undefined ? true : false}
                          inputRef={register({
                            required: {
                              value: reqBits.newEmployeerName,
                              message: RequireError,
                            },
                          })}
                          helperText={errors && errors.newEmployeerName && errors.newEmployeerName.message}
                        ></TextField>
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          name="newEmployeerphone"
                          variant="outlined"
                          size="small"
                          type="text"
                          label="Phone"
                          className="col-12"
                          error={errors && errors.newEmployeerphone !== undefined ? true : false}
                          inputRef={register({
                            required: {
                              value: reqBits.newEmployeerphone,
                              message: RequireError,
                            },
                          })}
                          helperText={errors && errors.newEmployeerphone && errors.newEmployeerphone.message}
                          value={phonePattern}
                          onChange={(e) => {
                            if (e.target.value.length > 11) {
                              const n = formatPhoneNumberIntl(e.target.value);
                              if (n) {
                                //console.log(n);
                                setPhonePatten(n);
                              } else {
                                setPhonePatten(e.target.value);
                              }
                            } else {
                              setPhonePatten(e.target.value);
                            }
                          }}
                          onBlur={(e: any) => {
                            //console.log();
                            //console.log("EVENT ", e.target.value);
                          }}

                          // inputRef={register({
                          //   required: {
                          //     value: reqBits.newEmployeerphone,
                          //     message: RequireError,
                          //   },
                          // })}
                        ></TextField>
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          name="newEmployeerFax"
                          variant="outlined"
                          size="small"
                          type="text"
                          label="Fax"
                          className="col-12"
                          error={errors && errors.newEmployeerFax !== undefined ? true : false}
                          inputRef={register({
                            required: {
                              value: reqBits.newEmployeerFax,
                              message: RequireError,
                            },
                          })}
                          helperText={errors && errors.newEmployeerFax && errors.newEmployeerFax.message}
                        ></TextField>
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          name="newEmployeedesignatedEmployeeReprsentative"
                          variant="outlined"
                          size="small"
                          type="text"
                          label="Designated Employer Representative"
                          className="col-12"
                          error={errors && errors.newEmployeedesignatedEmployeeReprsentative !== undefined ? true : false}
                          inputRef={register({
                            required: {
                              value: reqBits.newEmployeedesignatedEmployeeReprsentative,
                              message: RequireError,
                            },
                          })}
                          helperText={
                            errors &&
                            errors.newEmployeedesignatedEmployeeReprsentative &&
                            errors.newEmployeedesignatedEmployeeReprsentative.message
                          }
                        ></TextField>
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          className="col-12"
                          name="newEmployeerAddress"
                          variant="outlined"
                          size="small"
                          type="text"
                          label="Address"
                          error={errors && errors.newEmployeerAddress !== undefined ? true : false}
                          inputRef={register({
                            required: {
                              value: reqBits.newEmployeerAddress,
                              message: RequireError,
                            },
                          })}
                          helperText={errors && errors.newEmployeerAddress && errors.newEmployeerAddress.message}
                        ></TextField>
                      </Grid>
                      <Grid item xs={4}>
                        <TextField
                          name="newEmployeerCity"
                          variant="outlined"
                          size="small"
                          type="text"
                          label="City"
                          className="col-12"
                          error={errors && errors.newEmployeerCity !== undefined ? true : false}
                          inputRef={register({
                            required: {
                              value: reqBits.newEmployeerCity,
                              message: RequireError,
                            },
                          })}
                          helperText={errors && errors.newEmployeerCity && errors.newEmployeerCity.message}
                        ></TextField>
                      </Grid>
                      <Grid item xs={4}>
                        <ReactAutoComplete
                          id="newEmployeerState"
                          className="col-12"
                          useForm={Forms}
                          label="States"
                          optionList={states}
                          defaultValue={props.data?.newEmployeerState}
                          error={errors && errors["newEmployeerState"]}
                          isReq={reqBits.newEmployeerState}
                        ></ReactAutoComplete>
                      </Grid>
                      <Grid item xs={4}>
                        <TextField
                          name="newEmployeerpostalCode"
                          variant="outlined"
                          size="small"
                          type="text"
                          label="Zip Code"
                          className="col-12"
                          error={errors && errors.newEmployeerpostalCode !== undefined ? true : false}
                          inputRef={register({
                            required: {
                              value: reqBits.newEmployeerpostalCode,
                              message: RequireError,
                            },
                            maxLength : {value:5,message:"Please Input 5 Digits only"},
                            pattern: { value: /[0-9]{5}/, message: "Please Input 5 Digits only" },
                          })}
                          helperText={errors && errors.newEmployeerpostalCode && errors.newEmployeerpostalCode.message}
                        ></TextField>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>

            {/* I-B */}
            <Grid item xs={10} style={{ marginBottom: "10px" }}>
              <Paper
                elevation={3}
                style={{
                  paddingLeft: "40px",
                  paddingRight: "60px",
                  paddingBottom: "60px",
                }}
                className={(classes.heading, classes.paperProminantStyle)}
              >
                <Grid container direction="row" justify="center" alignItems="baseline" spacing={3}>
                  <Grid item xs={10}>
                    <Typography align="justify" variant="body2">
                      <b>I-B.</b>
                    </Typography>
                  </Grid>

                  <Grid item xs={10}>
                    <Grid container direction="row" justify="space-between" alignItems="baseline" spacing={3}>
                      <Grid item xs={6}>
                        <TextField
                          name="prevEmployeerName"
                          variant="outlined"
                          size="small"
                          type="text"
                          label="Prev Employer Name"
                          className="col-12"
                          error={errors && errors.prevEmployeerName !== undefined ? true : false}
                          inputRef={register({
                            required: {
                              value: reqBits.prevEmployeerName,
                              message: RequireError,
                            },
                          })}
                          helperText={errors && errors.prevEmployeerName && errors.prevEmployeerName.message}
                        ></TextField>
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          name="prevEmployeerphone"
                          variant="outlined"
                          size="small"
                          type="text"
                          label="Prev Employer Phone"
                          className="col-12"
                          error={errors && errors.prevEmployeerphone !== undefined ? true : false}
                          inputRef={register({
                            required: {
                              value: reqBits.prevEmployeerphone,
                              message: RequireError,
                            },
                          })}
                          helperText={errors && errors.prevEmployeerphone && errors.prevEmployeerphone.message}
                          value={prevEmplpoyerPhonePattern}
                          onChange={(e) => {
                            if (e.target.value.length > 11) {
                              const n = formatPhoneNumberIntl(e.target.value);
                              if (n) {
                                //console.log(n);
                                setprevEmplpoyerPhonePattern(n);
                              } else {
                                setprevEmplpoyerPhonePattern(e.target.value);
                              }
                            } else {
                              setprevEmplpoyerPhonePattern(e.target.value);
                            }
                          }}
                        ></TextField>
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          name="prevEmployeerFax"
                          variant="outlined"
                          size="small"
                          type="text"
                          label="Prev Employer Fax"
                          className="col-12"
                          error={errors && errors.prevEmployeerFax !== undefined ? true : false}
                          inputRef={register({
                            required: {
                              value: reqBits.prevEmployeerFax,
                              message: RequireError,
                            },
                          })}
                          helperText={errors && errors.prevEmployeerFax && errors.prevEmployeerFax.message}
                        ></TextField>
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          name="prevEmployeedesignatedEmployeeReprsentative"
                          variant="outlined"
                          size="small"
                          type="text"
                          label="Designated Employer Representative"
                          className="col-12"
                          error={errors && errors.prevEmployeedesignatedEmployeeReprsentative !== undefined ? true : false}
                          inputRef={register({
                            required: {
                              value: reqBits.prevEmployeedesignatedEmployeeReprsentative,
                              message: RequireError,
                            },
                          })}
                          helperText={
                            errors &&
                            errors.prevEmployeedesignatedEmployeeReprsentative &&
                            errors.prevEmployeedesignatedEmployeeReprsentative.message
                          }
                        ></TextField>
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          className="col-12"
                          name="prevEmployeerAddress"
                          variant="outlined"
                          size="small"
                          type="text"
                          label="Prev Employer Address"
                          error={errors && errors.prevEmployeerAddress !== undefined ? true : false}
                          inputRef={register({
                            required: {
                              value: reqBits.prevEmployeerAddress,
                              message: RequireError,
                            },
                          })}
                          helperText={errors && errors.prevEmployeerAddress && errors.prevEmployeerAddress.message}
                        ></TextField>
                      </Grid>
                      <Grid item xs={4}>
                        <TextField
                          name="prevEmployeerCity"
                          variant="outlined"
                          size="small"
                          type="text"
                          label="City"
                          className="col-12"
                          error={errors && errors.prevEmployeerCity !== undefined ? true : false}
                          inputRef={register({
                            required: {
                              value: reqBits.prevEmployeerCity,
                              message: RequireError,
                            },
                          })}
                          helperText={errors && errors.prevEmployeerCity && errors.prevEmployeerCity.message}
                        ></TextField>
                      </Grid>
                      <Grid item xs={4}>
                        <ReactAutoComplete
                          id="prevEmployeerState"
                          className="col-12"
                          useForm={Forms}
                          label="States"
                          optionList={states}
                          defaultValue={props.data?.prevEmployeerState}
                          isReq={reqBits.prevEmployeerState}
                          error={errors && errors["prevEmployeerState"]}
                        ></ReactAutoComplete>
                      </Grid>
                      <Grid item xs={4}>
                        <TextField
                          name="prevEmployeerpostalCode"
                          variant="outlined"
                          size="small"
                          type="text"
                          label="Zip Code"
                          className="col-12"
                          error={errors && errors.prevEmployeerpostalCode !== undefined ? true : false}
                          inputRef={register({
                            required: {
                              value: reqBits.prevEmployeerpostalCode,
                              message: RequireError,
                            },
                            maxLength : {value:5,message:"Please Input 5 Digits only"},
                            pattern: { value: /[0-9]{5}/, message: "Please Input 5 Digits only" },
                          })}
                          helperText={errors && errors.prevEmployeerpostalCode && errors.prevEmployeerpostalCode.message}
                        ></TextField>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>

            <Grid item xs={10}>
              <Paper
                elevation={3}
                style={{
                  paddingLeft: "40px",
                  paddingRight: "60px",
                  paddingBottom: "60px",
                }}
                className={(classes.heading, classes.paperProminantStyle)}
              >
                <Grid container direction="row" justify="center" alignItems="baseline" spacing={3}>
                  <Grid item xs={10}>
                    <Typography align="justify" variant="body2">
                      <b>
                        Section II. To be completed by the previous employer and transmitted by mail or fax to the new employer.
                      </b>
                    </Typography>
                    <Typography align="justify" variant="subtitle2">
                      II-A. In the two years prior to the date of the employee’s signature (in Section I), for DOT-regulated
                      testing ~
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <RadioQuestions
                      id="employeeAlcoholTestRateHigher"
                      question="1. Did the employee have alcohol tests with a result of 0.04 or higher?"
                      optionList={["Yes", "No"]}
                      optionValue={["Yes", "No"]}
                      useForm={Forms}
                      isReq={reqBits.employeeAlcoholTestRateHigher}
                      defaultSelected={props.data.employeeAlcoholTestRateHigher}
                    />
                    <RadioQuestions
                      id="employeeverifiedDrugTest"
                      question="2. Did the employee have veried positive drug tests?"
                      optionList={["Yes", "No"]}
                      optionValue={["Yes", "No"]}
                      useForm={Forms}
                      isReq={reqBits.employeeverifiedDrugTest}
                      defaultSelected={props.data.employeeverifiedDrugTest}
                    />

                    <RadioQuestions
                      id="employeerefuseTest"
                      question="3. Did the employee refuse to be tested?"
                      optionList={["Yes", "No"]}
                      optionValue={["Yes", "No"]}
                      useForm={Forms}
                      isReq={reqBits.employeerefuseTest}
                      defaultSelected={props.data.employeerefuseTest}
                    />

                    <RadioQuestions
                      id="employeeotherViolations"
                      question="4. Did the employee have other violations of DOT agency drug and alcohol testing regulations?"
                      optionList={["Yes", "No"]}
                      optionValue={["Yes", "No"]}
                      useForm={Forms}
                      isReq={reqBits.employeeotherViolations}
                      defaultSelected={props.data.employeeotherViolations}
                    />

                    <RadioQuestions
                      id="prevEmployeeReportDrug"
                      question="5. Did a previous employer report a drug and alcohol rule violation to you?"
                      optionList={["Yes", "No"]}
                      optionValue={["Yes", "No"]}
                      useForm={Forms}
                      isReq={reqBits.prevEmployeeReportDrug}
                      defaultSelected={props.data.prevEmployeeReportDrug}
                    />

                    <RadioQuestions
                      id="answeredYes"
                      question="6. If you answered “yes” to any of the above items, did the employee complete the return-to-duty process?"
                      optionList={["Yes", "No"]}
                      optionValue={["Yes", "No"]}
                      useForm={Forms}
                      isReq={reqBits.answeredYes}
                      defaultSelected={props.data.answeredYes}
                    />
                  </Grid>
                  <Grid item xs={10}>
                    <Typography align="justify" variant="subtitle2">
                      NOTE: If you answered “yes” to item 5, you must provide the previous employer’s report. If you answered
                      “yes” to item 6, you must also transmit the appropriate return-to-duty documentation (e.g., SAP report(s),
                      follow-up testing record).
                    </Typography>
                  </Grid>
                  <Grid item xs={10}>
                    <Typography align="justify" variant="body2">
                      <b>II-B. Name of person providing information in Section II</b>
                    </Typography>
                  </Grid>
                  <Grid container direction="row" justify="center" alignItems="baseline" spacing={3}>
                    <Grid item xs={5}>
                      <TextField
                        name="nameOfPersonProvidingInformation"
                        variant="outlined"
                        size="small"
                        type="text"
                        label="A:"
                        className="col-12"
                        error={errors && errors.nameOfPersonProvidingInformation !== undefined ? true : false}
                        inputRef={register({
                          required: {
                            value: reqBits.nameOfPersonProvidingInformation,
                            message: RequireError,
                          },
                        })}
                        helperText={
                          errors && errors.nameOfPersonProvidingInformation && errors.nameOfPersonProvidingInformation.message
                        }
                      ></TextField>
                    </Grid>
                    <Grid item xs={5}>
                      <TextField
                        name="nameOfPersonProvidingInformationTitle"
                        variant="outlined"
                        size="small"
                        type="text"
                        label="Title"
                        className="col-12"
                        error={errors && errors.nameOfPersonProvidingInformationTitle !== undefined ? true : false}
                        inputRef={register({
                          required: {
                            value: reqBits.nameOfPersonProvidingInformationTitle,
                            message: RequireError,
                          },
                        })}
                        helperText={
                          errors &&
                          errors.nameOfPersonProvidingInformationTitle &&
                          errors.nameOfPersonProvidingInformationTitle.message
                        }
                      ></TextField>
                    </Grid>
                    <Grid item xs={5}>
                      <TextField
                        name="nameOfPersonProvidingInformationPhone"
                        variant="outlined"
                        size="small"
                        type="text"
                        label="Phone #"
                        className="col-12"
                        error={errors && errors.nameOfPersonProvidingInformationPhone !== undefined ? true : false}
                        inputRef={register({
                          required: {
                            value: reqBits.nameOfPersonProvidingInformationPhone,
                            message: RequireError,
                          },
                        })}
                        helperText={
                          errors &&
                          errors.nameOfPersonProvidingInformationPhone &&
                          errors.nameOfPersonProvidingInformationPhone.message
                        }
                        value={nameOfPersonProvidingInformationPhone}
                        onChange={(e) => {
                          if (e.target.value.length > 11) {
                            const n = formatPhoneNumberIntl(e.target.value);
                            if (n) {
                              //console.log(n);
                              setNameOfPersonProvidingInformationPhone(n);
                            } else {
                              setNameOfPersonProvidingInformationPhone(e.target.value);
                            }
                          } else {
                            setNameOfPersonProvidingInformationPhone(e.target.value);
                          }
                        }}
                      ></TextField>
                    </Grid>
                    <Grid item xs={5}>
                      <TextField
                        name="nameOfPersonProvidingInformationDate"
                        variant="outlined"
                        size="small"
                        type="date"
                        className="col-12"
                        error={errors && errors.nameOfPersonProvidingInformationDate !== undefined ? true : false}
                        inputRef={register({
                          required: {
                            value: reqBits.nameOfPersonProvidingInformationDate,
                            message: RequireError,
                          },
                        })}
                        helperText={(() => {
                          if (errors && errors.nameOfPersonProvidingInformationDate) {
                            return "Date: " + errors.nameOfPersonProvidingInformationDate.message;
                          }
                          return "Date";
                        })()}
                      ></TextField>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>

            {/* BUTTON Start */}
            <Grid item xs={4}>
              <Button
                type="button"
                className="col-12"
                variant="contained"
                color="primary"
                onClick={() => {
                  props.handler[1]();
                }}
              >
                Back
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button type="submit" className="col-12" variant="contained" color="primary">
                Save All
              </Button>
            </Grid>
            {/* BUTTON End */}
          </Grid>
        </form>
        <AlertComponent
          duration={snackbarDuratuion}
          open={snackOpen}
          onClose={handleClose}
          severity={succesOrErrorBit}
          message={succesOrErrorBit === "success" ? "All Data Saved" : "Error"}
        ></AlertComponent>
      </Container>
    </React.Fragment>
  );
}
