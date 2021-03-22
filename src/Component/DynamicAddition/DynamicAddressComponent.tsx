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
  print,
} from "../../Common/CommonVariables";
import { update } from "../../services/updateApi";
import RadioQuestions from "../SubComponents/RadioQuestions";
import ReactHookFormSelect from "../SubComponents/ReactHookFormSelect";
import ReactAutoComplete from "../SubComponents/ReactAutoComplete";

type Props = {
  idPrefix: string;
  addressesList: Address[];
  setAddresses: any;
  addressId: string;
  cityId: string;
  stateId: string;
  zipCodeId: string;
  fromDateId: string;
  toDateId: string;
  forms: any;
};

const RequireError: string = "Required *";
const WrongPatternError: string = "Wrong Pattern";

let addr = {
  lastYearAddress: "",
  lastYearAddressCity: "",
  lastYearAddressState: "",
  lastYearAddressZipCode: "",
  lastYearAddressfrom: "",
  lastYearAddressTo: "",
};

export function DynamicAddressComponent(props: Props) {
  const classes = styleClasses.useStyles();
  // print("Address List : ", props.addressesList);
  if (props.addressesList.length === 0 || props.addressesList === []) {
    props.addressesList.push(addr);
  }

  const {
    register,
    control,
    handleSubmit,
    reset,
    trigger,
    setError,
    errors,
  } = props.forms;
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name: props.addressId,
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
                Address {index + 1}
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
                <Grid item xs={12}>
                  <TextField
                    className="col-12"
                    size="small"
                    variant="outlined"
                    name={`${props.addressId}[${index}].lastYearAddress`}
                    error={
                      errors &&
                      errors[props.addressId] &&
                      errors[props.addressId][index] &&
                      errors[props.addressId][index].lastYearAddress
                    }
                    inputRef={register({
                      required: {
                        value: reqBits.lastYearAddress,
                        message: RequireError,
                      },
                    })}
                    defaultValue={item.lastYearAddress}
                  ></TextField>
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    name={`${props.addressId}[${index}].lastYearAddressCity`}
                    inputRef={register({
                      required: {
                        value: reqBits.lastYearAddressCity,
                        message: RequireError,
                      },
                    })}
                    error={
                      errors &&
                      errors[props.addressId] &&
                      errors[props.addressId][index] &&
                      errors[props.addressId][index].lastYearAddressCity
                    }
                    variant="outlined"
                    size="small"
                    defaultValue={item.lastYearAddressCity}
                    type="text"
                  ></TextField>
                </Grid>
                <Grid item xs={4}>
                  <ReactAutoComplete
                    id={`${props.addressId}[${index}].lastYearAddressState`}
                    label="States"
                    defaultValue={
                      props.addressesList &&
                      props.addressesList[index] &&
                      props.addressesList[index].lastYearAddressState
                    }
                    error={
                      errors &&
                      errors[props.addressId] &&
                      errors[props.addressId][index] &&
                      errors[props.addressId][index].lastYearAddressState
                    }
                    isReq={reqBits["lastYearAddressState"]}
                    className="col-12"
                    useForm={props.forms}
                    optionList={states}
                  ></ReactAutoComplete>
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    name={`${props.addressId}[${index}].lastYearAddressZipCode`}
                    inputRef={register({
                      required: {
                        value: reqBits.lastYearAddressZipCode,
                        message: RequireError,
                      },
                    })}
                    error={
                      errors &&
                      errors[props.addressId] &&
                      errors[props.addressId][index] &&
                      errors[props.addressId][index].lastYearAddressZipCode
                    }
                    variant="outlined"
                    size="small"
                    defaultValue={item.lastYearAddressZipCode}
                    type="text"
                    label={
                      "Zip Code " +
                      (() => {
                        return reqBits.zipCode == true ? "*" : "";
                      })()
                    }
                    className="col-12"
                  ></TextField>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    name={`${props.addressId}[${index}].lastYearAddressfrom`}
                    inputRef={register({
                      required: {
                        value: reqBits.lastYearAddressfrom,
                        message: RequireError,
                      },
                    })}
                    error={
                      errors &&
                      errors[props.addressId] &&
                      errors[props.addressId][index] &&
                      errors[props.addressId][index].lastYearAddressfrom
                    }
                    variant="outlined"
                    type="date"
                    defaultValue={item.lastYearAddressfrom}
                    size="small"
                    className="col-12"
                    helperText={"From Date Require *"}
                  ></TextField>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    // name={
                    //   props.idPrefix + "." + "toDateId" + "[" + index + "]"
                    // }
                    name={`${props.addressId}[${index}].lastYearAddressTo`}
                    inputRef={register({
                      required: {
                        value: reqBits.lastYearAddressTo,
                        message: RequireError,
                      },
                    })}
                    error={
                      errors &&
                      errors[props.addressId] &&
                      errors[props.addressId][index] &&
                      errors[props.addressId][index].lastYearAddressTo
                    }
                    variant="outlined"
                    type="date"
                    defaultValue={item.lastYearAddressTo}
                    size="small"
                    className="col-12"
                    helperText={"To Date Require *"}
                  ></TextField>
                </Grid>
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
                    if (index > 1) {
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
            className="col-3"
            variant="contained"
            color="primary"
            onClick={() => append(addr)}
          >
            Another Address
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
