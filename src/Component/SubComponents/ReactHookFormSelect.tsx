import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { FormLabel } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import { Controller } from "react-hook-form";
import { RequireError } from "../../Common/CommonVariables";

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
};

function ReactHookFormSelect(props: Props) {
  const { register, handleSubmit, errors, control, setError } = props.forms;
  let lable = props.label + props.isReq ? ("Required *"):"";
  const labelId = `${props.nameVal}-label`;
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
            error={
              errors[props.nameVal] &&
              (errors[props.nameVal] === undefined ? false : true)
            }
            inputRef={register({
              required: {
                value: props.isReq === undefined ? false : props.isReq,
                message: RequireError,
              },
            })}
            onChange={(e) => {
              // if (e.target.value === "") {
              setError("Required", {
                type: "manual",
                message: "Required *",
              });
              // }
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
