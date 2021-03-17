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
} from "../../Common/CommonVariables";
import { update } from "../../services/updateApi";
import RadioQuestions from "../SubComponents/RadioQuestions";
import ReactHookFormSelect from "../SubComponents/ReactHookFormSelect";

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
  lastYearAddress: "Default",
  lastYearAddressCity: "Default",
  lastYearAddressState: "Alaska",
  lastYearAddressZipCode: "Default",
  lastYearAddressfrom: "1990-01-01",
  lastYearAddressTo: "1990-01-01",
};

export function DynamicAddressComponent(props: Props) {
  const classes = styleClasses.useStyles();
  const {
    register,
    control,
    handleSubmit,
    reset,
    trigger,
    setError,
  } = props.forms;
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name: props.addressId,
    }
  );

  const submit = (e: any) => {
    e.preventDefault();
    console.log(e.target.data);
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
          <Accordion key={index}>
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
                    inputRef={register({
                      required: reqBits.lastYearAddress,
                    })}
                    defaultValue={item.lastYearAddress}
                  ></TextField>
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    name={`${props.addressId}[${index}].lastYearAddressCity`}
                    inputRef={register({
                      required: reqBits.lastYearAddressCity,
                    })}
                    variant="outlined"
                    size="small"
                    defaultValue={item.lastYearAddressCity}
                    type="text"
                  ></TextField>
                </Grid>
                <Grid item xs={4}>
                  <ReactHookFormSelect
                    className="col-12"
                    nameVal={`${props.addressId}[${index}].lastYearAddressState`}
                    variant="outlined"
                    size="small"
                    defaultValue={item.lastYearAddressState}
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
                    name={`${props.addressId}[${index}].lastYearAddressZipCode`}
                    inputRef={register({
                      required: reqBits.lastYearAddressZipCode,
                    })}
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
                      required: reqBits.lastYearAddressfrom,
                    })}
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
                      required: reqBits.lastYearAddressTo,
                    })}
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
                  onClick={(e) => remove(index)}
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
