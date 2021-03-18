import React from "react";
import {
  Address,
  tDrivingExperiences,
  tDrivingExperience,
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
  AddressErrorsList,
} from "../../Common/CommonVariables";
import { update } from "../../services/updateApi";
import RadioQuestions from "../SubComponents/RadioQuestions";
import ReactHookFormSelect from "../SubComponents/ReactHookFormSelect";

type Props = {
  idPrefix: string;
  drivingExperienceList: tDrivingExperiences;
  useForm: any;
  setDrivingExperienceList: any;
};

const RequireError: string = "Required *";
const WrongPatternError: string = "Wrong Pattern";

let dummyData: tDrivingExperience = {
  experienceclassofEquipment: "",
  experienceFromDate: "",
  experienceToDate: "",
  experiencenumberOfMiles: 0,
};

export function DynamicDrivingExperienceComponent(props: Props) {
  const classes = styleClasses.useStyles();
  const {
    register,
    control,
    handleSubmit,
    reset,
    trigger,
    setError,
  } = props.useForm;
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name: props.idPrefix,
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
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                Experience {index + 1}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
                spacing={1}
              >
                <Grid item xs={6}>
                  <TextField
                    // {`${props.idPrefix}[${index}].lastYearAddressTo`}
                    name={`${props.idPrefix}[${index}].experienceclassofEquipment`}
                    inputRef={register({
                      required: reqBits.experienceclassofEquipment,
                    })}
                    variant="outlined"
                    size="small"
                    defaultValue={item.experienceclassofEquipment}
                    type="text"
                    label="Class of Equipment"
                    className="col-12"
                  ></TextField>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    name={`${props.idPrefix}[${index}].experiencenumberOfMiles`}
                    inputRef={register({
                      required: reqBits.experiencenumberOfMiles,
                    })}
                    variant="outlined"
                    size="small"
                    defaultValue={item.experiencenumberOfMiles}
                    type="number"
                    label="Approximate Number of Miles"
                    className="col-12"
                  ></TextField>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    name={`${props.idPrefix}[${index}].experienceFromDate`}
                    inputRef={register({
                      required: reqBits.experienceFromDate,
                    })}
                    defaultValue={item.experienceFromDate}
                    variant="outlined"
                    size="small"
                    type="date"
                    helperText="From Date"
                    className="col-12"
                  ></TextField>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    name={`${props.idPrefix}[${index}].experienceToDate`}
                    inputRef={register({
                      required: reqBits.experienceToDate,
                    })}
                    variant="outlined"
                    defaultValue={item.experienceToDate}
                    size="small"
                    type="date"
                    helperText="To Date"
                    className="col-12"
                  ></TextField>
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
                dummyData,
              })
            }
          >
            Another Driving Expirence
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
