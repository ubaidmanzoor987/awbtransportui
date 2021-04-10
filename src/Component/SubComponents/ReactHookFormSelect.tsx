import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { FormLabel } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import { Controller } from "react-hook-form";
import { RequireError } from "../../Common/CommonVariables";
import { AnyRecordWithTtl } from "node:dns";
import {useState} from "react";

type Props = {
  nameVal: string;
  label: string;
  control: any;
  defaultValue?: string;
  children: any;
  forms: any;
  isReq: boolean;
  variant?: "standard" | "outlined" | "filled";
  size?: "small" | "medium";
  className: string;
  error?: boolean;
  isPartOfDynamicComponent?:boolean;
  parentId?:string;
  childSubId?:string;
  parentIndex?:number;
};

function ReactHookFormSelect(props: Props) {
  const { register, handleSubmit, errors, control, setError } = props.forms;
  let lable = props.label + props.isReq ? ("Required *"):"";
  const labelId = `${props.nameVal}-label`;
  // console.log(props);
  function errorChecking()
  {
    try
    {
      if(props.isPartOfDynamicComponent === true){
 
        if(errors && props.parentId && props.parentIndex !== undefined && props.childSubId) {
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

  return (
    <FormControl
      className={props.className}
      variant={props.variant}
      size={props.size}
    >
      <InputLabel id={labelId}>{props.label + (props.isReq ? (" Required *"):"")}</InputLabel>
      <Controller
        as={
          <Select
            native
            labelId={labelId}
            label={props.label + props.isReq ? ("Required *"):""}
            // error={
            //   errors[props.nameVal] &&
            //   (errors[props.nameVal] === undefined ? false : true)
            // }
            error={props?.isPartOfDynamicComponent?
              (errorChecking()):
              (errors[props.nameVal] &&
                (errors[props.nameVal] === undefined ? false : true))
            }
            inputRef={register({
              required: {
                value: props.isReq ,
                message: RequireError,
              },
            })}
            onChange={(e:any) => {
            //console.log("On Select CHange");
            //console.log(e.target.value);
              if (e.target.value === "") {
              setError("Required", {
                type: "manual",
                message: "Required *",
              });
              }
              // setSelectedValue(v);
            }}
            // value={selectedValue}
            onSubmit={(e:any) => {
            //console.log("On Select CHange");
            //console.log(e.target.value);
              if (e.target.value === "") {
              setError("Required", {
                type: "manual",
                message: "Required *",
              });
              }
            }}
          >
            {props.children}
          </Select>
        }
        name={props.nameVal}
        control={props.control}
        defaultValue={props.defaultValue}
      />
      {/* <FormLabel component="legend">{props.isReq && RequireError}</FormLabel> */}
    </FormControl>
  );
}
export default ReactHookFormSelect;
