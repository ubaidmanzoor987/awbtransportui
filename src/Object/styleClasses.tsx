import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import React, { Component } from "react";

export class styleClasses extends Component {
  public static useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        flexGrow: 1,
      },
      paper: {
        color: theme.palette.text.secondary,
        padding: "20px 10px",
      },
      addressPaper: {
        textAlign: "left",
      },
      heading: {
        fontSize: theme.typography.pxToRem(19),
        fontWeight: theme.typography.fontWeightRegular,
        color: theme.palette.text.secondary,
      },
      text: {
        fontSize: theme.typography.pxToRem(17),
        fontWeight: theme.typography.fontWeightRegular,
        color: theme.palette.text.secondary,
      },
      secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
      },
      input: {
        display: "none",
      },
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      default: {},
      paperProminantStyle: {
        margin: "5px 0px",
        elevation: 3,
        padding: "20px 0px",
      },
      questionTextStyle: {
        textAlign: "left",
      },
    })
  );
}

export default styleClasses;
