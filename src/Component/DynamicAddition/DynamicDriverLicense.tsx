import React from "react";
import { Address, EmploymentAccidentHistories, driverLicenseDummyElement } from "../../Common/CommonVariables";
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
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from "@material-ui/pickers";
import { styleClasses } from "../../Common/styleClasses";
import { Addresses, Form1, reqBits, states, tDriverLicenses, AddressErrorsList } from "../../Common/CommonVariables";
import { update } from "../../services/updateApi";
import RadioQuestions from "../SubComponents/RadioQuestions";
import ReactHookFormSelect from "../SubComponents/ReactHookFormSelect";
import ReactAutoComplete from "../SubComponents/ReactAutoComplete";

type Props = {
  idPrefix: string;
  dirverLicenseList: tDriverLicenses;
  useForm: any;
  setdirverLicenseList: any;
};

const RequireError: string = "Required *";
const WrongPatternError: string = "Wrong Pattern";

export function DynamicDriverLicense(props: Props) {
  const classes = styleClasses.useStyles();
  const { register, control, handleSubmit, reset, trigger, setError } = props.useForm;
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
    control,
    name: props.idPrefix,
  });

  const submit = (e: any) => {
    e.preventDefault();
    console.log(e.target.data);
  };

  return (
    <React.Fragment>
      <Grid container direction="row" justify="space-between" alignItems="center">
        {fields.map((item, index) => (
          <Accordion elevation={3}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <Typography className={classes.smallHeading}>Driver’s License 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container direction="row" justify="space-around" alignItems="baseline" spacing={3}>
                <Grid item xs={6}>
                  <ReactAutoComplete
                    id={`${props.idPrefix}[${index}].licenceExpirationDate`}
                    className="col-12"
                    useForm={props.useForm}
                    optionList={states}
                  ></ReactAutoComplete>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    name={`${props.idPrefix}[${index}].licenceNumber`}
                    inputRef={register({
                      required: {
                        value: reqBits.licenceNumber,
                        message: RequireError,
                      },
                    })}
                    variant="outlined"
                    label="License"
                    size="small"
                    type="text"
                    className="col-12"
                  ></TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name={`${props.idPrefix}[${index}].licenceType`}
                    inputRef={register({
                      required: {
                        value: reqBits.licenceType,
                        message: RequireError,
                      },
                    })}
                    variant="outlined"
                    label="Type"
                    size="small"
                    className="col-12"
                    type="text"
                  ></TextField>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    name={`${props.idPrefix}[${index}].licenceEndoresment`}
                    inputRef={register({
                      required: {
                        value: reqBits.licenceEndoresment,
                        message: RequireError,
                      },
                    })}
                    id="outlined-multiline-static"
                    size="small"
                    label="Endorsement"
                    rows={4}
                    defaultValue=""
                    variant="outlined"
                    className="col-12"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    name={`${props.idPrefix}[${index}].licenceExpirationDate`}
                    inputRef={register({
                      required: {
                        value: reqBits.licenceExpirationDate,
                        message: RequireError,
                      },
                    })}
                    id="outlined-multiline-static"
                    helperText="Expiration Date"
                    size="small"
                    type="date"
                    rows={4}
                    defaultValue=""
                    variant="outlined"
                    className="col-12"
                  />
                </Grid>
              </Grid>
            </AccordionDetails>{" "}
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
                  onClick={() => remove(index)}
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
            className="col-5"
            variant="contained"
            color="primary"
            onClick={() =>
              append({
                driverLicenseDummyElement,
              })
            }
          >
            Another Driver License
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
//TODO
