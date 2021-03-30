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
  } from "../../Common/CommonVariables";
  
  import { fileUploadApi } from "../../services/fileUploadApi";
  
  import { formatPhoneNumberIntl } from "react-phone-number-input";


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
    

    function errorChecking()
    {
  
      try
      {
        if(props.isPartOfDynamicComponent === true){
          console.log("Phohne Number Error");
          console.log("props.parentId && props.parentIndex && props.childSubId");
          console.log(props.parentId);
          console.log(props.parentIndex );
          console.log(props.childSubId)
          if(errors && props.parentId && props.parentIndex !== undefined && props.childSubId) {
            console.log("errors[props.parentId][props.parentIndex][props.childSubId]");
            console.log(errors[props.parentId][props.parentIndex][props.childSubId]);
            return errors[props.parentId][props.parentIndex][props.childSubId];
          }
          return false;
        }
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
            console.log("Helper function phone error");
            console.log("props.parentId && props.parentIndex && props.childSubId");
            console.log(props.parentId);
            console.log(props.parentIndex );
            console.log(props.childSubId)
            if(errors && props.parentId && props.parentIndex !== undefined && props.childSubId) {
              console.log("errors[props.parentId][props.parentIndex][props.childSubId]");
              console.log(errors[props.parentId][props.parentIndex][props.childSubId].message);
              return errors[props.parentId][props.parentIndex][props.childSubId].message;
            }
            return (RequireError + " " + "+# ### ### #### ext.####");
          }
        } 
        catch(ex) 
        {
          return (RequireError + " " + "+# ### ### #### ext.####");  
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
            props.isPartOfDynamicComponent === true
            ? (errorChecking())
            : (errors[props.mainId] && (errors[props.mainId] === undefined ? false : true))
          }
        label={props.label}
        helperText={
            props.isPartOfDynamicComponent !== undefined && props.isPartOfDynamicComponent === true
            ? (helperText())
            : (errors[props.mainId] === undefined ? (RequireError + " " + "+# ### ### #### ext.####") : errors[props.mainId].message)
        }
        value={
           phonePattern
        }
        inputRef={register({
          required: {
            value: reqBits[props.mainId as "phone_number"],
            message: RequireError,
          },
        //   pattern:{value:/^[+][0-9 ]$|^[+][0-9 ext.]$/ , message:"Invalid Input : +# ### ### #### ext.####"}
        })}
        // onChange={(e)=>{setPhonePattern(e.target.value)}}
        onChange={(e:any) => {
          let val = e.target.value;
          if (val.length > 11) {
            const n = formatPhoneNumberIntl(val);
            if (n) {
              setPhonePattern(n);
            } else {
              setPhonePattern(val);
            }
          } else {
            setPhonePattern(val);
          }
        }}
      ></TextField>
    </>
    );


}