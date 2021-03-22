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
import DeleteIcon from "@material-ui/icons/Delete";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";

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
  prevFileUploaded?: any;
  useForm: any;
  setNewFileToUpload: any;
};

const RequireError: string = "Required *";
const WrongPatternError: string = "Wrong Pattern";

export function DynamicFileUpload(props: Props) {
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
          <div className="mb-3" key={index}>
            <Paper elevation={3} className={classes.paper}>
              <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="center"
                spacing={3}
              >
                <Grid item xs={2}>
                  <InsertDriveFileIcon />
                </Grid>
                <Grid item xs={8} className="text-left">
                  {props.prevFileUploaded?.resume?.name}
                </Grid>
                <Grid item xs={2}>
                  <Button>
                    <DeleteIcon
                      id={"id" + index}
                      onClick={() => remove(index)}
                    />
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </div>
        ))}

        <input
          accept=".pdf,.jpg,.jpge,.doc,.docx"
          className={classes.input}
          id="contained-button-file"
          type="file"
          onChange={props.setNewFileToUpload}
        />
        <label htmlFor="contained-button-file">
          <Button
            variant="contained"
            color="primary"
            component="span"
            onClick={() => {
              if (fields.length < 2) {
                append({});
              }
            }}
          >
            Upload Resume
          </Button>
        </label>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid
            item
            xs={12}
            className="caption"
            style={{ textAlign: "center", marginTop: "10px" }}
          >
            <b>NOTE:</b>
            <i>
              Please upload your resume in PDF format, and DMV record in PDF or
              any valid picture format.
            </i>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
