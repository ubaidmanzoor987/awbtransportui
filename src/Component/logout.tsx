import React, { Component, useContext } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { user_data } from "./User";

type Props = {
  chk_admin_logout?: Boolean
};
class Logout extends Component<Props, {}> {
  componentDidMount() {
    this.context.setUserData({});
    //console.log("context", this.context);
  }
  render() {
    if (this.props.chk_admin_logout) {
      return <Redirect to="/hrportal/login" />; 
    }
    if (!this.context.data.user_name) {
      return <Redirect to="/login" />;
    }
    return <div>logging Out</div>;
  }
}
Logout.contextType = user_data;

export default Logout;
