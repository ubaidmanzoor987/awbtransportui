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
import { useForm, useFieldArray } from "react-hook-form";
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
  EmploymentHistories,
  EmploymentHistoryInfo,
  reqBits,
  employmentHistoryDummyElement,
} from "../../Common/CommonVariables";
import { update } from "../../services/updateApi";
import RadioQuestions from ".././SubComponents/RadioQuestions";
import ErrorBoundary from "../ErrorBoundary";

type Props = {
  idPrefix: string;
  employmentHistoryList: EmploymentHistories;
  useForm: any;
  setEmploymentHistoryList: any;
};

const RequireError: string = "Required *";
const WrongPatternError: string = "Wrong Pattern";

export default function EmploymentHistory(props: Props) {
  const classes = styleClasses.useStyles();
  const Forms = props.useForm;
  const { register, handleSubmit, errors, defaultValues, control } = Forms;

  const [employmentHistoryState, employmentHistoryStateHandler] = useState(
    props.employmentHistoryList
  );
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: "test", // unique name for your Field Array
      // keyName: "id", default to "id", you can change the key name
    }
  );
  //   const [errorsList, errorListHandler] = useState();
  useEffect(() => {
    employmentHistoryStateHandler(props.employmentHistoryList);
  }, [props.employmentHistoryList]);

  useEffect(() => {
    props.setEmploymentHistoryList(employmentHistoryState);
  }, [employmentHistoryState]);

  const isPropertyExist = (property: any) => {
    try {
      //console.log(
      //   "-------------------isPropertyExist LOGGING-------------------"
      // );
      //console.log(property);
      if (property === undefined) {
        //console.log("-------------------FALSE-------------------");
        //console.log(property);
        throw "Property 0";
      } else {
        //console.log("-------------------TRUE-------------------");
        //console.log(property);
        return true;
      }
    } catch (e: any) {
      //console.log("-------------------Exception-------------------");
      //console.log(e);
      return false;
    }
  };
  const isPropertyExistReturnMessage = (property: any) => {
    try {
      //console.log(
      //   "-------------------isPropertyExistReturnMessage LOGGING-------------------"
      // );
      //console.log(property);
      if (property === undefined) {
        //console.log("-------------------FALSE-------------------");
        //console.log(property);
        throw "Property 0";
      } else {
        //console.log("-------------------TRUE-------------------");
        //console.log(property);
        return property.message;
      }
    } catch (e: any) {
      //console.log("-------------------Exception-------------------");
      //console.log(property);
      return "";
    }
  };

  return (
    <React.Fragment>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        {employmentHistoryState.map(
          (employmentHistoryItem: EmploymentHistoryInfo, index: number) => {
            //console.log("----------------------ERRORS----------------------");
            //console.log(errors);
            //console.log(errors[props.idPrefix]);
            //console.log(errors[props.idPrefix]?.employmentHistorystatus);
            //console.log("----------------------ERRORS----------------------");
            return (
              // lastYearAddress: string;
              // lastYearAddressCity: string;
              // lastYearAddressState: string;
              // lastYearAddressZipCode: string;
              // lastYearAddressfrom: string;
              // lastYearAddressTo: string;

              <Accordion key={index}>
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
                        name={`${props.idPrefix}.employmentHistoryfrom[${index}]`}
                        variant="outlined"
                        size="small"
                        type="date"
                        className="col-12"
                        //useForms Handling Start
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
                        name={`${props.idPrefix}.employmentHistoryTo[${index}]`}
                        variant="outlined"
                        size="small"
                        type="date"
                        className="col-12"
                        //useForms Handling Start
                        error={
                          isPropertyExist(
                            errors[props.idPrefix]?.employmentHistoryTo
                          )
                          // errors[props.idPrefix]?.employmentHistoryTo === null ||
                          // (errors[props.idPrefix]?.employmentHistoryTo &&
                          //   errors[props.idPrefix]?.employmentHistoryTo[index] === undefined)
                          //   ? false
                          //   : true
                        }
                        helperText={isPropertyExistReturnMessage(
                          errors[props.idPrefix]?.employmentHistoryTo[index]
                        )}
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
                        name={`${props.idPrefix}.employmentHistorystatus[${index}]`}
                        variant="outlined"
                        size="small"
                        type="text"
                        label="Present or Last Employer "
                        className="col-12"
                        //useForms Handling Start
                        error={
                          errors[props.idPrefix]?.employmentHistorystatus &&
                          errors[props.idPrefix]?.employmentHistorystatus[
                            index
                          ] === undefined
                            ? false
                            : true
                        }
                        helperText={
                          errors[props.idPrefix]?.employmentHistorystatus &&
                          errors[props.idPrefix]?.employmentHistorystatus[
                            index
                          ] &&
                          errors[props.idPrefix]?.employmentHistorystatus[index]
                            .message
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
                        name={`${props.idPrefix}.employmentHistoryposition[${index}]`}
                        variant="outlined"
                        size="small"
                        type="text"
                        label="Position Held "
                        //useForms Handling Start
                        error={
                          errors[props.idPrefix]?.employmentHistoryposition &&
                          errors[props.idPrefix]?.employmentHistoryposition[
                            index
                          ] === undefined
                            ? false
                            : true
                        }
                        helperText={
                          errors[props.idPrefix]?.employmentHistoryposition &&
                          errors[props.idPrefix]?.employmentHistoryposition[
                            index
                          ] &&
                          errors[props.idPrefix]?.employmentHistoryposition[
                            index
                          ].message
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
                        name={`${props.idPrefix}.employmentHistorycompanyPhone[${index}]`}
                        variant="outlined"
                        size="small"
                        type="text"
                        label="Company Phone"
                        className="col-12"
                        //useForms Handling Start
                        error={
                          errors[props.idPrefix]
                            ?.employmentHistorycompanyPhone &&
                          errors[props.idPrefix]?.employmentHistorycompanyPhone[
                            index
                          ] === undefined
                            ? false
                            : true
                        }
                        helperText={
                          errors[props.idPrefix]
                            ?.employmentHistorycompanyPhone &&
                          errors[props.idPrefix]?.employmentHistorycompanyPhone[
                            index
                          ] &&
                          errors[props.idPrefix]?.employmentHistorycompanyPhone[
                            index
                          ].message
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
                        name={`${props.idPrefix}.employmentHistoryreasonForLeaving[${index}]`}
                        variant="outlined"
                        size="small"
                        type="text"
                        label="Reason for leaving"
                        //useForms Handling Start
                        error={
                          errors[props.idPrefix]
                            ?.employmentHistoryreasonForLeaving &&
                          errors[props.idPrefix]
                            ?.employmentHistoryreasonForLeaving[index] ===
                            undefined
                            ? false
                            : true
                        }
                        helperText={
                          errors[props.idPrefix]
                            ?.employmentHistoryreasonForLeaving &&
                          errors[props.idPrefix]
                            ?.employmentHistoryreasonForLeaving[index] &&
                          errors[props.idPrefix]
                            ?.employmentHistoryreasonForLeaving[index].message
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

                    {/* <RadioQuestions
                    id={`${props.idPrefix}.employmentHistorysubjecttotheFMCSRs[${index}]`}
                    question="Were you subject to the FMCSRs while employed here?"
                    optionList={["Yes", "No"]}
                    useForm={Forms}
                    isReq={true}
                    // defaultSelected="Yes"
                  /> */}

                    <Grid
                      item
                      xs={8}
                      className={(classes.paper, classes.questionTextStyle)}
                    >
                      <Typography className={classes.text}>
                        Were you subject to the FMCSRs while employed here?
                      </Typography>
                    </Grid>
                    <Grid item xs={4} style={{ textAlign: "right" }}>
                      <FormControl
                        component="fieldset"
                        // name={`${props.idPrefix}.employmentHistorysubjecttotheFMCSRs[${index}]`}

                        error={
                          errors[props.idPrefix]
                            ?.employmentHistorysubjecttotheFMCSRs &&
                          errors[props.idPrefix]
                            ?.employmentHistorysubjecttotheFMCSRs[index] ===
                            undefined
                            ? false
                            : true
                        }
                      >
                        <RadioGroup row>
                          <FormControlLabel
                            value="yes"
                            control={
                              <Radio
                                name={`${props.idPrefix}.employmentHistorysubjecttotheFMCSRs[${index}]`}
                              />
                            }
                            label="Yes"
                          />
                          <FormControlLabel
                            value="no"
                            control={
                              <Radio
                                name={`${props.idPrefix}.employmentHistorysubjecttotheFMCSRs[${index}]`}
                                //useForms Handling Start
                                inputRef={register({
                                  required: {
                                    value:
                                      reqBits.employmentHistorysubjecttotheFMCSRs,
                                    message: RequireError,
                                  },
                                })}
                                //useForms Handling End
                              />
                            }
                            label="No"
                          />
                        </RadioGroup>
                        <FormHelperText>
                          {errors[props.idPrefix]
                            ?.employmentHistorysubjecttotheFMCSRs &&
                            errors[props.idPrefix]
                              ?.employmentHistorysubjecttotheFMCSRs[index] &&
                            errors[props.idPrefix]
                              ?.employmentHistorysubjecttotheFMCSRs[index]
                              .message}
                        </FormHelperText>
                      </FormControl>
                    </Grid>

                    <Grid
                      item
                      xs={8}
                      className={(classes.paper, classes.questionTextStyle)}
                    >
                      <Typography className={classes.text}>
                        Was your job designated as a safety-sensitive function
                        in any DOT- regulated mode subject to the drug and
                        alcohol testing requirements of 49 CFR Part 40?
                      </Typography>
                    </Grid>
                    <Grid item xs={4} style={{ textAlign: "right" }}>
                      <FormControl
                        component="fieldset"
                        error={
                          errors[props.idPrefix]
                            ?.employmentHistorydrugandalcoholTesting &&
                          errors[props.idPrefix]
                            ?.employmentHistorydrugandalcoholTesting[index] ===
                            undefined
                            ? false
                            : true
                        }
                      >
                        <RadioGroup
                          row
                          name={`${props.idPrefix}.employmentHistorydrugandalcoholTesting[${index}]`}
                          // defaultValue="yes"
                        >
                          <FormControlLabel
                            value="yes"
                            control={
                              <Radio
                                name={`${props.idPrefix}.employmentHistorydrugandalcoholTesting[${index}]`}
                              />
                            }
                            label="Yes"
                          />
                          <FormControlLabel
                            value="no"
                            control={
                              <Radio
                                name={`${props.idPrefix}.employmentHistorydrugandalcoholTesting[${index}]`}
                                //useForms Handling Start
                                inputRef={register({
                                  required: {
                                    value:
                                      reqBits.employmentHistorydrugandalcoholTesting,
                                    message: RequireError,
                                  },
                                })}
                                //useForms Handling End
                              />
                            }
                            label="No"
                          />
                        </RadioGroup>
                        <FormHelperText>
                          {errors[props.idPrefix]
                            ?.employmentHistorydrugandalcoholTesting &&
                            errors[props.idPrefix]
                              ?.employmentHistorydrugandalcoholTesting[index] &&
                            errors[props.idPrefix]
                              ?.employmentHistorydrugandalcoholTesting[index]
                              .message}
                        </FormHelperText>
                      </FormControl>
                    </Grid>
                    {/* <Grid item xs={1}></Grid> */}
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
                      onClick={(e) => {
                        if (employmentHistoryState.length > 1) {
                          const employmentHistoryStateCopy = [
                            ...employmentHistoryState,
                          ];
                          employmentHistoryStateCopy.splice(index, 1);
                          employmentHistoryStateHandler([
                            ...employmentHistoryStateCopy,
                          ]);
                        }
                      }}
                    >
                      Delete This
                    </Button>
                  </Grid>
                </AccordionActions>
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
              employmentHistoryStateHandler([
                ...employmentHistoryState,
                employmentHistoryDummyElement,
              ]);
              //console.log(employmentHistoryState);
            }}
          >
            Another Employment History
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
