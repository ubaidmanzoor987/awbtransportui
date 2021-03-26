import React from "react";
import {
  Address,
  EmploymentAccidentHistories,
  driverLicenseDummyElement,
  licenseType,
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
} from "../../Common/CommonVariables";
import { update } from "../../services/updateApi";
import RadioQuestions from "../SubComponents/RadioQuestions";
import ReactHookFormSelect from "../SubComponents/ReactHookFormSelect";
import ReactAutoComplete from "../SubComponents/ReactAutoComplete";

type Props = {
  idPrefix: string;
  dirverLicenseList: tDriverLicenses;
  useForm: any;
  setdirverLicenseList: any;
};

const RequireError: string = "Required *";
const WrongPatternError: string = "Wrong Pattern";

export function DynamicDriverLicense(props: Props) {
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
          <Accordion elevation={3} defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.smallHeading}>
                Driver’s License {index + 1}
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
                    name={`${props.idPrefix}[${index}].licenceExpirationDate`}
                    // defaultValue={`${props.idPrefix}[${index}].licenceExpirationDate`}
                    defaultValue={item.licenceExpirationDate}
                    helperText={
                      reqBits.licenceExpirationDate &&
                      "License Expiration Date" + RequireError
                    }
                    error={
                      errors &&
                      errors[props.idPrefix] &&
                      errors[props.idPrefix][index] &&
                      errors[props.idPrefix][index].licenceExpirationDate
                    }
                    inputRef={register({
                      required: {
                        value: reqBits.licenceExpirationDate,
                        message: RequireError,
                      },
                    })}
                    className="col-12"
                    variant="outlined"
                    size="small"
                    type="date"
                  ></TextField>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    name={`${props.idPrefix}[${index}].licenceNumber`}
                    defaultValue={item.licenceNumber}
                    error={
                      errors &&
                      errors[props.idPrefix] &&
                      errors[props.idPrefix][index] &&
                      errors[props.idPrefix][index].licenceNumber
                    }
                    inputRef={register({
                      required: {
                        value: reqBits.licenceNumber,
                        message: RequireError,
                      },
                    })}
                    helperText={reqBits.licenceNumber && RequireError}
                    variant="outlined"
                    label="License Number"
                    size="small"
                    type="text"
                    className="col-12"
                  ></TextField>
                </Grid>
                <Grid item xs={12}>
                  <ReactHookFormSelect
                    nameVal={`${props.idPrefix}[${index}].licenceType`}
                    label="Type"
                    control={control}
                    forms={props.useForm}
                    defaultValue={item.licenceType}
                    variant="outlined"
                    size="small"
                    className="col-12"
                    isReq={reqBits.licenceType}
                    error={
                      errors &&
                      errors[props.idPrefix] &&
                      errors[props.idPrefix][index] &&
                      errors[props.idPrefix][index].licenceType
                    }
                  >
                    {licenseType.map(function (object: any, i: number) {
                      return (
                        <option value={object.value} key={i}>
                          {object.value}
                        </option>
                      );
                    })}
                  </ReactHookFormSelect>
                  {/* <TextField
                    name={`${props.idPrefix}[${index}].licenceType`}
                    defaultValue={item.licenceType}
                    error={
                      errors &&
                      errors[props.idPrefix] &&
                      errors[props.idPrefix][index] &&
                      errors[props.idPrefix][index].licenceType
                    }
                    inputRef={register({
                      required: {
                        value: reqBits.licenceType,
                        message: RequireError,
                      },
                    })}
                    variant="outlined"
                    label="Type"
                    size="small"
                    className="col-12"
                    type="text"
                  ></TextField> */}
                </Grid>
                <Grid item xs={6}>
                  <ReactHookFormSelect
                    nameVal={`${props.idPrefix}[${index}].stateOfLicence`}
                    label="State"
                    control={control}
                    forms={props.useForm}
                    defaultValue={item.stateOfLicence}
                    variant="outlined"
                    size="small"
                    className="col-12"
                    isReq={reqBits.stateOfLicence}
                    error={
                      errors &&
                      errors[props.idPrefix] &&
                      errors[props.idPrefix][index] &&
                      errors[props.idPrefix][index].stateOfLicence
                    }
                  >
                    {states.map(function (object: any, i: number) {
                      return (
                        <option value={object.value} key={i}>
                          {object.value}
                        </option>
                      );
                    })}
                  </ReactHookFormSelect>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    name={`${props.idPrefix}[${index}].licenceEndoresment`}
                    defaultValue={item.licenceEndoresment}
                    error={
                      errors &&
                      errors[props.idPrefix] &&
                      errors[props.idPrefix][index] &&
                      errors[props.idPrefix][index].licenceEndoresment
                    }
                    inputRef={register({
                      required: {
                        value: reqBits.licenceEndoresment,
                        message: RequireError,
                      },
                    })}
                    id="outlined-multiline-static"
                    size="small"
                    label="Endorsement"
                    rows={4}
                    variant="outlined"
                    className="col-12"
                  />
                </Grid>
                {/* <Grid item xs={6}>
                  <TextField
                    name={`${props.idPrefix}[${index}].licenceExpirationDate`}
                    defaultValue={item.licenceExpirationDate}
                    error={
                      errors &&
                      errors[props.idPrefix] &&
                      errors[props.idPrefix][index] &&
                      errors[props.idPrefix][index].licenceExpirationDate
                    }
                    inputRef={register({
                      required: {
                        value: reqBits.licenceExpirationDate,
                        message: RequireError,
                      },
                    })}
                    id="outlined-multiline-static"
                    helperText="Expiration Date"
                    size="small"
                    type="date"
                    rows={4}
                    variant="outlined"
                    className="col-12"
                  />
                </Grid> */}
              </Grid>
            </AccordionDetails>{" "}
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
                driverLicenseDummyElement,
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
