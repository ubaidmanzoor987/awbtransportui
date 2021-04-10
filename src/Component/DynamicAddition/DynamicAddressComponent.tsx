import React , {useEffect,useState} from "react";
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
  dummyAddrData,
  getMinDateLimit,
} from "../../Common/CommonVariables";
import { update } from "../../services/updateApi";
import RadioQuestions from "../SubComponents/RadioQuestions";
import ReactHookFormSelect from "../SubComponents/ReactHookFormSelect";
import ReactAutoComplete from "../SubComponents/ReactAutoComplete";
import FromToDateComponent from "../SubComponents/FromToDate";

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
  minElementLimit:number;
};

const RequireError: string = "Required *";
const WrongPatternError: string = "Wrong Pattern";



export function DynamicAddressComponent(props: Props) {
  const classes = styleClasses.useStyles();
  // print("Address List : ", props.addressesList);
  const [fromDate,setFromDate] = useState("");
  const {
    register,
    control,
    handleSubmit,
    reset,
    trigger,
    setError,
    errors,
  } = props.forms;
//console.log("props.forms");  
//console.log(props.forms);  
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

  useEffect(()=>{
    if(fields.length === 0){
      append(props.addressesList);
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
          <Accordion key={item.id} defaultExpanded>
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
                    helperText={reqBits.lastYearAddress && RequireError}
                    defaultValue={item.lastYearAddress}
                  ></TextField>
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    name={`${props.addressId}[${index}].lastYearAddressCity`}
                    label="City"
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
                  <ReactHookFormSelect
                    nameVal={`${props.addressId}[${index}].lastYearAddressState`}
                    label="State"
                    forms={props.forms}
                    defaultValue={
                      props.addressesList &&
                      props.addressesList[index] &&
                      props.addressesList[index].lastYearAddressState
                    }
                    control={control}
                    isReq={reqBits["lastYearAddressState"]}
                    variant="outlined"
                    size="small"
                    className="col-12"
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
                    name={`${props.addressId}[${index}].lastYearAddressZipCode`}
                    inputRef={register({
                      required: {
                        value: reqBits.lastYearAddressZipCode,
                        message: RequireError,
                      },
                      maxLength: {
                        value: 5,
                        message: "Max 5 Digits",
                      },
                      minLength: {
                        value: 5,
                        message: "Min 5 Digits",
                      },
                    })}
                    error={
                      errors &&
                      errors[props.addressId] &&
                      errors[props.addressId][index] &&
                      errors[props.addressId][index].lastYearAddressZipCode
                    }
                    helperText={
                      errors &&
                      errors[props.addressId] &&
                      errors[props.addressId][index] &&
                      errors[props.addressId][index].lastYearAddressZipCode &&
                      errors[props.addressId][index].lastYearAddressZipCode.message
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
                <FromToDateComponent
                  useForm={props.forms}
                  mainId={props.addressId}
                  index={index}
                  item={item}
                  fromId="lastYearAddressfrom"
                  toId="lastYearAddressTo"
                  defaultFromDate={item.lastYearAddressfrom}
                  defaultToDate={item.lastYearAddressTo}
                  ></FromToDateComponent>
              </Grid>
            </AccordionDetails>
            <Divider />
            <AccordionActions
              style={{
                justifyContent: "center",
                padding: "20px 20px",
              }}
            >
              <Grid item  xs={8} md={6} style={{ padding: "20px 10px" }}>
                <Button
                  size="small"
                  className="col-6"
                  variant="contained"
                  color="default"
                  onClick={(e) => {

                    if(fields.length > props.minElementLimit) 
                    {
                    //console.log("index");  
                    //console.log(index);  
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
            onClick={() => {
              append(dummyAddrData);
            }}
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
