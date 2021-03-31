import React, { Component } from "react";
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
import { Accordion, Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { states } from "../Object/AllStates";
import { styleClasses } from "../Object/styleClasses";
import { RequireError } from "../Object/CommonObject";

export default function DrivingExperience() {
  const classes = styleClasses.useStyles();
  const { register, handleSubmit, errors } = useForm();

  return (
    <React.Fragment>
      <Grid container direction="row" justify="space-between" alignItems="center">
        <Grid item xs={1}></Grid>
        <Grid item xs={10} style={{ marginBottom: "10px" }}>
          <Grid container direction="row" justify="space-between" alignItems="baseline" spacing={3}>
            <Grid item xs={12}>
              <Paper style={{ margin: "10px 0px" }} elevation={3} className={(classes.heading, classes.paperProminantStyle)}>
                <Grid container direction="row" justify="space-between" alignItems="center" spacing={3}>
                  {/* Company Name */}
                  <Grid item xs={12} className={classes.heading}>
                    DRIVING EXPERIENCE
                  </Grid>

                  <Grid item xs={12}>
                    <Paper
                      style={{ margin: "10px 0px" }}
                      elevation={3}
                      className={(classes.heading, classes.paperProminantStyle)}
                    >
                      <Grid item xs={12} className={classes.heading}>
                        Experience 1
                      </Grid>
                      <Grid item xs={12}>
                        <hr style={{ marginBottom: "10px" }} />
                      </Grid>
                      <Grid container direction="row" justify="space-between" alignItems="center" spacing={3}>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={5}>
                          <TextField
                            name="classOfEquipment"
                            variant="outlined"
                            size="small"
                            type="text"
                            label="Class of Equipment"
                            className="col-12"
                            inputRef={register({
                              required: {
                                value: true,
                                message: RequireError,
                              },
                            })}
                          ></TextField>
                        </Grid>
                        <Grid item xs={5}>
                          <TextField
                            name="approNumberOfMiles"
                            variant="outlined"
                            size="small"
                            type="number"
                            label="Approximate Number of Miles"
                            className="col-12"
                            inputRef={register({
                              required: {
                                value: true,
                                message: RequireError,
                              },
                            })}
                          ></TextField>
                        </Grid>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={5}>
                          <TextField
                            name="fromDateDriving1"
                            variant="outlined"
                            size="small"
                            type="date"
                            helperText="From Date "
                            className="col-12"
                            inputRef={register({
                              required: {
                                value: true,
                                message: RequireError,
                              },
                            })}
                          ></TextField>
                        </Grid>
                        <Grid item xs={5}>
                          <TextField
                            name="toDateDriving1"
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
                        <Grid item xs={1}></Grid>
                      </Grid>
                    </Paper>
                  </Grid>

                  <Grid item xs={12}>
                    <Paper
                      style={{ margin: "10px 0px" }}
                      elevation={3}
                      className={(classes.heading, classes.paperProminantStyle)}
                    >
                      <Grid item xs={12} className={classes.heading}>
                        Experience 2
                      </Grid>
                      <Grid item xs={12}>
                        <hr style={{ marginBottom: "10px" }} />
                      </Grid>
                      <Grid container direction="row" justify="space-between" alignItems="center" spacing={3}>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={5}>
                          <TextField
                            name="classOfEquipment"
                            variant="outlined"
                            size="small"
                            type="text"
                            label="Class of Equipment"
                            className="col-12"
                            inputRef={register({
                              required: {
                                value: true,
                                message: RequireError,
                              },
                            })}
                          ></TextField>
                        </Grid>
                        <Grid item xs={5}>
                          <TextField
                            name="approNumberOfMiles"
                            variant="outlined"
                            size="small"
                            type="number"
                            label="Approximate Number of Miles"
                            className="col-12"
                            inputRef={register({
                              required: {
                                value: true,
                                message: RequireError,
                              },
                            })}
                          ></TextField>
                        </Grid>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={5}>
                          <TextField
                            name="fromDateDriving1"
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
                        <Grid item xs={5}>
                          <TextField
                            name="toDateDriving1"
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
                        <Grid item xs={1}></Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </React.Fragment>
  );
}
