import React,{useEffect} from "react";
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
import FromToDateComponent from "../SubComponents/FromToDate";
import PhoneNumberComponent from "../SubComponents/PhoneNumberComponent";

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
  employmentHistorycompanyName:"",
};

const RequireError: string = "Required *";
const WrongPatternError: string = "Wrong Pattern";

export function DynamicEmploymentHistoryComponent(props: Props) {
  const classes = styleClasses.useStyles();
  let data =props.employmentHistoryList;
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

  useEffect(()=>{
    if(fields.length === 0){
      append(props.employmentHistoryList);
    }
  //console.log("props.employmentHistoryList");
  //console.log(props.employmentHistoryList);
  },[]);

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
          <Accordion key={item.id} defaultExpanded>
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
                <FromToDateComponent
                       useForm={props.useForm}
                       mainId={props.idPrefix}
                       fromId="employmentHistoryfrom"
                       toId="employmentHistoryTo"
                       index={index}
                       item={item}
                       defaultFromDate={item.employmentHistoryfrom}
                       defaultToDate={item.employmentHistoryTo}            
                />
                {/* <Grid item xs={6}>
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
                      required: reqBits.employmentHistoryfrom,
                    })}
                    helperText={reqBits.employmentHistoryfrom && RequireError}
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
                      required: reqBits.employmentHistoryTo,
                    })}
                    helperText={reqBits.employmentHistoryTo && RequireError}
                    //useForms Handling End
                  ></TextField>
                </Grid> */}
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
                      required: reqBits.employmentHistorystatus,
                    })}
                    helperText={reqBits.employmentHistorystatus && RequireError}
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
                      required: reqBits.employmentHistoryposition,
                    })}
                    helperText={
                      reqBits.employmentHistoryposition && RequireError
                    }
                    //useForms Handling End
                  ></TextField>
                </Grid>
                <Grid item xs={6}>
                  <PhoneNumberComponent
                        label="Company Phone Number"
                        mainId={`${props.idPrefix}[${index}].employmentHistorycompanyPhone`}
                        defaultValue={item.employmentHistorycompanyPhone}
                        className="col-12"
                        useForms={props.useForm}
                        isPartOfDynamicComponent={true}
                        parentId="employmentHistory"
                        childSubId="employmentHistorycompanyPhone"
                        parentIndex={index}
                  ></PhoneNumberComponent>

                  {/* <TextField
                    name={`${props.idPrefix}[${index}].employmentHistorycompanyPhone`}
                    variant="outlined"
                    size="small"
                    type="text"
                    defaultValue={item.employmentHistorycompanyPhone}
                    label="Company Phone Number"
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
                      required: reqBits.employmentHistorycompanyPhone,
                    })}
                    helperText={
                      reqBits.employmentHistorycompanyPhone && RequireError
                    }
                    //useForms Handling End
                  ></TextField> */}
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
                      required: reqBits.employmentHistoryreasonForLeaving,
                    })}
                    helperText={reqBits.employmentHistoryreasonForLeaving}
                    //useForms Handling End
                  ></TextField>
                </Grid>
                {/* <Grid item xs={1}></Grid> */}

                <Grid item xs={6}>
                  <TextField
                    className="col-12"
                    name={`${props.idPrefix}[${index}].employmentHistoryaddress`}
                    variant="outlined"
                    size="small"
                    defaultValue={item.employmentHistoryaddress}
                    type="text"
                    label="Address"
                    //useForms Handling Start

                    error={
                      errors &&
                      errors[props.idPrefix] &&
                      errors[props.idPrefix][index] &&
                      errors[props.idPrefix][index].employmentHistoryaddress
                    }
                    inputRef={register({
                      required: reqBits.employmentHistoryaddress,
                    })}
                    helperText={
                      reqBits.employmentHistoryaddress && RequireError
                    }
                    //useForms Handling End
                  ></TextField>
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    className="col-12"
                    name={`${props.idPrefix}[${index}].employmentHistorycompanyName`}
                    variant="outlined"
                    size="small"
                    defaultValue={item.employmentHistorycompanyName}
                    type="text"
                    label="Company Name"
                    //useForms Handling Start

                    error={
                      errors &&
                      errors[props.idPrefix] &&
                      errors[props.idPrefix][index] &&
                      errors[props.idPrefix][index].employmentHistorycompanyName
                    }
                    inputRef={register({
                      required: reqBits.employmentHistorycompanyName,
                    })}
                    helperText={
                      reqBits.employmentHistorycompanyName && RequireError
                    }
                    //useForms Handling End
                  ></TextField>
                </Grid>


                <RadioQuestions
                  id={`${props.idPrefix}[${index}].employmentHistorysubjecttotheFMCSRs`}
                  question="Were you subject to the FMCSRs while employed here?"
                  optionList={["Yes", "No"]}
                  optionValue={["Yes", "No"]}
                  useForm={props.useForm}
                  xsSize={11}
                  defaultSelected={props.employmentHistoryList[index]?.employmentHistorysubjecttotheFMCSRs}
                  isReq={reqBits.employmentHistorysubjecttotheFMCSRs}
                  isPartOfDynamicComponent={true}
                  parentId={props.idPrefix}
                  childSubId={"employmentHistorysubjecttotheFMCSRs"}
                  parentIndex={index}
                ></RadioQuestions>

                <RadioQuestions
                  id={`${props.idPrefix}[${index}].employmentHistorydrugandalcoholTesting`}
                  optionValue={["Yes", "No"]}
                  isPartOfDynamicComponent={true}
                  parentId={props.idPrefix}
                  childSubId={"employmentHistorydrugandalcoholTesting"}
                  parentIndex={index}
                  question="Was your job designated as a safety-sensitive function in
                  any DOT- regulated mode subject to the drug and alcohol
                  testing requirements of 49 CFR Part 40?"
                  optionList={["Yes", "No"]}
                  defaultSelected={props.employmentHistoryList[index]?.employmentHistorydrugandalcoholTesting}
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
                  onClick={() => {
                    //if (index > 0) {
                      remove(index);
                    //}
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
                empHstry,
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
