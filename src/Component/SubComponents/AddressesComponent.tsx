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
import { useForm } from "react-hook-form";
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
  Address,
  Addresses,
  Form1,
  reqBits,
  states,
  AddressErrorsList,
} from "../../Common/CommonVariables";
import { update } from "../../services/updateApi";
import RadioQuestions from ".././SubComponents/RadioQuestions";

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

export default function AddressesComponent(props: Props) {
  const classes = styleClasses.useStyles();
  // const Forms = props.useForm;
  // const { register, handleSubmit, errors, defaultValues } = Forms;

  const [addressesState, addressesStateHandler] = useState(props.addressesList);
  const [errorsList, errorListHandler] = useState();
  useEffect(() => {
    addressesStateHandler(props.addressesList);
  }, [props.addressesList]);

  useEffect(() => {
    props.setAddresses(addressesState);
  }, [addressesState]);

  const addAddress = (event: any) => {
    event.preventDefault();
    addressesStateHandler([...addressesState, addr]);
  };

  return (
    <React.Fragment>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        {addressesState.map((address: Address, index: number) => {
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
                      name={props.addressId}
                      variant="outlined"
                      size="small"
                      type="text"
                      label={"Address Require"}
                      required={reqBits.lastYearAddress === true}
                      value={addressesState[index].lastYearAddress}
                      onChange={(e) => {
                        const addrNew = {
                          ...addressesState[index],
                          lastYearAddress: e.target.value,
                        };
                        const addressesStateNew = [...addressesState];
                        addressesStateNew.splice(index, 1, addrNew);
                        addressesStateHandler(addressesStateNew);
                      }}
                    ></TextField>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      name={props.cityId}
                      variant="outlined"
                      size="small"
                      type="text"
                      label={
                        "City " +
                        (() => {
                          return reqBits.lastYearAddressCity === true
                            ? "*"
                            : "";
                        })()
                      }
                      required={reqBits.lastYearAddressCity === true}
                      className="col-12"
                      value={addressesState[index].lastYearAddressCity}
                      onChange={(e) => {
                        const addrNew = {
                          ...addressesState[index],
                          lastYearAddressCity: e.target.value,
                        };
                        const addressesStateNew = [...addressesState];
                        addressesStateNew.splice(index, 1, addrNew);
                        addressesStateHandler(addressesStateNew);
                      }}
                    ></TextField>
                  </Grid>
                  <Grid item xs={4}>
                    <FormControl
                      variant="outlined"
                      size="small"
                      className="col-12"
                      required={reqBits.lastYearAddressState === true}
                    >
                      <InputLabel
                        id={"demo-simple-select-outlined-label" + index}
                      >
                        State
                      </InputLabel>
                      <Select
                        name={props.stateId}
                        labelId={"demo-simple-select-outlined-label" + index}
                        id="demo-simple-select-outlined"
                        label={"State "}
                        defaultValue={
                          addressesState[index].lastYearAddressState
                        }
                        value={addressesState[index].lastYearAddressState}
                        onChange={(e) => {
                          console.log(e.target);
                          const addrNew = {
                            ...addressesState[index],
                            lastYearAddressState: e.target.value as string,
                          };
                          const addressesStateNew = [...addressesState];
                          addressesStateNew.splice(index, 1, addrNew);
                          addressesStateHandler(addressesStateNew);
                        }}
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
                      </Select>
                      {/* <FormHelperText>{errors.seqAddressCity && errors.seqAddressCity.message}</FormHelperText> */}
                    </FormControl>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      name={props.zipCodeId}
                      variant="outlined"
                      size="small"
                      type="text"
                      label={
                        "Zip Code " +
                        (() => {
                          return reqBits.lastYearAddressZipCode == true
                            ? "*"
                            : "";
                        })()
                      }
                      required={reqBits.lastYearAddressZipCode == true}
                      className="col-12"
                      value={addressesState[index].lastYearAddressZipCode}
                      onChange={(e) => {
                        const addrNew = {
                          ...addressesState[index],
                          lastYearAddressZipCode: e.target.value,
                        };
                        const addressesStateNew = [...addressesState];
                        addressesStateNew.splice(index, 1, addrNew);
                        addressesStateHandler(addressesStateNew);
                      }}
                    ></TextField>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      name={props.fromDateId}
                      variant="outlined"
                      type="date"
                      size="small"
                      className="col-12"
                      helperText={"From Date Require *"}
                      required={reqBits.lastYearAddressfrom == true}
                      value={addressesState[index].lastYearAddressfrom}
                      onChange={(e) => {
                        const addrNew = {
                          ...addressesState[index],
                          lastYearAddressfrom: e.target.value,
                        };
                        const addressesStateNew = [...addressesState];
                        addressesStateNew.splice(index, 1, addrNew);
                        addressesStateHandler(addressesStateNew);
                      }}
                    ></TextField>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      name={props.toDateId}
                      variant="outlined"
                      type="date"
                      size="small"
                      className="col-12"
                      helperText={"To Date Require *"}
                      required={reqBits.lastYearAddressTo == true}
                      value={addressesState[index].lastYearAddressTo}
                      onChange={(e) => {
                        const addrNew = {
                          ...addressesState[index],
                          lastYearAddressTo: e.target.value,
                        };
                        const addressesStateNew = [...addressesState];
                        addressesStateNew.splice(index, 1, addrNew);
                        addressesStateHandler(addressesStateNew);
                      }}
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
                      if (addressesState.length > 1) {
                        addressesState.splice(index, 1);
                        addressesStateHandler([...addressesState]);
                      }
                    }}
                  >
                    Delete This
                  </Button>
                </Grid>
              </AccordionActions>
            </Accordion>
          );
        })}
        <Grid item xs={12} style={{ padding: "20px 10px" }}>
          <Button
            size="small"
            className="col-3"
            variant="contained"
            color="primary"
            onClick={(e) => {
              addressesStateHandler([...addressesState, addr]);
              console.log(addressesState);
            }}
          >
            Another Address
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
