import { useContext, useEffect, useRef, useState } from "react";
import { Redirect } from "react-router-dom";
import { baseUrl } from "../../shared/baseUrl";
import { users_data } from "../User";
import {
  Button,
  Container,
  FormControl,
  Grid,
  Paper,
  Tooltip,
} from "@material-ui/core";
import WebViewer from "@pdftron/webviewer";

type PropsEditPdf = {
  location?: any;
};

function EditPdfViwer(props: PropsEditPdf) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const user_name = urlParams.get("user_name");
  const fileName = urlParams.get("fileName");
  const [loggedIn, setLoggedIn] = useState(true);
  const pdfTronViewer = useRef<any>(null);
  const user = useContext(users_data) as any;

  function isEmpty(obj: any) {
    return Object.keys(obj).length === 0;
  }

  useEffect(() => {
    if (isEmpty(user.user_list_data)) {
      setLoggedIn(false);
    }
    try {
      if (pdfTronViewer.current) {
        WebViewer(
          {
            path: "lib",
            initialDoc: "",
          },
          pdfTronViewer.current
        ).then((instance) => {
          if (instance) {
          //console.log("instance");
            instance.loadDocument(
              baseUrl + `/api/pdf/${fileName}?user_name=` + user_name
            );
          }
        });
      }
    } catch (e) {
    //console.log(e);
    }
  }, [pdfTronViewer]);
  return (
    <Grid item xs={12}>
      <hr />
      <div className="webviewer" ref={pdfTronViewer}></div>
    </Grid>
  );
}
export default EditPdfViwer;
