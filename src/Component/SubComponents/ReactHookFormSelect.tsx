import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
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
  isReq?: boolean;
  variant?: "standard" | "outlined" | "filled";
  size?: "small" | "medium";
  className: string;
  error?: boolean;
};

function ReactHookFormSelect(props: Props) {
  const { register, handleSubmit, errors, control, setError } = props.forms;
  const labelId = `${props.nameVal}-label`;
  return (
    <FormControl
      className={props.className}
      variant={props.variant}
      size={props.size}
    >
      <InputLabel id={labelId}>{props.label}</InputLabel>
      <Controller
        as={
          <Select
            native
            labelId={labelId}
            label={props.label}
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
    </FormControl>
  );
}
export default ReactHookFormSelect;
