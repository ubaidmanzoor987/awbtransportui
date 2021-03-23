import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
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

export function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

type Props = {
  duration: number;
  open: boolean;
  onClose: any;
  severity: string;
  message: string;
};

export default function AlertComponent(props: Props) {
  return (
    <>
      <Snackbar
        open={props.open}
        autoHideDuration={props.duration}
        onClose={props.onClose}
      >
        <Alert onClose={props.onClose} severity={props.severity as "success"}>
          {props.message && props.message}
        </Alert>
      </Snackbar>
    </>
  );
}
