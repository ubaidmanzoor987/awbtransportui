import { Button, Grid, MenuItem, Paper, TextField, Typography } from "@material-ui/core";
import React from "react";
import { Container } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import SignatureCanvas from "react-signature-canvas";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { useEffect } from "react";
import {
  addr,
  debug,
  startTimeVal,
  states,
  WrongPatternError,
  RequireError,
  EmploymentHistories,
  employmentHistoryDummyElement,
  drivingExperienceDummyElement,
  tDrivingExperiences,
  employmentAccidentHistoryDummyElement,
  EmploymentAccidentHistories,
  trafficConvictionDummyElement,
  tTrafficConvictions,
  tTrafficConvictionInfo,
  tDriverLicenses,
  driverLicenseDummyElement,
  tDriverLicenseInfo,
  reqBits,
  snackbarDuratuion,
} from "../Common/CommonVariables";
import { Addresses, tReferences } from "../Common/CommonVariables";
import RadioQuestions from "./SubComponents/RadioQuestions";
import AddressesComponent from "./SubComponents/AddressesComponent";
import EmploymentHistory from "./SubComponents/EmploymentHistory";
import ErrorBoundary from "./ErrorBoundary";
import EmploymentAccidentHistory from "./SubComponents/EmploymentAccidentHistory";
import TrafficConvictions from "./SubComponents/TrafficConvictions";
import DriverLicense from "./SubComponents/DriverLicense";
import ReactHookFormSelect from "./SubComponents/ReactHookFormSelect";
import ReactUseFormTextField from "./SubComponents/ReactUseFormTextField";
import { DynamicAddressComponent } from "./DynamicAddition/DynamicAddressComponent";
import { DynamicEmploymentHistoryComponent } from "./DynamicAddition/DynamicEmploymentHistoryComponent";
import { DynamicDrivingExperienceComponent } from "./DynamicAddition/DynamicDrivingExperienceComponent";
import { DynamicEmploymentAccidentHistoryComponent } from "./DynamicAddition/DynamicEmploymentAccidentHistoryComponent";
import { DynamicTrafficConvictions } from "./DynamicAddition/DynamicTrafficConvictions";
import { DynamicDriverLicense } from "./DynamicAddition/DynamicDriverLicense";
import { update } from "../services/updateApi";
import { PinDropRounded } from "@material-ui/icons";
import { DynamicReferences } from "./DynamicAddition/DynamicReferences";
import { useRef, useState } from "react";
import ReactAutoComplete from "./SubComponents/ReactAutoComplete";
import { formatPhoneNumberIntl } from "react-phone-number-input";
import AlertComponent from "./SubComponents/AlertComponent";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    default: {},
    paper: {
      color: theme.palette.text.secondary,
      padding: "5px 10px",
    },
    heading: {
      fontSize: theme.typography.pxToRem(19),
      fontWeight: theme.typography.fontWeightRegular,
      color: theme.palette.text.secondary,
    },
    smallHeading: {
      fontSize: theme.typography.pxToRem(17),
      fontWeight: theme.typography.fontWeightRegular,
      color: theme.palette.text.secondary,
      textJustify: "inter-word",
    },
    text: {
      fontSize: theme.typography.pxToRem(17),
      fontWeight: theme.typography.fontWeightRegular,
      color: theme.palette.text.secondary,
      textJustify: "inter-word",
    },
    caption: {
      fontSize: theme.typography.pxToRem(12),
      fontWeight: theme.typography.fontWeightRegular,
      color: theme.palette.text.secondary,
      textAlign: "left",
    },
    paperProminantStyle: {
      margin: "5px 0px",
      elevation: 3,
      padding: "20px 0px",
    },
    input: {
      display: "none",
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    questionTextStyle: {
      textAlign: "left",
    },
  })
);

let UpdateAddressesList: Addresses;
let UdpatedEmploymentHistoryList: EmploymentHistories;
let UpdateDrivingExperienceList: tDrivingExperiences;
let EmploymentAccidentHistoryList: EmploymentAccidentHistories;
let TrafficConvictionsList: tTrafficConvictions;
let DriverLicenseList: tDriverLicenses;
let ReferencesList: tReferences;

type Props = { data?: any; handler?: any; setData: any };

function EmpApplicationForm3(props: Props) {
  // //console.log("props.data ", props.data);
  const [signatureError, setSignatureError] = useState("");

  const Forms = useForm({ defaultValues: props.data });
  const { register, handleSubmit, errors, control } = Forms;

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

  const [phonePattern, setPhonePatten] = useState(props.data.applicantPhoneNumber ? props.data.applicantPhoneNumber : "");

  const [emergencyPhonePattern, setEmergencyPhonePatten] = useState(
    props.data.applicantPhoneNumber ? props.data.applicantPhoneNumber : ""
  );

  const saveImage = () => {
    if (sigPad.current && !sigPad.current.isEmpty()) {
      base64SignatureImage = sigPad.current?.getTrimmedCanvas().toDataURL("image/png");
    }
  };

  if (debug === true) {
    // props.data = props.data;
  }

  const classes = useStyles();

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

  const onSubmit = async (data: any) => {
    if (sigPad.current && sigPad.current.isEmpty()) {
      setSignatureError("text-danger");
      return;
    }
    {
      setSignatureError("");
      base64SignatureImage = sigPad.current.getTrimmedCanvas().toDataURL("image/png");
    }
    data.signature = base64SignatureImage;
    //console.log(data);
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

  console.log("props.data.applicantAddresses");
  console.log(props.data.applicantAddresses);

  const [questionBits, setQuestionBits] = useState([
    { deniedLicences: props.data.deniedLicences === "Yes" },
    { permitLicences: props.data.permitLicences === "Yes" },
    {
      reasonforUnableToPerformActions: props.data.reasonforUnableToPerformActions === "Yes",
    },
    { convictedofafelony: props.data.convictedofafelony === "Yes" },
  ]);

  const changeQuestionBits = () => {
    // setQuestionBits(...questionBits, { deniedLicences: true });
  };
  const updateReferencesList = (updateReferences: any) => {
    //console.log("------------Update Driver License List------------");
    ReferencesList = updateReferences;
    //console.log(ReferencesList);
  };

  const updateDriverLicenseList = (updateDriverLicense: any) => {
    //console.log("------------Update Driver License List------------");
    DriverLicenseList = updateDriverLicense;
    //console.log(DriverLicenseList);
  };

  const updateTrafficConvictionsList = (updateTrafficConvictions: any) => {
    //console.log("------------Update Traffic Convictions List------------");
    TrafficConvictionsList = updateTrafficConvictions;
    //console.log(TrafficConvictionsList);
  };

  const updateEmploymentAccidentHistoryList = (updateEmploymentAccidentHistories: any) => {
    //console.log(
    // "------------Update Employment Accident History List------------"
    // );
    EmploymentAccidentHistoryList = updateEmploymentAccidentHistories;
    //console.log(EmploymentAccidentHistoryList);
  };

  const updateDrivingExperienceList = (updateDrivingExperiences: any) => {
    //console.log("------------Update Driving Experience List------------");
    UpdateDrivingExperienceList = updateDrivingExperiences;
    //console.log(UpdateDrivingExperienceList);
  };

  const updateEmploymentHistoryList = (udpatedEmploymentHistory: any) => {
    //console.log("------------Updated Employment History List------------");
    UdpatedEmploymentHistoryList = udpatedEmploymentHistory;
    //console.log(UdpatedEmploymentHistoryList);
  };

  const updateAddressList = (updatedAddresses: any) => {
    //console.log("------------Updated Addresses------------");
    //  //console.log(updatedAddresses);
    UpdateAddressesList = updatedAddresses;
  };

  return (
    <React.Fragment>
      <Container style={{ backgroundColor: "#fafafa" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container direction="row" justify="space-around" alignItems="center" spacing={3}>
            <Grid item xs={12}>
              <Paper style={{ margin: "10px 0px" }} elevation={3} className={(classes.paper, classes.paperProminantStyle)}>
                <h4>AWB Transport Inc., Employment Application</h4>
              </Paper>
            </Grid>
            <Grid item xs={10} style={{ marginBottom: "10px" }}>
              <Grid container direction="row" justify="space-between" alignItems="baseline" spacing={3}>
                <Grid item xs={12}>
                  <Paper style={{ margin: "10px 0px" }} elevation={3} className={(classes.heading, classes.paperProminantStyle)}>
                    <Grid container direction="row" justify="space-between" alignItems="baseline" spacing={3}>
                      <Grid item xs={12} className={classes.heading}>
                        COMMERCIAL DRIVER APPLICATION
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          name="companyName"
                          variant="outlined"
                          size="small"
                          type="text"
                          className="col-10"
                          label="Company Name"
                          error={errors.companyName === undefined ? false : true}
                          helperText={errors.companyName && errors.companyName?.message}
                          inputRef={register({
                            required: {
                              value: reqBits.companyName,
                              message: RequireError,
                            },
                          })}
                        ></TextField>
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          className="col-10"
                          name="companyAddress"
                          variant="outlined"
                          size="small"
                          type="text"
                          label="Address"
                          error={errors.companyAddress == undefined ? false : true}
                          helperText={errors.companyAddress && errors.companyAddress?.message}
                          inputRef={register({
                            required: {
                              value: reqBits.companyAddress,
                              message: RequireError,
                            },
                          })}
                        ></TextField>
                      </Grid>
                      <Grid item xs={4}>
                        <TextField
                          name="companyCity"
                          variant="outlined"
                          size="small"
                          type="text"
                          label="City"
                          className="col-6"
                          error={errors.companyCity === undefined ? false : true}
                          helperText={errors.companyCity && errors.companyCity?.message}
                          inputRef={register({
                            required: {
                              value: reqBits.companyCity,
                              message: RequireError,
                            },
                          })}
                        ></TextField>
                      </Grid>
                      <Grid item xs={4}>
                        {/* <ReactAutoComplete
                          id="state"
                          label={"States"}
                          className="col-12"
                          useForm={Forms}
                          optionList={states}
                          defaultValue={props.data.state}
                          error={errors && errors["state"]}
                        ></ReactAutoComplete> */}
                        <ReactAutoComplete
                          id="companyState"
                          className="col-10"
                          label="Company State"
                          useForm={Forms}
                          optionList={states}
                          isReq={reqBits["companyState"]}
                          error={errors && errors["companyState"]}
                          defaultValue={props.data.companyState}
                        ></ReactAutoComplete>

                        {/* <ReactHookFormSelect
                          nameVal="companyState"
                          label="State"
                          variant="outlined"
                          size="small"
                          control={control}
                          className="col-10"
                          defaultValue={props.data.companyState}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          {states.map(function (object: any, i: number) {
                            return (
                              <MenuItem value={object.value} key={i}>
                                {object.value}
                              </MenuItem>
                            );
                          })}
                        </ReactHookFormSelect> */}
                      </Grid>
                      <Grid item xs={4}>
                        <TextField
                          name="companyPostCode"
                          variant="outlined"
                          size="small"
                          type="text"
                          label="Zip Code"
                          className="col-6"
                          error={errors.companyPostCode == undefined ? false : true}
                          helperText={errors.companyPostCode && errors.companyPostCode?.message}
                          inputRef={register({
                            required: {
                              value: reqBits.companyPostCode,
                              message: RequireError,
                            },
                            maxLength : {value:5,message:"Please Input 5 Digits only"},
                            pattern: { value: /[0-9]{5}/, message: "Please Input 5 Digits only" },
                          })}
                        ></TextField>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={10} style={{ marginBottom: "10px" }}>
              <Grid container direction="row" justify="space-between" alignItems="baseline" spacing={3}>
                <Grid item xs={12}>
                  <Paper style={{ margin: "10px 0px" }} elevation={3} className={(classes.heading, classes.paperProminantStyle)}>
                    <Grid container direction="row" justify="space-evenly" alignItems="center" spacing={3}>
                      <Grid item xs={12} className={classes.heading}>
                        APPLICANT INFORMATION
                      </Grid>

                      <Grid item xs={10}>
                        <Paper className={(classes.heading, classes.paperProminantStyle)}>
                          <Grid container direction="row" justify="space-around" alignItems="center" spacing={2}>
                            <Grid item xs={3}>
                              <Typography
                                className={classes.text}
                                style={{
                                  textAlign: "left",
                                  paddingLeft: "18px",
                                }}
                              >
                                Application Date:
                              </Typography>
                            </Grid>
                            <Grid item xs={8}>
                              <TextField
                                name="applicationApplyDate"
                                variant="outlined"
                                size="small"
                                type="date"
                                className="col-10"
                                label=""
                                error={errors.applicationApplyDate == undefined ? false : true}
                                inputRef={register({
                                  required: reqBits.applicationApplyDate,
                                })}
                                defaultValue={props.data.applicationApplyDate}
                                helperText={
                                  errors.applicationApplyDate && errors.applicationApplyDate?.type.toUpperCase() + " Error"
                                }
                              ></TextField>
                            </Grid>
                            <Grid item xs={12}>
                              <RadioQuestions
                                id="applicationApplyAsPosition"
                                optionValue={["contractor", "driver", "contractor_driver", "other"]}
                                question="Position applying for:"
                                optionList={["Contractor", "Driver", "Contractor's Driver", "Other"]}
                                defaultSelected={props.data.applicationApplyAsPosition}
                                useForm={Forms}
                                isReq={false}
                                xsSize={11}
                                actionOnSelection={(e: any) => {
                                  console.log("Radio Radios");
                                  console.log(e);
                                }}
                              ></RadioQuestions>
                            </Grid>
                          </Grid>
                        </Paper>
                      </Grid>

                      <Grid item xs={10}>
                        <Paper
                          style={{ margin: "10px 0px" }}
                          elevation={3}
                          className={(classes.paper, classes.paperProminantStyle)}
                        >
                          <Grid container direction="row" justify="space-around" alignItems="baseline" spacing={1}>
                            <Grid item xs={5} style={{ marginBottom: "10px" }}>
                              <TextField
                                name="applicantfirstName"
                                variant="outlined"
                                size="small"
                                type="text"
                                className="col-12"
                                error={errors.applicantfirstName === undefined ? false : true}
                                label="First Name"
                                helperText={errors.applicantfirstName && errors.applicantfirstName?.message}
                                inputRef={register({
                                  required: {
                                    value: reqBits.applicantfirstName,
                                    message: RequireError,
                                  },
                                })}
                              ></TextField>
                            </Grid>
                            <Grid item xs={5} style={{ marginBottom: "10px" }}>
                              <TextField
                                name="applicantLastName"
                                variant="outlined"
                                size="small"
                                type="text"
                                className="col-12"
                                error={errors.applicantLastName === undefined ? false : true}
                                label="Last Name"
                                inputRef={register({
                                  required: reqBits.applicantLastName,
                                })}
                                helperText={errors.applicantLastName && errors.applicantLastName?.type.toUpperCase() + " Error"}
                              ></TextField>
                            </Grid>
                            <Grid item xs={11} style={{ marginBottom: "10px" }}>
                              <TextField
                                name="applicantPhoneNumber"
                                variant="outlined"
                                size="small"
                                type="text"
                                className="col-12"
                                error={errors.applicantPhoneNumber == undefined ? false : true}
                                inputRef={register({
                                  required: {
                                    value: reqBits.applicantPhoneNumber,
                                    message: RequireError,
                                  },
                                })}
                                label="Phone Number"
                                helperText={errors.applicantPhoneNumber && errors.applicantPhoneNumber?.message}
                                value={phonePattern ? phonePattern : props.data.applicantPhoneNumber}
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
                                // inputRef={register({
                                //   required: {
                                //     value: reqBits.applicantPhoneNumber,
                                //     message: RequireError,
                                //   },
                                //   pattern: {
                                //     value: /^([0-9]{3}[-.][0-9]{3}[-.][0-9]{4}[-. ][x][0-9]{4})$/,
                                //     message: WrongPatternError + " : ###-###-#### x####",
                                //   },
                                // })}
                              ></TextField>
                            </Grid>
                            <Grid item xs={5} style={{ marginBottom: "10px" }}>
                              <TextField
                                name="emergencyContactfirstName"
                                variant="outlined"
                                size="small"
                                type="text"
                                className="col-12"
                                error={errors.emergencyContactfirstName == undefined ? false : true}
                                label="Emergency: First Name"
                                helperText={errors.emergencyContactfirstName && errors.emergencyContactfirstName?.message}
                                inputRef={register({
                                  required: {
                                    value: reqBits.emergencyContactfirstName,
                                    message: RequireError,
                                  },
                                })}
                              ></TextField>
                            </Grid>
                            <Grid item xs={5} style={{ marginBottom: "10px" }}>
                              <TextField
                                name="emergencyContactlastName"
                                variant="outlined"
                                size="small"
                                type="text"
                                className="col-12"
                                error={errors.emergencyContactlastName == undefined ? false : true}
                                label="Emergency: Last Name"
                                inputRef={register({
                                  required: reqBits.emergencyContactlastName,
                                })}
                                helperText={
                                  errors.emergencyContactlastName &&
                                  errors.emergencyContactlastName?.type.toUpperCase() + " Error"
                                }
                              ></TextField>
                            </Grid>
                            <Grid item xs={11} style={{ marginBottom: "10px" }}>
                              <TextField
                                name="emergencyContactNumber"
                                variant="outlined"
                                size="small"
                                type="tel"
                                className="col-12"
                                error={errors.emergencyContactNumber == undefined ? false : true}
                                inputRef={register({
                                  required: {
                                    value: reqBits.emergencyContactNumber,
                                    message: RequireError,
                                  },
                                })}
                                label="Emergency: Mobile Num"
                                helperText={errors.emergencyContactNumber && errors.emergencyContactNumber?.message}
                                onChange={(e) => {
                                  if (e.target.value.length > 11) {
                                    const n = formatPhoneNumberIntl(e.target.value);
                                    if (n) {
                                      //console.log(n);
                                      setEmergencyPhonePatten(n);
                                    } else {
                                      setEmergencyPhonePatten(e.target.value);
                                    }
                                  } else {
                                    setEmergencyPhonePatten(e.target.value);
                                  }
                                }}
                              ></TextField>
                            </Grid>
                            <Grid item xs={5} style={{ marginBottom: "10px" }}>
                              <TextField
                                name="age"
                                variant="outlined"
                                size="small"
                                type="number"
                                className="col-12"
                                error={errors.age == undefined ? false : true}
                                label="Age"
                                helperText={errors.age && errors.age?.message}
                                inputRef={register({
                                  required: {
                                    value: reqBits.age,
                                    message: RequireError,
                                  },
                                })}
                              ></TextField>
                            </Grid>
                            <Grid item xs={5} style={{ marginBottom: "10px" }}>
                              <TextField
                                name="applicantdateofbirth"
                                variant="outlined"
                                size="small"
                                type="date"
                                className="col-12"
                                error={errors.applicantdateofbirth == undefined ? false : true}
                                helperText="Date of Birth"
                                inputRef={register({
                                  required: reqBits.applicantdateofbirth,
                                })}
                              ></TextField>
                            </Grid>
                            <Grid item xs={11} style={{ marginBottom: "10px" }}>
                              <TextField
                                name="physicalExamExpirationDate"
                                variant="outlined"
                                size="small"
                                type="date"
                                className="col-12"
                                error={errors.physicalExamExpirationDate == undefined ? false : true}
                                helperText="Phyical Exam Exp Date"
                                inputRef={register({
                                  required: reqBits.physicalExamExpirationDate,
                                })}
                                // helperText={
                                //   errors.physicalExamExpirationDate == undefined
                                //     ? ""
                                //     : "Exp Date " +
                                //       errors.physicalExamExpirationDate?.type.toUpperCase() +
                                //       " Error"
                                // }
                              ></TextField>
                            </Grid>
                          </Grid>
                        </Paper>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper style={{ margin: "10px 0px" }} elevation={3} className={(classes.paper, classes.paperProminantStyle)}>
                    <Grid container direction="row" justify="space-around" alignItems="center">
                      <Grid item xs={12} className={classes.heading} style={{ textAlign: "center", margin: "10px 0px" }}>
                        ADDRESS
                      </Grid>

                      <Grid item xs={10}>
                        <DynamicAddressComponent
                          idPrefix="applicantAddresses"
                          setAddresses={updateAddressList}
                          addressesList={props.data.applicantAddresses}
                          addressId="applicantAddresses"
                          cityId=""
                          stateId=""
                          zipCodeId=""
                          fromDateId=""
                          toDateId=""
                          forms={Forms}
                        ></DynamicAddressComponent>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={10} style={{ marginBottom: "10px" }}>
              <Paper style={{ margin: "10px 0px" }} elevation={3} className={(classes.heading, classes.paperProminantStyle)}>
                <Grid container direction="row" justify="space-around" alignItems="center" spacing={3}>
                  <Grid item xs={12} className={classes.heading}>
                    COMPANY HISTORY
                  </Grid>

                  <Grid item xs={11}>
                    <Paper
                      style={{ margin: "10px 0px" }}
                      elevation={3}
                      className={(classes.heading, classes.paperProminantStyle)}
                    >
                      <RadioQuestions
                        id="everWorkedForCompany"
                        question="Have you worked for this company before?"
                        optionValue={["Yes", "No"]}
                        optionList={["Yes", "No"]}
                        defaultSelected={props.data.everWorkedForCompany}
                        useForm={Forms}
                        isReq={reqBits.everWorkedForCompany}
                        actionOnSelection={(e: any) => {
                          console.log("Radio Radios");
                          console.log(e);
                        }}
                      ></RadioQuestions>
                    </Paper>
                  </Grid>

                  <Grid item xs={12} className={classes.heading}>
                    EDUCATION HISTORY
                  </Grid>

                  <Grid item xs={11}>
                    <Paper
                      style={{ margin: "10px 0px" }}
                      elevation={3}
                      className={(classes.heading, classes.paperProminantStyle)}
                    >
                      <RadioQuestions
                        id="applicantSchoolGrade"
                        question="Please circle the highest School grade completed"
                        optionValue={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]}
                        optionList={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]}
                        defaultSelected={props.data.applicantSchoolGrade}
                        isReq={reqBits.applicantSchoolGrade}
                        useForm={Forms}
                        actionOnSelection={(e: any) => {
                          console.log("Radio Radios");
                          console.log(e);
                        }}
                      ></RadioQuestions>

                      <RadioQuestions
                        id="applicantCollegeGrade"
                        question="Please circle the highest Collage grade completed"
                        optionValue={["1", "2", "3", "4"]}
                        optionList={["1", "2", "3", "4"]}
                        defaultSelected={props.data.applicantCollegeGrade}
                        isReq={reqBits.applicantCollegeGrade}
                        useForm={Forms}
                        actionOnSelection={(e: any) => {
                          console.log("Radio Radios");
                          console.log(e);
                        }}
                      ></RadioQuestions>

                      <RadioQuestions
                        id="applicantPostGraduateGrade"
                        question="Please circle the highest Post Graduate grade completed"
                        optionValue={["1", "2", "3", "4"]}
                        optionList={["1", "2", "3", "4"]}
                        defaultSelected={props.data.applicantPostGraduateGrade}
                        isReq={reqBits.applicantPostGraduateGrade}
                        useForm={Forms}
                        actionOnSelection={(e: any) => {
                          console.log("Radio Radios");
                          console.log(e);
                        }}
                      ></RadioQuestions>
                    </Paper>
                  </Grid>

                  <Grid item xs={12}>
                    <hr style={{ marginBottom: "10px" }} />
                  </Grid>
                  <Grid item xs={12} className={classes.heading}>
                    EMPLOYMENT HISTORY
                  </Grid>
                  <Grid item xs={1}></Grid>
                  <Grid item xs={10} className={classes.paper}>
                    <Typography className={(classes.text, classes.questionTextStyle, "col-12")} style={{ textAlign: "left" }}>
                      Give a COMPLETE RECORD of all employment for the past three (3) years, including any unemployment or self
                      employment periods, and all commercial driving experience for the past ten (10) years.
                      <i>(List most current first)</i>
                    </Typography>
                  </Grid>
                  <Grid item xs={1}></Grid>
                  <Grid item xs={1}></Grid>
                  <Grid item xs={10}>
                    <DynamicEmploymentHistoryComponent
                      idPrefix="employmentHistory"
                      useForm={Forms}
                      employmentHistoryList={props.data.employmentHistory}
                      setEmploymentHistoryList={updateEmploymentHistoryList}
                    ></DynamicEmploymentHistoryComponent>
                  </Grid>
                  <Grid item xs={1}></Grid>
                </Grid>
              </Paper>
            </Grid>

            <Grid item xs={10}>
              <Paper style={{ margin: "5px 0px" }} elevation={3} className={(classes.heading, classes.paperProminantStyle)}>
                <Grid container direction="row" justify="space-around" alignItems="center" spacing={1}>
                  <Grid item xs={12} className={classes.heading}>
                    DRIVING EXPERIENCE
                  </Grid>

                  <Grid item xs={10}>
                    <DynamicDrivingExperienceComponent
                      idPrefix="employmentExperienceHistory"
                      drivingExperienceList={props.data.employmentExperienceHistory}
                      useForm={Forms}
                      setDrivingExperienceList={updateDrivingExperienceList}
                    ></DynamicDrivingExperienceComponent>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>

            <Grid item xs={10}>
              <Paper style={{ margin: "10px 0px" }} elevation={3} className={(classes.heading, classes.paperProminantStyle)}>
                <TextField
                  id="outlined-multiline-static"
                  label="List states operated in, for the last five (5) years:"
                  name="lastFiveYearStatesOperate"
                  error={errors && errors.lastFiveYearStatesOperate}
                  inputRef={register({
                    required: {
                      value: reqBits.lastFiveYearStatesOperate,
                      message: RequireError,
                    },
                  })}
                  multiline
                  rows={4}
                  defaultValue={props.data.lastFiveYearStatesOperate}
                  variant="outlined"
                  className="col-10"
                />
                <br />
                <br />
                <TextField
                  id="outlined-multiline-static"
                  label="List special courses/training completed (PTD/DDC, HAZMAT, ETC)"
                  multiline
                  error={errors && errors.Listspecialcourses}
                  inputRef={register({
                    required: {
                      value: reqBits.Listspecialcourses,
                      message: RequireError,
                    },
                  })}
                  name="Listspecialcourses"
                  rows={4}
                  defaultValue={props.data.Listspecialcourses}
                  variant="outlined"
                  className="col-10"
                />
                <br />
                <br />
                <TextField
                  id="outlined-multiline-static"
                  label="List any Safe Driving Awards you hold and from whom:"
                  multiline
                  rows={4}
                  error={errors && errors.ListanySafeDrivingAwards}
                  inputRef={register({
                    required: {
                      value: reqBits.ListanySafeDrivingAwards,
                      message: RequireError,
                    },
                  })}
                  name="ListanySafeDrivingAwards"
                  defaultValue={props.data.ListanySafeDrivingAwards}
                  variant="outlined"
                  className="col-10"
                />
              </Paper>
            </Grid>

            <Grid item xs={10}>
              <Paper style={{ margin: "10px 0px" }} elevation={3} className={(classes.heading, classes.paperProminantStyle)}>
                <Typography className={classes.heading}>List of accident history</Typography>
                <div className="row">
                  <div className="col-1"></div>
                  <div className="col-10 mt-2">
                    <DynamicEmploymentAccidentHistoryComponent
                      idPrefix="employmentAccidentsHistory"
                      employmentAccidentHistoryList={props.data.employmentAccidentsHistory}
                      useForm={Forms}
                      setEmploymentAccidentHistoryList={updateEmploymentAccidentHistoryList}
                    ></DynamicEmploymentAccidentHistoryComponent>
                  </div>
                  <div className="col-1"></div>
                </div>
              </Paper>
            </Grid>

            <Grid item xs={10}>
              <Paper style={{ margin: "10px 0px" }} elevation={3} className={(classes.heading, classes.paperProminantStyle)}>
                <Typography className={classes.heading}>List of traffic conviction</Typography>
                <div className="row">
                  <div className="col-1"></div>
                  <div className="col-10 mt-2">
                    <DynamicTrafficConvictions
                      idPrefix="violations"
                      trafficConvictionsList={props.data.violations}
                      useForm={Forms}
                      settrafficConvictionsList={updateTrafficConvictionsList}
                    ></DynamicTrafficConvictions>
                  </div>
                  <div className="col-1"></div>
                </div>
              </Paper>
            </Grid>

            <Grid item xs={10}>
              <Paper style={{ margin: "10px 0px" }} elevation={3} className={(classes.heading, classes.paperProminantStyle)}>
                <Typography className={classes.heading}>
                  Driver’s License (list each driver’s license held in the past three(3) years):
                </Typography>
                <div className="row">
                  <div className="col-1"></div>
                  <div className="col-10 mt-2">
                    <DynamicDriverLicense
                      idPrefix="licences"
                      dirverLicenseList={props.data.licences}
                      setdirverLicenseList={updateDriverLicenseList}
                      useForm={Forms}
                    ></DynamicDriverLicense>
                  </div>
                  <div className="col-1"></div>
                </div>
              </Paper>
            </Grid>

            <Grid item xs={10}>
              <Paper style={{ margin: "10px 0px" }} elevation={3} className={(classes.heading, classes.paperProminantStyle)}>
                <div className="row">
                  <div className="col-1"></div>
                  <div className="col-10 mt-2">
                    <RadioQuestions
                      id="deniedLicences"
                      question="Have you ever been denied a license, permit or privilege to operate a motor vehicle? *"
                      optionList={["Yes", "No"]}
                      optionValue={["Yes", "No"]}
                      useForm={Forms}
                      xsSize={11}
                      defaultSelected={"Yes"}
                      isReq={reqBits.deniedLicences}
                      actionOnSelection={(e: any) => {
                        // console.log("Radio Radios");
                        // console.log(e);
                      }}
                    ></RadioQuestions>
                  </div>
                  <div className="col-1"></div>
                </div>
                <div className="row">
                  <div className="col-1"></div>
                  <div className="col-10 mt-2">
                    <RadioQuestions
                      id="permitLicences"
                      question="Has any license, permit or privilege ever been suspended or revoked? *"
                      optionList={["Yes", "No"]}
                      optionValue={["Yes", "No"]}
                      useForm={Forms}
                      xsSize={11}
                      defaultSelected={"Yes"}
                      isReq={reqBits.permitLicences}
                      actionOnSelection={(e: any) => {
                        console.log("Radio Radios");
                        console.log(e);
                      }}
                    ></RadioQuestions>
                  </div>
                  <div className="col-1"></div>
                </div>
                <div className="row">
                  <div className="col-1"></div>
                  <div className="col-10 mt-2">
                    <RadioQuestions
                      id="reasonforUnableToPerformActions"
                      question="Is there any reason you might be unable to perform the functions of the job for which
                      you have applied (as described in the job description)?"
                      optionList={["Yes", "No"]}
                      optionValue={["Yes", "No"]}
                      useForm={Forms}
                      xsSize={11}
                      defaultSelected={"Yes"}
                      isReq={reqBits.reasonforUnableToPerformActions}
                      actionOnSelection={(e: any) => {
                        console.log("Radio Radios");
                        console.log(e);
                      }}
                    ></RadioQuestions>
                  </div>
                  <div className="col-1"></div>
                </div>
                <div className="row">
                  <div className="col-1"></div>
                  <div className="col-10 mt-2">
                    <RadioQuestions
                      id="convictedofafelony"
                      question="Have you ever been convicted of a felony? *"
                      optionList={["Yes", "No"]}
                      optionValue={["Yes", "No"]}
                      useForm={Forms}
                      xsSize={11}
                      defaultSelected={"Yes"}
                      isReq={reqBits.convictedofafelony}
                      actionOnSelection={(e: any) => {
                        console.log("Radio Radios");
                        console.log(e);
                      }}
                    ></RadioQuestions>
                  </div>
                  <div className="col-1"></div>
                </div>
                <br />
                <br />
                <div className="row">
                  <div className="col-1"></div>
                  <div className="col-10 mt-2">
                    {true && (
                      <TextField
                        id="outlined-multiline-static"
                        label="If the answers to any questions listed above are “yes”,
                      give details"
                        multiline
                        rows={4}
                        error={errors && errors.answerToAnyQuestion}
                        inputRef={register({
                          required: {
                            value: reqBits.answerToAnyQuestion,
                            message: RequireError,
                          },
                        })}
                        name="answerToAnyQuestion"
                        defaultValue={props.data.answerToAnyQuestion}
                        variant="outlined"
                        className="col-11"
                      />
                    )}
                  </div>
                  <div className="col-1"></div>
                </div>
              </Paper>
            </Grid>

            <Grid item xs={10}>
              <Paper style={{ margin: "10px 0px" }} elevation={3} className={(classes.heading, classes.paperProminantStyle)}>
                <Typography className={classes.heading}>
                  List three (3) persons for references, other than family
                  <br />
                  members, who have knowledge of your safety habits:
                </Typography>
                <div className="row">
                  <div className="col-1"></div>
                  <div className="col-10 mt-2">
                    <DynamicReferences
                      idPrefix="references"
                      referenceList={props.data.references}
                      setReferenceList={updateReferencesList}
                      useForm={Forms}
                    ></DynamicReferences>
                  </div>
                  <div className="col-1"></div>
                </div>
              </Paper>
            </Grid>

            <Grid item xs={10}>
              <Paper style={{ margin: "10px 0px" }} elevation={3} className={(classes.heading, classes.paperProminantStyle)}>
                <Typography className={classes.heading}>To Be Read and Signed by Applicant:</Typography>
                <div className="row">
                  <div className="col-1"></div>
                  <div className="col-10 mt-2 text-left">
                    <Typography>
                      <ul>
                        <li>
                          It is agreed and understood that any misrepresentation given on this application shall be considered an
                          act of dishonesty.
                        </li>
                        <li>
                          It is agreed and understood that the motor carrier or his agents may investigate the applicant’s
                          background to obtain any and all information of concern to applicant’s record, whether same is of record
                          or not, and applicant releases employers and person named herein from all liability for any damages on
                          account of his furnishing such information.
                        </li>
                        <li>
                          It is also agreed and understood that under the Fair Credit Reporting Act, Public Law 91-508, I have
                          been told that this investigation may include an investigating Consumer Report, including information
                          regarding my character, general reputation, personal characteristics, and mode of living.
                        </li>
                        <li>
                          I agree to furnish such additional information and complete such examinations as may be required to
                          complete my application file.
                        </li>
                        <li>
                          It is agreed and understood that this Application in no way obligates the motor carrier to employ or
                          hire the applicant.
                        </li>
                        <li>
                          It is agreed and understood that if qualified and hired, I may be on a probationary period during which
                          time I may be disqualified without recourse.
                        </li>
                        <li>
                          This certifies that this application was completed by me, and that all entries on it and information in
                          it are true and complete to the best of my knowledge.
                        </li>
                      </ul>
                    </Typography>
                  </div>
                  <div className="col-1"></div>
                </div>
              </Paper>
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
                Save This & Next
              </Button>
            </Grid>
          </Grid>
        </form>
        <AlertComponent
          duration={snackbarDuratuion}
          open={snackOpen}
          message={succesOrErrorBit === "success" ? "Saved" : "Error"}
          onClose={handleClose}
          severity={succesOrErrorBit}
        ></AlertComponent>
      </Container>
    </React.Fragment>
  );
}

export default EmpApplicationForm3;
