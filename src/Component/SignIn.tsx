import React from "react";
import { Link as RouterLink, Redirect } from "react-router-dom";

import { signin } from "../services/logInApi";
import { Result } from "../interfaces/registerinterface";

import NavbarCareer from "./NavbarCareer";
import Footer from "./Footer";

import { user_data } from "./User";

interface LoginProps {
  name?: any;
  value?: any;
}

export interface LoginState {
  user_name: string;
  password: string;
  errors: {
    user_name?: string;
    password?: string;
  };
}

class Login extends React.Component<LoginProps, LoginState> {
  constructor(props: any) {
    super(props);
    const initialState = {
      user_name: "",
      password: "",
      errors: {
        user_name: "",
        password: "",
      },
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
        errors.user_name = value == "" ? "Username must given!" : "";
        break;
      case "password":
        errors.password = value == "" ? "Password Must Be given" : "";
        break;
      default:
        break;
    }
    this.setState(Object.assign(this.state, { errors, [name]: value }));
  };

  handleSubmit = async (event: any) => {
    event.preventDefault();
    let validity = true;
    if (this.state.errors.user_name && this.state.errors.password) {
      validity = false;
    }
    let errors = this.state.errors;
    if (
      validity == true &&
      this.state.user_name != "" &&
      this.state.password != ""
    ) {
      const res = (await signin({
        user_name: this.state.user_name,
        password: this.state.password,
      } as LoginState)) as Result;
      if (res.data) {
        if (res.data.isEditable === "false" || res.data.isDeleted === "True"  || res.data.isDeleted === "true" ) {
          this.setState({
            ...this.state,
            errors: {
              ...errors,
              user_name: "Unable To Login Please Contact Your Administrator",
            },
          });
        } else {
          this.context.setUserData(res.data);
        }
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
    // //console.log("user_data", this.context.data);
    if (this.context.data.user_name) {
      return <Redirect to="/AwbTransportEmploymentApplication" />;
    }
    return (
      <>
        <NavbarCareer addLogout={false} />
        <div id="signup">
          <div className="wrapper">
            <div
              style={{ margin: "20px" }}
              className="col-lg-4 col-md-6 col-sm-6"
            >
              <div className="form-wrapper">
                <h2>Sign In</h2>
                <form onSubmit={this.handleSubmit} noValidate>
                  <div className="user_name">
                    <label htmlFor="fullName">User Name</label>
                    <input
                      type="text"
                      name="user_name"
                      onChange={this.handleChange}
                    />
                    {errors.user_name && errors.user_name.length > 0 && (
                      <span style={{ color: "red" }}>{errors.user_name}</span>
                    )}
                  </div>
                  <div className="password">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      onChange={this.handleChange}
                    />
                    {errors.password ? (
                      <span style={{ color: "red" }}>{errors.password}</span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="submit">
                    <button className="mybtn">Sign In</button>
                  </div>
                </form>
                <div className="submit">
                  <p className="submitparagraph">
                    Or Dont Have an account ?{" "}
                    <RouterLink to="/register" className="myLink">
                      Sign up
                    </RouterLink>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

Login.contextType = user_data;
export default Login;
