import {
    Button,
    Grid,
    MenuItem,
    Paper,
    TextField,
    Typography,
    FormHelperText,
  } from "@material-ui/core";
  import React from "react";
  import { Container } from "react-bootstrap";
  import { Controller, useForm } from "react-hook-form";
  import SignatureCanvas from "react-signature-canvas";
  import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
  import { useEffect } from "react";
  import {
    dummyAddrData,
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
    snackbarDuratuion,
  } from "../../Common/CommonVariables";
  import { Addresses, tReferences, getMaxDate, getMaxAgeLimit } from "../../Common/CommonVariables";
  import { useRef, useState } from "react";
  
type Props = {
    sigPad:any;
    defaultValue:string;
}


export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    default: {},
    paper: {
      color: "#000000",
      padding: "5px 10px",
    },
    heading: {
      fontSize: theme.typography.pxToRem(19),
      fontWeight: theme.typography.fontWeightRegular,
      color: "#000000",
    },
    smallHeading: {
      fontSize: theme.typography.pxToRem(17),
      fontWeight: theme.typography.fontWeightRegular,
      color: "#000000",
      textJustify: "inter-word",
    },
    text: {
      fontSize: theme.typography.pxToRem(17),
      fontWeight: theme.typography.fontWeightRegular,
      color: "#000000",
      textJustify: "inter-word",
    },
    caption: {
      fontSize: theme.typography.pxToRem(12),
      fontWeight: theme.typography.fontWeightRegular,
      color: "#000000",
      textAlign: "left",
    },
    paperProminantStyle: {
      margin: "5px 0px",
      elevation: 3,
      padding: "20px 0px",
    },
    input: {
      display: "none",
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    questionTextStyle: {
      textAlign: "left",
    },
  })
);

function SigComponent(props:Props) {

    const [signatureError, setSignatureError] = useState("");
    const [signatureHelperTextError, setSignatureHelperTextError] = useState(
        false
    );
    let sigPad = useRef<any>();
    let base64SignatureImage = "";
  
    const classes = useStyles();
    const clearSigPad = () => {
      //console.log("ref");
      //console.log(sigPad);
      //console.log(typeof sigPad);
        if (sigPad && sigPad.current) {
          sigPad.current?.clear();
          base64SignatureImage = "";
        }
      };

      useEffect(() => {
      //console.log("sigPadsigPadsigPad");
      //console.log(sigPad);
      //console.log(sigPad.current);
        if(props.defaultValue !== undefined){
          sigPad.current.fromDataURL(props.defaultValue);
        }
      }, []);

    return (
        <div>
            <Grid item   xs={12} sm={12} md={10}>
              <Paper
                elevation={3}
                style={{ paddingLeft: "40px", paddingRight: "40px" }}
                className={
                  (classes.heading, classes.paperProminantStyle)
                }
              >
                <Typography
                  className={signatureError}
                  align="left"
                  variant="h6"
                >
                  Employee Signature
                </Typography>
                {signatureHelperTextError === true && (
                  <Typography
                    align="left"
                    variant="subtitle2"
                    className="text-danger"
                  >
                    Please ! Sign here
                  </Typography>
                )}
              <div
                style={{
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                  display: "flex",
                  width:"75%",
                  marginTop: "15px",
                  marginBottom: "15px",
                }}
              >
                <SignatureCanvas
                  penColor="black"
                  ref={sigPad}
                  canvasProps={{
                    width: "auto",
                    height: 150,
                    className: "sigCanvas",
                  }}
                />
              </div>
                <Grid
                  container
                  direction="row"
                  justify="space-evenly"
                  alignItems="baseline"
                  spacing={3}
                >
                  <Grid item xs={8} sm={8} md={3}>
                    <Button
                      type="button"
                      className="col-12"
                      variant="contained"
                      color="primary"
                      onClick={clearSigPad}
                    >
                      Clear
                    </Button>
                  </Grid>
                  
                </Grid>
              </Paper>
            </Grid>
      
        </div>
    )
}

SigComponent.propTypes = {

}

export default SigComponent

