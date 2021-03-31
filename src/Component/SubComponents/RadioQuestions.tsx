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
import React,{useState} from "react";
import { Controller } from "react-hook-form";
import {
  reqBits,
  reqBitsKeys,
  RequireError,
  print,
} from "../../Common/CommonVariables";
import { useStyles } from "../EmpApplicationForm3";

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

export default function RadioQuestions(props: Props) {
  const classes = useStyles();
  const Forms = props.useForm;
  const { register, handleSubmit, errors, control , setError} = Forms;
  const bools = props.optionValue;
  const defaultValue = props.defaultSelected;
  const [value,setValue] = useState(defaultValue);


  function errorChecking()
  {

    try
    {
      if(props.isPartOfDynamicComponent === true){
        console.log("Radio Error 1:");
        console.log("props.parentId && props.parentIndex && props.childSubId");
        console.log(props.parentId);
        console.log(props.parentIndex );
        console.log(props.childSubId)
        if(errors && props.parentId && props.parentIndex !== undefined && props.childSubId) {
          console.log("errors[props.parentId][props.parentIndex][props.childSubId]");
          console.log(errors[props.parentId][props.parentIndex][props.childSubId]);
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

  


  return (
    <>
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
              (errors && errors[props?.id] &&
                errors[props?.id])
            }
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
                          console.log("Selected Radio");
                          props.actionOnSelection && props.actionOnSelection(e);
                          setValue(v);
                          console.log("value");
                          console.log(value);
                        
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
    </>
  );
}
