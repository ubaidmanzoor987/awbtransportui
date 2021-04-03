import WebViewer from "@pdftron/webviewer";
import { useContext, useEffect, useRef, useState } from "react";
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

type PropsEditPdf = {
  location?: any;
};

function EditPdfViwer(props: PropsEditPdf) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const user_name = urlParams.get("user_name");
  const fileName = urlParams.get("fileName");
  console.log("user_name", user_name);
  console.log("fileName", fileName);
  const pdfTronViewer = useRef<any>(null);
  const [webViewInstance, setWebViewInstance] = useState<any>();
  const user = useContext(users_data) as any;
  function edit_pdf(user_name: string, fileNameWantToEdit: string) {
    return baseUrl + `/api/pdf/${fileNameWantToEdit}?user_name=` + user_name;
  }

  useEffect(() => {
    try {
      console.log(pdfTronViewer.current);
      if (pdfTronViewer.current) {
        WebViewer(
          {
            path: "lib",
            initialDoc: "",
          },
          pdfTronViewer.current
        ).then((instance) => {
          if (instance) {
            console.log("instance");
            instance.loadDocument(
              baseUrl + `/api/pdf/${fileName}?user_name=` + user_name
            );
          }
        });
      }
    } catch (e) {
      console.log(e);
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
