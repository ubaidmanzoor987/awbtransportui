import { execArgv } from "process";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { TextField, InputLabel, MenuItem, Select, Button } from "@material-ui/core";
import { withStyles, Theme } from "@material-ui/core/styles";
import { Address } from "../Types/types";
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
import DrivingExperience from "./DrivingExperience";
import EmpApplicationForm4 from "./EmpApplicationForm4";
import EmpApplicationForm5 from "./EmpApplicationForm5";
import EmpApplicationForm6 from "./EmpApplicationForm6";

type EmploymentApplicationStates = {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  dateofBirth: string;
  socialSecurity: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  lastThreeYearResidenceCheck: boolean;
  addresses: Address[];
  resume?: File;
  startTime: string;
  hearAbout: string;
  eligibletoWorkInUnitedState: boolean;
  classAExperienceLevel: boolean;
  willingForDrugTest: boolean;
  errors: formErrors;
  open: boolean;
};

type formErrors = {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  dateofBirth: string;
  socialSecurity: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  lastThreeYearResidenceCheck: boolean;
  addresses: Address[];
  resume?: File;
  startTime: string;
  hearAbout: string;
  eligibletoWorkInUnitedState: boolean;
  classAExperienceLevel: boolean;
  willingForDrugTest: boolean;
};

interface EmploymentApplicationProps {
  classes: any;
}

const styles = (theme: Theme) => ({
  root: {},
});

class EmploymentApplication extends Component<EmploymentApplicationProps, EmploymentApplicationStates> {
  constructor(props: any) {
    super(props);
    const initstate = {
      first_name: "",
      last_name: "",
      phone_number: "",
      dateofBirth: "",
      socialSecurity: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      lastThreeYearResidenceCheck: false,
      addresses: [],
      startTime: "",
      hearAbout: "",
      eligibletoWorkInUnitedState: false,
      classAExperienceLevel: false,
      willingForDrugTest: false,
      email: "",
      open: false,
      errors: {
        first_name: "",
        last_name: "",
        phone_number: "",
        dateofBirth: "",
        socialSecurity: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
        lastThreeYearResidenceCheck: false,
        addresses: [],
        startTime: "",
        hearAbout: "",
        eligibletoWorkInUnitedState: false,
        classAExperienceLevel: false,
        willingForDrugTest: false,
        email: "",
      },
    };
    this.state = initstate;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    console.log("context", this.context);
    if (this.context.data.user_name) {
      this.setState(this.context.data);
    }
  }

  handleSubmit(event: any) {
    event.preventDefault();
    console.log(event.target);
  }

  handleChange(event: any) {
    event.preventDefault();
    const { name, value } = event.target;
    console.log("handleChange", value);
    let errors = this.state.errors;
    let error: string | undefined;
    switch (name) {
      case "first_name":
        errors.first_name = value == "" ? "Required!" : "";
        error = errors.first_name;
        break;
      case "phone_number":
        errors.phone_number = value == "" ? "Required" : "";
        error = errors.phone_number;
        break;
      case "dateofBirth":
        errors.dateofBirth = value == "" ? "Required" : "";
        error = errors.dateofBirth;
        break;
      case "socialSecurity":
        errors.socialSecurity = value == "" ? "Required" : "";
        error = errors.socialSecurity;
        break;
      case "state":
        errors.state = value == "" ? "Required" : "";
        error = errors.state;
        break;
      default:
        break;
    }
    // this.setState(Object.assign(this.state, { name: value, errors }));
    // this.setState(Object.assign(this.state, { errors, [name]: value }));
    console.log("this.state", this.state);
  }

  render() {
    const { classes } = this.props;
    const { errors } = this.state;
    if (!this.context.data.user_name) {
      return <Redirect to="/login" />;
    }
    return (
      <>
        <NavbarCareer addLogout={true} />
        <div className="container-fluid">
          <div className="row">
            <div className="col mySideBar" style={{ flexGrow: 0, paddingLeft: "0px", paddingRight: "0px" }}>
              <SideBar activeEmployment={false} />
            </div>
            <div className="col-9" style={{ paddingTop: "100px" }}>
              {/* DrivingExperience in EmploymentForm 3 */}
              {/* <DrivingExperience></DrivingExperience> */}
              {/* <EmpApplicationForm6></EmpApplicationForm6> */}
              {/* <EmpApplicationForm5></EmpApplicationForm5> */}
              {/* <EmpApplicationForm4></EmpApplicationForm4> */}
              {/* <EmpApplicationForm3></EmpApplicationForm3> */}
              {/* <EmpApplicationForm2></EmpApplicationForm2> */}
              <EmpApplicationForm1></EmpApplicationForm1>
              {/* <section className="form-section" id="employmentapplication">
                <div className="row mt-1">
                  <div className="col-12 mt-1">
                    <h4 className="form-header-h2 text-center">
                      AWB Transport Inc., Employment Application
                    </h4>
                    <h5 className="section-subheading text-muted mt-1">
                      Employment Application
                    </h5>
                  </div>
                </div>
                <form
                  onSubmit={this.handleSubmit}
                  className="formStyle"
                  noValidate
                  autoComplete="off"
                >
                  <div className="row mt-3">
                    <div className="col-6">
                      <TextField
                        name="first_name"
                        required
                        error={errors.first_name != ""}
                        id="filled-required"
                        label={"First Name " + errors.first_name}
                        variant="outlined"
                        onChange={this.handleChange}
                        className="col-10 mytextField"
                        value={this.state.first_name}
                      />
                    </div>
                    <div className="col-6">
                      <TextField
                        name="last_name"
                        label={"Last Name"}
                        value={this.state.last_name}
                        variant="outlined"
                        onChange={this.handleChange}
                        className="col-10 mytextField"
                      />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-6">
                      <TextField
                        name="phone_number"
                        required={errors.phone_number == ""}
                        error={errors.phone_number != ""}
                        id="filled-required"
                        label={
                          errors.phone_number != ""
                            ? errors.phone_number
                            : "Phone Number"
                        }
                        variant="outlined"
                        onChange={(e) => this.handleChange(e)}
                        className="col-10 mytextField"
                        value={this.state.phone_number}
                      />
                    </div>
                    <div className="col-6">
                      <TextField
                        label="Email"
                        variant="outlined"
                        value={this.state.email}
                        className="col-10 mytextField"
                        color="primary"
                        id="outlined-read-only-input"
                        InputProps={{
                          readOnly: true,
                        }}
                      />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-6">
                      <TextField
                        name="dateofBirth"
                        required={errors.dateofBirth == ""}
                        error={errors.dateofBirth != ""}
                        id="date"
                        type="date"
                        label={
                          errors.dateofBirth != ""
                            ? errors.dateofBirth
                            : "Date Of Birth"
                        }
                        variant="outlined"
                        onChange={(e) => this.handleChange(e)}
                        className="col-10 mytextField"
                        value={this.state.dateofBirth}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>
                    <div className="col-6">
                      <TextField
                        name="socialSecurity"
                        required={errors.socialSecurity == ""}
                        error={errors.socialSecurity != ""}
                        id="filled-required"
                        label={
                          errors.socialSecurity != ""
                            ? errors.socialSecurity
                            : "Social Security"
                        }
                        variant="outlined"
                        onChange={(e) => this.handleChange(e)}
                        className="col-10 mytextField"
                        value={this.state.socialSecurity}
                      />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-12">
                      <TextField
                        name="address"
                        required={errors.address == ""}
                        error={errors.address != ""}
                        label={
                          errors.address != "" ? errors.address : "Address"
                        }
                        variant="outlined"
                        onChange={(e) => this.handleChange(e)}
                        className="col-11 mytextField"
                        value={this.state.address}
                      />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-6">
                      <FormControl className="col-10 mytextField">
                        <Select
                          value={this.state.state}
                          name="state"
                          variant="outlined"
                          label="State"
                          onClose={() =>
                            this.setState({ ...this.state, open: false })
                          }
                          onOpen={() =>
                            this.setState({ ...this.state, open: true })
                          }
                          onChange={(e) => this.handleChange(e)}
                        >
                          <MenuItem value="" disabled>
                            State
                          </MenuItem>
                          {states.map((state) => (
                            <MenuItem value={state.value} key={state.value}>
                              {state.value}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </div>
                    <div className="col-6">
                      <TextField
                        name="city"
                        required={errors.city == ""}
                        error={!(errors.city == "")}
                        label={errors.city != "" ? errors.city : "City"}
                        variant="outlined"
                        onChange={(e) => this.handleChange(e)}
                        className="col-10 mytextField"
                        value={this.state.address}
                      />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-3">
                      <TextField
                        name="zipCode"
                        required={errors.zipCode == ""}
                        error={!(errors.zipCode == "")}
                        label={
                          errors.zipCode != "" ? errors.zipCode : "Zip Code"
                        }
                        type="text"
                        variant="outlined"
                        onChange={(e) => this.handleChange(e)}
                        className="col-10 mytextField"
                        value={this.state.zipCode}
                      />
                    </div>
                    <div className="col-9">
                      <FormControl component="fieldset">
                        <FormLabel component="legend">
                          Have You Lived At This Residence For The Past 3 Years?
                        </FormLabel>{" "}
                        <RadioGroup
                          row
                          aria-label="position"
                          name="position"
                          defaultValue="top"
                        >
                          <FormControlLabel
                            value="start"
                            control={<Radio color="primary" />}
                            label="Start"
                            labelPlacement="start"
                          />
                          <FormControlLabel
                            value="start"
                            control={<Radio color="primary" />}
                            label="Start"
                            labelPlacement="start"
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-12">
                      <Button
                        variant="contained"
                        className="col-3"
                        color="primary"
                        type="submit"
                      >
                        Submit
                      </Button>
                    </div>
                  </div>
                </form>
              </section> */}
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
