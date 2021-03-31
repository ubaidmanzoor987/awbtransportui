import React, { useState,useContext, useEffect } from "react"
import { DataGrid, GridSortModel,GridRowId, GridRowsProp } from "@material-ui/data-grid"
import { users_data } from "../User";
import NavbarCareer from "../NavbarCareer";
import Footer from "../Footer";
import { Container, Grid, Paper } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import styleClasses from "../../Common/styleClasses";
import { Redirect } from "react-router-dom";

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

function Dashboard () {
    const [selectionModel, setSelectionModel] = useState<GridRowId[]>([]);
    const [buttonactive, setButtonactive] = useState(false);
    const [rows, setRows] = useState<GridRowsProp[]>([]);
    const user = useContext(users_data) as any;
    const classes = styleClasses.useStyles();
    function isEmpty(obj:any) {
        return Object.keys(obj).length === 0;
    }
    useEffect(() => {
        console.log("user",user);
        if (isEmpty(user.user_list_data)){
            <Redirect to="/hrportal/login/" />
        }
        else {
            setRows(user.user_list_data);
        }
    });
    function currentlySelected(newSelection:any) {
        console.log(newSelection);
        const newSelectionModel = newSelection.selectionModel;

        if (newSelectionModel.length > 1) {
          const selectionSet = new Set(selectionModel);
          const result = newSelectionModel.filter(
            (s:any) => !selectionSet.has(s)
          );

          setSelectionModel(result);
        } else {
          setSelectionModel(newSelectionModel);
          setButtonactive(true);
        }
        // setSelectionModel(newSelection.selectionModel);
    };

    // const rows = [
    //     { id: 1, name: "Example 1", price: "$10.99" },
    //     { id: 2, name: "Example 2", price: "$12.50" }
    // ]

    const columns = [
        { field: "user_name", headerName: "User Name", width: 200 },
        { field: "first_name", headerName: "First Name", width: 200 },
        { field: "last_name", headerName: "Last Name", width: 200 },
        { field: "email", headerName: "Email", width: 200 },
        { field: "city", headerName: "City", width: 200 },
        { field: "dateOfBirth", headerName: "Date of Birth", width: 200 },
        { field: "gender", headerName: "Gender", width: 200 },
        { field: "phone_number", headerName: "Phone Number", width: 200 },
        { field: "veteranStatus", headerName: "Veteran Status", width: 200 },
        { field: "zipCode", headerName: "ZipCode", width: 200 },
        { field: "startTime", headerName: "Join From", width: 200 }
    ]

    const sortModel = [
        {
        field: "user_name",
        sort: "asc"
        },
    ] as  GridSortModel;

    return (
        <React.Fragment>
        <NavbarCareer adminLogout={true} />
        <Container style={{ backgroundColor: "#fafafa",marginTop:"120px" }}>
          <Grid
            container
            direction="row"
            // justify="space-between"
            // alignItems="baseline"
            spacing={3}
          >
            <Grid item xs={12}>
              <Paper elevation={3} className={classes.paper}>
                <h4>WelCome To Admin Panel of AwbTransport</h4>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper
                elevation={3}
                className={classes.paper}
                style={{ padding: "30px 15px" }}
              >
                {/* <Grid item xs={12}
                 direction="row"    
                >
                    <Grid item xs={5}
                    >
                        <h5 >Users List</h5>
                    </Grid>
                    <Grid item xs={5}>
                        <button disabled={buttonactive}>
                            Download Data
                        </button>
                    </Grid>
                </Grid> */}

                <Grid item xs={12} style={{ height: '450px', width: '100%' }}>
                    <h5>
                        User's Data
                    </h5>
                    <DataGrid
                        sortingOrder={["desc", "asc"]}
                        sortModel={sortModel}
                        rows={rows}
                        columns={columns}
                        pageSize={100}
                        rowHeight={50}
                        checkboxSelection
                        hideFooterPagination 
                        onSelectionModelChange={currentlySelected}
                        selectionModel={selectionModel}
                        disableMultipleSelection={true}
                    />
                </Grid>   
              </Paper> 
            </Grid>  
            </Grid>
        </Container>
        <Footer/>
        </React.Fragment>
    )
}

export default Dashboard;