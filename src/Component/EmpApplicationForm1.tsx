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
  Select,
  TextField,
} from "@material-ui/core";
import React, { Component, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { styleClasses } from "../Common/styleClasses";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import DeleteIcon from "@material-ui/icons/Delete";
import { states, Addresses, reqBits } from "../Common/CommonVariables";

import { fileUploadApi } from "../services/fileUploadApi";

import { update } from "../services/updateApi";
import RadioQuestions from "./SubComponents/RadioQuestions";
import AddressesComponent from "./SubComponents/AddressesComponent";
import classNames from "classnames";
import ReactAutoComplete from "./SubComponents/ReactAutoComplete";
import NumberFormat from "react-number-format";

type Props = { data?: any; handler?: any; setData: any };
const startTimeVal = [{ value: "Immediately" }, { value: "Within 2 Weeks" }, { value: "Within 1 Month" }];
const classAExperienceLevelVal = [
  { value: "Experienced Class A Driver" },
  { value: "Have Class A, But Need Training" },
  { value: "Currently in the Truck School" },
];

let UpdateAddressesList: Addresses;

function EmpApplicationForm1(props: Props) {
  const [manualStates, setManualStates] = useState(props.data);

  const handleFileUpload = (event: any) => {
    console.log("------------FILE UPLOAD----------");
    console.log(event.target.files[0].name);
    console.log(event.target.files[0]);
    const formData = new FormData();

    if (manualStates.resume1 == undefined || manualStates.resume1 == null) {
      setManualStates({ ...manualStates, resume1: event.target.files[0] });
      formData.append("file", event.target.files[0], event.target.files[0].name);
      formData.append("user_name", props.data.user_name);
      // axios.post("api/fileUploadApi", formData);
      fileUploadApi(formData);
    } else {
      setManualStates({ ...manualStates, resume2: event.target.files[0] });
      formData.append("file", event.target.files[0], event.target.files[0].name);
      formData.append("user_name", props.data.user_name);

      fileUploadApi(formData);
    }
  };

  let preLoadedValues = {
    first_name: props.data.first_name,
    last_name: props.data.last_name,
    phone_number: props.data.phone_number,
    email: props.data.email,
    dateofBirth: props.data.dateofBirth,
    socialSecurity: props.data.socialSecurity,
    address: props.data.address,
    city: props.data.city,
    state: props.data.state,
    zipCode: props.data.zipCode,
    lastThreeYearResidenceCheck: props.data.lastThreeYearResidenceCheck,
    addresses: props.data.addresses,
    lastYearAddress: props.data.lastYearAddress,
    lastYearAddressCity: props.data.lastYearAddressCity,
    lastYearAddressState: props.data.lastYearAddressState,
    lastYearAddressZipCode: props.data.lastYearAddressZipCode,
    lastYearAddressfrom: props.data.lastYearAddressfrom,
    lastYearAddressTo: props.data.lastYearAddressTo,
    startTime: props.data.startTime,
    hearAbout: props.data.hearAbout,
    eligibletoWorkInUnitedState: props.data.eligibletoWorkInUnitedState,
    classAExperienceLevel: props.data.classAExperienceLevel,
    willingForDrugTest: props.data.willingForDrugTest,
  };



  const Forms = useForm({
    defaultValues: props.data,
  });

  const { register, handleSubmit, errors } = Forms;

  const onSubmit = async (data: any) => {
    data.addresses = UpdateAddressesList;
    data.user_name = props.data.user_name;
    console.log(data);
    const resdata = await update(data);
    props.setData(resdata.data.data);
    props.handler();
  };

  const updateAddressList = (updatedAddresses: any) => {
    UpdateAddressesList = updatedAddresses;
  };

  const classes = styleClasses.useStyles();

  const RequireError: string = "Required *";
  const WrongPatternError: string = "Wrong Pattern";

  return (
    <React.Fragment>
      <Container style={{ backgroundColor: "#fafafa" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container direction="row" justify="space-around" alignItems="baseline" spacing={3}>
            <Grid item xs={12}>
              <Paper elevation={3} className={classes.paper}>
                <h4>AWB Transport Inc., Employment Application</h4>
              </Paper>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
              <Paper elevation={3} className={classes.paper}>
                <Grid container direction="row" justify="space-between" alignItems="baseline" spacing={3}>
                  <Grid item xs={12} className={classes.heading} style={{ textAlign: "center", marginTop: "10px" }}>
                    Basic Information
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      name="first_name"
                      variant="outlined"
                      size="small"
                      type="text"
                      className={classNames("col-8")}
                      label="First Name"
                      error={errors.first_name == undefined ? false : true}
                      helperText={errors.first_name && errors.first_name?.message}
                      inputRef={register({
                        required: {
                          value: reqBits.first_name,
                          message: RequireError,
                        },
                      })}
                    ></TextField>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      name="last_name"
                      variant="outlined"
                      size="small"
                      type="text"
                      className="col-8"
                      label="Last Name"
                      inputRef={register}
                    ></TextField>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      name="phone_number"
                      variant="outlined"
                      size="small"
                      type="tel"
                      className="col-8"
                      error={errors.phone_number == undefined ? false : true}
                      label="Phone Number"
                      helperText={errors.phone_number && errors.phone_number?.message}
                      inputRef={register({
                        required: {
                          value: reqBits.phone_number,
                          message: RequireError,
                        },
                        pattern: {
                          value: /^([0-9]{3}[-.][0-9]{3}[-.][0-9]{4}[-. ][x][0-9]{4})$/,
                          message: WrongPatternError + " : ###-###-#### x####",
                        },
                      })}
                    ></TextField>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      name="email"
                      variant="outlined"
                      type="text"
                      size="small"
                      label="Email"
                      className={classNames("col-8", { "is-invalid": true })}
                      error={errors.email == undefined ? false : true}
                      helperText={errors.email && errors.email?.message}
                      inputRef={register({
                        required: {
                          value: reqBits.email,
                          message: RequireError,
                        },
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                          message: WrongPatternError + " Email",
                        },
                      })}
                    ></TextField>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="dateofBirth"
                      name="dateofBirth"
                      variant="outlined"
                      type="date"
                      size="small"
                      className="col-8"
                      error={errors.dateofBirth == undefined ? false : true}
                      helperText={
                        errors.dateofBirth == undefined ? "Date of Birth" : "Date of Brith " + errors.dateofBirth?.message
                      }
                      inputRef={register({
                        required: {
                          value: reqBits.dateofBirth,
                          message: RequireError,
                        },
                      })}
                    ></TextField>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      name="socialSecurity"
                      variant="outlined"
                      type="text"
                      size="small"
                      label="Social Security"
                      className="col-8"
                      error={errors.socialSecurity == undefined ? false : true}
                      helperText={errors.socialSecurity && errors.socialSecurity?.message}
                      inputRef={register({
                        required: {
                          value: reqBits.socialSecurity,
                          message: RequireError,
                        },
                      })}
                    ></TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      className="col-10"
                      name="address"
                      variant="outlined"
                      size="small"
                      type="text"
                      label="Address"
                      error={errors.address == undefined ? false : true}
                      helperText={errors.address && errors.address?.message}
                      inputRef={register({
                        required: {
                          value: reqBits.address,
                          message: RequireError,
                        },
                      })}
                    ></TextField>
                  </Grid>
                  <Grid item xs={1}></Grid>
                  <Grid item xs={10}>
                    <Grid container direction="row" justify="space-between" alignItems="baseline" spacing={3}>
                      <Grid item xs={4}>
                        <TextField
                          name="city"
                          variant="outlined"
                          size="small"
                          type="text"
                          label="City"
                          className="col-12"
                          error={errors.city == undefined ? false : true}
                          helperText={errors.city && errors.city?.message}
                          inputRef={register({
                            required: {
                              value: reqBits.city,
                              message: RequireError,
                            },
                          })}
                        ></TextField>
                      </Grid>
                      <Grid item xs={4}>
                        <ReactAutoComplete
                          id="state"
                          className="col-12"
                          useForm={Forms}
                          optionList={states}
                          defaultValue={props.data.state}
                        ></ReactAutoComplete>
                      </Grid>
                      <Grid item xs={4}>
                        <TextField
                          name="zipCode"
                          variant="outlined"
                          size="small"
                          type="text"
                          label="ZipCode"
                          className="col-12"
                          error={errors.zipCode == undefined ? false : true}
                          helperText={errors.zipCode && errors.zipCode?.message}
                          inputRef={register({
                            required: {
                              value: reqBits.zipCode,
                              message: RequireError,
                            },
                          })}
                        ></TextField>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={1}></Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={1}></Grid>

            {/* Question Start */}
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
              <Paper elevation={3} className={classes.paper}>
                <Grid container direction="row" justify="space-between" alignItems="center">
                  <Grid item xs={12} className={classes.heading} style={{ textAlign: "center", margin: "10px 0px" }}>
                    Address
                  </Grid>
                  <RadioQuestions
                    id="lastThreeYearResidenceCheck"
                    question="Have You Lived At This Residence For The Past 3 Years?"
                    optionList={["Yes", "No"]}
                    optionValue={["Yes", "No"]}
                    useForm={Forms}
                    isReq={reqBits.lastThreeYearResidenceCheck}
                    defaultSelected={props.data.lastThreeYearResidenceCheck}
                  />

                  <Grid item xs={1}></Grid>
                  <Grid item xs={10} className="caption" style={{ textAlign: "left" }}>
                    <b>NOTE 1:</b> <i>If no, add any additional addresses you lived at within the past 3 years below.</i>
                  </Grid>
                  <Grid item xs={1}></Grid>
                  <Grid item xs={1}></Grid>
                  <Grid item xs={10} className="caption" style={{ textAlign: "left" }}>
                    <b>NOTE 2:</b> <i>List current address first</i>
                  </Grid>
                  <Grid item xs={1}></Grid>
                  {/* <Grid item xs={1}></Grid> */}
                  {/* Current Address Starting */}
                  <Grid item xs={1}></Grid>
                  <Grid item xs={10}>
                    <Divider orientation="horizontal" variant="fullWidth" style={{ margin: "20px 0px" }} />
                  </Grid>
                  <Grid item xs={1}></Grid>
                  <Grid item xs={1}></Grid>
                  <Grid item xs={10}>
                    {/* {(props.data.addresses = addr)} */}
                    <AddressesComponent
                      idPrefix=""
                      useForm={Forms}
                      data={props.data}
                      addressId="lastYearAddress"
                      cityId="lastYearAddressCity"
                      stateId="lastYearAddressState"
                      zipCodeId="lastYearAddressZipCode"
                      fromDateId="lastYearAddressfrom"
                      toDateId="lastYearAddressTo"
                      addressesList={props.data.addresses}
                      setAddresses={updateAddressList}
                    ></AddressesComponent>
                  </Grid>
                  <Grid item xs={1}></Grid>
                  {/* Current Address Ending */}
                  {/* <Grid item xs={1}></Grid> */}
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={1}></Grid>
            {/* Question End */}

            {/* Upload Resume Start */}
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
              <Paper elevation={3} className={classes.paper}>
                {/* <Button onClick={()=>{console.log(manualStates.resume1);}}>check file uploaded</Button> */}

                {/* <DynamicFileUpload
                  idPrefix="fileUpload"
                  // prevFileUploaded={props.fileUpload}
                  useForm={Forms}
                  setNewFileToUpload={handleFileUpload}
                ></DynamicFileUpload> */}
                <Grid container direction="row" justify="space-around" alignItems="center" spacing={3}>
                  <Grid item xs={1}></Grid>
                  <Grid item xs={10}>
                    {manualStates.resume1 && (
                      <div className="mb-3">
                        <Paper elevation={3} className={classes.paper}>
                          <Grid container direction="row" justify="space-around" alignItems="center" spacing={3}>
                            <Grid item xs={2}>
                              <InsertDriveFileIcon />
                            </Grid>
                            <Grid item xs={8} className="text-left">
                              {manualStates.resume1?.name}
                            </Grid>
                            <Grid item xs={2}>
                              <Button>
                                <DeleteIcon
                                  onClick={() => {
                                    setManualStates({
                                      ...manualStates,
                                      resume1: null,
                                    });
                                  }}
                                />
                              </Button>
                            </Grid>
                          </Grid>
                        </Paper>
                      </div>
                    )}
                    {manualStates.resume2 && (
                      <div className="mb-3">
                        <Paper elevation={3} className={classes.paper}>
                          <Grid container direction="row" justify="space-around" alignItems="center" spacing={3}>
                            <Grid item xs={2}>
                              <InsertDriveFileIcon />
                            </Grid>
                            <Grid item xs={8} className="text-left">
                              {manualStates.resume2?.name}
                            </Grid>
                            <Grid item xs={2}>
                              <Button>
                                <DeleteIcon
                                  onClick={() => {
                                    setManualStates({
                                      ...manualStates,
                                      resume2: null,
                                    });
                                  }}
                                />
                              </Button>
                            </Grid>
                          </Grid>
                        </Paper>
                      </div>
                    )}
                  </Grid>
                  <Grid item xs={1}></Grid>
                </Grid>

                <input
                  accept=".pdf,.jpg,.jpge,.doc,.docx"
                  className={classes.input}
                  id="contained-button-file"
                  type="file"
                  onChange={handleFileUpload}
                />
                <label htmlFor="contained-button-file">
                  <Button variant="contained" color="primary" component="span">
                    Upload Resume
                  </Button>
                </label>
                <Grid container direction="row" justify="space-between" alignItems="center">
                  <Grid item xs={12} className="caption" style={{ textAlign: "center", marginTop: "10px" }}>
                    <b>NOTE:</b>
                    <i>Please upload your resume in PDF format, and DMV record in PDF or any valid picture format.</i>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={1}></Grid>
            {/* Upload Resume End */}

            {/* Questions Start */}
            <Grid item xs={1}></Grid>
            {/* Questions and Awnsers Starting */}
            <Grid item xs={10}>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}>Questions and Anwsers</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container direction="row" justify="space-between" alignItems="center" spacing={3}>
                    <Grid item xs={9} className={(classes.paper, classes.addressPaper)}>
                      <Typography className={classes.text}>How Soon Are You Available To Start?</Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <FormControl variant="outlined" size="small" className="col-12">
                        <InputLabel id="demo-simple-select-outlined-label">Join with in</InputLabel>
                        <Select
                          name="startTime"
                          labelId="demo-simple-select-outlined-label"
                          id="demo-simple-select-outlined"
                          defaultValue={preLoadedValues.startTime}
                          label="Join with in"
                          onChange={(e) => {
                            setManualStates({
                              ...manualStates,
                              startTime: e.target.value,
                            });
                          }}

                          // error={errors.startTime == undefined ? false : true}
                          // inputRef={register({
                          //   required: {
                          //     value: true,
                          //     message: RequireError,
                          //   },
                          // })}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          {startTimeVal.map(function (object: any, i: number) {
                            return (
                              <MenuItem value={object.value} key={i}>
                                {object.value}
                              </MenuItem>
                            );
                          })}
                        </Select>
                        <FormHelperText>{errors.startTime && errors.startTime?.message}</FormHelperText>
                      </FormControl>
                    </Grid>
                    <Grid item xs={9} className={(classes.paper, classes.addressPaper)}>
                      <Typography className={classes.text}>What is your Class A Driving Experience Level?</Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <FormControl variant="outlined" size="small" className="col-12">
                        <InputLabel id="classExperienceLbl">Experience Level</InputLabel>
                        <Select
                          name="classAExperienceLevel"
                          labelId="classExperienceLbl"
                          id="classExp"
                          label="Experience Level"
                          defaultValue={preLoadedValues.classAExperienceLevel}
                          onChange={(e) => {
                            setManualStates({
                              ...manualStates,
                              classAExperienceLevel: e.target.value,
                            });
                          }}
                          // error={errors.classAExperienceLevel == undefined ? false : true}
                          // inputRef={register({
                          //   required: {
                          //     value: true,
                          //     message: RequireError,
                          //   },
                          // })}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          {classAExperienceLevelVal.map(function (object: any, i: number) {
                            return (
                              <MenuItem value={object.value} key={i}>
                                {object.value}
                              </MenuItem>
                            );
                          })}
                        </Select>
                        <FormHelperText>{errors.classAExperienceLevel && errors.classAExperienceLevel?.message}</FormHelperText>
                      </FormControl>
                    </Grid>
                    <Grid item xs={9} className={(classes.paper, classes.addressPaper)}>
                      <Typography className={classes.text}>How Did You Hear About Us?</Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <TextField
                        name="hearAbout"
                        variant="outlined"
                        size="small"
                        type="text"
                        label="Heard From ..."
                        className="col-12"
                        inputRef={register}
                      ></TextField>
                    </Grid>

                    <div style={{ paddingLeft: "13px" }}>
                      <RadioQuestions
                        id="eligibletoWorkInUnitedState"
                        question="Are You Eligible To Work In The United States?"
                        optionList={["Yes", "No"]}
                        optionValue={["Yes", "No"]}
                        xsSize={12}
                        useForm={Forms}
                        isReq={reqBits.eligibletoWorkInUnitedState}
                        defaultSelected={props.data.eligibletoWorkInUnitedState}
                      />
                    </div>

                    <div style={{ paddingLeft: "13px" }}>
                      <RadioQuestions
                        id="willingForDrugTest"
                        question="Are you willing to undertake a drug test as part of this
                      hiring process?"
                        xsSize={12}
                        optionList={["Yes", "No"]}
                        optionValue={["Yes", "No"]}
                        useForm={Forms}
                        isReq={reqBits.willingForDrugTest}
                        defaultSelected={props.data.willingForDrugTest}
                      />
                    </div>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </Grid>
            {/* Questions and Awnsers Ending */}
            <Grid item xs={1}></Grid>
            {/* Questions End */}

            {/* BUTTON Start */}
            <Grid item xs={4}></Grid>
            <Grid item xs={4}>
              <Button type="submit" className="col-12" variant="contained" color="primary">
                Save This & Next
              </Button>
            </Grid>
            <Grid item xs={4}></Grid>
            {/* BUTTON End */}
          </Grid>
        </form>
      </Container>
    </React.Fragment>
  );
}

export default EmpApplicationForm1;

// COMPLETED UI PHASE
