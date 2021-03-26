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
  tTrafficConvictions,
  reqBits,
  trafficConvictionDummyElement,
  tTrafficConvictionInfo,
} from "../../Common/CommonVariables";
import { update } from "../../services/updateApi";
import RadioQuestions from ".././SubComponents/RadioQuestions";
import ErrorBoundary from "../ErrorBoundary";

type Props = {
  idPrefix: string;
  trafficConvictionsList: tTrafficConvictions;
  useForm: any;
  settrafficConvictionsList: any;
};

const RequireError: string = "Required *";
const WrongPatternError: string = "Wrong Pattern";

export default function TrafficConvictions(props: Props) {
  const classes = styleClasses.useStyles();
  const Forms = props.useForm;
  const { register, handleSubmit, errors, defaultValues } = Forms;

  const [trafficConvictionsState, trafficConvictionsStateHandler] = useState(
    props.trafficConvictionsList
  );
  //   const [errorsList, errorListHandler] = useState();
  useEffect(() => {
    trafficConvictionsStateHandler(props.trafficConvictionsList);
  }, [props.trafficConvictionsList]);

  useEffect(() => {
    props.settrafficConvictionsList(trafficConvictionsState);
  }, [trafficConvictionsState]);

  const addAddress = (event: any) => {
    event.preventDefault();
    trafficConvictionsStateHandler([
      ...trafficConvictionsState,
      trafficConvictionDummyElement,
    ]);
  };

  return (
    <React.Fragment>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        {trafficConvictionsState.map(
          (trafficConvictionsItem: tTrafficConvictionInfo, index: number) => {
            //console.log("----------------------ERRORS----------------------");
            //console.log(errors);
            //console.log(errors[props.idPrefix]);
            //console.log(errors[props.idPrefix]?.trafficConvictionsstatus);
            //console.log("----------------------ERRORS----------------------");
            return (
              <Accordion elevation={3}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.smallHeading}>
                    Traffic Convictions and Forfeitures for the last three (3)
                    years : 1
                    <Typography className={classes.caption}>
                      (other than parking violations)
                    </Typography>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid
                    container
                    direction="row"
                    justify="space-around"
                    alignItems="baseline"
                    spacing={1}
                  >
                    <Grid item xs={6}>
                      <TextField
                        variant="outlined"
                        name="dateOfViolation"
                        size="small"
                        helperText="Date Of Violation"
                        type="date"
                        className="col-12"
                      ></TextField>
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        variant="outlined"
                        name="ViolationPenalty"
                        size="small"
                        label="Penalty"
                        type="number"
                        className="col-12"
                      ></TextField>
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        id="outlined-multiline-static"
                        label="Location"
                        multiline
                        name="LocationOfViolation"
                        size="small"
                        rows={4}
                        defaultValue=""
                        variant="outlined"
                        className="col-12"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="outlined-multiline-static"
                        label="Charge"
                        multiline
                        name="ViolationCharge"
                        size="small"
                        helperText={reqBits.ViolationCharge && RequireError}
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
          }
        )}
        <Grid item xs={12} style={{ padding: "20px 10px" }}>
          <Button
            size="small"
            className="col-6"
            variant="contained"
            color="primary"
            onClick={(e) => {
              trafficConvictionsStateHandler([
                ...trafficConvictionsState,
                trafficConvictionDummyElement,
              ]);
              //console.log(trafficConvictionsState);
            }}
          >
            Adds History
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
