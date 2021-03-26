import React from "react";
import { Link as RouterLink, Redirect } from "react-router-dom";
import { get_all_users } from "../../services/get_all_users_api";
import NavbarCareer from "../NavbarCareer";
import Footer from "../Footer";
import { users_data } from "../User";

export interface LoginPanelState {
  user_name: string;
  password: string;
  chk_login: boolean;
  errors: {
    user_name: string;
    password: string;
  };
}

class AdminLogin extends React.Component<{}, LoginPanelState> {
  constructor(props: any) {
    super(props);
    const initialState = {
      user_name: "",
      password: "",
      errors: {
        user_name: "",
        password: "",
      },
      chk_login: false,
    };
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    //console.log("context", this.context);
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
    let errors = this.state.errors;

    Object.values(this.state.errors).forEach(
      (val) => val.length > 0 && (validity = false)
    );
    if (
      validity == true &&
      this.state.user_name != "" &&
      this.state.password != "" &&
      this.state.user_name == "admin" &&
      this.state.password == "admin@admin.com"
    ) {
      const res = (await get_all_users()) as any;
      //console.log("res = ", res);
      if (res) {
        //console.log("res1 = ", this.context);
        this.context.setUserListData(res);
        this.setState({
          ...this.state,
          chk_login: true,
        });
      }
    } else if (this.state.user_name != 'admin'){
      this.setState({
        ...this.state,
        errors: { ...errors, user_name: "Invalid User Name and Password" },
      })
      
    }
  };

  render() {
    const { errors } = this.state;
    if (this.state.chk_login) {
      return <Redirect to="/admin/login/panel" />;
    }
    return (
      <>
        <NavbarCareer addLogout={false} />
        <div id="signup">
          <div className="wrapper">
            <div style={{ margin: "20px" }} className="col-sm-3">
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
                    {errors.user_name == "" && (
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
                    {errors.password.length > 0 && (
                      <span style={{ color: "red" }}>{errors.password}</span>
                    )}
                  </div>
                  <div className="submit">
                    <button className="mybtn">Sign In</button>
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

AdminLogin.contextType = users_data;
export default AdminLogin;