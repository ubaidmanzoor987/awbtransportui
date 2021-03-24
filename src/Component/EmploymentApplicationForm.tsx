import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { withStyles, Theme } from "@material-ui/core/styles";
import { user_data } from "./User";
import NavbarCareer from "./NavbarCareer";
import Footer from "./Footer";
import EmpApplicationForm1 from "./EmpApplicationForm1";
import EmpApplicationForm2 from "./EmpApplicationForm2";
import EmpApplicationForm3 from "./EmpApplicationForm3";
import EmpApplicationForm4 from "./EmpApplicationForm4";
import EmpApplicationForm5 from "./EmpApplicationForm5";
import EmpApplicationForm6 from "./EmpApplicationForm6";
import EmpApplicationForm7 from "./EmpApplicationForm7";
import EmpApplicationAllDataFilled from "./EmpApplicationAllDataFilled";
import {
  states,
  Addresses,
  reqBits,
  print,
  addr,
  employmentHistoryDummyElement,
} from "../Common/CommonVariables";

type EmploymentApplicationStates = {
  formCounter: number;
};

interface EmploymentApplicationProps {
  classes: any;
}

const styles = (theme: Theme) => ({
  root: {},
});

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
  }
  componentDidMount() {
    // let data = { ...this.context.data, addresses: [addr1] };
    //console.log("context", this.context);

    if (this.context.data.user_name) {
      this.setState(this.context.data);
    }
    if (this.context.data.applicantAddresses.length == 0) {
      this.context.data.applicantAddresses.push(addr);
    }
    if (this.context.data.employmentHistory.length == 0) {
      this.context.data.employmentHistory.push(employmentHistoryDummyElement);
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
            {/* <div
              className="col mySideBar"
              style={{ flexGrow: 0, paddingLeft: "0px", paddingRight: "0px" }}
            >
              <SideBar activeEmployment={false} />
            </div> */}
            <div className="col-12" style={{ paddingTop: "100px" }}>
              {this.state.formCounter === 1 ? (
                <EmpApplicationForm1
                  data={this.context.data}
                  setData={this.context.setUserData}
                  handler={this.gotoNextForm}
                ></EmpApplicationForm1>
              ) : (
                ""
              )}
              {this.state.formCounter === 2 ? (
                <EmpApplicationForm2
                  data={this.context.data}
                  handler={[this.gotoNextForm, this.gotoPreviousForm]}
                  setData={this.context.setUserData}
                ></EmpApplicationForm2>
              ) : (
                ""
              )}
              {this.state.formCounter === 3 ? (
                <EmpApplicationForm3
                  data={this.context.data}
                  handler={[this.gotoNextForm, this.gotoPreviousForm]}
                  setData={this.context.setUserData}
                ></EmpApplicationForm3>
              ) : (
                ""
              )}
              {this.state.formCounter === 4 ? (
                <EmpApplicationForm4
                  data={this.context.data}
                  handler={[this.gotoNextForm, this.gotoPreviousForm]}
                  setData={this.context.setUserData}
                ></EmpApplicationForm4>
              ) : (
                ""
              )}
              {this.state.formCounter === 5 ? (
                <EmpApplicationForm5
                  data={this.context.data}
                  handler={[this.gotoNextForm, this.gotoPreviousForm]}
                  setData={this.context.setUserData}
                ></EmpApplicationForm5>
              ) : (
                ""
              )}
              {this.state.formCounter === 6 ? (
                <EmpApplicationForm6
                  data={this.context.data}
                  handler={[this.gotoNextForm, this.gotoPreviousForm]}
                  setData={this.context.setUserData}
                ></EmpApplicationForm6>
              ) : (
                ""
              )}
              {this.state.formCounter == 7 ? (
                <EmpApplicationForm7
                  data={this.context.data}
                  handler={[this.gotoNextForm, this.gotoPreviousForm]}
                  setData={this.context.setUserData}
                ></EmpApplicationForm7>
              ) : (
                ""
              )}

              {this.state.formCounter == 8 ? (
                <EmpApplicationAllDataFilled
                  data={this.context.data}
                  handler={[this.gotoNextForm, this.gotoPreviousForm]}
                  setData={this.context.setUserData}
                ></EmpApplicationAllDataFilled>
              ) : (
                ""
              )}

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
