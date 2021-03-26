import React from "react";
import { Address } from "../../Common/CommonVariables";
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
import { Col, Container, Row } from "react-bootstrap";
import { useFieldArray, useForm } from "react-hook-form";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccordionActions from "@material-ui/core/AccordionActions";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { styleClasses } from "../../Common/styleClasses";
import {
  Addresses,
  Form1,
  reqBits,
  states,
  AddressErrorsList,
  tTrafficConvictions,
} from "../../Common/CommonVariables";
import { update } from "../../services/updateApi";
import RadioQuestions from "../SubComponents/RadioQuestions";
import ReactHookFormSelect from "../SubComponents/ReactHookFormSelect";

type Props = {
  idPrefix: string;
  trafficConvictionsList: tTrafficConvictions;
  useForm: any;
  settrafficConvictionsList: any;
};

const RequireError: string = "Required *";
const WrongPatternError: string = "Wrong Pattern";

let dummy = {
  dateOfViolation: "Default",
  LocationOfViolation: "Default",
  ViolationCharge: "Default",
  ViolationPenalty: "Default",
};

export function DynamicTrafficConvictions(props: Props) {
  const classes = styleClasses.useStyles();
  const {
    register,
    control,
    handleSubmit,
    reset,
    trigger,
    setError,
    errors,
  } = props.useForm;
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name: props.idPrefix,
    }
  );

  const submit = (e: any) => {
    e.preventDefault();
    //console.log(e.target.data);
  };

  return (
    <React.Fragment>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        {fields.map((item, index) => (
          <Accordion defaultExpanded elevation={3} key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.smallHeading}>
                Traffic Convictions and Forfeitures for the last three (3) years
                : 1
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
                    name={`${props.idPrefix}[${index}].dateOfViolation`}
                    error={
                      errors &&
                      errors[props.idPrefix] &&
                      errors[props.idPrefix][index] &&
                      errors[props.idPrefix][index].dateOfViolation
                    }
                    inputRef={register({
                      required: {
                        value: reqBits.dateOfViolation,
                        message: RequireError,
                      },
                    })}
                    defaultValue={item.dateOfViolation}
                    size="small"
                    helperText="Date Of Violation"
                    type="date"
                    className="col-12"
                  ></TextField>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    variant="outlined"
                    name={`${props.idPrefix}[${index}].ViolationPenalty`}
                    error={
                      errors &&
                      errors[props.idPrefix] &&
                      errors[props.idPrefix][index] &&
                      errors[props.idPrefix][index].ViolationPenalty
                    }
                    inputRef={register({
                      required: {
                        value: reqBits.ViolationPenalty,
                        message: RequireError,
                      },
                    })}
                    defaultValue={item.ViolationPenalty}
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
                    name={`${props.idPrefix}[${index}].LocationOfViolation`}
                    error={
                      errors &&
                      errors[props.idPrefix] &&
                      errors[props.idPrefix][index] &&
                      errors[props.idPrefix][index].LocationOfViolation
                    }
                    inputRef={register({
                      required: {
                        value: reqBits.LocationOfViolation,
                        message: RequireError,
                      },
                    })}
                    size="small"
                    defaultValue={item.LocationOfViolation}
                    rows={4}
                    variant="outlined"
                    className="col-12"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="outlined-multiline-static"
                    label="Charge"
                    multiline
                    name={`${props.idPrefix}[${index}].ViolationCharge`}
                    error={
                      errors &&
                      errors[props.idPrefix] &&
                      errors[props.idPrefix][index] &&
                      errors[props.idPrefix][index].ViolationCharge
                    }
                    inputRef={register({
                      required: {
                        value: reqBits.ViolationCharge,
                        message: RequireError,
                      },
                    })}
                    helperText={reqBits.ViolationCharge && RequireError}
                    size="small"
                    defaultValue={item.ViolationCharge}
                    rows={4}
                    variant="outlined"
                    className="col-12"
                  />
                </Grid>
              </Grid>
            </AccordionDetails>
            <AccordionActions
              style={{
                justifyContent: "center",
                padding: "20px 20px",
              }}
            >
              <Grid item xs={6} style={{ padding: "20px 10px" }}>
                <Button
                  size="small"
                  className="col-6"
                  variant="contained"
                  color="default"
                  id={"id" + index}
                  onClick={() => {
                    if (index > 0) {
                      remove(index);
                    }
                  }}
                >
                  Delete Entry
                </Button>
              </Grid>
            </AccordionActions>
          </Accordion>
        ))}
        <Grid item xs={12} style={{ padding: "20px 10px" }}>
          <Button
            size="small"
            className="col-3"
            variant="contained"
            color="primary"
            onClick={() =>
              append({
                dummy,
              })
            }
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
