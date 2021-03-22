import React from "react";
import {
  Grid,
  Paper,
  TableCell,
  TableBody,
  TableRow,
  TableContainer,
  TableHead,
  Table,
} from "@material-ui/core";
import NavbarCareer from "../NavbarCareer";
import Footer from "../Footer";
import { users_data } from "../User";

type AdminPanelProps = {
  data?: any;
};

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

class Adminpanel extends React.Component<AdminPanelProps, {}> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    //console.log("Props", this.context.user_list_data);
  }

  render() {
    return (
      <>
        <NavbarCareer addLogout={false} />
        <div className="container-fluid" style={{ marginTop: "50px" }}>
          <div className="row">
            <div className="col-xs-12">
              <h3>Users</h3>
            </div>
            <div className="col-xs-12">
              <table
                width="100%"
                style={{ border: "1px solid black", alignSelf: "center" }}
              >
                <tr>
                  <th>First name</th>
                  <th>Last name</th>
                  <th>Email</th>
                  <th>Resume</th>
                  <th>Pdf's</th>
                </tr>
                <tbody>
                  {this.context.user_list_data.map(function (
                    object: any,
                    i: number
                  ) {
                    return (
                      <tr key={i}>
                        <td>{object.data.first_name}</td>
                        <td>{object.data.last_name}</td>
                        <td>{object.data.email}</td>
                        <td>
                          <button>Download Resume</button>
                        </td>
                        <td>
                          <button>Download Pdf's</button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="baseline"
          spacing={3}
        >
          <Grid item xs={12} >
            <Paper elevation={3} className={}>
              <h4>AWB Transport Inc., Employment Application</h4>
            </Paper>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={10}>
            <p>Users</p>
          </Grid>
        </Grid> */}
        <Footer />
      </>
    );
  }
}

Adminpanel.contextType = users_data;
export default Adminpanel;
