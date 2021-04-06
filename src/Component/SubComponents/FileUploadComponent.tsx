import React,{useState} from "react"
import { baseUrl } from "../../shared/baseUrl";
import {
    Button,
    Divider,
    FormControl,
    FormHelperText,
    Grid,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    TextField,
    Snackbar,
  } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { styleClasses } from "../../Common/styleClasses";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import DeleteIcon from "@material-ui/icons/Delete";
import {deleteFile} from "../../services/removeFileApi";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import {
    states,
    Addresses,
    reqBits,
    print,
    snackbarDuratuion,
    getMaxDate,
  } from "../../Common/CommonVariables";

type Props = {
    id:string;
    buttonText:string;
    fileName:string;
    user_name:string;
    handleFileUpload:any;
    message:string;
}


function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
  
export default function FileUploadComponent(props:Props){


    const [succesOrErrorBit, setSuccesOrErrorBit] = useState("success");
    const [fileUploadSuccesOrErrorBit, setFileUploadSuccesOrErrorBit] = useState(
      "success"
    );
    const [response , setResponse] = useState("");

      //console.log("props.fileName");
      //console.log(props.fileName);
    
    const [hideFileComponent, setHideFileComponent] = useState(props.fileName);
    const classes = styleClasses.useStyles();

    const download_user_cv = (user_name: string,fileName:string) => {
      //console.log("user_name");
      //console.log(baseUrl + "/api/get_resume?user_name="+user_name+'&'+`${fileName}=${fileName}`);
        window.open(baseUrl + "/api/get_resume?user_name="+user_name+'&'+`${fileName}=${fileName}`, "_blank");
    };

    const  removeUploadedFileFromServer = async (e: any, fileName:string) => {
      //console.log("Remove Resume API");
      //console.log(fileName);
        let res = await deleteFile(props.user_name,fileName)
  //console.log("res");
  //console.log(res);
        if (res.status === "true" ) {
            setFileUploadSuccesOrErrorBit("success");
            setFileUploadSuccessSnackOpen(true);
            setResponse(res.message);
          } else {
            setHideFileComponent("");
            setFileUploadSuccesOrErrorBit("error");
              setFileUploadSuccessSnackOpen(true);
            setResponse(res.error);
          }
    };


    //-------------SNACKBAR-------------
    const [successSnackOpen, setSuccessSnackOpen] = React.useState(false);
    const [
        fileUploadSuccessSnackOpen,
        setFileUploadSuccessSnackOpen,
    ] = React.useState(false);

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === "clickaway") {
        return;
        }

        setSuccessSnackOpen(false);
      //console.log("CLOSE AUTO");
      
    };

    
    const handleFileUploadClose = (
        event?: React.SyntheticEvent,
        reason?: string
    ) => {
        if (reason === "clickaway") {
        return;
        }

        setFileUploadSuccessSnackOpen(false);
      //console.log("CLOSE AUTO");
    };
    //-------------SNACKBAR-------------
    return (
           <>
           <Grid item xs={1}></Grid>
           <Grid item xs={10}>
             <Paper elevation={3} className={classes.paper}>
               <Grid
                 container
                 direction="row"
                 justify="space-around"
                 alignItems="center"
                 spacing={3}
               >
                 <Grid item xs={1}></Grid>
                 <Grid item xs={10}>
                   {/* {(hideFileComponent !== undefined && hideFileComponent !== "" && hideFileComponent !== null) && ( */}
                   {hideFileComponent  && (
                     <div className="mb-3">
                       <Paper elevation={3} className={classes.paper}>
                         <Grid
                           container
                           direction="row"
                           justify="space-around"
                           alignItems="center"
                           spacing={3}
                         >
                           <Grid item xs={1}>
                             <InsertDriveFileIcon />
                           </Grid>
                           <Grid item xs={6} className="text-left">
                             {hideFileComponent}
                           </Grid>
                           <Grid item xs={1}>
                             <Button>
                               <VisibilityIcon
                                 onClick={(e: any) => {
                                   download_user_cv(props.user_name,props.id);
                                 }}
                               />
                             </Button>
                           </Grid>
                           <Grid item xs={1}>
                             <Button>
                               <DeleteIcon
                                 onClick={(e: any) => {
                                   removeUploadedFileFromServer(e,props.id);
                                 }}
                               />
                             </Button>
                           </Grid>
                         </Grid>
                       </Paper>
                     </div>
                    )}
                
                 </Grid>
                 <Grid item xs={1}></Grid>
               </Grid>

               <input
                 accept=".pdf,.jpg,.jpge,.doc,.docx"
                 className={classes.input}
                 id={`fileUpload${hideFileComponent}`}
                 type="file"
                 onChange={(e)=>{props.handleFileUpload(e,props.fileName)}}
               />
               <label htmlFor={`fileUpload${hideFileComponent}`}>
                 <Button variant="contained" color="primary" component="span">
                   {props.buttonText}
                 </Button>
               </label>
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
                   <b>NOTE:</b>
                   <i>
                     {props.message}
                   </i>
                 </Grid>
               </Grid>
             </Paper>
           </Grid>
           <Grid item xs={1}></Grid>
           <Snackbar
            open={fileUploadSuccessSnackOpen}
            autoHideDuration={snackbarDuratuion}
            onClose={handleFileUploadClose}
            >
            <Alert
                onClose={handleFileUploadClose}
                severity={fileUploadSuccesOrErrorBit as "success"}
            >
                {fileUploadSuccesOrErrorBit === "success" &&
                response}
                {fileUploadSuccesOrErrorBit === "error" &&
                response }
            </Alert>
            </Snackbar>
        </>
    )
}