import React from "react";
import styleClasses from "../Common/styleClasses";
import { useForm } from "react-hook-form";
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
  Typography,
  Select,
  TextField,
} from "@material-ui/core";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import { update } from "../services/updateApi";
import SignatureCanvas from "react-signature-canvas";
import ReactHookFormSelect from "./SubComponents/ReactHookFormSelect";
import RadioQuestions from "./SubComponents/RadioQuestions";
import { reqBits, RequireError, states } from "../Common/CommonVariables";
import { useRef } from "react";

type Props = { data?: any; handler?: any };

export default function EmpApplicationForm7(props: Props) {
  const classes = styleClasses.useStyles();
  const Forms = useForm({
    defaultValues: props.data,
  });
  const { register, handleSubmit, errors, control } = Forms;

  const sigPad = useRef<any>();
  let base64SignatureImage = "";

  const clearSigPad = () => {
    if (sigPad && sigPad.current) {
      sigPad.current?.clear();
      base64SignatureImage = "";
    }
  };

  const saveImage = () => {
    if (sigPad.current && !sigPad.current.isEmpty()) {
      base64SignatureImage = sigPad.current
        ?.getTrimmedCanvas()
        .toDataURL("image/png");
    }
  };

  const onSubmit = async (data: any) => {
    if (sigPad.current && sigPad.current.isEmpty()) return;
    {
      base64SignatureImage = sigPad.current
        .getTrimmedCanvas()
        .toDataURL("image/png");
    }
    data.employeeSignature = base64SignatureImage;
    data.user_name = props.data.user_name;
    const resdata = await update(data);
    console.log(
      "-------------------FORM 6 Submited Data and Response-------------------"
    );
    console.log(data);
    console.log(resdata);
    // props.handler[0]();
  };

  return (
    <React.Fragment>
      <Container style={{ backgroundColor: "#fafafa" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="baseline"
            spacing={3}
          >
            <Grid item xs={10} style={{ marginBottom: "10px" }}>
              <Paper
                elevation={3}
                style={{ paddingLeft: "40px", paddingRight: "60px" }}
                className={(classes.heading, classes.paperProminantStyle)}
              >
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="baseline"
                  spacing={3}
                >
                  <Grid item xs={10}>
                    <Typography align="justify" variant="body2">
                      <b>
                        Suggested Format: "Release of Information Form -- 49 CFR
                        Part 40 Drug and Alcohol Testing"
                        <br />
                        Section I. To be completed by the new employer, signed
                        by the employee, and transmitted to the previous
                        employer:
                      </b>
                    </Typography>
                  </Grid>

                  <Grid item xs={10}>
                    <Grid
                      container
                      direction="row"
                      justify="space-between"
                      alignItems="baseline"
                      spacing={3}
                    >
                      <Grid item xs={6}>
                        <TextField
                          name="employeePrintedName"
                          variant="outlined"
                          size="small"
                          type="text"
                          label="Employee Printed Name"
                          className="col-12"
                          inputRef={register({
                            required: {
                              value: reqBits.employeePrintedName,
                              message: RequireError,
                            },
                          })}
                        ></TextField>
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          name="employeeSSNNumber"
                          variant="outlined"
                          size="small"
                          type="text"
                          label="Employee SSN or ID Number"
                          className="col-12"
                          inputRef={register({
                            required: {
                              value: reqBits.employeeSSNNumber,
                              message: RequireError,
                            },
                          })}
                        ></TextField>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={10}>
                    <Typography align="justify" variant="subtitle2">
                      I hereby authorize release of information from my
                      Department of Transportation regulated drug and alcohol
                      testing records by my previous employer, listed in Section
                      I-B, to the employer listed in Section I-A. This release
                      is in accordance with DOT Regulation 49 CFR Part 40,
                      Section 40.25. I understand that information to be
                      released in Section II-A by my previous employer, is
                      limited to the following DOT-regulated testing items:
                      <ol>
                        <li>Alcohol tests with a result of 0.04 or higher;</li>
                        <li>Verified positive drug tests;</li>
                        <li>Refusals to be tested;</li>
                        <li>
                          Other violations of DOT agency drug and alcohol
                          testing regulations;
                        </li>
                        <li>
                          Information obtained from previous employers of a drug
                          and alcohol rule violation;
                        </li>
                        <li>
                          Documentation, if any, of completion of the
                          return-to-duty process following a rule violation.
                        </li>
                      </ol>
                    </Typography>
                  </Grid>

                  <Grid item xs={10}>
                    <Paper
                      elevation={3}
                      style={{ paddingLeft: "40px", paddingRight: "60px" }}
                      className={(classes.heading, classes.paperProminantStyle)}
                    >
                      <Typography align="left" variant="h6">
                        Employee Signature
                      </Typography>
                      <SignatureCanvas
                        penColor="black"
                        ref={sigPad}
                        canvasProps={{
                          width: 500,
                          height: 200,
                          className: "sigCanvas",
                        }}
                      />
                      <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="baseline"
                        spacing={3}
                      >
                        <Grid item xs={3}></Grid>
                        <Grid item xs={3}>
                          <Button
                            type="button"
                            className="col-12"
                            variant="contained"
                            color="primary"
                            onClick={clearSigPad}
                          >
                            Clear
                          </Button>
                        </Grid>
                        <Grid item xs={3}>
                          <Button
                            className="col-12"
                            variant="contained"
                            color="primary"
                            onClick={saveImage}
                          >
                            Save
                          </Button>
                        </Grid>
                        <Grid item xs={3}></Grid>
                      </Grid>
                    </Paper>
                  </Grid>

                  <Grid item xs={8}>
                    <TextField
                      name="employeeDate"
                      variant="outlined"
                      size="small"
                      type="date"
                      helperText="Employee Date"
                      className="col-12"
                      inputRef={register({
                        required: {
                          value: reqBits.employeeDate,
                          message: RequireError,
                        },
                      })}
                    ></TextField>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>

            {/* I-A */}
            <Grid item xs={10} style={{ marginBottom: "10px" }}>
              <Paper
                elevation={3}
                style={{
                  paddingLeft: "40px",
                  paddingRight: "60px",
                  paddingBottom: "60px",
                }}
                className={(classes.heading, classes.paperProminantStyle)}
              >
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="baseline"
                  spacing={3}
                >
                  <Grid item xs={10}>
                    <Typography align="justify" variant="body2">
                      <b>I-A.</b>
                    </Typography>
                  </Grid>

                  <Grid item xs={10}>
                    <Grid
                      container
                      direction="row"
                      justify="space-between"
                      alignItems="baseline"
                      spacing={3}
                    >
                      <Grid item xs={6}>
                        <TextField
                          name="newEmployeerName"
                          variant="outlined"
                          size="small"
                          type="text"
                          label="New Employer Name"
                          className="col-12"
                          inputRef={register({
                            required: {
                              value: reqBits.newEmployeerName,
                              message: RequireError,
                            },
                          })}
                        ></TextField>
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          name="newEmployeerphone"
                          variant="outlined"
                          size="small"
                          type="text"
                          label="Phone"
                          className="col-12"
                          inputRef={register({
                            required: {
                              value: reqBits.newEmployeerphone,
                              message: RequireError,
                            },
                          })}
                        ></TextField>
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          name="newEmployeerFax"
                          variant="outlined"
                          size="small"
                          type="text"
                          label="Fax"
                          className="col-12"
                          inputRef={register({
                            required: {
                              value: reqBits.newEmployeerFax,
                              message: RequireError,
                            },
                          })}
                        ></TextField>
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          name="newEmployeedesignatedEmployeeReprsentative"
                          variant="outlined"
                          size="small"
                          type="text"
                          label="Designated Employer Representative"
                          className="col-12"
                          inputRef={register({
                            required: {
                              value:
                                reqBits.newEmployeedesignatedEmployeeReprsentative,
                              message: RequireError,
                            },
                          })}
                        ></TextField>
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          className="col-12"
                          name="newEmployeerAddress"
                          variant="outlined"
                          size="small"
                          type="text"
                          label="Address"
                          error={
                            errors.newEmployeerAddress == undefined
                              ? false
                              : true
                          }
                          helperText={
                            errors.newEmployeerAddress &&
                            errors.newEmployeerAddress?.message
                          }
                          inputRef={register({
                            required: {
                              value: reqBits.newEmployeerAddress,
                              message: RequireError,
                            },
                          })}
                        ></TextField>
                      </Grid>
                      <Grid item xs={4}>
                        <TextField
                          name="newEmployeerCity"
                          variant="outlined"
                          size="small"
                          type="text"
                          label="City"
                          className="col-12"
                          error={
                            errors.newEmployeerCity == undefined ? false : true
                          }
                          helperText={
                            errors.newEmployeerCity &&
                            errors.newEmployeerCity?.message
                          }
                          inputRef={register({
                            required: {
                              value: reqBits.newEmployeerCity,
                              message: RequireError,
                            },
                          })}
                        ></TextField>
                      </Grid>
                      <Grid item xs={4}>
                        <ReactHookFormSelect
                          className="col-12"
                          nameVal="newEmployeerState"
                          variant="outlined"
                          size="small"
                          defaultValue={props.data?.newEmployeerState}
                          label="State"
                          control={control}
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
                        </ReactHookFormSelect>
                      </Grid>
                      <Grid item xs={4}>
                        <TextField
                          name="newEmployeerpostalCode"
                          variant="outlined"
                          size="small"
                          type="text"
                          label="Zip Code"
                          className="col-12"
                          error={
                            errors.newEmployeerpostalCode == undefined
                              ? false
                              : true
                          }
                          helperText={
                            errors.newEmployeerpostalCode &&
                            errors.newEmployeerpostalCode?.message
                          }
                          inputRef={register({
                            required: {
                              value: reqBits.newEmployeerpostalCode,
                              message: RequireError,
                            },
                          })}
                        ></TextField>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>

            {/* I-B */}
            <Grid item xs={10} style={{ marginBottom: "10px" }}>
              <Paper
                elevation={3}
                style={{
                  paddingLeft: "40px",
                  paddingRight: "60px",
                  paddingBottom: "60px",
                }}
                className={(classes.heading, classes.paperProminantStyle)}
              >
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="baseline"
                  spacing={3}
                >
                  <Grid item xs={10}>
                    <Typography align="justify" variant="body2">
                      <b>I-B.</b>
                    </Typography>
                  </Grid>

                  <Grid item xs={10}>
                    <Grid
                      container
                      direction="row"
                      justify="space-between"
                      alignItems="baseline"
                      spacing={3}
                    >
                      <Grid item xs={6}>
                        <TextField
                          name="prevEmployeerName"
                          variant="outlined"
                          size="small"
                          type="text"
                          label="New Employer Name"
                          className="col-12"
                          inputRef={register({
                            required: {
                              value: reqBits.prevEmployeerName,
                              message: RequireError,
                            },
                          })}
                        ></TextField>
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          name="prevEmployeerphone"
                          variant="outlined"
                          size="small"
                          type="text"
                          label="Phone"
                          className="col-12"
                          inputRef={register({
                            required: {
                              value: reqBits.prevEmployeerphone,
                              message: RequireError,
                            },
                          })}
                        ></TextField>
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          name="prevEmployeerFax"
                          variant="outlined"
                          size="small"
                          type="text"
                          label="Fax"
                          className="col-12"
                          inputRef={register({
                            required: {
                              value: reqBits.prevEmployeerFax,
                              message: RequireError,
                            },
                          })}
                        ></TextField>
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          name="prevEmployeedesignatedEmployeeReprsentative"
                          variant="outlined"
                          size="small"
                          type="text"
                          label="Designated Employer Representative"
                          className="col-12"
                          inputRef={register({
                            required: {
                              value:
                                reqBits.prevEmployeedesignatedEmployeeReprsentative,
                              message: RequireError,
                            },
                          })}
                        ></TextField>
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          className="col-12"
                          name="prevEmployeerAddress"
                          variant="outlined"
                          size="small"
                          type="text"
                          label="Address"
                          error={
                            errors.prevEmployeerAddress == undefined
                              ? false
                              : true
                          }
                          helperText={
                            errors.prevEmployeerAddress &&
                            errors.prevEmployeerAddress?.message
                          }
                          inputRef={register({
                            required: {
                              value: reqBits.prevEmployeerAddress,
                              message: RequireError,
                            },
                          })}
                        ></TextField>
                      </Grid>
                      <Grid item xs={4}>
                        <TextField
                          name="prevEmployeerCity"
                          variant="outlined"
                          size="small"
                          type="text"
                          label="City"
                          className="col-12"
                          error={
                            errors.prevEmployeerCity == undefined ? false : true
                          }
                          helperText={
                            errors.prevEmployeerCity &&
                            errors.prevEmployeerCity?.message
                          }
                          inputRef={register({
                            required: {
                              value: reqBits.prevEmployeerCity,
                              message: RequireError,
                            },
                          })}
                        ></TextField>
                      </Grid>
                      <Grid item xs={4}>
                        <ReactHookFormSelect
                          className="col-12"
                          nameVal="prevEmployeerState"
                          variant="outlined"
                          size="small"
                          defaultValue={props.data?.prevEmployeerState}
                          label="State"
                          control={control}
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
                        </ReactHookFormSelect>
                      </Grid>
                      <Grid item xs={4}>
                        <TextField
                          name="prevEmployeerpostalCode"
                          variant="outlined"
                          size="small"
                          type="text"
                          label="Zip Code"
                          className="col-12"
                          error={
                            errors.prevEmployeerpostalCode == undefined
                              ? false
                              : true
                          }
                          helperText={
                            errors.prevEmployeerpostalCode &&
                            errors.prevEmployeerpostalCode?.message
                          }
                          inputRef={register({
                            required: {
                              value: reqBits.prevEmployeerpostalCode,
                              message: RequireError,
                            },
                          })}
                        ></TextField>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>

            <Grid item xs={10}>
              <Paper
                elevation={3}
                style={{
                  paddingLeft: "40px",
                  paddingRight: "60px",
                  paddingBottom: "60px",
                }}
                className={(classes.heading, classes.paperProminantStyle)}
              >
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="baseline"
                  spacing={3}
                >
                  <Grid item xs={10}>
                    <Typography align="justify" variant="body2">
                      <b>
                        Section II. To be completed by the previous employer and
                        transmitted by mail or fax to the new employer.
                      </b>
                    </Typography>
                    <Typography align="justify" variant="subtitle2">
                      II-A. In the two years prior to the date of the employee’s
                      signature (in Section I), for DOT-regulated testing ~
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <RadioQuestions
                      id="employeeAlcoholTestRateHigher"
                      question="1. Did the employee have alcohol tests with a result of 0.04 or higher?"
                      optionList={["Yes", "No"]}
                      optionValue={["Yes", "No"]}
                      useForm={Forms}
                      isReq={reqBits.employeeAlcoholTestRateHigher}
                      defaultSelected={props.data.employeeAlcoholTestRateHigher}
                    />
                    <RadioQuestions
                      id="employeeverifiedDrugTest"
                      question="2. Did the employee have veried positive drug tests?"
                      optionList={["Yes", "No"]}
                      optionValue={["Yes", "No"]}
                      useForm={Forms}
                      isReq={reqBits.employeeverifiedDrugTest}
                      defaultSelected={props.data.employeeverifiedDrugTest}
                    />

                    <RadioQuestions
                      id="employeerefuseTest"
                      question="3. Did the employee refuse to be tested?"
                      optionList={["Yes", "No"]}
                      optionValue={["Yes", "No"]}
                      useForm={Forms}
                      isReq={reqBits.employeerefuseTest}
                      defaultSelected={props.data.employeerefuseTest}
                    />

                    <RadioQuestions
                      id="employeeotherViolations"
                      question="4. Did the employee have other violations of DOT agency drug and alcohol testing regulations?"
                      optionList={["Yes", "No"]}
                      optionValue={["Yes", "No"]}
                      useForm={Forms}
                      isReq={reqBits.employeeotherViolations}
                      defaultSelected={props.data.employeeotherViolations}
                    />

                    <RadioQuestions
                      id="prevEmployeeReportDrug"
                      question="5. Did a previous employer report a drug and alcohol rule violation to you?"
                      optionList={["Yes", "No"]}
                      optionValue={["Yes", "No"]}
                      useForm={Forms}
                      isReq={reqBits.prevEmployeeReportDrug}
                      defaultSelected={props.data.prevEmployeeReportDrug}
                    />

                    <RadioQuestions
                      id="answeredYes"
                      question="6. If you answered “yes” to any of the above items, did the employee complete the return-to-duty process?"
                      optionList={["Yes", "No"]}
                      optionValue={["Yes", "No"]}
                      useForm={Forms}
                      isReq={reqBits.answeredYes}
                      defaultSelected={props.data.answeredYes}
                    />
                  </Grid>
                  <Grid item xs={10}>
                    <Typography align="justify" variant="subtitle2">
                      NOTE: If you answered “yes” to item 5, you must provide
                      the previous employer’s report. If you answered “yes” to
                      item 6, you must also transmit the appropriate
                      return-to-duty documentation (e.g., SAP report(s),
                      follow-up testing record).
                    </Typography>
                  </Grid>
                  <Grid item xs={10}>
                    <Typography align="justify" variant="body2">
                      <b>
                        II-B. Name of person providing information in Section II
                      </b>
                    </Typography>
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="baseline"
                    spacing={3}
                  >
                    <Grid item xs={5}>
                      <TextField
                        name="nameOfPersonProvidingInformation"
                        variant="outlined"
                        size="small"
                        type="text"
                        label="A:"
                        className="col-12"
                        inputRef={register({
                          required: {
                            value: reqBits.nameOfPersonProvidingInformation,
                            message: RequireError,
                          },
                        })}
                      ></TextField>
                    </Grid>
                    <Grid item xs={5}>
                      <TextField
                        name="nameOfPersonProvidingInformationTitle"
                        variant="outlined"
                        size="small"
                        type="text"
                        label="Title"
                        className="col-12"
                        inputRef={register({
                          required: {
                            value:
                              reqBits.nameOfPersonProvidingInformationTitle,
                            message: RequireError,
                          },
                        })}
                      ></TextField>
                    </Grid>
                    <Grid item xs={5}>
                      <TextField
                        name="nameOfPersonProvidingInformationPhone"
                        variant="outlined"
                        size="small"
                        type="text"
                        label="Phone #"
                        className="col-12"
                        inputRef={register({
                          required: {
                            value:
                              reqBits.nameOfPersonProvidingInformationPhone,
                            message: RequireError,
                          },
                        })}
                      ></TextField>
                    </Grid>
                    <Grid item xs={5}>
                      <TextField
                        name="nameOfPersonProvidingInformationDate"
                        variant="outlined"
                        size="small"
                        type="date"
                        helperText="Date"
                        className="col-12"
                        inputRef={register({
                          required: {
                            value: reqBits.nameOfPersonProvidingInformationDate,
                            message: RequireError,
                          },
                        })}
                      ></TextField>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>

            {/* BUTTON Start */}
            <Grid item xs={4}>
              <Button
                type="button"
                className="col-12"
                variant="contained"
                color="primary"
                onClick={() => {
                  props.handler[1]();
                }}
              >
                Back
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                type="submit"
                className="col-12"
                variant="contained"
                color="primary"
              >
                Save All
              </Button>
            </Grid>
            {/* BUTTON End */}
          </Grid>
        </form>
      </Container>
    </React.Fragment>
  );
}
