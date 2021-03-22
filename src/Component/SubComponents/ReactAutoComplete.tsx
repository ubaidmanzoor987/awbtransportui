import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useState } from "react";
import { Controller } from "react-hook-form";
import { reqBits } from "../../Common/CommonVariables";
import { RequireError } from "../../Object/CommonObject";

type option = { value: string };

type Props = {
  id: string;
  useForm?: any;
  optionList: option[];
  defaultValue: string;
  className: string;
  label: string;
  isReq?: boolean;
  error?: boolean;
};

export default function ReactAutoComplete(props: Props) {
  const { register, errors, control } = props.useForm;
  //console.log("-----------------------------");
  return (
    <Autocomplete
      id={props.id}
      options={props.optionList}
      getOptionLabel={(optionItem: any) => optionItem.value}
      defaultValue={{ value: props.defaultValue }}
      renderInput={(params) => (
        <TextField
          name={props.id}
          {...params}
          className={props.className}
          size="small"
          // inputRef={register}
          error={props.error}
          helperText={errors[props.id] && errors[props.id]?.message}
          inputRef={register({
            required: {
              value: props.isReq === undefined ? false : props.isReq,
              message: RequireError,
            },
          })}
          label={props.label}
          variant="outlined"
        />
      )}
    />
  );
}
