import React, { useState,useContext, useEffect } from "react"
import { DataGrid, GridSortModel,GridRowId, GridRowsProp } from "@material-ui/data-grid"
import { users_data } from "../User";
import NavbarCareer from "../NavbarCareer";
import Footer from "../Footer";
import { Button, Container, FormControl, Grid, Paper } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import styleClasses from "../../Common/styleClasses";
import { Redirect } from "react-router-dom";
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import classNames from "classnames";
import InputLabel from '@material-ui/core/InputLabel';
import ListSubheader from '@material-ui/core/ListSubheader';

import {download_user_cv , download_new_employee_pdf ,download_form_i9 ,download_dw4 ,download_fw4} from "./panel";



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
    const [selectedUser,setSelectedUser] = useState("");
    const [action,setAction] = useState("");
    const [rows, setRows] = useState<GridRowsProp[]>([]);
    const user = useContext(users_data) as any;

    const classes = styleClasses.useStyles();
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

    const Actions = [
      {value:"download", displayValue:"Download PDFs"},
      {value:"edit", displayValue:"Edit PDFs"},
      {value:"disableEditMode", displayValue:"Disable Edit Mode"},
      // {value:"deleteUser", displayValue:"Delete User"},
    ];
    const sortModel = [
        {
        field: "user_name",
        sort: "asc"
        },
    ] as  GridSortModel;


    function isEmpty(obj:any) {
        return Object.keys(obj).length === 0;
    }
    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
      console.log("event.target.value");
      console.log(event.target.value);
      console.log(selectedUser);
      if(event.target.value === "download_user_pdf")
      {
          download_user_cv(selectedUser,"resume");
      }
      setAction("");
    };
    useEffect(() => {
        if (isEmpty(user.user_list_data)){
            <Redirect to="/hrportal/login/" />
        }
        else {
            setRows(user.user_list_data);
        }
    },[]);
    
    function currentlySelected(newSelection:any) {
        console.log("newSelection");
        setSelectedUser(newSelection.selectionModel[0]);
        console.log(newSelection.selectionModel[0]);
    };

 
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
                style={{ padding: "30px 15px"}}
              >
           
           {
                  selectedUser !== "" &&

                  <FormControl className={classNames("col-3",classes.formControl)}>
                    <InputLabel htmlFor="grouped-select">Actions</InputLabel>
                    <Select value={action} 
                        onChange={handleChange}
                        id="grouped-select">
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <ListSubheader>Download Pdf</ListSubheader>
                      <MenuItem value="download_user_pdf">User CV</MenuItem>
                      <MenuItem value={2}>New Employee Pdf</MenuItem>
                      <MenuItem value={2}>Form I-9</MenuItem>
                      <MenuItem value={2}>DW4</MenuItem>
                      <MenuItem value={2}>FW4</MenuItem>
                      <ListSubheader>Edit Pdf</ListSubheader>
                      <MenuItem value={1}>User CV</MenuItem>
                      <MenuItem value={2}>New Employee Pdf</MenuItem>
                      <MenuItem value={2}>Form I-9</MenuItem>
                      <MenuItem value={2}>DW4</MenuItem>
                      <MenuItem value={2}>FW4</MenuItem>
                      <ListSubheader>Disable User Editing</ListSubheader>
                      <MenuItem value={3}>Disable {selectedUser}</MenuItem>
                    </Select>
                  </FormControl>
                //     <FormControl variant="outlined" className={classNames("col-3",classes.formControl)}>
                //       <InputLabel id="demo-simple-select-outlined-label">Actions</InputLabel>
                //       <Select
                //         labelId="demo-simple-select-outlined-label"
                //         id="demo-simple-select-outlined"
                //         value={}
                //         label=""
                //       >
                //         {Actions.map((item)=>(
                //           <MenuItem value={item.value}>{item.displayValue}</MenuItem>
                //         ))}
                //       </Select>
                //     </FormControl>
                } 
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
                        // checkboxSelection
                        hideFooterPagination 
                        onSelectionModelChange={currentlySelected}
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