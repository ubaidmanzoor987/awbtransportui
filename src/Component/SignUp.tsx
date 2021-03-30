import React, { Component } from "react";
import {
  Link as RouterLink,
  withRouter,
  Redirect,
  RouteComponentProps,
} from "react-router-dom";
import { register } from "../services/registerApi";
import NavbarCareer from "./NavbarCareer";
import Footer from "./Footer";
import { Result } from "../interfaces/registerinterface";
import { user_data } from "./User";

function isEmail(val: string) {
  let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regEmail.test(val)) {
    return false;
  }
  return true;
}
export interface SignUpProps {
  name?: any;
  value?: any;
}
export interface SignUpState {
  user_name: string;
  email: string;
  password: string;
  c_password: string;
  toggle_pass: boolean;
  toggle_c_pass: boolean;
  errors: {
    user_name: string;
    email: string;
    password: string;
    c_password: string;
  };
  goto_login: boolean;
}

class SignUp extends Component<
  RouteComponentProps<SignUpProps, any, unknown>,
  SignUpState,
  any
> {
  constructor(props: any) {
    super(props);
    const initialState = {
      user_name: "",
      email: "",
      password: "",
      c_password: "",
      toggle_pass: false,
      toggle_c_pass: false,
      errors: {
        user_name: "",
        email: "",
        password: "",
        c_password: "",
      },
      goto_login: false,
    };
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event: any) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
    switch (name) {
      case "user_name":
        if (value == "") {
          errors.user_name = "user_name must be given";
        } else {
          errors.user_name =
            value.length < 5 ? "user_name must be 5 characters long!" : "";
        }
        break;
      case "email":
        if (value == "") {
          errors.email = "Email Must Be given";
        } else {
          errors.email = isEmail(value) ? "" : "Email is not valid!";
        }

        break;
      case "password":
        if (value == "") {
          errors.password = "Password Must Be given";
        } else {
          errors.password =
            value.length < 8 ? "Password must be eight characters long!" : "";
        }

        break;
      case "c_password":
        if (value == "") {
          errors.c_password = "Confirm Password Must Be given";
        } else if (value.length < 8) {
          errors.c_password = "Password must be eight characters long";
        } else if (
          value.length > 8 &&
          this.state.password != "" &&
          this.state.password != value
        ) {
          //console.log(this.state.password, value);
          errors.c_password = "Password Not Match";
        } else {
          errors.c_password = "";
        }
        break;
      default:
        break;
    }
    this.setState(Object.assign(this.state, { errors, [name]: value }));
    // //console.log(this.state.errors);
  };

  handleSubmit = async (event: any) => {
    event.preventDefault();
    let validity = true;
    let errors = this.state.errors;
    Object.values(this.state.errors).forEach(
      (val) => val.length > 0 && (validity = false)
    );
    if (
      validity == true &&
      this.state.user_name != "" &&
      this.state.password != "" &&
      this.state.email != ""
    ) {
      const res = (await register({
        user_name: this.state.user_name,
        email: this.state.email,
        password: this.state.password,
      } as SignUpState)) as Result;

      if (res.data) {
        //console.log(res.data);
        this.setState({ ...this.state, goto_login: true });
      } else {
        this.setState({
          ...this.state,
          errors: { ...errors, user_name: res.error },
        });
      }
    } else {
      if (this.state.user_name == "") {
        this.setState({
          ...this.state,
          errors: { ...errors, user_name: "Required" },
        });
      } else if (this.state.password == "") {
        this.setState({
          ...this.state,
          errors: { ...errors, password: "Required" },
        });
      }
    }
  };

  render() {
    const { errors } = this.state;
    if (this.state.goto_login) {
      return <Redirect to="/login" />;
    }
    return (
      <>
        <NavbarCareer addLogout={false} />
        <div id="signup">
          <div className="wrapper">
            <div style={{ margin: "20px" }} className="col-lg-4 col-md-6 col-sm-6">
              <div className="form-wrapper">
                <h2>Sign Up</h2>
                <form onSubmit={this.handleSubmit} noValidate>
                  <div className="user_name">
                    <label htmlFor="fullName">User Name</label>
                    <input
                      type="text"
                      name="user_name"
                      onChange={this.handleChange}
                    />
                    {errors.user_name.length > 0 && (
                      <span style={{ color: "red" }}>{errors.user_name}</span>
                    )}
                  </div>
                  <div className="email">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      onChange={this.handleChange}
                    />
                    {errors.email.length > 0 && (
                      <span style={{ color: "red" }}>{errors.email}</span>
                    )}
                  </div>
                  <div className="password">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      onChange={this.handleChange}
                    />
                    {errors.password.length > 0 && (
                      <span style={{ color: "red" }}>{errors.password}</span>
                    )}
                  </div>
                  <div className="password">
                    <label htmlFor="c_password">Confirm Password</label>
                    <input
                      type="password"
                      name="c_password"
                      onChange={this.handleChange}
                    />
                    {errors.c_password.length > 0 && (
                      <span style={{ color: "red" }}>{errors.c_password}</span>
                    )}
                  </div>
                  <div className="submit">
                    <button className="mybtn">Sign up</button>
                  </div>
                  <div className="submit">
                    <p className="submitparagraph">
                      Already Have an account?
                      <RouterLink to="/login" className="myLink">
                        Sign In
                      </RouterLink>{" "}
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default withRouter(SignUp);
