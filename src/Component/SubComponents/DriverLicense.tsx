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
import React, { Component, useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccordionActions from "@material-ui/core/AccordionActions";
import { styleClasses } from "../../Common/styleClasses";
import {
  Address,
  reqBits,
  tDriverLicenses,
  driverLicenseDummyElement,
  tDriverLicenseInfo,
  states,
} from "../../Common/CommonVariables";
import { update } from "../../services/updateApi";
import RadioQuestions from ".././SubComponents/RadioQuestions";
import ErrorBoundary from "../ErrorBoundary";

type Props = {
  idPrefix: string;
  driverLicenseList: tDriverLicenses;
  useForm: any;
  setdriverLicenseList: any;
};

const RequireError: string = "Required *";
const WrongPatternError: string = "Wrong Pattern";

export default function DriverLicense(props: Props) {
  const classes = styleClasses.useStyles();
  const Forms = props.useForm;
  const { register, handleSubmit, errors, defaultValues } = Forms;

  const [driverLicenseState, driverLicenseStateHandler] = useState(props.driverLicenseList);
  //   const [errorsList, errorListHandler] = useState();
  useEffect(() => {
    driverLicenseStateHandler(props.driverLicenseList);
  }, [props.driverLicenseList]);

  useEffect(() => {
    props.setdriverLicenseList(driverLicenseState);
  }, [driverLicenseState]);

  const addAddress = (event: any) => {
    event.preventDefault();
    driverLicenseStateHandler([...driverLicenseState, driverLicenseDummyElement]);
  };

  return (
    <React.Fragment>
      <Grid container direction="row" justify="space-between" alignItems="center">
        {driverLicenseState.map((driverLicenseItem: tDriverLicenseInfo, index: number) => {
          console.log("----------------------ERRORS----------------------");
          console.log(errors);
          console.log(errors[props.idPrefix]);
          console.log(errors[props.idPrefix]?.driverLicensestatus);
          console.log("----------------------ERRORS----------------------");
          return (
            <Accordion elevation={3}>
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
            </Accordion>
          );
        })}
        <Grid item xs={12} style={{ padding: "20px 10px" }}>
          <Button
            size="small"
            className="col-6"
            variant="contained"
            color="primary"
            onClick={(e) => {
              driverLicenseStateHandler([...driverLicenseState, driverLicenseDummyElement]);
              console.log(driverLicenseState);
            }}
          >
            Another Employment Accident History
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
