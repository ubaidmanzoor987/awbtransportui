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
  Typography,
} from "@material-ui/core";
import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
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
    },

    input: {
      display: "none",
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  })
);

function EmpApplicationForm2() {
  const { register, handleSubmit, errors } = useForm();

  const gender = [{ value: "Male" }, { value: "Female" }, { value: "Other" }];

  const veteranStatus = [
    { value: "No Military Experience" },
    { value: "Veteran (VA Eligible)" },
    { value: "Active Reverse" },
    { value: "Other" },
  ];

  const classes = useStyles();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const RequireError: string = "Required *";

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
              <Paper elevation={3} className={classes.paper} style={{ padding: "30px 15px" }}>
                <Grid container direction="row" justify="space-between" alignItems="baseline" spacing={3}>
                  <Grid item xs={12} className={classes.heading} style={{ textAlign: "center", marginTop: "10px" }}>
                    <b>EEO Information</b>
                  </Grid>
                  <Grid item xs={12}>
                    <Paper elevation={3} className={classes.paper}>
                      <Typography align="justify">
                        We provide equal opportunity to all qualified individuals regardless of race, color, religion, age, sex,
                        national origin, veteran status or disability.
                      </Typography>
                    </Paper>
                    <Paper elevation={3} className={classes.paper}>
                      <Typography align="justify">
                        <b>Providing this information is voluntary.</b> We ask for this information to maintain records. Any
                        information you voluntarily provide is confidential and will not be considered in making any employment
                        decision. If you choose no.
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl variant="outlined" size="small" className="col-10">
                      <InputLabel id="demo-simple-select-outlined-label">Gender</InputLabel>
                      <Select
                        name="gender"
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        label="Gender"
                        error={errors.gender == undefined ? false : true}
                        inputRef={register({
                          required: { value: true, message: RequireError },
                        })}
                      >
                        {gender.map(function (object: any, i: number) {
                          return (
                            <MenuItem value={object.value} key={i}>
                              {object.value}
                            </MenuItem>
                          );
                        })}
                      </Select>
                      <FormHelperText>{errors.gender && errors.gender?.message}</FormHelperText>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl variant="outlined" size="small" className="col-10">
                      <InputLabel id="demo-simple-select-outlined-label">Veteran Status</InputLabel>
                      <Select
                        name="veteranStatus"
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        label="Veteran Status"
                        error={errors.veteranStatus == undefined ? false : true}
                        inputRef={register({
                          required: { value: true, message: RequireError },
                        })}
                      >
                        <MenuItem value="">None</MenuItem>
                        {veteranStatus.map(function (object: any, i: number) {
                          return (
                            <MenuItem value={object.value} key={i}>
                              {object.value}
                            </MenuItem>
                          );
                        })}
                      </Select>
                      <FormHelperText>{errors.veteranStatus && errors.veteranStatus?.message}</FormHelperText>
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid item xs={12} style={{ marginTop: "25px" }}>
                  <b>Thank you for considering AWB Transport, Inc.</b>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={1}></Grid>

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

export default EmpApplicationForm2;

// COMPLETED UI PHASE
