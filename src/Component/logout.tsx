import React, { Component, useContext } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { user_data } from "./User";

class Logout extends Component<{}, {}> {
  componentDidMount() {
    this.context.setUserData({});
    //console.log("context", this.context);
  }
  render() {
    if (!this.context.data.user_name) {
      return <Redirect to="/login" />;
    }
    return <div>logging Out</div>;
  }
}
Logout.contextType = user_data;

export default Logout;
