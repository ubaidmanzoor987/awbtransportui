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
  import React, { useState, useEffect } from "react";
 
  import {
    states,
    Addresses,
    reqBits,
    print,
    snackbarDuratuion,
    getMaxDate,
    formatOnlyNumbers,
  } from "../../Common/CommonVariables";
  
import { fileUploadApi } from "../../services/fileUploadApi";

import { formatPhoneNumberIntl } from "react-phone-number-input";
import { AsYouType } from "libphonenumber-js";
import formatStringByPattern from "format-string-by-pattern";

type Props = {
    mainId :string;
    defaultValue:string;
    useForms:any;
    className:string;
    label:string;
    isPartOfDynamicComponent?:boolean;
    parentId?:string;
    childSubId?:string;
    parentIndex?:number;
}

export default function PhoneNumberComponent(props:Props){

    const [phonePattern,setPhonePattern] = useState(props.defaultValue);
    const RequireError: string = "Required *";
    const {
        register,
        handleSubmit,
        errors,
        control,
        setError,
        clearErrors,
    } = props.useForms;
    // const formatStringByPattern = require('format-string-by-pattern');



    function errorChecking()
    {
  
      try
      {
        if(props.isPartOfDynamicComponent === true){
        //console.log("Phohne Number Error");
        //console.log("props.parentId && props.parentIndex && props.childSubId");
        //console.log(props.parentId);
        //console.log(props.parentIndex );
        //console.log(props.childSubId)
          //console.log(errors);
          //console.log(reqBits[props.childSubId as "phone_number"]);
            if(errors && props.parentId && props.parentIndex !== undefined && props.childSubId) {
          //console.log("errors[props.parentId][props.parentIndex][props.childSubId]");
          //console.log(errors[props.parentId][props.parentIndex][props.childSubId]);
            return errors[props.parentId][props.parentIndex][props.childSubId];
          }
        }
        return false;
      } 
      catch(ex) 
      {
        return false;  
      }
    }




    const helperText = () => {
        try
        {
          if(props.isPartOfDynamicComponent === true){
          //console.log("Helper function phone error");
          //console.log("props.parentId && props.parentIndex && props.childSubId");
          //console.log(props.parentId);
          //console.log(props.parentIndex );
          //console.log(props.childSubId);
            if(errors && props.parentId && props.parentIndex !== undefined && props.childSubId) {
            //console.log("errors[props.parentId][props.parentIndex][props.childSubId]");
            //console.log(errors[props.parentId][props.parentIndex][props.childSubId].message);
              return errors[props.parentId][props.parentIndex][props.childSubId].message + " " + "(xxx) xxx-xxxx × xxxx";
            }
            return (RequireError + " " + "(xxx) xxx-xxxx × xxxx");
          }
        } 
        catch(ex) 
        {
          return (RequireError + " " + "(xxx) xxx-xxxx × xxxx");  
        }
      }

    return (
        <>

        <TextField
        name={(props.isPartOfDynamicComponent === true)? (`${props.parentId}[${props.parentIndex}][${props.childSubId}]`) : (props.mainId)}
        variant="outlined"
        size="small"
        type="text"
        className={props.className}
        // error={errors[props.mainId] == undefined ? false : true}
        error={
            (props.isPartOfDynamicComponent === true)
            ? (errorChecking())
            : (errors[props.mainId] && (errors[props.mainId] === undefined ? false : true))
          }
        label={props.label}
        helperText={
            props.isPartOfDynamicComponent !== undefined && props.isPartOfDynamicComponent === true
            ? (helperText())
            // : (errors[props.mainId] === undefined ? (RequireError + " " + "(xxx) xxx-xxxx × xxxx") : errors[props.mainId].message)
            : (RequireError + " " + "(xxx) xxx-xxxx × xxxx")
        }
        value={
           phonePattern
        }
        inputRef={register({
          required: {
            value: reqBits[( (props.isPartOfDynamicComponent === undefined) || (props?.isPartOfDynamicComponent === false) ) ? (props.mainId as "phone_number") : (props.childSubId as "phone_number")],
            message: RequireError,
          },
          pattern:{value:/^[0-9 ()-×]{14,21}$/ , message:"Invalid Input : "}
        })}
        onChange={
          (e:any)=>{
            setPhonePattern(formatOnlyNumbers(e.target.value));
          }
        }
      ></TextField>
    </>
    );


}