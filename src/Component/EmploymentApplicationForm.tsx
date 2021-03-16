import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import {
  TextField,
  InputLabel,
  MenuItem,
  Select,
  Button,
} from "@material-ui/core";
import { withStyles, Theme } from "@material-ui/core/styles";
import { user_data } from "./User";
import SideBar from "./SideBar";
import NavbarCareer from "./NavbarCareer";
import Footer from "./Footer";
import { Container, Col, Row } from "reactstrap";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import EmpApplicationForm1 from "./EmpApplicationForm1";
import EmpApplicationForm2 from "./EmpApplicationForm2";
import EmpApplicationForm3 from "./EmpApplicationForm3";
import EmpApplicationForm4 from "./EmpApplicationForm4";
import EmpApplicationForm5 from "./EmpApplicationForm5";
import EmpApplicationForm6 from "./EmpApplicationForm6";
import DynamicAddition from "./DynamicAddition/DynamicAddition";
import {
  states,
  employmentHistoryDummyElement,
  drivingExperienceDummyElement,
  employmentAccidentHistoryDummyElement,
} from "../Common/CommonVariables";

type EmploymentApplicationStates = {
  // form1: boolean;
  // form2: boolean;
  formCounter: number;

  // first_name: string;
  // last_name: string;
  // email: string;
  // phone_number: string;
  // dateofBirth: string;
  // socialSecurity: string;
  // address: string;
  // city: string;
  // state: string;
  // zipCode: string;
  // lastThreeYearResidenceCheck: boolean;
  // addresses: Address[];
  // resume?: File;
  // startTime: string;
  // hearAbout: string;
  // eligibletoWorkInUnitedState: boolean;
  // classAExperienceLevel: boolean;
  // willingForDrugTest: boolean;
  // errors: formErrors;
  // open: boolean;
};

interface EmploymentApplicationProps {
  classes: any;
}

const styles = (theme: Theme) => ({
  root: {},
});

let addr1 = {
  lastYearAddress: "",
  lastYearAddressCity: "",
  lastYearAddressState: "",
  lastYearAddressZipCode: "",
  lastYearAddressfrom: "",
  lastYearAddressTo: "",
};

let debug = true;

class EmploymentApplication extends Component<
  EmploymentApplicationProps,
  EmploymentApplicationStates
> {
  constructor(props: any) {
    super(props);
    this.state = {
      formCounter: 1,
    };
    this.gotoNextForm = this.gotoNextForm.bind(this);
    this.gotoPreviousForm = this.gotoPreviousForm.bind(this);
    if (debug === true) {
      addr1 = {
        lastYearAddress: "Default",
        lastYearAddressCity: "Default",
        lastYearAddressState: "Alaska",
        lastYearAddressZipCode: "0000",
        lastYearAddressfrom: "2018-01-01",
        lastYearAddressTo: "2018-01-01",
      };
    }
  }
  componentDidMount() {
    // let data = { ...this.context.data, addresses: [addr1] };
    console.log("context", this.context);
    // this.context.data = this.context.data.data;
    if (debug === true) {
      this.context.data.addresses = [addr1];
      this.context.data.employmentHistory = [employmentHistoryDummyElement];
      this.context.data.employmentExperienceHistory = [
        drivingExperienceDummyElement,
      ];
      this.context.data.employmentAccidentsHistory = [
        employmentAccidentHistoryDummyElement,
      ];
    } else {
    }
    if (this.context.data.user_name) {
      this.setState(this.context.data);
    }
  }

  gotoNextForm() {
    this.setState({
      formCounter: this.state.formCounter + 1,
    });
  }

  gotoPreviousForm() {
    this.setState({
      formCounter: this.state.formCounter - 1,
    });
  }

  render() {
    if (!this.context.data.user_name) {
      return <Redirect to="/login" />;
    }

    return (
      <>
        <NavbarCareer addLogout={true} />
        <div className="container-fluid">
          <div className="row">
            <div
              className="col mySideBar"
              style={{ flexGrow: 0, paddingLeft: "0px", paddingRight: "0px" }}
            >
              <SideBar activeEmployment={false} />
            </div>
            <div className="col-9" style={{ paddingTop: "100px" }}>
              {this.state.formCounter === 1 ? (
                <EmpApplicationForm1
                  data={this.context.data}
                  handler={this.gotoNextForm}
                ></EmpApplicationForm1>
              ) : (
                ""
              )}
              {this.state.formCounter === 2 ? (
                <EmpApplicationForm2
                  data={this.context.data}
                  handler={[this.gotoNextForm, this.gotoPreviousForm]}
                ></EmpApplicationForm2>
              ) : (
                ""
              )}
              {this.state.formCounter === 3 ? (
                <EmpApplicationForm3
                  data={this.context.data}
                  handler={[this.gotoNextForm, this.gotoPreviousForm]}
                ></EmpApplicationForm3>
              ) : (
                ""
              )}
              {this.state.formCounter === 4 ? (
                <EmpApplicationForm4
                  data={this.context.data}
                  handler={[this.gotoNextForm, this.gotoPreviousForm]}
                ></EmpApplicationForm4>
              ) : (
                ""
              )}
              {this.state.formCounter === 5 ? (
                <EmpApplicationForm5
                  data={this.context.data}
                  handler={[this.gotoNextForm, this.gotoPreviousForm]}
                ></EmpApplicationForm5>
              ) : (
                ""
              )}
              {this.state.formCounter === 6 ? (
                <EmpApplicationForm6
                  data={this.context.data}
                  handler={[this.gotoNextForm, this.gotoPreviousForm]}
                ></EmpApplicationForm6>
              ) : (
                ""
              )}
              {/* {this.state.formCounter == 7 ? (
                <EmpApplicationForm7 data={this.context.data} handler={[this.gotoNextForm, this.gotoPreviousForm]}></EmpApplicationForm7>
              ) : (
                ""
              )} */}

              <Footer />
            </div>
          </div>
        </div>
      </>
    );
  }
}
EmploymentApplication.contextType = user_data;

export default withStyles(styles, { withTheme: true })(EmploymentApplication);
