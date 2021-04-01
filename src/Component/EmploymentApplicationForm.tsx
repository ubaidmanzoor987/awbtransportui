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
import EmpApplicationForm8 from "./EmpApplicationForm8";
import EmpApplicationAllDataFilled from "./EmpApplicationAllDataFilled";
import {
  states,
  Addresses,
  reqBits,
  print,
  dummyAddrData,
  employmentHistoryDummyElement,
  employmentAccidentHistoryDummyElement,
  drivingExperienceDummyElement,
  driverLicenseDummyElement,
  ReferenceDummyElement,
  trafficConvictionDummyElement
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
      formCounter: 3,
    };

    this.gotoNextForm = this.gotoNextForm.bind(this);
    this.gotoPreviousForm = this.gotoPreviousForm.bind(this);
  }
  componentDidMount() {
    // let data = { ...this.context.data, addresses: [addr1] };
    console.log("context", this.context.data);
    
    if (!this.context.data.user_name) {
      return <Redirect to="/login" />;
    }
    
    if (this.context.data.user_name) {
      this.setState(this.context.data);
    }

    if (this.context.data.applicantAddresses.length == 0) {
      this.context.data.applicantAddresses.push(dummyAddrData);
    }
    
    console.log("this.context.data.addresses.length === 0");
    console.log(this.context.data.addresses.length === 0);
    console.log(this.context.data.addresses);
    if (this.context.data.addresses.length === 0) {
      this.context.data.addresses.push(dummyAddrData);
    }

    console.log("this.context.data.employmentHistory.length === 0");
    console.log(this.context.data.employmentHistory.length === 0);
    console.log(this.context.data.employmentHistory);
    if (this.context.data.employmentHistory.length === 0) {
      this.context.data.employmentHistory.push(employmentHistoryDummyElement);
    }

    console.log("this.context.data.employmentAccidentsHistory.length === 0");
    console.log(this.context.data.employmentAccidentsHistory.length === 0);
    console.log(this.context.data.employmentAccidentsHistory);
    if (this.context.data.employmentAccidentsHistory.length === 0) {
      this.context.data.employmentAccidentsHistory.push(employmentAccidentHistoryDummyElement);
    }

    console.log("this.context.data.employmentExperienceHistory.length === 0");
    console.log(this.context.data.employmentExperienceHistory.length === 0);
    console.log(this.context.data.employmentExperienceHistory);
    if (this.context.data.employmentExperienceHistory.length === 0) {
      this.context.data.employmentExperienceHistory.push(drivingExperienceDummyElement);
    }
    console.log("this.context.data.licences.length === 0");
    console.log(this.context.data.licences.length === 0);
    console.log(this.context.data.licences);
    if (this.context.data.licences.length === 0) {
      this.context.data.licences.push(driverLicenseDummyElement);
    }

    console.log("this.context.data.references.length === 0");
    console.log(this.context.data.references.length === 0);
    console.log(this.context.data.references);
    if (this.context.data.references.length === 0) {
      this.context.data.references.push(ReferenceDummyElement);
    }

    console.log("this.context.data.violations.length === 0");
    console.log(this.context.data.violations.length === 0);
    console.log(this.context.data.violations);
    if (this.context.data.violations.length === 0) {
      this.context.data.violations.push(trafficConvictionDummyElement);
    }
    console.log(this.context.data);
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
    console.log(this.context.data);

    if (!this.context.data.user_name) {
      return <Redirect to="/login" />;
    }

    if (this.context.data.applicantAddresses.length == 0) {
      this.context.data.applicantAddresses.push(dummyAddrData);
    }
    
    console.log("this.context.data.addresses.length === 0");
    console.log(this.context.data.addresses.length === 0);
    console.log(this.context.data.addresses);
    if (this.context.data.addresses.length === 0) {
      this.context.data.addresses.push(dummyAddrData);
    }

    console.log("this.context.data.employmentHistory.length === 0");
    console.log(this.context.data.employmentHistory.length === 0);
    console.log(this.context.data.employmentHistory);
    if (this.context.data.employmentHistory.length === 0) {
      this.context.data.employmentHistory.push(employmentHistoryDummyElement);
    }

    console.log("this.context.data.employmentAccidentsHistory.length === 0");
    console.log(this.context.data.employmentAccidentsHistory.length === 0);
    console.log(this.context.data.employmentAccidentsHistory);
    if (this.context.data.employmentAccidentsHistory.length === 0) {
      this.context.data.employmentAccidentsHistory.push(employmentAccidentHistoryDummyElement);
    }

    console.log("this.context.data.employmentExperienceHistory.length === 0");
    console.log(this.context.data.employmentExperienceHistory.length === 0);
    console.log(this.context.data.employmentExperienceHistory);
    if (this.context.data.employmentExperienceHistory.length === 0) {
      this.context.data.employmentExperienceHistory.push(drivingExperienceDummyElement);
    }
    console.log("this.context.data.licences.length === 0");
    console.log(this.context.data.licences.length === 0);
    console.log(this.context.data.licences);
    if (this.context.data.licences.length === 0) {
      this.context.data.licences.push(driverLicenseDummyElement);
    }

    console.log("this.context.data.references.length === 0");
    console.log(this.context.data.references.length === 0);
    console.log(this.context.data.references);
    if (this.context.data.references.length === 0) {
      this.context.data.references.push(ReferenceDummyElement);
    }

    console.log("this.context.data.violations.length === 0");
    console.log(this.context.data.violations.length === 0);
    console.log(this.context.data.violations);
    if (this.context.data.violations.length === 0) {
      this.context.data.violations.push(trafficConvictionDummyElement);
    }

    this.context.data.applicantfirstName = this.context.data.first_name;
    this.context.data.applicantLastName = this.context.data.last_name;

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
                <EmpApplicationForm8
                  data={this.context.data}
                  handler={[this.gotoNextForm, this.gotoPreviousForm]}
                  setData={this.context.setUserData}
                ></EmpApplicationForm8>
              ) : (
                ""
              )}
              {this.state.formCounter == 9 ? (
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
