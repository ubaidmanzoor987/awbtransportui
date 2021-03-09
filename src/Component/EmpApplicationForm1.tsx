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
  Select,
  TextField,
} from "@material-ui/core";
import React, { Component, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccordionActions from "@material-ui/core/AccordionActions";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from "@material-ui/pickers";
import { states } from "../Object/AllStates";
import { styleClasses } from "../Object/styleClasses";

function EmpApplicationForm1() {
  const { register, handleSubmit, errors } = useForm();

  const joiningTime = [{ value: "Immediately" }, { value: "Within 2 Weeks" }, { value: "Within 1 Month" }];

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const classes = styleClasses.useStyles();

  const RequireError: string = "Required *";
  const WrongPatternError: string = "Wrong Pattern";

  return (
    <React.Fragment>
      <Container style={{ backgroundColor: "#fafafa" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container direction="row" justify="space-between" alignItems="baseline" spacing={3}>
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
                      className="col-8"
                      error={errors.first_name == undefined ? false : true}
                      label="First Name"
                      helperText={errors.first_name && errors.first_name?.message}
                      inputRef={register({
                        required: { value: true, message: RequireError },
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
                        required: { value: true, message: RequireError },
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
                      className="col-8"
                      error={errors.email == undefined ? false : true}
                      helperText={errors.email && errors.email?.message + " Error"}
                      inputRef={register({
                        // required: { value: true, message: RequireError },
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
                        required: { value: true, message: RequireError },
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
                      label="city"
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
                      label="zipCode"
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
            <Grid item xs={1}></Grid>

            {/* Question Start */}
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
              <Paper elevation={3} className={classes.paper}>
                <Grid container direction="row" justify="space-between" alignItems="center">
                  <Grid item xs={12} className={classes.heading} style={{ textAlign: "center", margin: "10px 0px" }}>
                    Address
                  </Grid>
                  <Grid item xs={9} className={(classes.paper, classes.addressPaper)}>
                    Have You Lived At This Residence For The Past 3 Years?
                  </Grid>
                  <Grid item xs={3} style={{ textAlign: "right" }}>
                    <FormControl component="fieldset">
                      <RadioGroup row name="choose" defaultValue="yes" onChange={() => {}}>
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} className="caption" style={{ textAlign: "left" }}>
                    <b>NOTE 1:</b> <i>If no, add any additional addresses you lived at within the past 3 years below.</i>
                  </Grid>
                  <Grid item xs={12} className="caption" style={{ textAlign: "left" }}>
                    <b>NOTE 2:</b> <i>List current address first</i>
                  </Grid>
                  {/* <Grid item xs={1}></Grid> */}
                  {/* Current Address Starting */}
                  <Grid item xs={12}>
                    <Divider orientation="horizontal" variant="fullWidth" style={{ marginTop: "20px" }} />
                  </Grid>
                  <Grid item xs={12}>
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
                              helperText={errors.fromDate == undefined ? "From Date" : "From Date " + errors.fromDate?.message}
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
                <input
                  accept=".pdf,.jpg,.jpge,.doc,.docx"
                  className={classes.input}
                  id="contained-button-file"
                  multiple
                  type="file"
                />
                <label htmlFor="contained-button-file">
                  <Button variant="contained" color="primary" component="span">
                    Upload Resume
                  </Button>
                </label>
                <Grid container direction="row" justify="space-between" alignItems="center">
                  <Grid item xs={12} className="caption" style={{ textAlign: "center", marginTop: "10px" }}>
                    <b>NOTE:</b>{" "}
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
                          name="joiningTime"
                          labelId="demo-simple-select-outlined-label"
                          id="demo-simple-select-outlined"
                          label="Join with in"
                          error={errors.joiningTime == undefined ? false : true}
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
                          {joiningTime.map(function (object: any, i: number) {
                            return (
                              <MenuItem value={object.value} key={i}>
                                {object.value}
                              </MenuItem>
                            );
                          })}
                        </Select>
                        <FormHelperText>{errors.joiningTime && errors.joiningTime?.message}</FormHelperText>
                      </FormControl>
                    </Grid>
                    <Grid item xs={9} className={(classes.paper, classes.addressPaper)}>
                      <Typography className={classes.text}>How Did You Hear About Us?</Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <TextField
                        name="heardAboutUs"
                        variant="outlined"
                        size="small"
                        type="text"
                        label="Heard From ..."
                        className="col-12"
                      ></TextField>
                    </Grid>
                    <Grid item xs={9} className={(classes.paper, classes.addressPaper)}>
                      <Typography className={classes.text}>Are You Eligible To Work In The United States?</Typography>
                    </Grid>
                    <Grid item xs={3} style={{ textAlign: "right" }}>
                      <FormControl component="fieldset">
                        <RadioGroup row name="choose" defaultValue="yes">
                          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                          <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                    <Grid item xs={9} className={(classes.paper, classes.addressPaper)}>
                      <Typography className={classes.text}>
                        Are you willing to undertake a drug test as part of this hiring process?
                      </Typography>
                    </Grid>
                    <Grid item xs={3} style={{ textAlign: "right" }}>
                      <FormControl component="fieldset">
                        <RadioGroup row name="drugTestOptions" defaultValue="yes">
                          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                          <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
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

export default EmpApplicationForm1;

// COMPLETED UI PHASE
