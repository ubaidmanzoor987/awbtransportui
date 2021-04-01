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
  getMaxAgeLimit,
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



function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

type Props = { data?: any; handler?: any; setData: any };

export default function EmpApplicationForm8(props: Props) {
  let data = props.data;

  const RequireError: string = "Required *";
  const WrongPatternError: string = "Invalid Input";

  const [manualStates, setManualStates] = useState(data);
  const Forms = useForm({
    defaultValues: data,
    shouldFocusError: true,
  });
  console.log("data");
  console.log(data);
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
  const [successSnackOpen, setSuccessSnackOpen] = React.useState(false);
  const [hideAddressesComponent, setHideAddressesComponent] = useState(
    !(manualStates.lastThreeYearResidenceCheck === "Yes")
  );

  const classes = styleClasses.useStyles();

  const united_state_citizenErrorMessage =
    "You must be eligible to work in United States";
  const willingForDrugTestErrorMessage =
    "You must be willing to undertake a drug test as part of this hiring process";

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setSuccessSnackOpen(false);
    console.log("CLOSE AUTO");
    if (succesOrErrorBit === "success") {
      props.handler[0]();
    //   props.handler();
    }
  };

  const handleFileUploadClose = (
    event?: React.SyntheticEvent,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    console.log("CLOSE AUTO");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onSubmit = async (data: any) => {
  
    console.log("data form8 submit");
    console.log(data);
    data.user_name = manualStates.user_name;
    print("Sending :", data);
    const resdata = await update(data);
    try {
      print("Receiving :", data);
      props.setData(resdata.data.data);
      setSuccesOrErrorBit("success");
      setSuccessSnackOpen(true);
    } catch (ex) {
      console.log("Error Exaption Seerver Error");
      console.log(ex);
      setSuccesOrErrorBit("error");
      setSuccessSnackOpen(true);
    }
  };




  return (
    <React.Fragment>
      <Container style={{ backgroundColor: "#fafafa" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="baseline"
            spacing={3}
          >
            <Grid item xs={10}>
              <Paper elevation={3} className={classes.paper}>
                <h4>AWB Transport Inc., Employment Application</h4>
              </Paper>
            </Grid>

            {/* Questions Start */}
            {/* Questions and Awnsers Starting */}
            <Grid item xs={10}>
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
                    justify="space-around"
                    alignItems="center"
                    spacing={3}
                  >
                   
                    <Grid item xs={11}>
                        <div style={{ paddingLeft: "13px" }}>
                            <RadioQuestions
                            id="united_state_citizen"
                            question="Do you have Citizenship of United States?"
                            optionList={["Yes", "No"]}
                            optionValue={["Yes", "No"]}
                            xsSize={12}
                            useForm={Forms}
                            isReq={reqBits.united_state_citizen}
                            defaultSelected={
                                manualStates.united_state_citizen
                            }
                            />
                        </div>
                    </Grid>


                    <Grid item xs={11}>
                        <div style={{ paddingLeft: "13px" }}>
                        <RadioQuestions
                            id="non_united_state_citizen"
                            question="Are you non unitied state citizen?"
                            xsSize={12}
                            optionList={["Yes", "No"]}
                            optionValue={["Yes", "No"]}
                            useForm={Forms}
                            isReq={reqBits.non_united_state_citizen}
                            defaultSelected={manualStates.non_united_state_citizen}
                            
                        />
                        </div>
                    </Grid>


                    <Grid item xs={11}>
                        <div style={{ paddingLeft: "13px" }}>
                        <RadioQuestions
                            id="lawful_permanent_resident"
                            question="Are you Lawfull Permanent Resident?"
                            xsSize={12}
                            optionList={["Yes", "No"]}
                            optionValue={["Yes", "No"]}
                            useForm={Forms}
                            isReq={reqBits.lawful_permanent_resident}
                            defaultSelected={manualStates.lawful_permanent_resident}
                        />
                        </div>
                    </Grid>


                    <Grid item xs={11}>
                        <div style={{ paddingLeft: "13px" }}>
                        <RadioQuestions
                            id="alien_authorized"
                            question="Are you Alien Authorized?"
                            xsSize={12}
                            optionList={["Yes", "No"]}
                            optionValue={["Yes", "No"]}
                            useForm={Forms}
                            isReq={reqBits.alien_authorized}
                            defaultSelected={manualStates.alien_authorized}
                        />
                        </div>
                    </Grid>


                    <Grid item xs={5}>
                        <TextField
                          name="alien_registration_number"
                          variant="outlined"
                          size="small"
                          type="text"
                          label="Alien Registration Number"
                          className="col-12"
                          error={
                            errors && errors.alien_registration_number === undefined ? false : true
                          }
                          helperText={errors && errors.alien_registration_number ? errors.alien_registration_number.message : RequireError}
                          inputRef={register({
                            required: {
                              value: reqBits.alien_registration_number,
                              message: RequireError,
                            },
                            pattern:{value:/^[0-9-]*$/, message:"Only Chracters Allowed"},
                            minLength :{value:7,message:"Min 8 Digits"}
                          })}
                        ></TextField>
                    </Grid>


                    <Grid item xs={5}>
                            <TextField
                                name="expiration_date"
                                variant="outlined"
                                size="small"
                                type="date"
                                className="col-12"
                                error={
                                  errors.expiration_date == undefined
                                    ? false
                                    : true
                                }
                                helperText={"Expiration Date " + RequireError}
                                inputRef={register({
                                  required: reqBits.expiration_date,
                                })}
                               
                              ></TextField>
                        </Grid>

                        
                    <Grid item xs={5}>
                        <TextField
                          name="formi94_reg_number"
                          variant="outlined"
                          size="small"
                          type="text"
                          label="Form I-9 Registration Number"
                          className="col-12"
                          error={
                            errors && errors.formi94_reg_number === undefined ? false : true
                          }
                          helperText={errors && errors.formi94_reg_number ? errors.formi94_reg_number.message : RequireError}
                          inputRef={register({
                            required: {
                              value: reqBits.formi94_reg_number,
                              message: RequireError,
                            },
                            // pattern:{value:/^[a-zA-Z ]{1,30}$/, message:"Only Chracters Allowed"}
                          })}
                        ></TextField>
                    </Grid>



                        
                    <Grid item xs={5}>
                        <TextField
                          name="foreign_passport_number"
                          variant="outlined"
                          size="small"
                          type="text"
                          label="Foreign Passport Number"
                          className="col-12"
                          error={
                            errors && errors.foreign_passport_number === undefined ? false : true
                          }
                          helperText={errors && errors.foreign_passport_number ? errors.foreign_passport_number.message : RequireError}
                          inputRef={register({
                            required: {
                              value: reqBits.foreign_passport_number,
                              message: RequireError,
                            },
                            // pattern:{value:/^[a-zA-Z ]{1,30}$/, message:"Only Chracters Allowed"}
                          })}
                        ></TextField>
                    </Grid>


                    <Grid item xs={12}>
                        <TextField
                          name="issuance_country"
                          variant="outlined"
                          size="small"
                          type="text"
                          label="Issuance Country"
                          className="col-11"
                          error={
                            errors && errors.issuance_country === undefined ? false : true
                          }
                          helperText={errors && errors.issuance_country ? errors.issuance_country.message : RequireError}
                          inputRef={register({
                            required: {
                              value: reqBits.issuance_country,
                              message: RequireError,
                            },
                            // pattern:{value:/^[a-zA-Z ]{1,30}$/, message:"Only Chracters Allowed"}
                          })}
                        ></TextField>
                    </Grid>


{/* // united_state_citizen = db.StringField() # chkbox = OK
// non_united_state_citizen = db.StringField() # chkbox = DONE
// lawful_permanent_resident = db.StringField() # chkbox = DONE
// alien_registration_number = db.StringField()
// alien_authorized = db.StringField() # chkbox
// expiration_date = db.DateField()
// formi94_reg_number = db.StringField()
// foreign_passport_number = db.StringField()
// issuance_country = db.StringField() */}
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </Grid>
            {/* Questions and Awnsers Ending */}
            {/* Questions End */}

            {/* BUTTON Start */}
            <Grid item xs={3}>
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
            <Grid item xs={3}>
              <Button
                type="submit"
                className="col-12"
                variant="contained"
                color="primary"
              >
                Submit All
              </Button>
            </Grid>
            {/* BUTTON End */}
          </Grid>
        </form>
        <Snackbar
          open={successSnackOpen}
          autoHideDuration={snackbarDuratuion}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity={succesOrErrorBit as "success"}>
            {succesOrErrorBit === "success" && "All Data Saved Successfully"}
            {succesOrErrorBit === "error" && "Server Error"}
          </Alert>
        </Snackbar>
      </Container>
    </React.Fragment>
  );
}
