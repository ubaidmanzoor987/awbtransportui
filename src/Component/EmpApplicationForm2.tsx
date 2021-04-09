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
  Typography,
} from "@material-ui/core";
import React, { Component, useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { ControlCameraOutlined } from "@material-ui/icons";
import ReactHookFormSelect from "./SubComponents/ReactHookFormSelect";
import ReactAutoComplete from "./SubComponents/ReactAutoComplete";
import { debug, reqBits, snackbarDuratuion, autoSubmit} from "../Common/CommonVariables";
import { update } from "../services/updateApi";
import AlertComponent from "./SubComponents/AlertComponent";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      color: "#000000",
      padding: "5px 10px",
    },
    heading: {
      fontSize: theme.typography.pxToRem(19),
      fontWeight: theme.typography.fontWeightRegular,
      color: "#000000",
    },
    text: {
      fontSize: theme.typography.pxToRem(17),
      fontWeight: theme.typography.fontWeightRegular,
      color: "#000000",
    },

    input: {
      display: "none",
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  })
);

type Props = { data?: any; handler?: any; setData: any };

function EmpApplicationForm2(props: Props) {
  const gender = [
    { value: "Male" },
    { value: "Female" },
    { value: "Other" },
    { value: "I choose not to disclose" },
  ];
  const veteranStatus = [
    { value: "No Military Experience" },
    { value: "Veteran (VA Eligible)" },
    { value: "Active Reverse" },
    { value: "Other" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    if(autoSubmit){onSubmit(props.data);}
}, []);

  if (debug === true) {
    props.data.gender = gender[1].value;
    props.data.veteranStatus = veteranStatus[1].value;
  }

  //-------------SNACKBAR-------------
  const [succesOrErrorBit, setSuccesOrErrorBit] = useState("success");
  const [snackOpen, setSnackOpen] = React.useState(false);
  const [saveOnlySuccessSnackOpen, setSaveOnlySuccessSnackOpen] = React.useState(false);

  const saveOnlyHandleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setSaveOnlySuccessSnackOpen(false);
    if (succesOrErrorBit === "success") {
      // props.handler();
    }
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackOpen(false);
  //console.log("CLOSE AUTO");
    if (succesOrErrorBit === "success") {
      props.handler[0]();
    }
  };
  //-------------SNACKBAR-------------

  const Forms = useForm();

  const { register, handleSubmit, errors, control,getValues } = Forms;

  const classes = useStyles();

  const saveData = async (data:any,saveOnly:boolean) => {
    data.user_name = props.data.user_name;
    console.log(data);
    let resdata;
    resdata = await update(data);
    if (resdata.data){
      try {
        console.log(resdata);
        props.setData(resdata.data.data);
        setSuccesOrErrorBit("success");
        if(saveOnly){
          setSaveOnlySuccessSnackOpen(true);
        }else{
          setSnackOpen(true);
        }

      } catch (ex) {
        console.log("Error Exaption Seerver Error");
        console.log(resdata);
        console.log(ex);
        setSuccesOrErrorBit("error");
        if(saveOnly){
          setSaveOnlySuccessSnackOpen(true);
        }else{
          setSnackOpen(true);
        }
      }
    }
  }

  const saveUnFilledData = () => {
    const watchAll = getValues();
    saveData(watchAll,true);
  }


  const onSubmit = async (data: any) => {
    // //console.log(data);
    saveData(data,false);
    // data.user_name = props.data.user_name;
    // const resdata = await update(data);
    // if(resdata.data){
    //   try {
    //     console.log(resdata);
    //     props.setData(resdata.data.data);
    //     //-------------SNACKBAR-------------
    //     setSuccesOrErrorBit("success");
    //     setSnackOpen(true);
    //     //-------------SNACKBAR-------------
    //     // props.handler[0]();
    //   } catch (ex) {
    //     console.log("Error Exaption Seerver Error");
    //     console.log(resdata);
    //     console.log(ex);
    //    //-------------SNACKBAR-------------
    //     setSuccesOrErrorBit("error");
    //     setSnackOpen(true);
    //     //-------------SNACKBAR-------------
    //   }
    // }
  };



  const RequireError: string = "Required *";

  return (
    <React.Fragment>
      <Container style={{ backgroundColor: "#fafafa" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="baseline"
            spacing={3}
          >
            <Grid item xs={12} sm={12} md={10}>
              <Paper elevation={3} className={classes.paper}>
                <h4>AWB Transport Inc., Employment Application</h4>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={12} md={10}>
              <Paper
                elevation={3}
                className={classes.paper}
                style={{ padding: "30px 15px" }}
              >
                <Grid
                  container
                  direction="row"
                  justify="space-evenly"
                  alignItems="baseline"
                  spacing={3}
                >
                  <Grid
                    item
                    xs={11}
                    className={classes.heading}
                    style={{ textAlign: "center", marginTop: "10px" }}
                  >
                    <b>EEO Information</b>
                  </Grid>
                  <Grid item xs={11}>
                    <Paper elevation={3} className={classes.paper}>
                      <Typography align="justify">
                        We provide equal opportunity to all qualified
                        individuals regardless of race, color, religion, age,
                        sex, national origin, veteran status or disability.
                      </Typography>
                    </Paper>
                    <Paper elevation={3} className={classes.paper}>
                      <Typography align="justify">
                        <b>Providing this information is voluntary.</b> We ask
                        for this information to maintain records. Any
                        information you voluntarily provide is confidential and
                        will not be considered in making any employment
                        decision. If you choose no.
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={5}>
                    {/* <ReactAutoComplete
                      id="gender"
                      label="Gender"
                      className="col-12 text-left"
                      useForm={Forms}
                      optionList={gender}
                      defaultValue={props.data.gender}
                      isReq={reqBits["gender"]}
                      error={errors && errors["gender"]}
                    ></ReactAutoComplete> */}

                    <ReactHookFormSelect
                      nameVal="gender"
                      label="Gender"
                      control={control}
                      forms={Forms}
                      defaultValue={props?.data?.gender}
                      variant="outlined"
                      isReq={reqBits["gender"]}
                      error={errors && errors["gender"]}
                      size="small"
                      className="col-12"
                    >
                      <option aria-label="None" value="" />
                      {gender.map(function (object: any, i: number) {
                        return (
                          <option value={object.value} key={i}>
                            {object.value}
                          </option>
                        );
                      })}
                    </ReactHookFormSelect>
                  </Grid>
                  <Grid item xs={5}>
                    {/* <ReactAutoComplete
                      id="veteranStatus"
                      label="Veteran Status"
                      className="col-12 text-left"
                      useForm={Forms}
                      optionList={veteranStatus}
                      defaultValue={props.data.veteranStatus}
                      isReq={reqBits["veteranStatus"]}
                      error={errors && errors["veteranStatus"]}
                    ></ReactAutoComplete> */}

                    <ReactHookFormSelect
                      nameVal="veteranStatus"
                      label="Veteran Status"
                      forms={Forms}
                      defaultValue={props?.data?.veteranStatus}
                      control={control}
                      variant="outlined"
                      isReq={reqBits["veteranStatus"]}
                      error={errors && errors["veteranStatus"]}
                      size="small"
                      className="col-12"
                    >
                      <option aria-label="None" value="" />
                      {veteranStatus.map(function (object: any, i: number) {
                        return (
                          <option value={object.value} key={i}>
                            {object.value}
                          </option>
                        );
                      })}
                    </ReactHookFormSelect>
                  </Grid>
                </Grid>
                <Grid item xs={12} style={{ marginTop: "25px" }}>
                  <b>Thank you for considering AWB Transport, Inc.</b>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={11}>
              <Grid container justify="space-evenly" alignContent="center">
                  {/* BUTTON Start */}
                  <Grid item xs={8} sm={7} md={4}>
                    <Button
                      type="button"
                      className="col-8 mt-3"
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        props.handler[1]();
                      }}
                    >
                      Back
                    </Button>
                  </Grid>
                  <Grid item xs={8} sm={7} md={4}>
                    <Button
                      onClick={()=>{saveUnFilledData();}}
                      className="col-8 mt-3"
                      variant="contained"
                      color="primary"
                    >
                      Save
                    </Button>
                  </Grid>
                  <Grid item xs={8} sm={7} md={4}>
                    <Button
                      type="submit"
                      className="col-8 mt-3"
                      variant="contained"
                      color="primary"
                    >
                      Save This & Next
                    </Button>
                  </Grid>
                  {/* BUTTON End */}
              </Grid>
            </Grid>

          </Grid>
        </form>
    
        <AlertComponent
          duration={snackbarDuratuion}
          open={saveOnlySuccessSnackOpen}
          message={
            succesOrErrorBit === "success"
              ? "Data Saved Successfully"
              : "Server Error"
          }
          onClose={saveOnlyHandleClose}
          severity={succesOrErrorBit}
        ></AlertComponent>
        <AlertComponent
          duration={snackbarDuratuion}
          open={snackOpen}
          message={
            succesOrErrorBit === "success"
              ? "Data Saved Successfully"
              : "Server Error"
          }
          onClose={handleClose}
          severity={succesOrErrorBit}
        ></AlertComponent>
      </Container>
    </React.Fragment>
  );
}

export default EmpApplicationForm2;

// COMPLETED UI PHASE
