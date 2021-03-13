import { Paper, TextField } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import React, { Dispatch, SetStateAction } from "react";

type State = { name: string; address: string };
type Props = {
  state: [
    {
      name: string;
      address: string;
    }[],
    React.Dispatch<
      React.SetStateAction<
        {
          name: string;
          address: string;
        }[]
      >
    >
  ];
};

//-----------------------------------------
//Strings
//-----------------------------------------
const addressString = "Address";
const nameString = "Name";

//-----------------------------------------
//Components Specific Properties
//-----------------------------------------

//ClassNames
const textFieldClassNames = "cols-10";
const paperFieldClassNames = "cols-12";

//Styles
const textFieldStyles = {
  padding: "10px",
};
const paperFieldStyles = {};

//ThirdParty Lib Attribute
const paperAttr = {
  elevation: 3,
};

//-----------------------------------------
//Component
//-----------------------------------------
export default function DynamicItemsList(props: Props) {
  const states = props.state[0];
  const setterForStateList = props.state[1];
  let readyCompList = () => {
    return states.map((stateItem, index) => {
      <React.Fragment>
        <Grid item xs={6}>
          <Paper {...paperAttr} style={paperFieldStyles} className={paperFieldClassNames}>
            <TextField
              label={nameString}
              className={textFieldClassNames}
              style={textFieldStyles}
              value={stateItem.name}
              // onChange={setterForStateList[index]}
            ></TextField>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper {...paperAttr} style={paperFieldStyles} className={paperFieldClassNames}>
            <TextField label={addressString} className={textFieldClassNames} style={textFieldStyles}></TextField>
          </Paper>
        </Grid>
      </React.Fragment>;
    });
  };

  return <React.Fragment>{readyCompList()}</React.Fragment>;
}
