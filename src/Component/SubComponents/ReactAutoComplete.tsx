import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useState } from "react";

type option = { value: string };

type Props = {
  id: string;
  useForm?: any;
  optionList: option[];
  defaultValue: string;
  className: string;
};

export default function ReactAutoComplete(props: Props) {
  const { register, errors } = props.useForm;

  return (
    <Autocomplete
      id={props.id}
      options={props.optionList}
      getOptionLabel={(optionItem: any) => optionItem.value}
      ref={register}
      renderInput={(params) => (
        <TextField
          {...params}
          name={props.id}
          className={props.className}
          defaultValue={props.defaultValue}
          size="small"
          inputRef={register}
          label="States"
          variant="outlined"
        />
      )}
    />
  );
}
