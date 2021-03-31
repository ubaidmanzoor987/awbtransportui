import React, { useState,useEffect } from "react";
import {
  Address,
  EmploymentAccidentHistories,
  driverLicenseDummyElement,
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
  tDriverLicenses,
  AddressErrorsList,
  tReferences,
  ReferenceDummyElement,
  tReferenceInfo,
} from "../../Common/CommonVariables";
import { update } from "../../services/updateApi";
import RadioQuestions from "../SubComponents/RadioQuestions";
import ReactHookFormSelect from "../SubComponents/ReactHookFormSelect";
import PhoneNumberComponent from "../SubComponents/PhoneNumberComponent";

type Props = {
  idPrefix: string;
  referenceList: tReferences;
  useForm: any;
  setReferenceList: any;
};

const RequireError: string = "Required *";
const WrongPatternError: string = "Wrong Pattern";

export function DynamicReferences(props: Props) {
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

  useEffect(()=>{
    if(fields.length === 0){
      append(props.referenceList);
    }
  },[]);

 

  return (
    <React.Fragment>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        {fields.map((item, index) => (
          <Accordion key={item.id} defaultExpanded elevation={3}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.smallHeading}>
                References
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
                    name={`${props.idPrefix}[${index}].referencefirstName`}
                    defaultValue={item.referencefirstName}
                    error={
                      errors &&
                      errors[props.idPrefix] &&
                      errors[props.idPrefix][index] &&
                      errors[props.idPrefix][index].referencefirstName
                    }
                    inputRef={register({
                      required: {
                        value: reqBits.referencefirstName,
                        message: RequireError,
                      },
                      pattern:{value:/^[a-zA-Z ]{1,30}$/, message:"Only Chracters Allowed"}
                    })}
                    helperText={
                      errors && 
                      errors[props.idPrefix] &&
                      errors[props.idPrefix][index] &&
                      errors[props.idPrefix][index]["referencefirstName"] &&
                      reqBits.referencefirstName  
                    ? (
                        (errors[props.idPrefix][index]["referencefirstName"].message)
                      )
                      : (reqBits.referencefirstName && RequireError)
                    }
                    variant="outlined"
                    label="First Name"
                    size="small"
                    type="text"
                    className="col-12"
                  ></TextField>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    name={`${props.idPrefix}[${index}].referencelastName`}
                    defaultValue={item.referencelastName}
                    error={
                      errors &&
                      errors[props.idPrefix] &&
                      errors[props.idPrefix][index] &&
                      errors[props.idPrefix][index].referencelastName
                    }
                    inputRef={register({
                      required: {
                        value: reqBits.referencelastName,
                        message: RequireError,
                      },
                      pattern:{value:/^[a-zA-Z ]{1,30}$/, message:"Only Chracters Allowed"}
                    })}
                    helperText={
                      errors && 
                      errors[props.idPrefix] &&
                      errors[props.idPrefix][index] &&
                      errors[props.idPrefix][index]["referencelastName"] &&
                      reqBits.referencelastName  
                    ? (
                        (errors[props.idPrefix][index]["referencelastName"].message)
                      )
                      : (reqBits.referencelastName && RequireError)
                    }
                    variant="outlined"
                    label="Last Name"
                    size="small"
                    type="text"
                    className="col-12"
                  ></TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name={`${props.idPrefix}[${index}].referenceCompany`}
                    defaultValue={item.referenceCompany}
                    error={
                      errors &&
                      errors[props.idPrefix] &&
                      errors[props.idPrefix][index] &&
                      errors[props.idPrefix][index].referenceCompany
                    }
                    inputRef={register({
                      required: {
                        value: reqBits.referenceCompany,
                        message: RequireError,
                      },
                    })}
                    variant="outlined"
                    label="Company"
                    size="small"
                    className="col-12"
                    type="text"
                  ></TextField>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    name={`${props.idPrefix}[${index}].referenceTitle`}
                    defaultValue={item.referenceTitle}
                    error={
                      errors &&
                      errors[props.idPrefix] &&
                      errors[props.idPrefix][index] &&
                      errors[props.idPrefix][index].referenceTitle
                    }
                    inputRef={register({
                      required: {
                        value: reqBits.referenceTitle,
                        message: RequireError,
                      },
                    })}
                    id="outlined-multiline-static"
                    size="small"
                    label="Title"
                    rows={4}
                    variant="outlined"
                    className="col-12"
                  />
                </Grid>
                <Grid item xs={6}>

                <PhoneNumberComponent
                      label="Phone Number"
                      mainId={`${props.idPrefix}[${index}].referencePhoneNumber`}
                      defaultValue={item.referencePhoneNumber}
                      className="col-12"
                      useForms={props.useForm}
                      isPartOfDynamicComponent={true}
                      parentId={props.idPrefix}
                      childSubId="referencePhoneNumber"
                      parentIndex={index}
                ></PhoneNumberComponent>

{/* 
                  <TextField
                    name={`${props.idPrefix}[${index}].referencePhoneNumber`}
                    defaultValue={item.referencePhoneNumber}
                    variant="outlined"
                    size="small"
                    type="text"
                    className="col-12"
                    error={
                      errors &&
                      errors[props.idPrefix] &&
                      errors[props.idPrefix][index] &&
                      errors[props.idPrefix][index].referencePhoneNumber
                    }
                    inputRef={register({
                      required: {
                        value: reqBits.referencePhoneNumber,
                        message: RequireError,
                      },
                    })}
                    label="Phone Number"
                    helperText={reqBits.referencePhoneNumber && RequireError}

                    // inputRef={register({
                    //   required: {
                    //     value: reqBits.referencePhoneNumber,
                    //     message: RequireError,
                    //   },
                    //   pattern: {
                    //     value: /^([0-9]{3}[-.][0-9]{3}[-.][0-9]{4}[-. ][x][0-9]{4})$/,
                    //     message: WrongPatternError + " : ###-###-#### x####",
                    //   },
                    // })}
                  ></TextField> */}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name={`${props.idPrefix}[${index}].referenceAddress`}
                    defaultValue={item.referenceAddress}
                    variant="outlined"
                    size="small"
                    type="text"
                    className="col-12"
                    error={
                      errors &&
                      errors[props.idPrefix] &&
                      errors[props.idPrefix][index] &&
                      errors[props.idPrefix][index].referenceAddress
                    }                    
                    inputRef={register({
                      required: {
                        value: reqBits.referenceAddress,
                        message: RequireError,
                      },
                    })}
                    label="Address"
                    helperText={reqBits.referenceAddress && RequireError}

                    // inputRef={register({
                    //   required: {
                    //     value: reqBits.referenceAddress,
                    //     message: RequireError,
                    //   },
                    //   pattern: {
                    //     value: /^([0-9]{3}[-.][0-9]{3}[-.][0-9]{4}[-. ][x][0-9]{4})$/,
                    //     message: WrongPatternError + " : ###-###-#### x####",
                    //   },
                    // })}
                  ></TextField>
                </Grid>

                <Grid item xs={4}>
                  <TextField
                    name={`${props.idPrefix}[${index}].referenceCity`}
                    defaultValue={item.referenceCity}
                    variant="outlined"
                    size="small"
                    type="text"
                    className="col-12"
                    error={
                      errors &&
                      errors[props.idPrefix] &&
                      errors[props.idPrefix][index] &&
                      errors[props.idPrefix][index].referenceCity
                    }   
                    inputRef={register({
                      required: {
                        value: reqBits.referenceCity,
                        message: RequireError,
                      },
                      pattern:{value:/^[a-zA-Z ]{1,30}$/, message:"Only Chracters Allowed"}
                    })}
                    label="City"
                    helperText={
                      errors && 
                      errors[props.idPrefix] &&
                      errors[props.idPrefix][index] &&
                      errors[props.idPrefix][index]["referenceCity"] &&
                      reqBits.referenceCity  
                    ? (
                        (errors[props.idPrefix][index]["referenceCity"].message)
                      )
                      : (reqBits.referenceCity && RequireError)
                    }
                    // inputRef={register({
                    //   required: {
                    //     value: reqBits.referenceCity,
                    //     message: RequireError,
                    //   },
                    //   pattern: {
                    //     value: /^([0-9]{3}[-.][0-9]{3}[-.][0-9]{4}[-. ][x][0-9]{4})$/,
                    //     message: WrongPatternError + " : ###-###-#### x####",
                    //   },
                    // })}
                  ></TextField>
                </Grid>

                <Grid item xs={4}>
                  <ReactHookFormSelect
                    nameVal={`${props.idPrefix}[${index}].referenceState`}
                    label="State"
                    variant="outlined"
                    size="small"
                    forms={props.useForm}
                    control={control}
                    isReq={reqBits["referenceState"]}
                    error={errors && errors["referenceState"]}
                    className="col-12"
                    defaultValue={
                      item.referenceState &&
                      item.referenceState
                    }
                  >
                    <option aria-label="None" value="" />

                    {states.map(function (object: any, i: number) {
                      return (
                        <option value={object.value} key={i}>
                          {object.value}
                        </option>
                      );
                    })}
                  </ReactHookFormSelect>
                </Grid>

                <Grid item xs={4}>
                  <TextField
                    name={`${props.idPrefix}[${index}].referenceZipCode`}
                    defaultValue={item.referenceZipCode}
                    variant="outlined"
                    size="small"
                    type="text"
                    className="col-12"
                    error={errors.referenceZipCode == undefined ? false : true}
                    inputRef={register({
                      required: {
                        value: reqBits.referenceZipCode,
                        message: RequireError,
                      },
                    })}
                    label="Zip Code"
                    helperText={reqBits.referenceZipCode && RequireError}

                    // inputRef={register({
                    //   required: {
                    //     value: reqBits.referenceZipCode,
                    //     message: RequireError,
                    //   },
                    //   pattern: {
                    //     value: /^([0-9]{3}[-.][0-9]{3}[-.][0-9]{4}[-. ][x][0-9]{4})$/,
                    //     message: WrongPatternError + " : ###-###-#### x####",
                    //   },
                    // })}
                  ></TextField>
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
                ReferenceDummyElement,
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
//TODO
