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
import { for_production } from "../shared/baseUrl";

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
      formCounter: (for_production===true)?(1):(3),
    };

    this.gotoNextForm = this.gotoNextForm.bind(this);
    this.gotoPreviousForm = this.gotoPreviousForm.bind(this);
  }

  insertDummyData() {
    // console.log("this.context.data");
    // console.log(this.context.data);

    if(!this.context.data.companyName || this.context.data.companyName === "") {
      this.context.data.companyName = "AWB Transport Inc";
    }

    if(!this.context.data.companyAddress || this.context.data.companyAddress === "") {
      this.context.data.companyAddress = "5751 La Venta Way";  
    }

    if(!this.context.data.companyCity || this.context.data.companyCity === "") {
      this.context.data.companyCity = "Sacramento";
    }

    if(!this.context.data.companyState || this.context.data.companyState === "") {
      this.context.data.companyState = states[8].value;
    }

    if(!this.context.data.companyPostCode || this.context.data.companyPostCode === "") {
      this.context.data.companyPostCode = "95835";
    }


    if (!this.context.data.applicantAddresses || this.context.data.applicantAddresses.length == 0) {
      this.context.data.applicantAddresses = [dummyAddrData];
    }
    
    if (!this.context.data.addresses || this.context.data.addresses.length === 0) {
      this.context.data.addresses = [dummyAddrData];
    }

 
    if (!this.context.data.employmentHistory || this.context.data.employmentHistory.length === 0) {
      this.context.data.employmentHistory = [employmentHistoryDummyElement];
    }

 
    if (!this.context.data.employmentAccidentsHistory || this.context.data.employmentAccidentsHistory.length === 0) {
      this.context.data.employmentAccidentsHistory = [employmentAccidentHistoryDummyElement];
    }

 
    if (!this.context.data.employmentExperienceHistory || this.context.data.employmentExperienceHistory.length === 0) {
      this.context.data.employmentExperienceHistory = [drivingExperienceDummyElement];
    }
 
    if (!this.context.data.licences || this.context.data.licences.length === 0) {
      this.context.data.licences = [driverLicenseDummyElement];
    }

  
    if (!this.context.data.references || this.context.data.references.length === 0) {
      this.context.data.references = [ReferenceDummyElement];
    }

  
    if (!this.context.data.violations || this.context.data.violations.length === 0) {
      this.context.data.violations = [trafficConvictionDummyElement];
    }

    this.context.data.applicantfirstName = this.context.data.first_name;
    this.context.data.applicantLastName = this.context.data.last_name;

  }

  componentDidMount() {
    
    if (!this.context.data.user_name) {
      return <Redirect to="/login" />;
    }
    
    if (this.context.data.user_name) {
      this.setState(this.context.data);
    }

    this.insertDummyData();

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
  //console.log(this.context.data);

    if (!this.context.data.user_name) {
      return <Redirect to="/login" />;
    }
 
    this.insertDummyData();

    return (
      <>
        <NavbarCareer addLogout={true} />
        <div className="container-fluid" style={{minWidth:"700px"}}>
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
