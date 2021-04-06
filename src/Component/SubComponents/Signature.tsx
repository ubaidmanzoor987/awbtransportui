import classes from "*.module.css";
import { Button, Grid, Paper, Typography, TextField } from "@material-ui/core";
import React, { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

type Props = {
  data?: any;
  signatureError: string;
  onSubmitHandler: any;
};

export function Signature(props: Props) {
  const sigPad = useRef<any>();
  let base64SignatureImage = "";

  const clearSigPad = () => {
    if (sigPad && sigPad.current) {
      sigPad.current?.clear();
      base64SignatureImage = "";
    }
  };

  const saveImage = () => {
    if (sigPad.current && !sigPad.current.isEmpty()) {
      base64SignatureImage = sigPad.current
        ?.getCanvas()
        .toDataURL("image/png");
    }
  };

  return (
    <Paper
      elevation={3}
      style={{ paddingLeft: "40px", paddingRight: "60px" }}
      className={(classes.heading, classes.paperProminantStyle)}
    >
      <Typography className={props.signatureError} align="left" variant="h6">
        Employee Signature
      </Typography>
      <SignatureCanvas
        penColor="black"
        ref={sigPad}
        canvasProps={{
          width: 500,
          height: 200,
          className: "sigCanvas",
        }}
      />
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="baseline"
        spacing={3}
      >
        <Grid item xs={3}></Grid>
        <Grid item xs={3}>
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
        <Grid item xs={3}>
          <Button
            className="col-12"
            variant="contained"
            color="primary"
            onClick={saveImage}
          >
            Save
          </Button>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </Paper>
  );
}
