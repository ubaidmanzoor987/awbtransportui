import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  HashRouter,
} from "react-router-dom";

import "./App.css";
import { user_data as User, users_data as AdminUser } from "./Component/User";
import SignUp from "./Component/SignUp";
import LogIn from "./Component/SignIn";
import EmploymentApplication from "./Component/EmploymentApplicationForm";
import MainPage from "./Component/MainPage";
import Career from "./Component/CareerOpportunities";
import Logout from "./Component/logout";
import LayoutWithResposiveNavBar from "./Component/LayoutWithResposiveNavBar";
import AdminLogin from "./Component/admin_panel/adminLogin";
import AdminPanel from "./Component/admin_panel/panel";
import Dashboard from "./Component/admin_panel/dashboard";
import LogoutAdmin from "./Component/logoutAdmin";
import EditPdfViwer from "./Component/admin_panel/EditPdf";

function App() {
  const [user_data, setuserData] = useState({});
  const [user_list, setuserListData] = useState({});
  const setUserData = (data: any) => {
    // //console.log("user_data", data);
    setuserData(data);
  };
  const setUserListData = (data: any) => {
    setuserListData(data);
  };

  return (
    <div className="App" >
      <Router>
        <Switch>
          <Route path="/hrportal">
            <AdminUser.Provider
              value={{
                user_list_data: user_list,
                setUserListData,
              }}
            >
              <Switch>
                <Route exact path="/hrportal/login">
                  <AdminLogin />
                </Route>
                <Route exact path="/hrportal/login/panel">
                  <AdminPanel />
                </Route>
                <Route exact path="/hrportal/login/dashboard">
                  <Dashboard />
                </Route>
                <Route exact path="/hrportal/logout/">
                  <LogoutAdmin />
                </Route>
                <Route path="/hrportal/edit/pdf">
                  <EditPdfViwer />
                </Route>
              </Switch>
            </AdminUser.Provider>
          </Route>
          <Route path="/">
            <User.Provider
              value={{
                data: user_data,
                setUserData,
              }}
            >
              <Switch>
                <Route exact path="/">
                  <MainPage />
                </Route>
                <Route exact path="/career">
                  <Career />
                </Route>
                <Route exact path="/register">
                  <SignUp />
                </Route>
                <Route exact path="/login">
                  <LogIn />
                </Route>
                <Route exact path="/logout">
                  <Logout />
                </Route>
                <Route exact path="/tempNewComponent">
                  <LayoutWithResposiveNavBar />
                </Route>
                <Route exact path="/AwbTransportEmploymentApplication">
                  <EmploymentApplication />
                </Route>
                <Route path="*">
                  <div>
                    <p>Error Not Found</p>
                  </div>
                </Route>
              </Switch>
            </User.Provider>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
