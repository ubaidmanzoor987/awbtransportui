import {
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
import { Accordion, Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { states } from "../Object/AllStates";
import DrivingExperience from "./DrivingExperience";

const useStyles = makeStyles((theme: Theme) =>
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
    text: {
      fontSize: theme.typography.pxToRem(17),
      fontWeight: theme.typography.fontWeightRegular,
      color: theme.palette.text.secondary,
      textJustify: "inter-word",
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

const WrongPatternError: string = "Wrong Pattern";

function EmpApplicationForm3() {
  const { register, handleSubmit, errors } = useForm();

  const gender = [{ value: "Male" }, { value: "Female" }, { value: "Other" }];

  const classes = useStyles();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const RequireError: string = "Required *";

  return (
    <React.Fragment>
      <Container style={{ backgroundColor: "#fafafa" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container direction="row" justify="space-between" alignItems="center" spacing={3}>
            <Grid item xs={12}>
              <Paper style={{ margin: "10px 0px" }} elevation={3} className={(classes.paper, classes.paperProminantStyle)}>
                <h4>AWB Transport Inc., Employment Application</h4>
              </Paper>
            </Grid>
            {/* PAGE 1 */}
            <Grid item xs={1}></Grid>
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
                          error={errors.companyName == undefined ? false : true}
                          label="Company Name"
                          helperText={errors.companyName && errors.companyName?.message}
                          inputRef={register({
                            required: { value: true, message: RequireError },
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
                            required: { value: true, message: RequireError },
                          })}
                        ></TextField>
                      </Grid>
                      <Grid item xs={4}>
                        <TextField
                          name="city"
                          variant="outlined"
                          size="small"
                          type="text"
                          label="City"
                          className="col-6"
                          error={errors.city == undefined ? false : true}
                          helperText={errors.city && errors.city?.message}
                          inputRef={register({
                            required: { value: true, message: RequireError },
                          })}
                        ></TextField>
                      </Grid>
                      <Grid item xs={4}>
                        <FormControl variant="outlined" size="small" className="col-10">
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
                      <Grid item xs={4}>
                        <TextField
                          name="zipCode"
                          variant="outlined"
                          size="small"
                          type="text"
                          label="Zip Code"
                          className="col-6"
                          error={errors.zipCode == undefined ? false : true}
                          helperText={errors.zipCode && errors.zipCode?.message}
                          inputRef={register({
                            required: { value: true, message: RequireError },
                          })}
                        ></TextField>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={1}></Grid>

            {/* PAGE 2 */}
            <Grid item xs={1}></Grid>
            <Grid item xs={10} style={{ marginBottom: "10px" }}>
              <Grid container direction="row" justify="space-between" alignItems="baseline" spacing={3}>
                <Grid item xs={12}>
                  <Paper style={{ margin: "10px 0px" }} elevation={3} className={(classes.heading, classes.paperProminantStyle)}>
                    <Grid container direction="row" justify="space-between" alignItems="center" spacing={3}>
                      {/* Company Name */}
                      <Grid item xs={12} className={classes.heading}>
                        APPLICANT INFORMATION
                      </Grid>
                      <Grid item xs={12}>
                        <hr style={{ marginBottom: "10px" }} />
                      </Grid>
                      <Grid item xs={1}></Grid>
                      <Grid item xs={10}>
                        <Paper className={(classes.heading, classes.paperProminantStyle)}>
                          <Grid container direction="row" justify="space-between" alignItems="center" spacing={2}>
                            <Grid item xs={4}>
                              <Typography className={classes.text}>Position applying for:</Typography>
                            </Grid>
                            <Grid item xs={8}>
                              <TextField
                                name="applyingDate"
                                variant="outlined"
                                size="small"
                                type="text"
                                className="col-10"
                                error={errors.applyingDate == undefined ? false : true}
                                label="Application Date"
                                inputRef={register({
                                  required: true,
                                })}
                                helperText={errors.applyingDate && errors.applyingDate?.type.toUpperCase() + " Error"}
                              ></TextField>
                            </Grid>
                            <Grid item xs={12}>
                              <FormControl component="fieldset">
                                <RadioGroup row name="positionAppling">
                                  <FormControlLabel value="c" control={<Radio />} label="Contractor" />
                                  <FormControlLabel value="d" control={<Radio />} label="Driver" />
                                  <FormControlLabel value="csd" control={<Radio />} label="Contractor's Driver" />
                                  <FormControlLabel value="o" control={<Radio />} label="Other" />
                                </RadioGroup>
                              </FormControl>
                            </Grid>
                          </Grid>
                        </Paper>
                      </Grid>
                      <Grid item xs={1}></Grid>
                      {/* <Grid item xs={12}>
                        <hr style={{ marginBottom: "10px" }} />
                      </Grid> */}
                      {/* applicant name */}
                      <Grid item xs={1}></Grid>
                      <Grid item xs={5}>
                        <TextField
                          name="first_name"
                          variant="outlined"
                          size="small"
                          type="text"
                          className="col-12"
                          error={errors.first_name == undefined ? false : true}
                          label="First Name"
                          helperText={errors.first_name && errors.first_name?.message}
                          inputRef={register({
                            required: { value: true, message: RequireError },
                          })}
                        ></TextField>
                      </Grid>
                      <Grid item xs={5}>
                        <TextField
                          name="last_name"
                          variant="outlined"
                          size="small"
                          type="text"
                          className="col-12"
                          error={errors.last_name == undefined ? false : true}
                          label="Last Name"
                          // inputRef={register({
                          //   required: true,
                          // })}
                          // helperText={
                          //   errors.last_name &&
                          //   errors.last_name?.type.toUpperCase() + " Error"
                          // }
                        ></TextField>
                      </Grid>
                      <Grid item xs={1}></Grid>
                      <Grid item xs={12}>
                        <TextField
                          name="phone_number"
                          variant="outlined"
                          size="small"
                          type="tel"
                          className="col-10"
                          error={errors.phone_number == undefined ? false : true}
                          label="Phone Number"
                          helperText={errors.phone_number && errors.phone_number?.message}
                          inputRef={register({
                            required: { value: true, message: RequireError },
                            pattern: {
                              value: /^([0-9]{3}[-.][0-9]{3}[-.][0-9]{4}[-. ][x][0-9]{4})$/,
                              message: WrongPatternError + " : ###-###-#### x####",
                            },
                          })}
                        ></TextField>
                      </Grid>
                      {/* emergency */}
                      <Grid item xs={1}></Grid>
                      <Grid item xs={5}>
                        <TextField
                          name="emergency_first_name"
                          variant="outlined"
                          size="small"
                          type="text"
                          className="col-12"
                          error={errors.emergency_first_name == undefined ? false : true}
                          label="Emergency: First Name"
                          helperText={errors.emergency_first_name && errors.emergency_first_name?.message}
                          inputRef={register({
                            required: { value: true, message: RequireError },
                          })}
                        ></TextField>
                      </Grid>
                      <Grid item xs={5}>
                        <TextField
                          name="emergency_last_name"
                          variant="outlined"
                          size="small"
                          type="text"
                          className="col-12"
                          error={errors.emergency_last_name == undefined ? false : true}
                          label="Emergency: Last Name"
                          // inputRef={register({
                          //   required: true,
                          // })}
                          // helperText={
                          //   errors.emergency_last_name &&
                          //   errors.emergency_last_name?.type.toUpperCase() + " Error"
                          // }
                        ></TextField>
                      </Grid>
                      <Grid item xs={1}></Grid>
                      <Grid item xs={12}>
                        <TextField
                          name="emergency_phone_number"
                          variant="outlined"
                          size="small"
                          type="tel"
                          className="col-10"
                          error={errors.emergency_phone_number == undefined ? false : true}
                          label="Emergency: Mobile Num"
                          helperText={errors.emergency_phone_number && errors.emergency_phone_number?.message}
                          inputRef={register({
                            required: { value: true, message: RequireError },
                            pattern: {
                              value: /^([0-9]{3}[-.][0-9]{3}[-.][0-9]{4}[-. ][x][0-9]{4})$/,
                              message: WrongPatternError + " : ###-###-#### x####",
                            },
                          })}
                        ></TextField>
                      </Grid>
                      {/* <Grid item xs={12}>
                        <hr style={{ marginBottom: "10px" }} />
                      </Grid> */}
                      <Grid item xs={1}></Grid>
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
                            required: { value: true, message: RequireError },
                          })}
                        ></TextField>
                      </Grid>
                      <Grid item xs={5}>
                        <TextField
                          name="dateOfBirth"
                          variant="outlined"
                          size="small"
                          type="text"
                          className="col-12"
                          error={errors.dateOfBirth == undefined ? false : true}
                          label="Date of Birth"
                          inputRef={register({
                            required: true,
                          })}
                          helperText={errors.dateOfBirth && errors.dateOfBirth?.type.toUpperCase() + " Error"}
                        ></TextField>
                      </Grid>
                      <Grid item xs={1}></Grid>
                      <Grid item xs={12}>
                        <TextField
                          name="physicalExamDateExpiry"
                          variant="outlined"
                          size="small"
                          type="text"
                          className="col-10"
                          error={errors.physicalExamDateExpiry == undefined ? false : true}
                          label="Phyical Exam Exp Date"
                          inputRef={register({
                            required: true,
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
                <Grid item xs={12}>
                  <Paper style={{ margin: "10px 0px" }} elevation={3} className={(classes.paper, classes.paperProminantStyle)}>
                    <Grid container direction="row" justify="space-between" alignItems="center">
                      <Grid item xs={12} className={classes.heading} style={{ textAlign: "center", margin: "10px 0px" }}>
                        ADDRESS
                      </Grid>
                      {/* Current Address Starting */}

                      <Grid item xs={1}></Grid>
                      <Grid item xs={10}>
                        <Accordion>
                          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className={classes.text}>Current Address</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Grid container direction="row" justify="space-between" alignItems="baseline" spacing={3}>
                              <Grid item xs={12}>
                                <TextField
                                  className="col-12"
                                  name="address"
                                  variant="outlined"
                                  size="small"
                                  type="text"
                                  label="Address"
                                  error={errors.address == undefined ? false : true}
                                  helperText={errors.address && errors.address?.message}
                                  inputRef={register({
                                    required: {
                                      value: true,
                                      message: RequireError,
                                    },
                                  })}
                                ></TextField>
                              </Grid>
                              <Grid item xs={4}>
                                <TextField
                                  name="prevAddressCity"
                                  variant="outlined"
                                  size="small"
                                  type="text"
                                  label="City"
                                  className="col-12"
                                ></TextField>
                              </Grid>
                              <Grid item xs={4}>
                                <FormControl variant="outlined" size="small" className="col-12">
                                  <InputLabel id="demo-simple-select-outlined-label">State</InputLabel>
                                  <Select
                                    name="prevAddressState"
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    label="State"
                                    error={errors.prevAddressState == undefined ? false : true}
                                    inputRef={register({
                                      required: {
                                        value: true,
                                        message: RequireError,
                                      },
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
                                  <FormHelperText>{errors.prevAddressState && errors.prevAddressState?.message}</FormHelperText>
                                </FormControl>
                              </Grid>
                              <Grid item xs={4}>
                                <TextField
                                  name="prevAddressZipCode"
                                  variant="outlined"
                                  size="small"
                                  type="text"
                                  label="Zip Code"
                                  className="col-12"
                                ></TextField>
                              </Grid>
                              <Grid item xs={6}>
                                <TextField
                                  name="fromDate"
                                  variant="outlined"
                                  type="date"
                                  size="small"
                                  className="col-12"
                                  error={errors.fromDate == undefined ? false : true}
                                  helperText={
                                    errors.fromDate == undefined ? "From Date" : "From Date " + errors.fromDate?.message
                                  }
                                  inputRef={register({
                                    required: {
                                      value: true,
                                      message: RequireError,
                                    },
                                  })}
                                ></TextField>
                              </Grid>
                              <Grid item xs={6}>
                                <TextField
                                  name="toDate"
                                  variant="outlined"
                                  type="date"
                                  size="small"
                                  className="col-12"
                                  error={errors.toDate == undefined ? false : true}
                                  helperText={errors.toDate == undefined ? "To Date" : "To Date " + errors.toDate?.message}
                                  inputRef={register({
                                    required: {
                                      value: true,
                                      message: RequireError,
                                    },
                                  })}
                                ></TextField>
                              </Grid>
                            </Grid>
                          </AccordionDetails>
                          <Divider />
                          <AccordionActions
                            style={{
                              justifyContent: "space-between",
                              padding: "20px 20px",
                            }}
                          >
                            <Button size="small" className="col-3" variant="contained" color="primary">
                              Another Address
                            </Button>
                            <Button size="small" className="col-2" variant="contained" color="default">
                              Save
                            </Button>
                            {/* <Button
                          size="small"
                          className="col-3"
                          variant="contained"
                          color="secondary"
                        >
                          Cancel
                        </Button> */}
                          </AccordionActions>
                        </Accordion>
                      </Grid>
                      <Grid item xs={1}></Grid>

                      {/* Current Address Ending */}

                      <Grid item xs={12}>
                        <hr style={{ margin: "20px 0px" }} />
                      </Grid>

                      {/* Current Address Starting */}

                      <Grid item xs={1}></Grid>
                      <Grid item xs={10}>
                        <Accordion>
                          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className={classes.text}>Previous Address</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Grid container direction="row" justify="space-between" alignItems="baseline" spacing={3}>
                              <Grid item xs={12}>
                                <TextField
                                  className="col-12"
                                  name="address"
                                  variant="outlined"
                                  size="small"
                                  type="text"
                                  label="Address"
                                  error={errors.address == undefined ? false : true}
                                  helperText={errors.address && errors.address?.message}
                                  inputRef={register({
                                    required: {
                                      value: true,
                                      message: RequireError,
                                    },
                                  })}
                                ></TextField>
                              </Grid>
                              <Grid item xs={4}>
                                <TextField
                                  name="prevAddressCity"
                                  variant="outlined"
                                  size="small"
                                  type="text"
                                  label="City"
                                  className="col-12"
                                ></TextField>
                              </Grid>
                              <Grid item xs={4}>
                                <FormControl variant="outlined" size="small" className="col-12">
                                  <InputLabel id="demo-simple-select-outlined-label">State</InputLabel>
                                  <Select
                                    name="prevAddressState"
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    label="State"
                                    error={errors.prevAddressState == undefined ? false : true}
                                    inputRef={register({
                                      required: {
                                        value: true,
                                        message: RequireError,
                                      },
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
                                  <FormHelperText>{errors.prevAddressState && errors.prevAddressState?.message}</FormHelperText>
                                </FormControl>
                              </Grid>
                              <Grid item xs={4}>
                                <TextField
                                  name="prevAddressZipCode"
                                  variant="outlined"
                                  size="small"
                                  type="text"
                                  label="Zip Code"
                                  className="col-12"
                                ></TextField>
                              </Grid>
                              <Grid item xs={6}>
                                <TextField
                                  name="fromDate"
                                  variant="outlined"
                                  type="date"
                                  size="small"
                                  className="col-12"
                                  error={errors.fromDate == undefined ? false : true}
                                  helperText={
                                    errors.fromDate == undefined ? "From Date" : "From Date " + errors.fromDate?.message
                                  }
                                  inputRef={register({
                                    required: {
                                      value: true,
                                      message: RequireError,
                                    },
                                  })}
                                ></TextField>
                              </Grid>
                              <Grid item xs={6}>
                                <TextField
                                  name="toDate"
                                  variant="outlined"
                                  type="date"
                                  size="small"
                                  className="col-12"
                                  error={errors.toDate == undefined ? false : true}
                                  helperText={errors.toDate == undefined ? "To Date" : "To Date " + errors.toDate?.message}
                                  inputRef={register({
                                    required: {
                                      value: true,
                                      message: RequireError,
                                    },
                                  })}
                                ></TextField>
                              </Grid>
                            </Grid>
                          </AccordionDetails>
                          <Divider />
                          <AccordionActions
                            style={{
                              justifyContent: "space-between",
                              padding: "20px 20px",
                            }}
                          >
                            <Button size="small" className="col-3" variant="contained" color="primary">
                              Another Address
                            </Button>
                            <Button size="small" className="col-2" variant="contained" color="default">
                              Save
                            </Button>
                            {/* <Button
                          size="small"
                          className="col-3"
                          variant="contained"
                          color="secondary"
                        >
                          Cancel
                        </Button> */}
                          </AccordionActions>
                        </Accordion>
                      </Grid>
                      <Grid item xs={1}></Grid>

                      {/* Current Address Ending */}
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={1}></Grid>

            {/* PAGE 3 */}
            <Grid item xs={1}></Grid>
            <Grid item xs={10} style={{ marginBottom: "10px" }}>
              <Grid container direction="row" justify="space-between" alignItems="baseline" spacing={3}>
                <Grid item xs={12}>
                  <Paper style={{ margin: "10px 0px" }} elevation={3} className={(classes.heading, classes.paperProminantStyle)}>
                    <Grid container direction="row" justify="space-between" alignItems="center" spacing={3}>
                      {/* Company Name */}
                      <Grid item xs={12} className={classes.heading}>
                        COMPANY HISTORY
                      </Grid>
                      {/* applicant name */}
                      <Grid item xs={1}></Grid>
                      <Grid item xs={7} className={(classes.paper, classes.questionTextStyle)}>
                        <Typography className={classes.text}>Have you worked for this company before?</Typography>
                      </Grid>
                      <Grid item xs={3} style={{ textAlign: "right" }}>
                        <FormControl component="fieldset">
                          <RadioGroup row name="choose" defaultValue="yes">
                            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                          </RadioGroup>
                        </FormControl>
                      </Grid>
                      <Grid item xs={1}></Grid>
                      <Grid item xs={12}>
                        <hr style={{ marginBottom: "10px" }} />
                      </Grid>
                      <Grid item xs={12} className={classes.heading}>
                        EDUCATION HISTORY
                      </Grid>
                      <Grid item xs={1}></Grid>
                      <Grid item xs={10} className={(classes.paper, classes.questionTextStyle)}>
                        <Typography className={classes.text}>Please circle the highest School grade completed</Typography>
                      </Grid>
                      <Grid item xs={1}></Grid>
                      <Grid item xs={12}>
                        <FormControl component="fieldset">
                          <RadioGroup row name="chooseSchoolGrade" defaultValue="12">
                            <FormControlLabel value="1" control={<Radio />} label="1" />
                            <FormControlLabel value="2" control={<Radio />} label="2" />
                            <FormControlLabel value="3" control={<Radio />} label="3" />
                            <FormControlLabel value="4" control={<Radio />} label="4" />
                            <FormControlLabel value="5" control={<Radio />} label="5" />
                            <FormControlLabel value="6" control={<Radio />} label="6" />
                            <FormControlLabel value="7" control={<Radio />} label="7" />
                            <FormControlLabel value="8" control={<Radio />} label="8" />
                            <FormControlLabel value="9" control={<Radio />} label="9" />
                            <FormControlLabel value="10" control={<Radio />} label="10" />
                            <FormControlLabel value="11" control={<Radio />} label="11" />
                            <FormControlLabel value="12" control={<Radio />} label="12" />
                          </RadioGroup>
                        </FormControl>
                      </Grid>
                      <Grid item xs={1}></Grid>
                      <Grid item xs={10} className={(classes.paper, classes.questionTextStyle)}>
                        <Typography className={classes.text}>Please circle the highest Collage grade completed</Typography>
                      </Grid>
                      <Grid item xs={1}></Grid>
                      <Grid item xs={12}>
                        <FormControl component="fieldset">
                          <RadioGroup row name="chooseCollageGrade" defaultValue="4">
                            <FormControlLabel value="1" control={<Radio />} label="1" />
                            <FormControlLabel value="2" control={<Radio />} label="2" />
                            <FormControlLabel value="3" control={<Radio />} label="3" />
                            <FormControlLabel value="4" control={<Radio />} label="4" />
                          </RadioGroup>
                        </FormControl>
                      </Grid>
                      <Grid item xs={1}></Grid>
                      <Grid item xs={10} className={classes.paper}>
                        <Typography className={(classes.text, classes.questionTextStyle)}>
                          Please circle the highest Post Graduate grade completed
                        </Typography>
                      </Grid>
                      <Grid item xs={1}></Grid>
                      <Grid item xs={12}>
                        <FormControl component="fieldset">
                          <RadioGroup row name="choosePostGraduateGrade" defaultValue="4">
                            <FormControlLabel value="1" control={<Radio />} label="1" />
                            <FormControlLabel value="2" control={<Radio />} label="2" />
                            <FormControlLabel value="3" control={<Radio />} label="3" />
                            <FormControlLabel value="4" control={<Radio />} label="4" />
                          </RadioGroup>
                        </FormControl>
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
                          Give a COMPLETE RECORD of all employment for the past three (3) years, including any unemployment or
                          self employment periods, and all commercial driving experience for the past ten (10) years.
                          <i>(List most current first)</i>
                        </Typography>
                      </Grid>
                      <Grid item xs={1}></Grid>
                      <Grid item xs={1}></Grid>
                      <Grid item xs={10}>
                        <Accordion>
                          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className={classes.heading}>List of employment history</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Grid container direction="row" justify="space-between" alignItems="baseline" spacing={3}>
                              <Grid item xs={6}>
                                <TextField
                                  name="fromDateEmployment1"
                                  variant="outlined"
                                  size="small"
                                  type="date"
                                  helperText="From Date"
                                  className="col-12"
                                  inputRef={register({
                                    required: {
                                      value: true,
                                      message: RequireError,
                                    },
                                  })}
                                ></TextField>
                              </Grid>
                              <Grid item xs={6}>
                                <TextField
                                  name="toDateEmployment1"
                                  variant="outlined"
                                  size="small"
                                  type="date"
                                  helperText="To Date"
                                  className="col-12"
                                  inputRef={register({
                                    required: {
                                      value: true,
                                      message: RequireError,
                                    },
                                  })}
                                ></TextField>
                              </Grid>
                              <Grid item xs={6}>
                                <TextField
                                  name="presentOrLastEmployer"
                                  variant="outlined"
                                  size="small"
                                  type="text"
                                  label="Present or Last Employer "
                                  className="col-12"
                                  error={errors.presentOrLastEmployer == undefined ? false : true}
                                  helperText={errors.presentOrLastEmployer && errors.presentOrLastEmployer?.message}
                                  inputRef={register({
                                    required: {
                                      value: true,
                                      message: RequireError,
                                    },
                                  })}
                                ></TextField>
                              </Grid>
                              <Grid item xs={6}>
                                <TextField
                                  className="col-12"
                                  name="positionHeld"
                                  variant="outlined"
                                  size="small"
                                  type="text"
                                  label="Position Held "
                                  error={errors.positionHeld == undefined ? false : true}
                                  helperText={errors.positionHeld && errors.positionHeld?.message}
                                  inputRef={register({
                                    required: {
                                      value: true,
                                      message: RequireError,
                                    },
                                  })}
                                ></TextField>
                              </Grid>
                              <Grid item xs={6}>
                                <TextField
                                  name="companyPhone"
                                  variant="outlined"
                                  size="small"
                                  type="text"
                                  label="Company Phone"
                                  className="col-12"
                                  error={errors.companyPhone == undefined ? false : true}
                                  helperText={errors.companyPhone && errors.companyPhone?.message}
                                  inputRef={register({
                                    required: {
                                      value: true,
                                      message: RequireError,
                                    },
                                  })}
                                ></TextField>
                              </Grid>
                              <Grid item xs={6}>
                                <TextField
                                  className="col-12"
                                  name="reasonForLeaving"
                                  variant="outlined"
                                  size="small"
                                  type="text"
                                  label="Reason for leaving"
                                  error={errors.reasonForLeaving == undefined ? false : true}
                                  helperText={errors.reasonForLeaving && errors.reasonForLeaving?.message}
                                  inputRef={register({
                                    required: {
                                      value: true,
                                      message: RequireError,
                                    },
                                  })}
                                ></TextField>
                              </Grid>
                              {/* <Grid item xs={1}></Grid> */}
                              <Grid item xs={8} className={(classes.paper, classes.questionTextStyle)}>
                                <Typography className={classes.text}>
                                  Were you subject to the FMCSRs while employed here?
                                </Typography>
                              </Grid>
                              <Grid item xs={4} style={{ textAlign: "right" }}>
                                <FormControl component="fieldset">
                                  <RadioGroup row name="chooseFMCSRs" defaultValue="yes">
                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                  </RadioGroup>
                                </FormControl>
                              </Grid>
                              <Grid item xs={8} className={(classes.paper, classes.questionTextStyle)}>
                                <Typography className={classes.text}>
                                  Was your job designated as a safety-sensitive function in any DOT- regulated mode subject to the
                                  drug and alcohol testing requirements of 49 CFR Part 40?
                                </Typography>
                              </Grid>
                              <Grid item xs={4} style={{ textAlign: "right" }}>
                                <FormControl component="fieldset">
                                  <RadioGroup row name="chooseFMCSRs" defaultValue="yes">
                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                  </RadioGroup>
                                </FormControl>
                              </Grid>
                              {/* <Grid item xs={1}></Grid> */}
                            </Grid>
                          </AccordionDetails>
                          <Divider />
                          <AccordionActions
                            style={{
                              justifyContent: "space-between",
                              padding: "20px 20px",
                            }}
                          >
                            <Button size="small" className="col-3" variant="contained" color="primary">
                              Another Address
                            </Button>
                            <Button size="small" className="col-2" variant="contained" color="default">
                              Save
                            </Button>
                            {/* <Button
                          size="small"
                          className="col-3"
                          variant="contained"
                          color="secondary"
                        >
                          Cancel
                        </Button> */}
                          </AccordionActions>
                        </Accordion>
                      </Grid>
                      <Grid item xs={1}></Grid>
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={1}></Grid>

            {/* PAGE 4 */}
            <DrivingExperience></DrivingExperience>

            {/* BUTTON Start */}
            <Grid item xs={4}></Grid>
            <Grid item xs={4}>
              <Button type="submit" className="col-12" variant="contained" color="primary">
                Save This
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

export default EmpApplicationForm3;

// COMPLETED UI PHASE
