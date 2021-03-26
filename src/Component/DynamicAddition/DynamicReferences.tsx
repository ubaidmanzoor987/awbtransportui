import React from "react";
import {
  Address,
  EmploymentAccidentHistories,
  driverLicenseDummyElement,
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
  tReferences,
  ReferenceDummyElement,
  tReferenceInfo,
} from "../../Common/CommonVariables";
import { update } from "../../services/updateApi";
import RadioQuestions from "../SubComponents/RadioQuestions";
import ReactHookFormSelect from "../SubComponents/ReactHookFormSelect";

type Props = {
  idPrefix: string;
  referenceList: tReferences;
  useForm: any;
  setReferenceList: any;
};

const RequireError: string = "Required *";
const WrongPatternError: string = "Wrong Pattern";

export function DynamicReferences(props: Props) {
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
          <Accordion defaultExpanded elevation={3}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.smallHeading}>
                References
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
                    name={`${props.idPrefix}[${index}].referencefirstName`}
                    defaultValue={item.referencefirstName}
                    error={
                      errors &&
                      errors[props.idPrefix] &&
                      errors[props.idPrefix][index] &&
                      errors[props.idPrefix][index].referencefirstName
                    }
                    inputRef={register({
                      required: {
                        value: reqBits.referencefirstName,
                        message: RequireError,
                      },
                    })}
                    variant="outlined"
                    label="First Name"
                    size="small"
                    type="text"
                    className="col-12"
                  ></TextField>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    name={`${props.idPrefix}[${index}].referencelastName`}
                    defaultValue={item.referencelastName}
                    error={
                      errors &&
                      errors[props.idPrefix] &&
                      errors[props.idPrefix][index] &&
                      errors[props.idPrefix][index].referencelastName
                    }
                    inputRef={register({
                      required: {
                        value: reqBits.referencelastName,
                        message: RequireError,
                      },
                    })}
                    variant="outlined"
                    label="Last Name"
                    size="small"
                    type="text"
                    className="col-12"
                  ></TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name={`${props.idPrefix}[${index}].referenceCompany`}
                    defaultValue={item.referenceCompany}
                    error={
                      errors &&
                      errors[props.idPrefix] &&
                      errors[props.idPrefix][index] &&
                      errors[props.idPrefix][index].referenceCompany
                    }
                    inputRef={register({
                      required: {
                        value: reqBits.referenceCompany,
                        message: RequireError,
                      },
                    })}
                    variant="outlined"
                    label="Company"
                    size="small"
                    className="col-12"
                    type="text"
                  ></TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name={`${props.idPrefix}[${index}].referenceTitle`}
                    defaultValue={item.referenceTitle}
                    error={
                      errors &&
                      errors[props.idPrefix] &&
                      errors[props.idPrefix][index] &&
                      errors[props.idPrefix][index].referenceTitle
                    }
                    inputRef={register({
                      required: {
                        value: reqBits.referenceTitle,
                        message: RequireError,
                      },
                    })}
                    id="outlined-multiline-static"
                    size="small"
                    label="Title"
                    rows={4}
                    variant="outlined"
                    className="col-12"
                  />
                </Grid>
              </Grid>
            </AccordionDetails>
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
