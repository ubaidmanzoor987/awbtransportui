import {
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
  FormHelperText,
  FormLabel,
} from "@material-ui/core";
import React,{useState,useRef} from "react";
import { Controller } from "react-hook-form";
import {
  reqBits,
  reqBitsKeys,
  RequireError,
  print,
} from "../../Common/CommonVariables";
import { useStyles } from "../EmpApplicationForm3";
import * as Scroll from 'react-scroll';
import { ScrollTo } from "react-scroll-to";



type Props = {
  id: string;
  question: string;
  optionList: string[];
  optionValue: boolean[] | string[];
  defaultSelected?: string;
  useForm: any;
  actionOnSelection?: any;
  helperMessage?:string;
  showMessageOnValue?:string;
  xsSize?:
    | boolean
    | "auto"
    | 1
    | 12
    | 3
    | 2
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | undefined;
  isReq: boolean;
  isPartOfDynamicComponent?:boolean;
  parentId?:string;
  childSubId?:string;
  parentIndex?:number;
};

// const scrollToRef = (ref:any) => window.scrollTo(0, ref.current.offsetTop)   
const scrollToRef = (ref:any) => ref.current.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});   


export default function RadioQuestions(props: Props) {
  const classes = useStyles();
  const Forms = props.useForm;
  const { register, handleSubmit, errors, control , setError} = Forms;
  const bools = props.optionValue;
  const defaultValue = props.defaultSelected;
  const [value,setValue] = useState(defaultValue);
  const myRef = useRef(null)
  const executeScroll = () => scrollToRef(myRef)

  function errorChecking()
  {

    try
    {
      if(props.isPartOfDynamicComponent === true){
      //console.log("Radio Error 1:");
      //console.log("props.parentId && props.parentIndex && props.childSubId");
      //console.log(props.parentId);
      //console.log(props.parentIndex );
      //console.log(props.childSubId)
        if(errors && props.parentId && props.parentIndex !== undefined && props.childSubId && errors[props.parentId][props.parentIndex][props.childSubId]) {
          scrollToError();
        //console.log("errors[props.parentId][props.parentIndex][props.childSubId]");
        //console.log(errors[props.parentId][props.parentIndex][props.childSubId]);
          return errors[props.parentId][props.parentIndex][props.childSubId];
        }
        return false;
      }
    } 
    catch(ex) 
    {
      return false;  
    }
  }

  function scrollToError(){
  //console.log("errors");
  //console.log(errors);

    if(props.parentId)
    {
    //console.log("errors[props.parentId]");
    //console.log(errors[props.parentId]);
      if(errors[props.parentId])
      {
        executeScroll();
      }
    }
    else 
    {
    //console.log("errors[props.id]");
    //console.log(errors[props.id]);
      if(errors[props.id])
      {
        executeScroll();
      }
    }
    return true;
  }
  


  return (
    <React.Fragment >
        <Grid
          
          container
          direction="row"
          justify="space-around"
          alignItems="flex-start"
          spacing={1}
        >
          <Grid
            item
            xs={props.xsSize === undefined ? 10 : props.xsSize}
            className={(classes.paper, classes.questionTextStyle)}
          >
            <Typography className={classes.text}>{props.question}</Typography>
          </Grid>
          <Grid
            item
            xs={props.xsSize === undefined ? 10 : props.xsSize}
            style={{ textAlign: "left" }}
          >
              <FormControl
                component="fieldset"
                error={props?.isPartOfDynamicComponent?
                  (errorChecking()):
                  (errors && errors[props?.id] && scrollToError() &&
                    errors[props?.id])
                }
                ref={myRef}
              >
                  <Controller
                    rules={{ required: props.isReq }}
                    control={control}
                    name={props.id}
                    defaultValue={props.defaultSelected}
                    as={
                      <RadioGroup row>
                        {props.optionList.map((optionItem, index) => {
                          return (
                            <FormControlLabel
                              key={index}
                              onChange={(e: any) => {
                                const v = e.target.value;
                              //console.log("Selected Radio");
                                props.actionOnSelection && props.actionOnSelection(e);
                                setValue(v);
                              //console.log("value");
                              //console.log(value);
                              
                              }}
                              value={props.optionValue[index]}
                              control={<Radio />}
                              label={optionItem}
                            />
                          );
                        })}
                      </RadioGroup>
                    }
                  />
                  <FormLabel component="legend">
                    {props.isReq && RequireError + " " }
                    {value === props.showMessageOnValue && props.helperMessage }
                  </FormLabel>

                {/* <FormHelperText>
                  {errors[props.id] && errors[props.id].message}
                </FormHelperText> */}
              </FormControl>
          </Grid>
        </Grid>
    </React.Fragment>
  );
}
