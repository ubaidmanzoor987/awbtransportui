import React from "react";
import {
  Address,
  EmploymentAccidentHistories,
} from "../../Common/CommonVariables";
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
} from "../../Common/CommonVariables";
import { update } from "../../services/updateApi";
import RadioQuestions from "../SubComponents/RadioQuestions";
import ReactHookFormSelect from "../SubComponents/ReactHookFormSelect";

type Props = {
  idPrefix: string;
  employmentAccidentHistoryList: EmploymentAccidentHistories;
  useForm: any;
  setEmploymentAccidentHistoryList: any;
};

const RequireError: string = "Required *";
const WrongPatternError: string = "Wrong Pattern";

let addr = {
  lastYearAddress: "",
  lastYearAddressCity: "",
  lastYearAddressState: "",
  lastYearAddressZipCode: "",
  lastYearAddressfrom: "1990-01-01",
  lastYearAddressTo: "1990-01-01",
};

export function DynamicEmploymentAccidentHistoryComponent(props: Props) {
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
              <Typography className={classes.heading}>
                Accident Record for past three (3) years: {index + 1}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="baseline"
                spacing={3}
              >
                <Grid item xs={6}>
                  <TextField
                    variant="outlined"
                    error={
                      errors &&
                      errors[props.idPrefix] &&
                      errors[props.idPrefix][index] &&
                      errors[props.idPrefix][index].dateOfAccident
                    }
                    inputRef={register({
                      required: {
                        value: reqBits.dateOfAccident,
                        message: RequireError,
                      },
                    })}
                    name={`${props.idPrefix}[${index}].dateOfAccident`}
                    defaultValue={item.dateOfAccident}
                    helperText="Date of Accident"
                    type="date"
                    size="small"
                    className="col-12"
                  ></TextField>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    variant="outlined"
                    defaultValue={item.numberofFatalities}
                    label="Num of Fatalities"
                    error={
                      errors &&
                      errors[props.idPrefix] &&
                      errors[props.idPrefix][index] &&
                      errors[props.idPrefix][index].numberofFatalities
                    }
                    inputRef={register({
                      required: {
                        value: reqBits.numberofFatalities,
                        message: RequireError,
                      },
                    })}
                    name={`${props.idPrefix}[${index}].numberofFatalities`}
                    size="small"
                    type="text"
                    className="col-12"
                  ></TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    defaultValue={item.numberofPeopleleInjured}
                    label="Num of Injured People"
                    error={
                      errors &&
                      errors[props.idPrefix] &&
                      errors[props.idPrefix][index] &&
                      errors[props.idPrefix][index].numberofPeopleleInjured
                    }
                    inputRef={register({
                      required: {
                        value: reqBits.numberofPeopleleInjured,
                        message: RequireError,
                      },
                    })}
                    name={`${props.idPrefix}[${index}].numberofPeopleleInjured`}
                    size="small"
                    className="col-12"
                    type="number"
                  ></TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="outlined-multiline-static"
                    size="small"
                    defaultValue={item.NumberOfAccidents}
                    label="Nature of Accidents"
                    error={
                      errors &&
                      errors[props.idPrefix] &&
                      errors[props.idPrefix][index] &&
                      errors[props.idPrefix][index].NumberOfAccidents
                    }
                    inputRef={register({
                      required: {
                        value: reqBits.NumberOfAccidents,
                        message: RequireError,
                      },
                    })}
                    name={`${props.idPrefix}[${index}].NumberOfAccidents`}
                    multiline
                    rows={4}
                    variant="outlined"
                    className="col-12"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="outlined-multiline-static"
                    defaultValue={item.LocationOfAccidents}
                    label="Location of Accident"
                    error={
                      errors &&
                      errors[props.idPrefix] &&
                      errors[props.idPrefix][index] &&
                      errors[props.idPrefix][index].LocationOfAccidents
                    }
                    inputRef={register({
                      required: {
                        value: reqBits.LocationOfAccidents,
                        message: RequireError,
                      },
                    })}
                    name={`${props.idPrefix}[${index}].LocationOfAccidents`}
                    size="small"
                    multiline
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
                addr,
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
