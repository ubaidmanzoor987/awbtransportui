import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import { Controller } from "react-hook-form";

type Props = {
    nameVal:string,
    label:string,
    control:any,
    defaultValue?:string,
    children:any,
    variant?:'standard' | 'outlined' | 'filled',
    size?:'small' | 'medium' ,
    className:string
  };

function ReactHookFormSelect(props:Props){
  const labelId = `${props.nameVal}-label`;
  return (
    <FormControl className={props.className} variant={props.variant} size={props.size}>
      <InputLabel id={labelId}>{props.label}</InputLabel>
      <Controller
        as={
          <Select labelId={labelId} label={props.label}>
            {props.children}
          </Select>
        }
        name={props.nameVal}
        control={props.control}
        defaultValue={props.defaultValue}
      />
    </FormControl>
  );
};
export default ReactHookFormSelect;