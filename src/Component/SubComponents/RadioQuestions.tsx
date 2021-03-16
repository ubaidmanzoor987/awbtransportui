import {
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
  FormHelperText,
} from "@material-ui/core";
import React from "react";
import {
  reqBits,
  reqBitsKeys,
  RequireError,
} from "../../Common/CommonVariables";
import { useStyles } from "../EmpApplicationForm3";

type Props = {
  id: string;
  question: string;
  optionList: string[];
  optionValue: boolean[] | string[];
  defaultSelected?: string;
  useForm: any;
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
};

export default function RadioQuestions(props: Props) {
  const classes = useStyles();
  const Forms = props.useForm;
  const { register, handleSubmit, errors } = Forms;
  //TODO
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
            error={errors[props.id] === undefined ? false : true}
          >
            <RadioGroup
              row
              defaultValue={
                props.defaultSelected === undefined ? "" : props.defaultSelected
              }
            >
              {props.optionList.map((optionItem, index) => {
                return (
                  <FormControlLabel
                    value={props.optionValue[index]}
                    control={
                      <Radio
                        name={props.id}
                        value={props.optionValue[index]}
                        inputRef={register({
                          required: {
                            value: props.isReq,
                            message: RequireError,
                          },
                        })}
                      />
                    }
                    label={optionItem}
                  />
                );
              })}
            </RadioGroup>
            <FormHelperText>
              {errors[props.id] && errors[props.id].message}
            </FormHelperText>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
}
