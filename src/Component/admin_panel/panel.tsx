import React from "react";
import NavbarCareer from "../NavbarCareer";
import Footer from "../Footer";
import { users_data } from "../User";
import { new_employee_pdf } from "../../services/new_employee_pdf";
import { baseUrl } from "../../shared/baseUrl";

type AdminPanelProps = {
  data?: any;
};

class Adminpanel extends React.Component<AdminPanelProps, {}> {
  constructor(props: any) {
    super(props);
  }

  download_user_cv = (user_name: string,fileName:string) => {
    console.log("user_name");
    console.log(baseUrl + "/api/get_resume?user_name="+user_name+'&'+`${fileName}=${fileName}`);
    window.open(baseUrl + "/api/get_resume?user_name="+user_name+'&'+`${fileName}=${fileName}`, "_blank");
  };

  download_new_employee_pdf = async (user_name: string) => {
    window.open(
      baseUrl + "/api/pdf/new_employee?user_name=" + user_name,
      "_blank"
    );
  };
  download_form_i9 = async (user_name: string) => {
    window.open(baseUrl + "/api/pdf/formi9?user_name=" + user_name, "_blank");
  };

  render() {
    return (
      <>
        <NavbarCareer addLogout={true} />
        <div className="container" style={{ marginTop: "100px" }}>
          <div className="row" style={{ paddingBottom: "50px" }}>
            <div className="col-md-12">
              <h3>Users List</h3>
            </div>
          </div>
          <div className="row" style={{ border: "1px solid black" }}>
            <div className="col-md-2">
              <h6 style={{ paddingTop: "8px" }}>First name</h6>
            </div>
            <div className="col-md-2">
              <h6 style={{ paddingTop: "8px" }}>Last name</h6>
            </div>
            <div className="col-md-2">
              <h6 style={{ paddingTop: "8px" }}>Email</h6>
            </div>
            <div className="col-md-1">
              <h6 style={{ paddingTop: "8px" }}>Resume</h6>
            </div>
            <div className="col-md-5">
              <h6 style={{ paddingTop: "8px" }}>Pdf's</h6>
            </div>
          </div>
          {this.context.user_list_data.map((object: any, i: number) => {
            return (
              <div
                className="row"
                key={i}
                style={{ border: "1px solid black", paddingTop: "3px" }}
              >
                <div className="col-md-2">
                  {object.data.first_name ? (
                    <p style={{ paddingTop: "8px" }}>
                      {object.data.first_name}
                    </p>
                  ) : (
                    <p style={{ color: "red", paddingTop: "8px" }}>
                      No First Name
                    </p>
                  )}
                </div>
                <div className="col-md-2">
                  {object.data.last_name ? (
                    <p style={{ paddingTop: "8px" }}>{object.data.last_name}</p>
                  ) : (
                    <p style={{ color: "red", paddingTop: "8px" }}>
                      No Last Name
                    </p>
                  )}
                </div>
                <div className="col-md-2">
                  {object.data.email ? (
                    <p style={{ paddingTop: "8px" }}>{object.data.email}</p>
                  ) : (
                    <p style={{ color: "red", paddingTop: "8px" }}>
                      No Email Found
                    </p>
                  )}
                </div>
                <div className="col-md-1">
                  <button
                    onClick={() => {
                      this.download_user_cv(object.data.user_name, "resume");
                    }}
                    style={{
                      backgroundColor: "#1E2D3B",
                      color: "white",
                      borderRadius: "8px",
                      marginTop: "8px",
                    }}
                  >
                    Download
                  </button>
                </div>
                <div className="col-md-5">
                  <button
                    onClick={() => {
                      this.download_new_employee_pdf(object.data.user_name);
                    }}
                    style={{
                      backgroundColor: "#1E2D3B",
                      color: "white",
                      borderRadius: "8px",
                      marginLeft: "2px",
                      marginTop: "8px",
                    }}
                  >
                    Employee Info
                  </button>
                  <button
                    onClick={() => {
                      this.download_form_i9(object.data.user_name);
                    }}
                    style={{
                      backgroundColor: "#1E2D3B",
                      color: "white",
                      borderRadius: "8px",
                      marginLeft: "2px",
                      marginTop: "8px",
                    }}
                  >
                    Form i9
                  </button>
                  <button
                    style={{
                      backgroundColor: "#1E2D3B",
                      color: "white",
                      borderRadius: "8px",
                      marginLeft: "2px",
                      marginTop: "8px",
                    }}
                  >
                    fw4
                  </button>
                  <button
                    style={{
                      backgroundColor: "#1E2D3B",
                      color: "white",
                      borderRadius: "8px",
                      marginLeft: "2px",
                      marginTop: "8px",
                    }}
                  >
                    Driver Employment
                  </button>
                  <button
                    style={{
                      backgroundColor: "#1E2D3B",
                      color: "white",
                      borderRadius: "8px",
                      marginLeft: "2px",
                      marginTop: "8px",
                    }}
                  >
                    All
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <Footer />
      </>
    );
  }
}

Adminpanel.contextType = users_data;
export default Adminpanel;
