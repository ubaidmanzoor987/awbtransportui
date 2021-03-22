import React from "react";
import {
  Address,
  EmploymentHistories,
  EmploymentHistoryInfo,
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
  employmentHistoryList: EmploymentHistories;
  useForm: any;
  setEmploymentHistoryList: any;
};

let empHstry: EmploymentHistoryInfo = {
  employmentHistoryfrom: "",
  employmentHistoryTo: "",
  employmentHistorystatus: "",
  employmentHistoryposition: "",
  employmentHistoryaddress: "",
  employmentHistorycompanyPhone: "",
  employmentHistoryreasonForLeaving: "",
  employmentHistorysubjecttotheFMCSRs: "",
  employmentHistorydrugandalcoholTesting: "",
};

const RequireError: string = "Required *";
const WrongPatternError: string = "Wrong Pattern";

export function DynamicEmploymentHistoryComponent(props: Props) {
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
          <Accordion key={index} defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.text}>
                Employment history {index + 1}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="baseline"
                spacing={3}
              >
                <Grid item xs={6}>
                  <TextField
                    name={`${props.idPrefix}[${index}].employmentHistoryfrom`}
                    variant="outlined"
                    size="small"
                    type="date"
                    className="col-12"
                    defaultValue={item.employmentHistoryfrom}
                    //useForms Handling Start
                    error={
                      errors &&
                      errors[props.idPrefix] &&
                      errors[props.idPrefix][index] &&
                      errors[props.idPrefix][index].employmentHistoryfrom
                    }
                    inputRef={register({
                      required: {
                        value: reqBits.employmentHistoryfrom,
                        message: RequireError,
                      },
                    })}
                    //useForms Handling End
                  ></TextField>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    name={`${props.idPrefix}[${index}].employmentHistoryTo`}
                    variant="outlined"
                    size="small"
                    defaultValue={item.employmentHistoryTo}
                    type="date"
                    className="col-12"
                    error={
                      errors &&
                      errors[props.idPrefix] &&
                      errors[props.idPrefix][index] &&
                      errors[props.idPrefix][index].employmentHistoryTo
                    }
                    inputRef={register({
                      required: {
                        value: reqBits.employmentHistoryTo,
                        message: RequireError,
                      },
                    })}
                    //useForms Handling End
                  ></TextField>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    name={`${props.idPrefix}[${index}].employmentHistorystatus`}
                    variant="outlined"
                    size="small"
                    type="text"
                    defaultValue={item.employmentHistorystatus}
                    label="Present or Last Employer "
                    className="col-12"
                    //useForms Handling Start
                    error={
                      errors &&
                      errors[props.idPrefix] &&
                      errors[props.idPrefix][index] &&
                      errors[props.idPrefix][index].employmentHistorystatus
                    }
                    inputRef={register({
                      required: {
                        value: reqBits.employmentHistorystatus,
                        message: RequireError,
                      },
                    })}
                    //useForms Handling End
                  ></TextField>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    className="col-12"
                    name={`${props.idPrefix}[${index}].employmentHistoryposition`}
                    defaultValue={item.employmentHistoryposition}
                    variant="outlined"
                    size="small"
                    type="text"
                    label="Position Held "
                    //useForms Handling Start
                    error={
                      errors &&
                      errors[props.idPrefix] &&
                      errors[props.idPrefix][index] &&
                      errors[props.idPrefix][index].employmentHistoryposition
                    }
                    inputRef={register({
                      required: {
                        value: reqBits.employmentHistoryposition,
                        message: RequireError,
                      },
                    })}
                    //useForms Handling End
                  ></TextField>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    name={`${props.idPrefix}[${index}].employmentHistorycompanyPhone`}
                    variant="outlined"
                    size="small"
                    type="text"
                    defaultValue={item.employmentHistorycompanyPhone}
                    label="Company Phone"
                    className="col-12"
                    //useForms Handling Start
                    error={
                      errors &&
                      errors[props.idPrefix] &&
                      errors[props.idPrefix][index] &&
                      errors[props.idPrefix][index]
                        .employmentHistorycompanyPhone
                    }
                    inputRef={register({
                      required: {
                        value: reqBits.employmentHistorycompanyPhone,
                        message: RequireError,
                      },
                    })}
                    //useForms Handling End
                  ></TextField>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    className="col-12"
                    name={`${props.idPrefix}[${index}].employmentHistoryreasonForLeaving`}
                    variant="outlined"
                    size="small"
                    defaultValue={item.employmentHistoryreasonForLeaving}
                    type="text"
                    label="Reason for leaving"
                    //useForms Handling Start

                    error={
                      errors &&
                      errors[props.idPrefix] &&
                      errors[props.idPrefix][index] &&
                      errors[props.idPrefix][index]
                        .employmentHistoryreasonForLeaving
                    }
                    inputRef={register({
                      required: {
                        value: reqBits.employmentHistoryreasonForLeaving,
                        message: RequireError,
                      },
                    })}
                    //useForms Handling End
                  ></TextField>
                </Grid>
                {/* <Grid item xs={1}></Grid> */}

                <RadioQuestions
                  id={`${props.idPrefix}[${index}].employmentHistorysubjecttotheFMCSRs`}
                  question="Were you subject to the FMCSRs while employed here?"
                  optionList={["Yes", "No"]}
                  optionValue={["Yes", "No"]}
                  useForm={props.useForm}
                  xsSize={11}
                  defaultSelected={"Yes"}
                  isReq={reqBits.employmentHistorysubjecttotheFMCSRs}
                ></RadioQuestions>

                <RadioQuestions
                  id={`${props.idPrefix}[${index}].employmentHistorydrugandalcoholTesting`}
                  optionValue={["Yes", "No"]}
                  question="Was your job designated as a safety-sensitive function in
                  any DOT- regulated mode subject to the drug and alcohol
                  testing requirements of 49 CFR Part 40?"
                  optionList={["Yes", "No"]}
                  useForm={props.useForm}
                  xsSize={11}
                  isReq={reqBits.employmentHistorydrugandalcoholTesting}
                ></RadioQuestions>
              </Grid>
            </AccordionDetails>
            <Divider />
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
                  Delete This
                </Button>
              </Grid>
            </AccordionActions>
          </Accordion>
        ))}
        <Grid item xs={12} style={{ padding: "20px 10px" }}>
          <Button
            size="small"
            className="col-5"
            variant="contained"
            color="primary"
            onClick={() =>
              append({
                empHstry,
              })
            }
          >
            Another Employment History
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
