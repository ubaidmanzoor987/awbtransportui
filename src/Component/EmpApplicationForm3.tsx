import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
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
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DrivingExperience from "./SubComponents/DrivingExperience";
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
} from "../Common/CommonVariables";
import { Addresses } from "../Common/CommonVariables";
import RadioQuestions from "./SubComponents/RadioQuestions";
import AddressesComponent from "./SubComponents/AddressesComponent";
import EmploymentHistory from "./SubComponents/EmploymentHistory";
import ErrorBoundary from "./ErrorBoundary";
import EmploymentAccidentHistory from "./SubComponents/EmploymentAccidentHistory";
import TrafficConvictions from "./SubComponents/TrafficConvictions";
import DriverLicense from "./SubComponents/DriverLicense";

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

type Props = { data?: any; handler?: any };

let def: any;

function EmpApplicationForm3(props: Props) {
  const Forms = useForm();
  const { register, handleSubmit, errors, control } = Forms;

  const classes = useStyles();

  const onSubmit = (data: any) => {
    console.log(data);
    data.addresses = UpdateAddressesList;
    data.employmentHistories = UdpatedEmploymentHistoryList;
    props.handler[0]();
  };

  const updateDriverLicenseList = (updateDriverLicense: any) => {
    console.log("------------Update Driver License List------------");
    DriverLicenseList = updateDriverLicense;
    console.log(DriverLicenseList);
  };

  const updateTrafficConvictionsList = (updateTrafficConvictions: any) => {
    console.log("------------Update Traffic Convictions List------------");
    TrafficConvictionsList = updateTrafficConvictions;
    console.log(TrafficConvictionsList);
  };

  const updateEmploymentAccidentHistoryList = (updateEmploymentAccidentHistories: any) => {
    console.log("------------Update Employment Accident History List------------");
    EmploymentAccidentHistoryList = updateEmploymentAccidentHistories;
    console.log(EmploymentAccidentHistoryList);
  };

  const updateDrivingExperienceList = (updateDrivingExperiences: any) => {
    console.log("------------Update Driving Experience List------------");
    UpdateDrivingExperienceList = updateDrivingExperiences;
    console.log(UpdateDrivingExperienceList);
  };

  const updateEmploymentHistoryList = (udpatedEmploymentHistory: any) => {
    console.log("------------Updated Employment History List------------");
    UdpatedEmploymentHistoryList = udpatedEmploymentHistory;
    console.log(UdpatedEmploymentHistoryList);
  };

  const updateAddressList = (updatedAddresses: any) => {
    console.log("------------Updated Addresses------------");
    //  console.log(updatedAddresses);
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
            {/* PAGE 1 */}
            <Grid item xs={10} style={{ marginBottom: "10px" }}>
              <Grid container direction="row" justify="space-between" alignItems="baseline" spacing={3}>
                <Grid item xs={12}>
                  <Paper style={{ margin: "10px 0px" }} elevation={3} className={(classes.heading, classes.paperProminantStyle)}>
                    <Grid container direction="row" justify="space-between" alignItems="baseline" spacing={3}>
                      {/* Company Name */}
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
                            required: { value: reqBits.companyName, message: RequireError },
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
                            required: { value: reqBits.companyAddress, message: RequireError },
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
                            required: { value: reqBits.companyCity, message: RequireError },
                          })}
                        ></TextField>
                      </Grid>
                      <Grid item xs={4}>
                        <FormControl variant="outlined" size="small" className="col-10">
                          <InputLabel id="demo-simple-select-outlined-label">State</InputLabel>
                          <Select
                            name="companyState"
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            label="State"
                            error={errors.companyState == undefined ? false : true}
                            inputRef={register({
                              required: { value: reqBits.companyState, message: RequireError },
                            })}
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
                          </Select>
                          <FormHelperText>{errors.companyState && errors.companyState?.message}</FormHelperText>
                        </FormControl>
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
                            required: { value: reqBits.companyPostCode, message: RequireError },
                          })}
                        ></TextField>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>

            {/* PAGE 2 */}
            <Grid item xs={10} style={{ marginBottom: "10px" }}>
              <Grid container direction="row" justify="space-between" alignItems="baseline" spacing={3}>
                <Grid item xs={12}>
                  <Paper style={{ margin: "10px 0px" }} elevation={3} className={(classes.heading, classes.paperProminantStyle)}>
                    <Grid container direction="row" justify="space-evenly" alignItems="center" spacing={3}>
                      {/* Company Name */}
                      <Grid item xs={12} className={classes.heading}>
                        APPLICANT INFORMATION
                      </Grid>

                      <Grid item xs={10}>
                        <Paper className={(classes.heading, classes.paperProminantStyle)}>
                          <Grid container direction="row" justify="space-around" alignItems="flex-start" spacing={2}>
                            <Grid item xs={4}>
                              <Typography className={classes.text}>Application Date:</Typography>
                            </Grid>
                            <Grid item xs={8}>
                              <TextField
                                name="applicationApplyDate"
                                variant="outlined"
                                size="small"
                                type="date"
                                className="col-10"
                                error={errors.applicationApplyDate == undefined ? false : true}
                                label=""
                                inputRef={register({
                                  required: reqBits.applicationApplyDate,
                                })}
                                helperText={
                                  errors.applicationApplyDate && errors.applicationApplyDate?.type.toUpperCase() + " Error"
                                }
                              ></TextField>
                            </Grid>
                            <Grid item xs={12}>
                              <RadioQuestions
                                id="applicationApplyAsPosition"
                                question="Position applying for:"
                                optionList={["Contractor", "Driver", "Contractor's Driver", "Other"]}
                                useForm={Forms}
                                isReq={reqBits.applicationApplyAsPosition}
                                xsSize={11}
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
                          <Grid container direction="row" justify="space-around" alignItems="center" spacing={1}>
                            <Grid item xs={5}>
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
                                  required: { value: reqBits.applicantfirstName, message: RequireError },
                                })}
                              ></TextField>
                            </Grid>
                            <Grid item xs={5}>
                              <TextField
                                name="applicantLastName"
                                variant="outlined"
                                size="small"
                                type="text"
                                className="col-12"
                                error={errors.last_name === undefined ? false : true}
                                label="Last Name"
                                inputRef={register({
                                  required: reqBits.applicantLastName,
                                })}
                                helperText={errors.last_name && errors.last_name?.type.toUpperCase() + " Error"}
                              ></TextField>
                            </Grid>
                            <Grid item xs={11}>
                              <TextField
                                name="applicantPhoneNumber"
                                variant="outlined"
                                size="small"
                                type="tel"
                                className="col-12"
                                error={errors.phone_number == undefined ? false : true}
                                label="Phone Number"
                                helperText={errors.phone_number && errors.phone_number?.message}
                                inputRef={register({
                                  required: { value: reqBits.applicantPhoneNumber, message: RequireError },
                                  pattern: {
                                    value: /^([0-9]{3}[-.][0-9]{3}[-.][0-9]{4}[-. ][x][0-9]{4})$/,
                                    message: WrongPatternError + " : ###-###-#### x####",
                                  },
                                })}
                              ></TextField>
                            </Grid>
                            <Grid item xs={5}>
                              <TextField
                                name="emergencyContactfirstName"
                                variant="outlined"
                                size="small"
                                type="text"
                                className="col-12"
                                error={errors.emergency_first_name == undefined ? false : true}
                                label="Emergency: First Name"
                                helperText={errors.emergency_first_name && errors.emergency_first_name?.message}
                                inputRef={register({
                                  required: { value: reqBits.emergencyContactfirstName, message: RequireError },
                                })}
                              ></TextField>
                            </Grid>
                            <Grid item xs={5}>
                              <TextField
                                name="emergencyContactlastName"
                                variant="outlined"
                                size="small"
                                type="text"
                                className="col-12"
                                error={errors.emergency_last_name == undefined ? false : true}
                                label="Emergency: Last Name"
                                inputRef={register({
                                  required: reqBits.emergencyContactlastName,
                                })}
                                helperText={
                                  errors.emergency_last_name && errors.emergency_last_name?.type.toUpperCase() + " Error"
                                }
                              ></TextField>
                            </Grid>
                            <Grid item xs={11}>
                              <TextField
                                name="emergencyContactNumber"
                                variant="outlined"
                                size="small"
                                type="tel"
                                className="col-12"
                                error={errors.emergency_phone_number == undefined ? false : true}
                                label="Emergency: Mobile Num"
                                helperText={errors.emergency_phone_number && errors.emergency_phone_number?.message}
                                inputRef={register({
                                  required: { value: reqBits.emergencyContactNumber, message: RequireError },
                                  pattern: {
                                    value: /^([0-9]{3}[-.][0-9]{3}[-.][0-9]{4}[-. ][x][0-9]{4})$/,
                                    message: WrongPatternError + " : ###-###-#### x####",
                                  },
                                })}
                              ></TextField>
                            </Grid>
                            <Grid item xs={5}>
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
                                  required: { value: reqBits.age, message: RequireError },
                                })}
                              ></TextField>
                            </Grid>
                            <Grid item xs={5}>
                              <TextField
                                name="applicantdateofbirth"
                                variant="outlined"
                                size="small"
                                type="text"
                                className="col-12"
                                error={errors.dateOfBirth == undefined ? false : true}
                                label="Date of Birth"
                                inputRef={register({
                                  required: reqBits.applicantdateofbirth,
                                })}
                                helperText={errors.dateOfBirth && errors.dateOfBirth?.type.toUpperCase() + " Error"}
                              ></TextField>
                            </Grid>
                            <Grid item xs={11}>
                              <TextField
                                name="physicalExamExpirationDate"
                                variant="outlined"
                                size="small"
                                type="text"
                                className="col-12"
                                error={errors.physicalExamDateExpiry == undefined ? false : true}
                                label="Phyical Exam Exp Date"
                                inputRef={register({
                                  required: reqBits.physicalExamExpirationDate,
                                })}
                                helperText={
                                  errors.physicalExamDateExpiry == undefined
                                    ? ""
                                    : "Exp Date " + errors.physicalExamDateExpiry?.type.toUpperCase() + " Error"
                                }
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
                      {/* Current Address Starting */}

                      <Grid item xs={10}>
                        <AddressesComponent
                          idPrefix="applicantAddresses"
                          addressId="lastYearAddress"
                          cityId="lastYearAddressCity"
                          stateId="lastYearAddressState"
                          zipCodeId="lastYearAddressZipCode"
                          fromDateId="lastYearAddressfrom"
                          toDateId="lastYearAddressTo"
                          setAddresses={updateAddressList}
                          addressesList={props.data.addresses}
                        ></AddressesComponent>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>

            {/* PAGE 3 */}
            <Grid item xs={10} style={{ marginBottom: "10px" }}>
              <Paper style={{ margin: "10px 0px" }} elevation={3} className={(classes.heading, classes.paperProminantStyle)}>
                <Grid container direction="row" justify="space-around" alignItems="center" spacing={3}>
                  {/* Company Name */}
                  <Grid item xs={12} className={classes.heading}>
                    COMPANY HISTORY
                  </Grid>
                  {/* applicant name */}

                  <Grid item xs={11}>
                    <Paper
                      style={{ margin: "10px 0px" }}
                      elevation={3}
                      className={(classes.heading, classes.paperProminantStyle)}
                    >
                      <RadioQuestions
                        id="everWorkedForCompany"
                        question="Have you worked for this company before?"
                        optionList={["Yes", "No"]}
                        defaultSelected="No"
                        useForm={Forms}
                        isReq={reqBits.everWorkedForCompany}
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
                        optionList={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]}
                        defaultSelected="12"
                        isReq={reqBits.applicantSchoolGrade}
                        useForm={Forms}
                      ></RadioQuestions>

                      <RadioQuestions
                        id="applicantCollegeGrade"
                        question="Please circle the highest Collage grade completed"
                        optionList={["1", "2", "3", "4"]}
                        defaultSelected="4"
                        isReq={reqBits.applicantCollegeGrade}
                        useForm={Forms}
                      ></RadioQuestions>

                      <RadioQuestions
                        id="applicantPostGraduateGrade"
                        question="Please circle the highest Post Graduate grade completed"
                        optionList={["1", "2", "3", "4"]}
                        defaultSelected="4"
                        isReq={reqBits.applicantPostGraduateGrade}
                        useForm={Forms}
                      ></RadioQuestions>
                    </Paper>
                  </Grid>

                  <Grid item xs={12}>
                    <hr style={{ marginBottom: "10px" }} />
                  </Grid>
                  {/* Employment History */}
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
                    <ErrorBoundary>
                      <EmploymentHistory
                        idPrefix="employmentHistory"
                        useForm={Forms}
                        employmentHistoryList={props.data.employmentHistory}
                        setEmploymentHistoryList={updateEmploymentHistoryList}
                      ></EmploymentHistory>
                    </ErrorBoundary>
                  </Grid>
                  <Grid item xs={1}></Grid>
                </Grid>
              </Paper>
            </Grid>

            {/* PAGE 4 */}
            <Grid item xs={10}>
              <Paper style={{ margin: "5px 0px" }} elevation={3} className={(classes.heading, classes.paperProminantStyle)}>
                <Grid container direction="row" justify="space-around" alignItems="center" spacing={1}>
                  {/* Company Name */}
                  <Grid item xs={12} className={classes.heading}>
                    DRIVING EXPERIENCE
                  </Grid>

                  <Grid item xs={10}>
                    <DrivingExperience
                      idPrefix="employmentExperienceHistory"
                      drivingExperienceList={props.data.employmentExperienceHistory}
                      useForm={Forms}
                      setDrivingExperienceList={updateDrivingExperienceList}
                    ></DrivingExperience>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            {/* 
            <DrivingExperience
              idPrefix={"employmentExperienceHistory"}
              drivingExperienceList={[drivingExperienceDummyElement]}
              useForm={Forms}
              setDrivingExperienceList={updateDrivingExperienceList}
            ></DrivingExperience> */}

            {/* PAGE 5 */}
            <Grid item xs={10}>
              <Paper style={{ margin: "10px 0px" }} elevation={3} className={(classes.heading, classes.paperProminantStyle)}>
                <TextField
                  id="outlined-multiline-static"
                  label="List states operated in, for the last five (5) years:"
                  name="lastFiveYearStatesOperate"
                  multiline
                  rows={4}
                  defaultValue=""
                  variant="outlined"
                  className="col-10"
                />
                <br />
                <br />
                <TextField
                  id="outlined-multiline-static"
                  label="List special courses/training completed (PTD/DDC, HAZMAT, ETC)"
                  multiline
                  name="Listspecialcourses"
                  rows={4}
                  defaultValue=""
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
                  name="ListanySafeDrivingAwards"
                  defaultValue=""
                  variant="outlined"
                  className="col-10"
                />
              </Paper>
            </Grid>

            {/* PAGE 6 */}
            <Grid item xs={10}>
              <Paper style={{ margin: "10px 0px" }} elevation={3} className={(classes.heading, classes.paperProminantStyle)}>
                <Typography className={classes.heading}>List of accident history</Typography>
                <div className="row">
                  <div className="col-1"></div>
                  <div className="col-10 mt-2">
                    <EmploymentAccidentHistory
                      idPrefix="employmentAccidentsHistory"
                      employmentAccidentHistoryList={props.data.employmentAccidentsHistory}
                      useForm={Forms}
                      setEmploymentAccidentHistoryList={updateEmploymentAccidentHistoryList}
                    ></EmploymentAccidentHistory>
                  </div>
                  <div className="col-1"></div>
                </div>
              </Paper>
            </Grid>

            {/* PAGE 7 */}

            <Grid item xs={10}>
              <Paper style={{ margin: "10px 0px" }} elevation={3} className={(classes.heading, classes.paperProminantStyle)}>
                <Typography className={classes.heading}>List of traffic conviction</Typography>
                <div className="row">
                  <div className="col-1"></div>
                  <div className="col-10 mt-2">
                    <TrafficConvictions
                      idPrefix="violations"
                      trafficConvictionsList={[trafficConvictionDummyElement]}
                      useForm={Forms}
                      settrafficConvictionsList={updateTrafficConvictionsList}
                    ></TrafficConvictions>
                  </div>
                  <div className="col-1"></div>
                </div>
              </Paper>
            </Grid>

            {/* PAGE 8 */}
            <Grid item xs={10}>
              <Paper style={{ margin: "10px 0px" }} elevation={3} className={(classes.heading, classes.paperProminantStyle)}>
                <Typography className={classes.heading}>
                  Driver’s License (list each driver’s license held in the past three(3) years:
                </Typography>
                <div className="row">
                  <div className="col-1"></div>
                  <div className="col-10 mt-2">
                    <DriverLicense
                      idPrefix="licences"
                      driverLicenseList={[driverLicenseDummyElement]}
                      useForm={Forms}
                      setdriverLicenseList={updateDriverLicenseList}
                    ></DriverLicense>

                    {/* <Accordion elevation={3}>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                        <Typography className={classes.smallHeading}>Driver’s License 1</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Grid container direction="row" justify="space-around" alignItems="baseline" spacing={3}>
                          <Grid item xs={6}>
                            <FormControl variant="outlined" size="small" className="col-12">
                              <InputLabel id="demo-simple-select-outlined-label">State</InputLabel>
                              <Select
                                name="state"
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                label="State"
                                error={errors.state == undefined ? false : true}
                                inputRef={register({
                                  required: { value: true, message: RequireError },
                                })}
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
                              </Select>
                              <FormHelperText>{errors.state && errors.state?.message}</FormHelperText>
                            </FormControl>
                          </Grid>
                          <Grid item xs={6}>
                            <TextField variant="outlined" label="License" size="small" type="text" className="col-12"></TextField>
                          </Grid>
                          <Grid item xs={12}>
                            <TextField variant="outlined" label="Type" size="small" className="col-12" type="text"></TextField>
                          </Grid>
                          <Grid item xs={6}>
                            <TextField
                              id="outlined-multiline-static"
                              size="small"
                              label="Endorsement"
                              rows={4}
                              defaultValue=""
                              variant="outlined"
                              className="col-12"
                            />
                          </Grid>
                          <Grid item xs={6}>
                            <TextField
                              id="outlined-multiline-static"
                              helperText="Expiration Date"
                              size="small"
                              type="date"
                              rows={4}
                              defaultValue=""
                              variant="outlined"
                              className="col-12"
                            />
                          </Grid>
                        </Grid>
                      </AccordionDetails>
                    </Accordion> */}
                  </div>
                  <div className="col-1"></div>
                </div>
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
                Save This & Next
              </Button>
            </Grid>
            {/* BUTTON End */}
          </Grid>
        </form>
      </Container>
    </React.Fragment>
  );
}

export default EmpApplicationForm3;

// COMPLETED UI PHASE
