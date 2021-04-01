import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import React, { Component } from "react";

export class styleClasses extends Component {
  public static useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        flexGrow: 1,
      },
      paper: {
        color: "#000000",
        padding: "20px 10px",
      },
      addressPaper: {
        textAlign: "left",
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
      secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: "#000000",
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
      smallHeading: {
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
      button: {
        margin: theme.spacing(1),
      },
    })
  );
}

export default styleClasses;
