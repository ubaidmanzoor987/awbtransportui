import { Button, Grid, Paper } from "@material-ui/core";
import React, { MouseEventHandler } from "react";
import { useState } from "react";
import DynamicItemList from "./DynamicItemsList";

type addr = { name: string; address: string };

export default function DynamicAddition() {
  const componentListState = useState([{ name: "", address: "" }]);
  const [stateList, setStateList] = componentListState;

  function addComponentInList(e: any) {
    //console.log(e);
    if (e.target.name == "add") {
      //console.log("New Component Added");
    } else if (e.target.name == "rem") {
      //console.log("Component Removed via Index");
    }
  }

  return (
    <React.Fragment>
      <form>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="baseline"
          spacing={3}
        >
          <DynamicItemList state={componentListState}></DynamicItemList>

          <Grid item xs={6}>
            <Button
              name="add"
              variant="outlined"
              color="primary"
              onClick={addComponentInList}
            >
              Add Another Component
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              name="rem"
              variant="outlined"
              color="primary"
              onClick={addComponentInList}
            >
              Remove Component
            </Button>
          </Grid>
        </Grid>
      </form>
    </React.Fragment>
  );
}
