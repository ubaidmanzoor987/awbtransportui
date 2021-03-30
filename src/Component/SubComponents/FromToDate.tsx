import React , {useEffect , useState} from "react";
import { Address, RequireError } from "../../Common/CommonVariables";
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
import RadioQuestions from "./RadioQuestions";
import ReactHookFormSelect from "./ReactHookFormSelect";
import ReactAutoComplete from "./ReactAutoComplete";


type  Props = {
    useForm:any;
    mainId:string;
    fromId:string;
    toId:string;
    index:number;
    item:any;
    defaultFromDate:string;
    defaultToDate:string;
} 


export default function FromToDateComponent(props:Props){

    const [fromDate,setFromDate] = useState(getMinDateLimit(props.defaultFromDate));

    const {
        register,
        control,
        handleSubmit,
        reset,
        trigger,
        setError,
        errors,
      } = props.useForm;

    return (
        <React.Fragment>
                <Grid item xs={6}>
                  <TextField
                    name={`${props.mainId}[${props.index}][${props.fromId}]`}
                    inputRef={register({
                      required: {
                        value: reqBits[props.fromId as "fromDateAddress"],
                        message: RequireError,
                      },
                    })}
                    error={
                      errors &&
                      errors[props.mainId] &&
                      errors[props.mainId][props.index] &&
                      errors[props.mainId][props.index][props.fromId]
                    }
                    onChange={(e:any)=>{
                        setFromDate(getMinDateLimit(e.target.value))
                        console.log("e.target.value from date");
                        console.log(e.target.value);
                      }
                    }
                    variant="outlined"
                    type="date"
                    defaultValue={props.item[props.fromId]}
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
                    name={`${props.mainId}[${props.index}][${props.toId}]`}
                    inputRef={register({
                      required: {
                        value: reqBits[props.toId as "fromDateAddress"],
                        message: RequireError,
                      },
                    })}
                    onChange={(e:any)=>{

                    }}
                    inputProps={{
                      min: fromDate,
                    }}
                    error={
                      errors &&
                      errors[props.mainId] &&
                      errors[props.mainId][props.index] &&
                      errors[props.mainId][props.index][props.toId]
                    }
                    variant="outlined"
                    type="date"
                    defaultValue={props.item[props.toId]}
                    size="small"
                    className="col-12"
                    helperText={"To Date Require *"}
                  ></TextField>
                </Grid>


        </React.Fragment>
    )

}