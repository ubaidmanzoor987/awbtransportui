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
import React, { useState, useEffect, useRef } from "react";
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
  getMaxAgeLimit,
  autoSubmit,
} from "../Common/CommonVariables";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";

import { fileUploadApi } from "../services/fileUploadApi";

import { update } from "../services/updateApi";
import RadioQuestions from "./SubComponents/RadioQuestions";
import AddressesComponent from "./SubComponents/AddressesComponent";
import FileUploadComponent from "./SubComponents/FileUploadComponent";
import classNames from "classnames";
import ReactAutoComplete from "./SubComponents/ReactAutoComplete";
import { formatPhoneNumberIntl } from "react-phone-number-input";
import ReactHookFormSelect from "./SubComponents/ReactHookFormSelect";
import { DynamicAddressComponent } from "./DynamicAddition/DynamicAddressComponent";
import { baseUrl } from "../shared/baseUrl";
import { deleteFile } from "../services/removeFileApi";
import PhoneNumberComponent from "./SubComponents/PhoneNumberComponent";



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
  let data = props.data;
  const [manualStates, setManualStates] = useState(data);
  const formEl = useRef(null);

  const [hideAddressesComponent, setHideAddressesComponent] = useState(
    !(manualStates.lastThreeYearResidenceCheck === "Yes")
  );

  const [disableAllUploadButton, setDisableAllUploadButton] = useState(false);

  useEffect(() => {
    // console.log("hideAddressesComponent");
    // console.log(hideAddressesComponent);
    if (hideAddressesComponent === false) {
      data.addresses = "";
    }
  }, [hideAddressesComponent]);

  let resumeFile1 = undefined;

  const handleMultipleFiles = (e: any) => {
    resumeFile1 = e.target.files[0];
  };

  useEffect(() => {
    window.scrollTo(0, 0);
        if(autoSubmit){
    let watchAll = getValues();
      onSubmit(watchAll );
    }
    // if(true){for(let i = 0; i < 100; i++){saveUnFilledData();}}

}, []);

  let res: any;
  const [response, setResponse] = useState("");

  const handleFileUpload = async (event: any, fileName: string) => {
    if (event.target.files === undefined) return;
    if (disableAllUploadButton === true) return;
    // console.log("fileName");
    // console.log(fileName);

    setDisableAllUploadButton(true);

    const formData = new FormData();
    // if (manualStates.resume == undefined || manualStates.resume == null) {

    formData.append("file", event.target.files[0], event.target.files[0]?.name);
    formData.append("user_name", manualStates.user_name);
    formData.append(fileName, fileName);
    // formData.append("resume", 'dummy');

    let response = await fileUploadApi(formData);
    // console.log("response uploaded");
    res = await response.json();
    // console.log("res");
    // console.log(res);
    // console.log(res.error);
    // if (response.ok === true && response.status === 200) {
    if (res.status === "true") {
      setFileUploadSuccesOrErrorBit("success");
      setFileUploadSuccessSnackOpen(true);
      setResponse(res.message);
      setManualStates({
        ...manualStates,
        [fileName]: event.target.files[0]?.name,
      });


    } else {
      setFileUploadSuccesOrErrorBit("error");
      setFileUploadSuccessSnackOpen(true);
      setResponse(res.error);
    }
  
  };

  const Forms = useForm({
    defaultValues: data,
    shouldFocusError: true,
  });
  // console.log("data");
  // console.log(data);
  const {
    register,
    handleSubmit,
    errors,
    control,
    setError,
    clearErrors,
    formState,
    getValues,
  } = Forms;



  const [succesOrErrorBit, setSuccesOrErrorBit] = useState("success");
  const [fileUploadSuccesOrErrorBit, setFileUploadSuccesOrErrorBit] = useState(
    "success"
  );

  const eligibletoWorkInUnitedStateErrorMessage =
    "You must be eligible to work in United States";
  const willingForDrugTestErrorMessage =
    "You must be willing to undertake a drug test as part of this hiring process";


    const saveData = async (data:any,saveOnly:boolean) => {
      data.user_name = manualStates.user_name;
      // console.log("arg data");
      // console.log(data);
      let resdata;
      resdata = await update(data);
      // console.log("response resdata");
      // console.log(resdata);
      if (resdata.data){
        try {
          // console.log(resdata);
          setSuccesOrErrorBit("success");
          if(saveOnly){
            setSaveOnlySuccessSnackOpen(true);
          }else{
            props.setData(resdata.data.data);
            setSuccessSnackOpen(true);
          }

        } catch (ex) {
          // console.log("Error Exaption Seerver Error");
          // console.log(resdata);
          // console.log(ex);
          setSuccesOrErrorBit("error");
          if(saveOnly){
            setSaveOnlySuccessSnackOpen(true);
          }else{
            setSuccessSnackOpen(true);
          }
        }
      }
    }

  const saveUnFilledData = async () => {
    let watchAll = getValues();
    // console.log(watchAll);
    await saveData(watchAll,true);
  }

  const onSubmit = (data: any) => {
    if (data.eligibletoWorkInUnitedState === "No") {
      setError("eligibletoWorkInUnitedState", {
        type: "manual",
        message: eligibletoWorkInUnitedStateErrorMessage,
      });
    }

    if (data.willingForDrugTest === "No") {
      setError("willingForDrugTest", {
        type: "manual",
        message: willingForDrugTestErrorMessage,
      });
    }

    if (
      data.willingForDrugTest === "No" ||
      data.eligibletoWorkInUnitedState === "No"
    ) {
      return;
    }

    if (hideAddressesComponent === false) {
      data.addresses = undefined;
    }

    saveData(data,false);
  };


  const [phonePattern, setPhonePatten] = useState(
    manualStates.phone_number ? manualStates.phone_number : ""
  );

  const updateAddressList = (updatedAddresses: any) => {
    UpdateAddressesList = updatedAddresses;
  };

  const classes = styleClasses.useStyles();

  const RequireError: string = "Required *";
  const WrongPatternError: string = "Invalid Input";

  const download_user_cv = (user_name: string, fileName: string) => {

    window.open(
      baseUrl +
        "/api/get_resume?user_name=" +
        user_name +
        "&" +
        `${fileName}=${fileName}`,
      "_blank"
    );
  };

  const removeUploadedFileFromServer = async (e: any, fileName: string) => {

    let res = await deleteFile(props.data.user_name, fileName);
    if (res.success != undefined) {
      setManualStates({
        ...manualStates,
        [fileName]: null,
      });
      setFileUploadSuccesOrErrorBit("success");
      setFileUploadSuccessSnackOpen(true);
      setResponse(res.success);
    } else if (res.error != undefined) {
      setFileUploadSuccesOrErrorBit("error");
      setFileUploadSuccessSnackOpen(true);
      setResponse(res.error);
    }
  };

  //-------------SNACKBAR-------------
  const [successSnackOpen, setSuccessSnackOpen] = React.useState(false);
  const [saveOnlySuccessSnackOpen, setSaveOnlySuccessSnackOpen] = React.useState(false);
  const [
    fileUploadSuccessSnackOpen,
    setFileUploadSuccessSnackOpen,
  ] = React.useState(false);

  const saveOnlyHandleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setSaveOnlySuccessSnackOpen(false);
    if (succesOrErrorBit === "success") {
      // props.handler();
    }
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    setDisableAllUploadButton(false);
    if (reason === "clickaway") {
      return;
    }

    setSuccessSnackOpen(false);
    if (succesOrErrorBit === "success") {
      props.handler();
    }
  };

  const handleFileUploadClose = (
    event?: React.SyntheticEvent,
    reason?: string
  ) => {
    setDisableAllUploadButton(false);
    if (reason === "clickaway") {
      return;
    }

    setFileUploadSuccessSnackOpen(false);
  };
  //-------------SNACKBAR-------------



  return (
    <React.Fragment>
      <Container style={{ backgroundColor: "#fafafa" }}>
        <form onSubmit={handleSubmit(onSubmit)} >
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="baseline"
            spacing={3}
          >
            <Grid item xs={12} sm={12} md={10}>
              <Paper elevation={3} className={classes.paper}>
                <h4>AWB Transport Inc., Employment Application</h4>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={12} md={10}>
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
                        errors &&
                        errors["first_name"] &&
                        errors["first_name"].message
                      }
                      inputRef={register({
                        required: {
                          value: reqBits.first_name,
                          message: RequireError,
                        },
                        pattern: {
                          value: /^[a-zA-Z ]{1,30}$/,
                          message: "Only Chracters Allowed",
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
                      helperText={
                        errors &&
                        errors["last_name"] &&
                        errors["last_name"].message
                      }
                      className="col-8"
                      label="Last Name"
                      error={errors.last_name === undefined ? false : true}
                      inputRef={register({
                        required: {
                          value: reqBits.last_name,
                          message: RequireError,
                        },
                        pattern: {
                          value: /^[a-zA-Z ]{1,30}$/,
                          message: "Only Chracters Allowed",
                        },
                      })}
                    ></TextField>
                  </Grid>
                  <Grid item xs={6}>
                    <PhoneNumberComponent
                      mainId="phone_number"
                      label="Phone Number"
                      defaultValue={manualStates.phone_number}
                      className="col-8"
                      useForms={Forms}
                    ></PhoneNumberComponent>
                    {/* <TextField
                      name="phone_number"
                      variant="outlined"
                      size="small"
                      type="text"
                      className="col-8"
                      error={errors.phone_number == undefined ? false : true}
                      label="Phone Number"
                      helperText={errors["phone_number"] === undefined ? (RequireError + " " + "+# ### ### #### ext.####") : errors["phone_number"].message}
                      value={
                        phonePattern ? phonePattern : manualStates.phone_number
                      }
                      inputRef={register({
                        required: {
                          value: reqBits.phone_number,
                          message: RequireError,
                        },
                        // pattern:{value:/^[+][0-9]{15,26}$/ , message:"Invalid Input : +# ### ### #### ext.####"}
                      })}
                      // onChange={(e)=>{setPhonePatten(e.target.value)}}
                      onChange={(e:any) => {
                        let val = e.target.value;
                        if (val.length > 11) {
                          const n = formatPhoneNumberIntl(val);
                          if (n) {
                            setPhonePatten(n);
                          } else {
                            setPhonePatten(val);
                          }
                        } else {
                          setPhonePatten(val);
                        }
                      }}
                    ></TextField> */}
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
                      // value={props.data.email}
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
                        min: getMaxAgeLimit(),
                      }}
                      className="col-8"
                      error={errors.dateofBirth == undefined ? false : true}
                      helperText={"Date of Brith " + RequireError}
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
                        reqBits.socialSecurity
                          ? errors["socialSecurity"] !== undefined
                            ? errors["socialSecurity"].message
                            : RequireError
                          : ""
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
                      helperText={RequireError}
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
                      <Grid item xs={6}>
                        <TextField
                          name="fromDateAddress"
                          variant="outlined"
                          size="small"
                          type="date"
                          className="col-12"
                          error={
                            errors.fromDateAddress == undefined ? false : true
                          }
                          helperText={`From Date ${
                            errors.fromDateAddress !== undefined
                              ? errors.fromDateAddress.message
                              : ""
                          }`}
                          inputRef={register({
                            required: {
                              value: reqBits.fromDateAddress,
                              message: RequireError,
                            },
                          })}
                        ></TextField>
                      </Grid>

                      <Grid item xs={6}>
                        <TextField
                          name="city"
                          variant="outlined"
                          size="small"
                          type="text"
                          label="City"
                          className="col-12"
                          error={
                            errors && errors.city == undefined ? false : true
                          }
                          helperText={
                            errors && errors["city"] && errors["city"].message
                          }
                          inputRef={register({
                            required: {
                              value: reqBits.city,
                              message: RequireError,
                            },
                            pattern: {
                              value: /^[a-zA-Z ]{1,30}$/,
                              message: "Only Chracters Allowed",
                            },
                          })}
                        ></TextField>
                      </Grid>
                      <Grid item xs={6}>
                      
                        <ReactHookFormSelect
                          nameVal="state"
                          label="States"
                          control={control}
                          forms={Forms}
                          defaultValue={manualStates.state}
                          variant="outlined"
                          size="small"
                          isReq={reqBits.state}
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
                      <Grid item xs={6}>
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
                          //   //console.log("value");
                          //   //console.log(value);
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

            {/* Question Start */}
            <Grid item xs={12} sm={12} md={10}>
              <Paper elevation={3} className={classes.paper}>
                <Grid
                  container
                  direction="row"
                  justify="space-evenly"
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
                    //console.log("actionOnSelection");
                    //console.log(e);
                    //console.log(e.target.value);
                      let hideOnNO: boolean = e.target.value === "No";
                      setHideAddressesComponent(hideOnNO);
                    }}
                    useForm={Forms}
                    isReq={reqBits.lastThreeYearResidenceCheck}
                    defaultSelected={manualStates.lastThreeYearResidenceCheck}
                  />

                  <Grid item xs={1}></Grid>
                  <Grid
                    item
                    xs={10}
                    className="caption"
                    style={{ textAlign: "left" }}
                  >
                    <b>NOTE 1:</b>
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
                    {/* <b>NOTE 2:</b> <i>List current address first</i> */}
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
                        addressesList={manualStates.addresses}
                        addressId="addresses"
                        cityId=""
                        stateId=""
                        minElementLimit={1}
                        zipCodeId=""
                        fromDateId=""
                        toDateId=""
                        forms={Forms}
                      ></DynamicAddressComponent>
                    )}
                  </Grid>
                  <Grid item xs={1}></Grid>
                  {/* Current Address Ending */}
                  {/* <Grid item xs={1}></Grid> */}
                </Grid>
              </Paper>
            </Grid>

            {/* Upload Resume Start */}
            <Grid item xs={12} sm={12} md={10}>
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
                              {manualStates.resume.length > 25
                                ? manualStates.resume.substring(0, 25) + "..."
                                : manualStates.resume}
                            </Grid>
                            <Grid item xs={1}>
                              <Button>
                                <VisibilityIcon
                                  onClick={(e: any) => {
                                    download_user_cv(
                                      manualStates.user_name,
                                      "resume"
                                    );
                                  }}
                                />
                              </Button>
                            </Grid>
                            <Grid item xs={1}>
                              <Button>
                                <DeleteIcon
                                  onClick={(e: any) => {
                                    removeUploadedFileFromServer(e, "resume");
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
                  id="resumeFilesToUpload"
                  type="file"
                  disabled={disableAllUploadButton}
                  onChange={(e) => {
                    handleFileUpload(e, "resume");
                  }}
                />
                <label htmlFor="resumeFilesToUpload">
                  <Button
                    variant="contained"
                    color="primary"
                    component="span"
                    disabled={disableAllUploadButton}
                  >
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
                      Please upload your resume in PDF format, or any valid
                      picture format.
                    </i>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            {/* Upload Resume End */}

            {/* Upload dmvFile Start */}
            <Grid item xs={12} sm={12} md={10}>
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
                    {manualStates.dmvFile && (
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
                              {manualStates.dmvFile.length > 25
                                ? manualStates.dmvFile.substring(0, 25) + "..."
                                : manualStates.dmvFile}
                            </Grid>
                            <Grid item xs={1}>
                              <Button>
                                <VisibilityIcon
                                  onClick={(e: any) => {
                                    download_user_cv(
                                      manualStates.user_name,
                                      "dmvFile"
                                    );
                                  }}
                                />
                              </Button>
                            </Grid>
                            <Grid item xs={1}>
                              <Button>
                                <DeleteIcon
                                  onClick={(e: any) => {
                                    removeUploadedFileFromServer(e, "dmvFile");
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
                  id="dmvFilesToUpload"
                  type="file"
                  disabled={disableAllUploadButton}
                  onChange={(e) => {
                    handleFileUpload(e, "dmvFile");
                  //console.log("DVM FIle");
                  }}
                />
                <label htmlFor="dmvFilesToUpload">
                  <Button
                    variant="contained"
                    color="primary"
                    component="span"
                    disabled={disableAllUploadButton}
                  >
                    Upload DMV
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
                      Please upload your DMV in PDF format, or any valid picture
                      format.
                    </i>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            {/* Upload dmvFile End */}

            {/* Upload dodMedicalCardFile Start */}
            <Grid item xs={12} sm={12} md={10}>
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
                    {manualStates.dodMedicalCardFile && (
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
                              {manualStates.dodMedicalCardFile.length > 25
                                ? manualStates.dodMedicalCardFile.substring(
                                    0,
                                    25
                                  ) + "..."
                                : manualStates.dodMedicalCardFile}
                            </Grid>
                            <Grid item xs={1}>
                              <Button>
                                <VisibilityIcon
                                  onClick={(e: any) => {
                                    download_user_cv(
                                      manualStates.user_name,
                                      "dodMedicalCardFile"
                                    );
                                  }}
                                />
                              </Button>
                            </Grid>
                            <Grid item xs={1}>
                              <Button>
                                <DeleteIcon
                                  onClick={(e: any) => {
                                    removeUploadedFileFromServer(
                                      e,
                                      "dodMedicalCardFile"
                                    );
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
                  id="dodMedicalCardFilesToUpload"
                  type="file"
                  disabled={disableAllUploadButton}
                  onChange={(e) => {
                    handleFileUpload(e, "dodMedicalCardFile");
                  //console.log("DVM FIle");
                  }}
                />
                <label htmlFor="dodMedicalCardFilesToUpload">
                  <Button
                    variant="contained"
                    color="primary"
                    component="span"
                    disabled={disableAllUploadButton}
                  >
                    Upload DOD Medical Card Files
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
                      Please upload your DOD Medical Card File in PDF format, or
                      any valid picture format.
                    </i>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            {/* Upload dodMedicalCardFile End */}

            {/* Upload driverLicenceFile Start */}
            <Grid item xs={12} sm={12} md={10}>
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
                    {manualStates.driverLicenceFile && (
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
                              {manualStates.driverLicenceFile.length > 25
                                ? manualStates.driverLicenceFile.substring(
                                    0,
                                    25
                                  ) + "..."
                                : manualStates.driverLicenceFile}
                            </Grid>
                            <Grid item xs={1}>
                              <Button>
                                <VisibilityIcon
                                  onClick={(e: any) => {
                                    download_user_cv(
                                      manualStates.user_name,
                                      "driverLicenceFile"
                                    );
                                  }}
                                />
                              </Button>
                            </Grid>
                            <Grid item xs={1}>
                              <Button>
                                <DeleteIcon
                                  onClick={(e: any) => {
                                    removeUploadedFileFromServer(
                                      e,
                                      "driverLicenceFile"
                                    );
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
                  id="driverLicenceFilesToUpload"
                  type="file"
                  disabled={disableAllUploadButton}
                  onChange={(e) => {
                    handleFileUpload(e, "driverLicenceFile");
                  //console.log("DVM FIle");
                  }}
                />
                <label htmlFor="driverLicenceFilesToUpload">
                  <Button
                    variant="contained"
                    color="primary"
                    component="span"
                    disabled={disableAllUploadButton}
                  >
                    Upload Driver License File
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
                      Please upload your DOD Medical Card File in PDF format, or
                      any valid picture format.
                    </i>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            {/* Upload driverLicenceFile End */}

            {/* Questions Start */}
            {/* Questions and Awnsers Starting */}
            <Grid item xs={12} sm={12} md={10}>
              <Accordion elevation={3} defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}>
                    Questions and Anwsers
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid
                    container
                    direction="row"
                    justify="space-evenly"
                    alignItems="center"
                    spacing={3}
                  >
                    <Grid item xs={11}>

                      <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                        spacing={3}
                      >
                          <Grid
                            item
                            xs={8}
                            className={(classes.paper, classes.addressPaper)}
                          >
                            <Typography className={classes.text}>
                              How Soon Are You Available To Start?
                            </Typography>
                          </Grid>
                          <Grid item xs={4}>
                          
                            <ReactHookFormSelect
                              nameVal="startTime"
                              label="Choose"
                              control={control}
                              forms={Forms}
                              defaultValue={manualStates.startTime}
                              variant="outlined"
                              size="small"
                              isReq={reqBits.startTime}
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

                      
                          </Grid>
                          <Grid
                            item
                            xs={8}
                            className={(classes.paper, classes.addressPaper)}
                          >
                            <Typography className={classes.text}>
                              What is your Class A Driving Experience Level?
                            </Typography>
                          </Grid>
                          <Grid item xs={4}>
                            <ReactHookFormSelect
                              nameVal="classAExperienceLevel"
                              label="Experience Level"
                              control={control}
                              defaultValue={manualStates.classAExperienceLevel}
                              variant="outlined"
                              size="small"
                              forms={Forms}
                              isReq={reqBits.classAExperienceLevel}
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

                          </Grid>
                          <Grid
                            item
                            xs={8}
                            className={(classes.paper, classes.addressPaper)}
                          >
                            <Typography className={classes.text}>
                              How Did You Hear About Us?
                            </Typography>
                          </Grid>
                          <Grid item xs={4}>
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
                              defaultSelected={
                                manualStates.eligibletoWorkInUnitedState
                              }
                              helperMessage={eligibletoWorkInUnitedStateErrorMessage}
                              showMessageOnValue="No"
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
                              defaultSelected={manualStates.willingForDrugTest}
                              helperMessage={willingForDrugTestErrorMessage}
                              showMessageOnValue="No"
                            />
                          </div>
                      </Grid>

                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </Grid>
            {/* Questions and Awnsers Ending */}
            {/* Questions End */}

            {/* BUTTON Start */}
            <Grid item xs={8} sm={7} md={4}>
              <Button
                className="col-8"
                onClick={(e:any)=>{saveUnFilledData();}}
                variant="contained"
                color="primary"
              >
                Save
              </Button>
            </Grid>
            <Grid item xs={8} sm={7} md={4}>
              <Button
                type="submit"
                className="col-8"
                variant="contained"
                color="primary"
              >
                Save This & Next
              </Button>
            </Grid>
         
            {/* BUTTON End */}

          </Grid>
        </form>
        <Snackbar
          open={saveOnlySuccessSnackOpen}
          autoHideDuration={snackbarDuratuion}
          onClose={saveOnlyHandleClose}
        >
          <Alert onClose={saveOnlyHandleClose} severity={succesOrErrorBit as "success"}>
            {succesOrErrorBit === "success" && "Data Saved Successfully"}
            {succesOrErrorBit === "error" && "Server Error"}
          </Alert>
        </Snackbar>
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
            {fileUploadSuccesOrErrorBit === "success" && response}
            {fileUploadSuccesOrErrorBit === "error" && response}
          </Alert>
        </Snackbar>
      </Container>
    </React.Fragment>
  );
}

export default EmpApplicationForm1;

// COMPLETED UI PHASE
