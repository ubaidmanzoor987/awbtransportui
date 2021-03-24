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
  tDrivingExperiences,
  reqBits,
  drivingExperienceDummyElement,
  tDrivingExperience,
} from "../../Common/CommonVariables";
import { update } from "../../services/updateApi";
import RadioQuestions from ".././SubComponents/RadioQuestions";
import ErrorBoundary from "../ErrorBoundary";

type Props = {
  idPrefix: string;
  drivingExperienceList: tDrivingExperiences;
  useForm: any;
  setDrivingExperienceList: any;
};

const RequireError: string = "Required *";
const WrongPatternError: string = "Wrong Pattern";

export default function DrivingExperience(props: Props) {
  const classes = styleClasses.useStyles();
  const Forms = props.useForm;
  const { register, handleSubmit, errors, defaultValues } = Forms;

  const [drivingExperienceState, drivingExperienceStateHandler] = useState(props.drivingExperienceList);
  //   const [errorsList, errorListHandler] = useState();
  useEffect(() => {
    drivingExperienceStateHandler(props.drivingExperienceList);
  }, [props.drivingExperienceList]);

  useEffect(() => {
    props.setDrivingExperienceList(drivingExperienceState);
  }, [drivingExperienceState]);

  const addAddress = (event: any) => {
    event.preventDefault();
    drivingExperienceStateHandler([...drivingExperienceState, drivingExperienceDummyElement]);
  };

  return (
    <React.Fragment>
      <Grid container direction="row" justify="space-between" alignItems="center">
        {drivingExperienceState.map((drivingExperienceItem: tDrivingExperience, index: number) => {
          //console.log("----------------------ERRORS----------------------");
          //console.log(errors);
          //console.log(errors[props.idPrefix]);
          //console.log(errors[props.idPrefix]?.drivingExperiencestatus);
          //console.log("----------------------ERRORS----------------------");
          return (
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                <Typography className={classes.heading}>Experience 1</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container direction="row" justify="space-evenly" alignItems="center" spacing={1}>
                  <Grid item xs={6}>
                    <TextField
                      name="experienceclassofEquipment"
                      variant="outlined"
                      size="small"
                      type="text"
                      label="Class of Equipment"
                      className="col-12"
                    ></TextField>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      name="experiencenumberOfMiles"
                      variant="outlined"
                      size="small"
                      type="number"
                      label="Approximate Number of Miles"
                      className="col-12"
                    ></TextField>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      name="fromDateDriving1"
                      variant="outlined"
                      size="small"
                      type="date"
                      helperText="From Date"
                      className="col-12"
                    ></TextField>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      name="experienceToDate"
                      variant="outlined"
                      size="small"
                      type="date"
                      helperText="To Date"
                      className="col-12"
                    ></TextField>
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
              drivingExperienceStateHandler([...drivingExperienceState, drivingExperienceDummyElement]);
              //console.log(drivingExperienceState);
            }}
          >
            Adds History
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
