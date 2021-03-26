import { Button, Grid, Paper, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { styleClasses } from "../Common/styleClasses";
import { Link as RouterLink } from "react-router-dom";

type Props = { data?: any; handler?: any; setData: any };

function EmpApplicationAllDataFilled(props: Props) {
  const classes = styleClasses.useStyles();

  return (
    <React.Fragment>
      <Container style={{ backgroundColor: "#fafafa", marginTop: "180px" }}>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="baseline"
          spacing={3}
        >
          {/* Success Start */}
          <Grid item xs={1}></Grid>
          <Grid item xs={10}>
            <Paper elevation={3} className={classes.paper}>
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
                  <h4 style={{ marginBottom: "30px" }}>Successfully Saved</h4>
                  <i>
                    Thank You For Applying at Awb Transport. We will contact you
                    soon .
                  </i>
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                className="caption"
                style={{ textAlign: "center", marginTop: "60px" }}
              >
                <Button
                  type="submit"
                  className="col-4"
                  variant="contained"
                  color="primary"
                >
                  <RouterLink
                    className="nav-link"
                    to="/"
                    style={{ color: "white" }}
                  >
                    Go to Home Page
                  </RouterLink>
                </Button>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default EmpApplicationAllDataFilled;
