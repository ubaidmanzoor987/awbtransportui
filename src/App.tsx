import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { user_data as User } from "./Component/User";
import SignUp from "./Component/SignUp";
import LogIn from "./Component/SignIn";
import EmploymentApplication from "./Component/EmploymentApplicationForm";

import "./App.css";
import MainPage from "./Component/MainPage";
import Career from "./Component/CareerOpportunities";
import Logout from "./Component/logout";
import LayoutWithResposiveNavBar from "./Component/LayoutWithResposiveNavBar";

function App() {
  const [user_data, setuserData] = useState({});
  const setUserData = (data: any) => {
    setuserData(data);
  };

  return (
    <User.Provider value={{ data: user_data, setUserData }}>
      <div className="App">
        <Router>
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
          </Switch>
        </Router>
      </div>
    </User.Provider>
  );
}

export default App;
