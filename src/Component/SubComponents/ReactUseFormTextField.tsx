import React from "react";
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
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
  Typography,
} from "@material-ui/core";
import {
  dummyAddrData as addr,
  debug,
  startTimeVal,
  states,
  WrongPatternError,
  RequireError,
  EmploymentHistories,
  employmentHistoryDummyElement,
  drivingExperienceDummyElement,
  tDrivingExperiences,
  employmentAccidentHistoryDummyElement,
  EmploymentAccidentHistories,
  trafficConvictionDummyElement,
  tTrafficConvictions,
  tTrafficConvictionInfo,
  tDriverLicenses,
  driverLicenseDummyElement,
  tDriverLicenseInfo,
  reqBits,
  reqBitsKeys,
  reqBitsViaStr,
} from "../../Common/CommonVariables";
import { FormSection } from "redux-form";

interface ITextFieldProps {
  name: string;
  type: string;
  className: string;
  errors: any;
  label: string;
  helperText: string;
  forms: any;
}

const ReactUseFormTextField: React.FunctionComponent<ITextFieldProps> = (
  props
) => {
  let require: string = props.name.toString();
  const { register, handleSubmit, errors, control } = props.forms;

  return (
    <>
      <TextField
        name={props.name}
        variant="outlined"
        size="small"
        type={props.type}
        className={props.className}
        error={errors[props.name] === undefined ? false : true}
        label="First Name"
        helperText={errors[props.name] && errors[props.name].message}
        inputRef={register({
          required: {
            value: reqBitsViaStr[props.name],
            message: RequireError,
          },
        })}
      ></TextField>
    </>
  );
};

export default TextField;
