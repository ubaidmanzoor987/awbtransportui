import {
  Button,
  Divider,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Snackbar,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import GetAppIcon from "@material-ui/icons/GetApp";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { styleClasses } from "../Common/styleClasses";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import DeleteIcon from "@material-ui/icons/Delete";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import {
  states,
  Addresses,
  reqBits,
  print,
  snackbarDuratuion,
  getMaxDate,
} from "../Common/CommonVariables";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";

import { fileUploadApi } from "../services/fileUploadApi";

import { update } from "../services/updateApi";
import RadioQuestions from "./SubComponents/RadioQuestions";
import AddressesComponent from "./SubComponents/AddressesComponent";
import classNames from "classnames";
import ReactAutoComplete from "./SubComponents/ReactAutoComplete";
import { formatPhoneNumberIntl } from "react-phone-number-input";
import ReactHookFormSelect from "./SubComponents/ReactHookFormSelect";
import { DynamicAddressComponent } from "./DynamicAddition/DynamicAddressComponent";
import { baseUrl } from "../shared/baseUrl";

type Props = { data?: any; handler?: any; setData: any };
const startTimeVal = [
  { value: "Immediately" },
  { value: "Within 2 Weeks" },
  { value: "Within 1 Month" },
];
const classAExperienceLevelVal = [
  { value: "Experienced Class A Driver" },
  { value: "Have Class A, But Need Training" },
  { value: "Currently in the Truck School" },
];

let UpdateAddressesList: Addresses;

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function EmpApplicationForm1(props: Props) {
  const [manualStates, setManualStates] = useState(props.data);

  const [hideAddressesComponent, setHideAddressesComponent] = useState(
    !(props.data.lastThreeYearResidenceCheck === "Yes")
  );

  let resumeFile1 = undefined;

  const handleMultipleFiles = (e: any) => {
    resumeFile1 = e.target.files[0];
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const removeUploadedFileFromServer = (e: any) => {
    console.log("Remove Resume API");
  };

  const download_user_cv = (user_name: string) => {
    console.log("user_name");
    console.log(baseUrl + "/api/get_resume?user_name=" + user_name);
    window.open(baseUrl + "/api/get_resume?user_name=" + user_name, "_blank");
  };

  const handleFileUpload = async (event: any) => {
    if (event.target.files === undefined) return;
    const formData = new FormData();
    console.log("manualStates.resume");
    console.log(manualStates.resume);

    // if (manualStates.resume == undefined || manualStates.resume == null) {
    setManualStates({ ...manualStates, resume: event.target.files[0].name });
    formData.append("file", event.target.files[0], event.target.files[0].name);
    formData.append("user_name", props.data.user_name);
    console.log("formData");
    console.log(formData);
    let response = await fileUploadApi(formData);
    console.log("response uploaded");
    console.log(response);
    console.log(response.ok);
    console.log(response.status);
    if (response.ok === true && response.status === 200) {
      setFileUploadSuccesOrErrorBit("success");
      setFileUploadSuccessSnackOpen(true);
    } else {
      setFileUploadSuccesOrErrorBit("error");
      setFileUploadSuccessSnackOpen(true);
    }
    // } else {
    //   setManualStates({ ...manualStates, resume2: event.target.files[0] });
    //   formData.append(
    //     "file",
    //     event.target.files[0],
    //     event.target.files[0].name
    //   );
    //   formData.append("user_name", props.data.user_name);

    //   fileUploadApi(formData);
    // }
  };

  const Forms = useForm({
    defaultValues: props.data,
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
  const [fileUploadSuccesOrErrorBit, setFileUploadSuccesOrErrorBit] = useState(
    "success"
  );

  const onSubmit = async (data: any) => {
    console.log("errors[]");
    console.log(errors["eligibletoWorkInUnitedState"]);
    console.log(errors["willingForDrugTest"]);
    // if (errors["eligibletoWorkInUnitedState"] || errors["willingForDrugTest"]) {
    //   return;
    // }
    if (hideAddressesComponent === false) {
      data.addresses = undefined;
    }
    console.log("data form1 submit");
    console.log(data);
    // handleFileUpload(document.getElementById("resumeFilesToUpload"));
    data.phone_number = phonePattern;
    data.user_name = props.data.user_name;
    print("Sending :", data);
    const resdata = await update(data);
    try {
      print("Receiving :", data);
      props.setData(resdata.data.data);
      setSuccesOrErrorBit("success");
      setSuccessSnackOpen(true);
      // props.handler();
    } catch (ex) {
      console.log("Error Exaption Seerver Error");
      console.log(ex);
      setSuccesOrErrorBit("error");
      setSuccessSnackOpen(true);
    }
  };

  const [phonePattern, setPhonePatten] = useState(
    props.data.phone_number ? props.data.phone_number : ""
  );

  const updateAddressList = (updatedAddresses: any) => {
    UpdateAddressesList = updatedAddresses;
  };

  const classes = styleClasses.useStyles();

  const RequireError: string = "Required *";
  const WrongPatternError: string = "Wrong Pattern";

  //-------------SNACKBAR-------------
  const [successSnackOpen, setSuccessSnackOpen] = React.useState(false);
  const [
    fileUploadSuccessSnackOpen,
    setFileUploadSuccessSnackOpen,
  ] = React.useState(false);

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setSuccessSnackOpen(false);
    console.log("CLOSE AUTO");
    if (succesOrErrorBit === "success") {
      props.handler();
    }
  };

  const handleFileUploadClose = (
    event?: React.SyntheticEvent,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setFileUploadSuccessSnackOpen(false);
    console.log("CLOSE AUTO");
  };
  //-------------SNACKBAR-------------

  // console.log("new Date()");

  // getMaxDate();

  return (
    <React.Fragment>
      <Container style={{ backgroundColor: "#fafafa" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="baseline"
            spacing={3}
          >
            <Grid item xs={12}>
              <Paper elevation={3} className={classes.paper}>
                <h4>AWB Transport Inc., Employment Application</h4>
              </Paper>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
              <Paper elevation={3} className={classes.paper}>
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="baseline"
                  spacing={3}
                >
                  <Grid
                    item
                    xs={12}
                    className={classes.heading}
                    style={{ textAlign: "center", marginTop: "10px" }}
                  >
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
                      error={errors.first_name === undefined ? false : true}
                      helperText={
                        errors.first_name && errors.first_name?.message
                      }
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
                      error={errors.last_name === undefined ? false : true}
                      inputRef={register({
                        required: {
                          value: reqBits.last_name,
                          message: RequireError,
                        },
                      })}
                    ></TextField>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      name="phone_number"
                      variant="outlined"
                      size="small"
                      type="text"
                      className="col-8"
                      error={errors.phone_number == undefined ? false : true}
                      label="Phone Number"
                      helperText={
                        errors.phone_number && errors.phone_number?.message
                      }
                      value={
                        phonePattern ? phonePattern : props.data.phone_number
                      }
                      inputRef={register({
                        required: {
                          value: reqBits.phone_number,
                          message: RequireError,
                        },
                      })}
                      onChange={(e) => {
                        if (e.target.value.length > 11) {
                          const n = formatPhoneNumberIntl(e.target.value);
                          if (n) {
                            setPhonePatten(n);
                          } else {
                            setPhonePatten(e.target.value);
                          }
                        } else {
                          setPhonePatten(e.target.value);
                        }
                      }}
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
                          message: WrongPatternError,
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
                      inputProps={{
                        max: getMaxDate(),
                      }}
                      className="col-8"
                      error={errors.dateofBirth == undefined ? false : true}
                      helperText={
                        errors.dateofBirth == undefined
                          ? "Date of Birth"
                          : "Date of Brith " + errors.dateofBirth?.message
                      }
                      inputRef={register({
                        required: {
                          value: reqBits.dateofBirth,
                          message: RequireError,
                        },
                      })}
                    ></TextField>
                    {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        name="dateofBirth"
                        margin="normal"
                        id="date-picker-inline"
                        label="Date picker inline"
                        inputRef={register({
                          required: {
                            value: reqBits.dateofBirth,
                            message: RequireError,
                          },
                        })}
                        BaseKeyboardPickerProps={}
                        KeyboardButtonProps={{
                          "aria-label": "change date",
                        }}
                        maxDate={getMaxDate()}
                      />
                    </MuiPickersUtilsProvider> */}
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
                      helperText={
                        errors.socialSecurity && errors.socialSecurity.message
                      }
                      inputRef={register({
                        required: {
                          value: reqBits.socialSecurity,
                          message: RequireError,
                        },
                        minLength: {
                          value: 9,
                          message: "Min 9 Digits",
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
                    <Grid
                      container
                      direction="row"
                      justify="space-between"
                      alignItems="baseline"
                      spacing={3}
                    >
                      <Grid item xs={4}>
                        <TextField
                          name="city"
                          variant="outlined"
                          size="small"
                          type="text"
                          label="City"
                          className="col-12"
                          error={errors.city == undefined ? false : true}
                          helperText={errors.city && errors.city.message}
                          inputRef={register({
                            required: {
                              value: reqBits.city,
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
                          isReq={reqBits["state"]}
                          optionList={states}
                          defaultValue={props.data.state}
                          error={errors && errors["state"]}
                        ></ReactAutoComplete> */}
                        <ReactHookFormSelect
                          nameVal="state"
                          label="States"
                          control={control}
                          forms={Forms}
                          defaultValue={props.data.state}
                          variant="outlined"
                          size="small"
                          className="col-12"
                        >
                          <option aria-label="None" value="" />

                          {states.map(function (object: any, i: number) {
                            return (
                              <option value={object.value} key={i}>
                                {object.value}
                              </option>
                            );
                          })}
                        </ReactHookFormSelect>
                      </Grid>
                      <Grid item xs={4}>
                        <TextField
                          name="zipCode"
                          variant="outlined"
                          size="small"
                          type="text"
                          label="Zip Code"
                          className="col-12"
                          error={errors.zipCode == undefined ? false : true}
                          helperText={errors.zipCode && errors.zipCode?.message}
                          // onChange={(e) => {
                          //   let value = e.target.value;
                          //   if (value == "") return;
                          //   if (!/^[0-9]+$/i.test(value)) {
                          //     // console.log(value);
                          //     console.log("value");
                          //     console.log(value);
                          //     setError("zipCode", {
                          //       type: "manual",
                          //       message: "Only Digits Please",
                          //     });
                          //   } else {
                          //     clearErrors(["zipCode"]);
                          //   }
                          // }}
                          inputRef={register({
                            required: {
                              value: reqBits.zipCode,
                              message: RequireError,
                            },
                            maxLength: {
                              value: 5,
                              message: "Please Input 5 Digits only",
                            },
                            pattern: {
                              value: /[0-9]{5}/,
                              message: "Please Input 5 Digits only",
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
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                >
                  <Grid
                    item
                    xs={12}
                    className={classes.heading}
                    style={{ textAlign: "center", margin: "10px 0px" }}
                  >
                    Address
                  </Grid>
                  <RadioQuestions
                    id="lastThreeYearResidenceCheck"
                    question="Have You Lived At This Residence For The Past 3 Years?"
                    optionList={["Yes", "No"]}
                    optionValue={["Yes", "No"]}
                    actionOnSelection={(e: any) => {
                      console.log("actionOnSelection");
                      console.log(e);
                      console.log(e.target.value);
                      let hideOnNO: boolean = e.target.value === "No";
                      setHideAddressesComponent(hideOnNO);
                    }}
                    useForm={Forms}
                    isReq={reqBits.lastThreeYearResidenceCheck}
                    defaultSelected={props.data.lastThreeYearResidenceCheck}
                  />

                  <Grid item xs={1}></Grid>
                  <Grid
                    item
                    xs={10}
                    className="caption"
                    style={{ textAlign: "left" }}
                  >
                    <b>NOTE 1:</b>{" "}
                    <i>
                      If no, add any additional addresses you lived at within
                      the past 3 years below.
                    </i>
                  </Grid>
                  <Grid item xs={1}></Grid>
                  <Grid item xs={1}></Grid>
                  <Grid
                    item
                    xs={10}
                    className="caption"
                    style={{ textAlign: "left" }}
                  >
                    <b>NOTE 2:</b> <i>List current address first</i>
                  </Grid>
                  <Grid item xs={1}></Grid>
                  {/* <Grid item xs={1}></Grid> */}
                  {/* Current Address Starting */}
                  <Grid item xs={1}></Grid>
                  <Grid item xs={10}>
                    <Divider
                      orientation="horizontal"
                      variant="fullWidth"
                      style={{ margin: "20px 0px" }}
                    />
                  </Grid>
                  <Grid item xs={1}></Grid>
                  <Grid item xs={1}></Grid>
                  <Grid item xs={10}>
                    {hideAddressesComponent && (
                      <DynamicAddressComponent
                        idPrefix="addresses"
                        setAddresses={updateAddressList}
                        addressesList={props.data.addresses}
                        addressId="addresses"
                        cityId=""
                        stateId=""
                        zipCodeId=""
                        fromDateId=""
                        toDateId=""
                        forms={Forms}
                      ></DynamicAddressComponent>
                    )}
                    {/* <AddressesComponent
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
                    ></AddressesComponent> */}
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
                <Grid
                  container
                  direction="row"
                  justify="space-around"
                  alignItems="center"
                  spacing={3}
                >
                  <Grid item xs={1}></Grid>
                  <Grid item xs={10}>
                    {manualStates.resume && (
                      <div className="mb-3">
                        <Paper elevation={3} className={classes.paper}>
                          <Grid
                            container
                            direction="row"
                            justify="space-around"
                            alignItems="center"
                            spacing={3}
                          >
                            <Grid item xs={1}>
                              <InsertDriveFileIcon />
                            </Grid>
                            <Grid item xs={6} className="text-left">
                              {manualStates.resume}
                            </Grid>
                            <Grid item xs={1}>
                              <Button>
                                <VisibilityIcon
                                  onClick={(e: any) => {
                                    download_user_cv(props.data.user_name);
                                  }}
                                />
                              </Button>
                            </Grid>
                            <Grid item xs={1}>
                              <Button>
                                <DeleteIcon
                                  onClick={(e: any) => {
                                    setManualStates({
                                      ...manualStates,
                                      resume: null,
                                    });
                                    removeUploadedFileFromServer(e);
                                  }}
                                />
                              </Button>
                            </Grid>
                          </Grid>
                        </Paper>
                      </div>
                    )}
                    {/* {manualStates.resume2 && (
                      <div className="mb-3">
                        <Paper elevation={3} className={classes.paper}>
                          <Grid
                            container
                            direction="row"
                            justify="space-around"
                            alignItems="center"
                            spacing={3}
                          >
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
                    )} */}
                  </Grid>
                  <Grid item xs={1}></Grid>
                </Grid>

                <input
                  accept=".pdf,.jpg,.jpge,.doc,.docx"
                  className={classes.input}
                  id="resumeFilesToUpload"
                  type="file"
                  onChange={handleFileUpload}
                />
                <label htmlFor="resumeFilesToUpload">
                  <Button variant="contained" color="primary" component="span">
                    Upload Resume
                  </Button>
                </label>
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                >
                  <Grid
                    item
                    xs={12}
                    className="caption"
                    style={{ textAlign: "center", marginTop: "10px" }}
                  >
                    <b>NOTE:</b>
                    <i>
                      Please upload your resume in PDF format, and DMV record in
                      PDF or any valid picture format.
                    </i>
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
              <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}>
                    Questions and Anwsers
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                    spacing={3}
                  >
                    <Grid
                      item
                      xs={9}
                      className={(classes.paper, classes.addressPaper)}
                    >
                      <Typography className={classes.text}>
                        How Soon Are You Available To Start?
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      {/* <ReactAutoComplete
                        id="startTime"
                        label="Join with in"
                        isReq={reqBits["startTime"]}
                        className="col-12 text-left"
                        useForm={Forms}
                        optionList={startTimeVal}
                        defaultValue={props.data.startTime}
                        error={errors && errors["startTime"]}
                      ></ReactAutoComplete> */}
                      <ReactHookFormSelect
                        nameVal="startTime"
                        label="Choose"
                        control={control}
                        forms={Forms}
                        defaultValue={props.data.startTime}
                        variant="outlined"
                        size="small"
                        className="col-12 text-left"
                      >
                        <option aria-label="None" value="" />

                        {startTimeVal.map(function (object: any, i: number) {
                          return (
                            <option value={object.value} key={i}>
                              {object.value}
                            </option>
                          );
                        })}
                      </ReactHookFormSelect>

                      {/* <FormControl
                        variant="outlined"
                        size="small"
                        className="col-12"
                      >
                        <InputLabel id="demo-simple-select-outlined-label">
                          Join with in
                        </InputLabel>
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

                
                        >
                        </Select>
                        <FormHelperText>
                          {errors.startTime && errors.startTime?.message}
                        </FormHelperText>
                      </FormControl> */}
                    </Grid>
                    <Grid
                      item
                      xs={9}
                      className={(classes.paper, classes.addressPaper)}
                    >
                      <Typography className={classes.text}>
                        What is your Class A Driving Experience Level?
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      {/* <ReactAutoComplete
                        id="classAExperienceLevel"
                        isReq={reqBits["classAExperienceLevel"]}
                        label="Experience Level"
                        className="col-12 text-left"
                        useForm={Forms}
                        optionList={classAExperienceLevelVal}
                        defaultValue={props.data.classAExperienceLevel}
                        error={errors && errors["classAExperienceLevel"]}
                      ></ReactAutoComplete> */}
                      <ReactHookFormSelect
                        nameVal="classAExperienceLevel"
                        label="Experience Level"
                        control={control}
                        defaultValue={props.data.classAExperienceLevel}
                        variant="outlined"
                        size="small"
                        forms={Forms}
                        error={
                          errors.classAExperienceLevel === undefined
                            ? false
                            : true
                        }
                        className="col-12 text-left"
                      >
                        <option aria-label="None" value="" />

                        {classAExperienceLevelVal.map(function (
                          object: any,
                          i: number
                        ) {
                          return (
                            <option value={object.value} key={i}>
                              {object.value}
                            </option>
                          );
                        })}
                      </ReactHookFormSelect>

                      {/* <FormControl
                        variant="outlined"
                        size="small"
                        className="col-12"
                      >
                        <InputLabel id="classExperienceLbl"></InputLabel>
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
                        ></Select>
                        <FormHelperText>
                          {errors.classAExperienceLevel &&
                            errors.classAExperienceLevel?.message}
                        </FormHelperText>
                      </FormControl> */}
                    </Grid>
                    <Grid
                      item
                      xs={9}
                      className={(classes.paper, classes.addressPaper)}
                    >
                      <Typography className={classes.text}>
                        How Did You Hear About Us?
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <TextField
                        name="hearAbout"
                        variant="outlined"
                        size="small"
                        type="text"
                        label="Heard From ..."
                        className="col-12"
                        error={errors.hearAbout === undefined ? false : true}
                        inputRef={register({
                          required: {
                            value: reqBits.hearAbout,
                            message: RequireError,
                          },
                        })}
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
                        // errorMessage="Dear User: You Must be Eligible To Work In The United States"
                        // onChangeSetError={(e: any) => {
                        //   if (e.target.value === "No") {
                        //     return true;
                        //   } else {
                        //     return false;
                        //   }
                        // }}
                        defaultSelected={props.data.eligibletoWorkInUnitedState}
                      />
                    </div>
                    <br />
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
                        // errorMessage="Dear User: You must be willing to undertake a drug test as part of this hiring process."
                        // onChangeSetError={(e: any) => {
                        //   if (e.target.value === "No") {
                        //     return true;
                        //   } else {
                        //     return false;
                        //   }
                        // }}
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
              <Button
                type="submit"
                className="col-12"
                variant="contained"
                color="primary"
              >
                Save This & Next
              </Button>
            </Grid>
            <Grid item xs={4}></Grid>
            {/* BUTTON End */}
          </Grid>
        </form>
        <Snackbar
          open={successSnackOpen}
          autoHideDuration={snackbarDuratuion}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity={succesOrErrorBit as "success"}>
            {succesOrErrorBit === "success" && "Data Saved Successfully"}
            {succesOrErrorBit === "error" && "Server Error"}
          </Alert>
        </Snackbar>
        <Snackbar
          open={fileUploadSuccessSnackOpen}
          autoHideDuration={snackbarDuratuion}
          onClose={handleFileUploadClose}
        >
          <Alert
            onClose={handleFileUploadClose}
            severity={fileUploadSuccesOrErrorBit as "success"}
          >
            {fileUploadSuccesOrErrorBit === "success" &&
              "Thank you for submitting your resume"}
            {fileUploadSuccesOrErrorBit === "error" &&
              "Server Error: Kindly Re-Upload"}
          </Alert>
        </Snackbar>
      </Container>
    </React.Fragment>
  );
}

export default EmpApplicationForm1;

// COMPLETED UI PHASE
