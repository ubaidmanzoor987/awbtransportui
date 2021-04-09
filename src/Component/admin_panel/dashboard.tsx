import React, { useState, useContext, useEffect, useRef } from "react";
import {
  DataGrid,
  GridSortModel,
  GridRowId,
  GridRowsProp,
} from "@material-ui/data-grid";
import { users_data } from "../User";
import NavbarCareer from "../NavbarCareer";
import Footer from "../Footer";
import {
  Button,
  Container,
  FormControl,
  Grid,
  Paper,
  Tooltip,
} from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import styleClasses from "../../Common/styleClasses";
import { Redirect } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import Select from "@material-ui/core/Select";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import classNames from "classnames";
import InputLabel from "@material-ui/core/InputLabel";
import ListSubheader from "@material-ui/core/ListSubheader";
import TextField from "@material-ui/core/TextField";
import WebViewer from "@pdftron/webviewer";

import {
  download_user_cv,
  download_new_employee_pdf,
  download_form_i9,
  download_dw4,
  download_fw4,
  print_blank_pdf,
} from "./panel";
import { baseUrl, for_production1 } from "../../shared/baseUrl";
import { get_all_users } from "../../services/get_all_users_api";
import { update } from "../../services/updateApi";
import { deleteUser } from "../../services/deleteApi";

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

function Dashboard() {
  const [selectedUser, setSelectedUser] = useState("");
  const [action, setAction] = useState("");
  const [rows, setRows] = useState<GridRowsProp[]>([]);
  const [actionVisibility, setActionVisibility] = useState("hidden");
  const [webViewInstance, setWebViewInstance] = useState<any>();
  const pdfTronViewer = useRef<any>(null);
  const [pdfUrl, setPdfUrl] = useState("");
  const [loggedIn, setLoggedIn] = useState(true);
  const [showWebView, setShowWebView] = useState(false);
  const user = useContext(users_data) as any;

  const classes = styleClasses.useStyles();
  const columns = [
    { field: "user_name", headerName: "User Name", width: 200 },
    { field: "first_name", headerName: "First Name", width: 200 },
    { field: "last_name", headerName: "Last Name", width: 200 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "isDeleted", headerName: "Deleted", width: 100 },
    { field: "isEditable", headerName: "Editable", width: 100 },
    { field: "city", headerName: "City", width: 200 },
    { field: "dateOfBirth", headerName: "Date of Birth", width: 200 },
    { field: "gender", headerName: "Gender", width: 200 },
    { field: "phone_number", headerName: "Phone Number", width: 200 },
    { field: "veteranStatus", headerName: "Veteran Status", width: 200 },
    { field: "zipCode", headerName: "ZipCode", width: 200 },
    { field: "startTime", headerName: "Join From", width: 200 },
  ];

  const printBlankPdfs = [
    {
      value: "print_blank_new_employee_pdf",
      displayText: "Employee Pdf",
      shortCut: "E",
    },
    { value: "print_blank_form_i9", displayText: "Form I-9", shortCut: "I" },
    { value: "print_blank_dw4", displayText: "DW4", shortCut: "D" },
    { value: "print_blank_fw4", displayText: "FW4", shortCut: "F" },
  ];

  const downloadActions = [
    { value: "download_user_cv", displayText: "Resume", shortCut: "R" },
    {
      value: "dodMedicalCardFile",
      displayText: "Medical Card File",
      shortCut: "M",
    },
    { value: "driverLicenceFile", displayText: "Licence File", shortCut: "L" },
    { value: "dmvFile", displayText: "Dmv File", shortCut: "D" },
    {
      value: "download_new_employee_pdf",
      displayText: "Employee Pdf",
      shortCut: "E",
    },
    { value: "download_form_i9", displayText: "Form I-9", shortCut: "I" },
    { value: "download_dw4", displayText: "DW4", shortCut: "D" },
    { value: "download_fw4", displayText: "FW4", shortCut: "F" },
  ];

  const editPdfActions = [
    {
      value: "edit_new_employee_pdf",
      displayText: "Employee Pdf",
      shortCut: "E",
    },
    { value: "edit_form_i9", displayText: "Form I-9", shortCut: "I" },
    { value: "edit_dw4", displayText: "DW4", shortCut: "D" },
    { value: "edit_fw4", displayText: "FW4", shortCut: "F" },
  ];

  const userActions = [
    {
      value: "user_disable_edit_mode",
      displayText: "Disable User Edit Mode",
      shortCut: "U",
    },
    {
      value: "user_enable_edit_mode",
      displayText: "Enable User Edit Mode",
      shortCut: "E",
    },
    {
      value: "user_delete",
      displayText: "Delete User",
      shortCut: "D",
    },
  ];

  const sortModel = [
    {
      field: "user_name",
      sort: "asc",
    },
  ] as GridSortModel;

  function isEmpty(obj: any) {
    return Object.keys(obj).length === 0;
  }

  const handleBlankPrint = (event: any) => {
    setPdfUrl("");
    let selectedOption = event.target.value;

      console.log(selectedUser);
      switch (selectedOption) {
      case printBlankPdfs[0].value:
        print_blank_pdf("employee_info");
        break;

      case printBlankPdfs[1].value:
        print_blank_pdf("formi9");
        break;

      case printBlankPdfs[2].value:
        print_blank_pdf("dw4");
        break;

      case printBlankPdfs[3].value:
        print_blank_pdf("fw4");
        break;
    }
    setAction("");
  };

  const handleDownloadMenuChange = (event: any) => {
    setPdfUrl("");
    let selectedOption = event.target.value;

    switch (selectedOption) {
      case downloadActions[0].value:
        download_user_cv(selectedUser, "resume");
        break;

      case downloadActions[1].value:
        download_user_cv(selectedUser, "dodMedicalCardFile");
        break;

      case downloadActions[2].value:
        download_user_cv(selectedUser, "driverLicenceFile");
        break;

      case downloadActions[3].value:
        download_user_cv(selectedUser, "dmvFile");
        break;

      case downloadActions[4].value:
        download_new_employee_pdf(selectedUser);
        break;

      case downloadActions[5].value:
        download_form_i9(selectedUser);
        break;

      case downloadActions[6].value:
        download_dw4(selectedUser);
        break;

      case downloadActions[7].value:
        download_fw4(selectedUser);
        break;
    }
    setAction("");
  };

  const handleEditPdfMenuChange = (event: any) => {
    let selectedOption = event.target.value;
    user.selectedUser = selectedUser;
    let editUrl = "";
    switch (selectedOption) {
      case editPdfActions[0].value:
        edit_pdf(selectedUser, "new_employee");
        break;

      case editPdfActions[1].value:
        edit_pdf(selectedUser, "formi9");
        break;

      case editPdfActions[2].value:
        edit_pdf(selectedUser, "dw4");
        break;

      case editPdfActions[3].value:
        edit_pdf(selectedUser, "fw4");
        break;
    }
    setAction("");
    setPdfUrl(editUrl);
  };

  function edit_pdf(user_name: string, fileNameWantToEdit: string) {
    if (for_production1) {
      window.open(
        "http://localhost:3000/hrportal/edit/pdf?user_name=" +
          user_name +
          "&" +
          `fileName=${fileNameWantToEdit}`,
        "_blank"
      );
    } else {
      window.open(
        baseUrl +
          "/hrportal/edit/pdf?user_name=" +
          user_name +
          "&" +
          `fileName=${fileNameWantToEdit}`,
        "_blank"
      );
    }
  }

  const handleUserAction = async (event: any) => {
    setPdfUrl("");
    let selectedOption = event.target.value;

    switch (selectedOption) {
      case userActions[0].value:
        await user_disable_edit_mode(selectedUser);
        const c_rows1 = JSON.parse(JSON.stringify(rows)) as any[];
        const row_f1 = c_rows1.find(
          (row1: any) => row1.user_name === selectedUser
        );
        row_f1.isEditable = "False";
        setRows(c_rows1);
        break;

      case userActions[1].value:
        await user_enable_edit_mode(selectedUser);
        const c_rows2 = JSON.parse(JSON.stringify(rows)) as any[];
        const row_f2 = c_rows2.find(
          (row1: any) => row1.user_name === selectedUser
        );
        row_f2.isEditable = "True";
        setRows(c_rows2);
        break;

      case userActions[2].value:
        await user_delete(selectedUser);
        const c_rows3 = JSON.parse(JSON.stringify(rows)) as any[];
        const row_f3 = c_rows3.find(
          (row1: any) => row1.user_name === selectedUser
        );
        row_f3.isDeleted = "True";
        setRows(c_rows3);
        break;
  
      }
    setAction("");
  };

  async function user_enable_edit_mode(user_name: string) {
    let userEditMode = { user_name: selectedUser, isEditable: "True" };
    await update(userEditMode);
  }

  async function user_disable_edit_mode(user_name: string) {
    let userEditMode = { user_name: selectedUser, isEditable: "False" };
    await update(userEditMode);
  }

  async function user_delete(user_name: string) {
    let userDelete = { user_name: selectedUser, isDeleted: "True" };
    await deleteUser(userDelete);
    // const res = (await get_all_users()) as any;
    // if (res) {
    //   user.setUserListData(res);
    //   setRows(user.user_list_data);
    // }
  }

  useEffect(() => {
    if (isEmpty(user.user_list_data)) {
      setLoggedIn(false);
    } else {
      console.log("user.user_list_data");
      console.log(user.user_list_data);
      setRows(user.user_list_data);
    }
  }, []);

  useEffect(() => {
    if (selectedUser !== "") {
      setActionVisibility("visible");
    }
  }, [selectedUser]);

  useEffect(() => {
    if (pdfUrl !== "") {
      setShowWebView(true);
      webViewInstance?.loadDocument(pdfUrl);
    } else {
      setShowWebView(false);
    }
  }, [pdfUrl]);

  function currentlySelected(newSelection: any) {
    setSelectedUser(newSelection.selectionModel[0]);
  }

  if (!loggedIn) {
    return <Redirect to="/hrportal/login/" />;
  }

  return (
    <React.Fragment>
      <NavbarCareer adminLogout={true} />
      <Container style={{ backgroundColor: "#fafafa", marginTop: "120px" }}>
        <Grid
          container
          direction="row"
          // justify="space-between"
          // alignItems="baseline"
          spacing={3}
        >
          <Grid item xs={12}>
            <Paper elevation={3} className={classes.paper}>
              <h4>Welcome To Admin Panel of AwbTransport</h4>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper
              elevation={3}
              className={classes.paper}
              style={{ padding: "30px 15px" }}
            >
              <Grid container justify="space-evenly" alignItems="center">
                <Grid item xs={12}>
                  <Grid
                    direction="row"
                    container
                    justify="space-between"
                    alignItems="center"
                  >
                    <Grid
                      item
                      xs={12}
                      style={{ textAlign: "center", padding: "15px 5px" }}
                    >
                      <h4>User's Data</h4>
                    </Grid>
                  </Grid>
                  <Grid
                    direction="row"
                    container
                    justify="space-between"
                    alignItems="center"
                  >
                    <Grid item xs={12} style={{ textAlign: "right" }}>
                      <FormControl
                        style={{
                          visibility: actionVisibility as "hidden",
                        }}
                        size="small"
                        variant="outlined"
                        className={classNames(classes.formControl, "col-2")}
                      >
                        <InputLabel htmlFor="download-simple-select-outlined-label">
                          Download PDFs
                        </InputLabel>
                        <Select
                          labelId="download-simple-select-outlined-label"
                          id="download-simple-select-outlined"
                          value={action}
                          accessKey="d"
                          onChange={(e: any) => {
                            handleDownloadMenuChange(e);
                          }}
                          label="Download PDFs"
                        >
                          <MenuItem value="">
                            <b>Download PDFs</b>
                          </MenuItem>
                          {downloadActions.map((item, index) => {
                            return (
                              <MenuItem key={index} value={item.value}>
                                {item.displayText}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </FormControl>
                      <FormControl
                        style={{
                          visibility: actionVisibility as "hidden",
                        }}
                        size="small"
                        variant="outlined"
                        className={classNames(classes.formControl, "col-2")}
                      >
                        <InputLabel htmlFor="editpdf-simple-select-outlined-label">
                          Edit PDFs
                        </InputLabel>
                        <Select
                          labelId="editpdf-simple-select-outlined-label"
                          id="editpdf-simple-select-outlined"
                          value={action}
                          accessKey="d"
                          onChange={(e: any) => {
                            handleEditPdfMenuChange(e);
                          }}
                          label="Edit PDFs"
                        >
                          <MenuItem value="">
                            <b>Edit PDFs</b>
                          </MenuItem>
                          {editPdfActions.map((item, index) => {
                            return (
                              <MenuItem key={index} value={item.value}>
                                {item.displayText}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </FormControl>
                      <FormControl
                        style={{
                          visibility: actionVisibility as "hidden",
                        }}
                        size="small"
                        variant="outlined"
                        className={classNames(classes.formControl, "col-2")}
                      >
                        <InputLabel htmlFor="user-simple-select-outlined-label">
                          User Actions
                        </InputLabel>
                        <Select
                          labelId="user-simple-select-outlined-label"
                          id="user-simple-select-outlined"
                          value={action}
                          accessKey="d"
                          onChange={(e: any) => {
                            handleUserAction(e);
                          }}
                          label="User Actions"
                        >
                          <MenuItem value="">
                            <b>User Actions</b>
                          </MenuItem>
                          {userActions.map((item, index) => {
                            return (
                              <MenuItem key={index} value={item.value}>
                                {item.displayText}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </FormControl>
                      <FormControl
                        // style={{
                        //   visibility: actionVisibility as "hidden",
                        // }}
                        size="small"
                        variant="outlined"
                        className={classNames(classes.formControl, "col-2")}
                      >
                        <InputLabel htmlFor="print-blank-simple-select-outlined-label">
                          Print New Form
                        </InputLabel>
                        <Select
                          labelId="print-blank-simple-select-outlined-label"
                          id="print-blank-simple-select-outlined"
                          value={action}
                          accessKey="d"
                          onChange={(e: any) => {
                            handleBlankPrint(e);
                          }}
                          label="Print New Form"
                        >
                          <MenuItem value="">
                            <b>Print New Form</b>
                          </MenuItem>
                          {printBlankPdfs.map((item, index) => {
                            return (
                              <MenuItem key={index} value={item.value}>
                                {item.displayText}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} style={{ height: "450px", width: "100%" }}>
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
                {/* <Grid item xs={12}>
                  <hr />
                  <div className="webviewer" ref={pdfTronViewer}></div>
                </Grid> */}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default Dashboard;
