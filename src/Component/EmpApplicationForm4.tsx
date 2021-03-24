import { Button, Grid, Paper, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import styleClasses from "../Common/styleClasses";
import { update } from "../services/updateApi";
import { snackbarDuratuion } from "../Common/CommonVariables";
import AlertComponent from "./SubComponents/AlertComponent";
import { useEffect } from "react";

type Props = { data?: any; handler?: any; setData: any };

export default function EmpApplicationForm4(props: Props) {
  //-------------SNACKBAR-------------
  const [succesOrErrorBit, setSuccesOrErrorBit] = useState("success");
  const [snackOpen, setSnackOpen] = React.useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackOpen(false);
    console.log("CLOSE AUTO");
    console.log(props);
    // if (succesOrErrorBit === "success") {
    props.handler[0]();
    // }
  };
  //-------------SNACKBAR-------------

  const onSubmit = async (data: any) => {
    props.handler[0]();

    //-------------SNACKBAR-------------
    // setSuccesOrErrorBit("success");
    // setSnackOpen(true);
    // console.log("SUbmits Forms4");

    //-------------SNACKBAR-------------
  };

  const classes = styleClasses.useStyles();
  return (
    <div>
      <Container style={{ backgroundColor: "#fafafa" }}>
        <form onSubmit={onSubmit}>
          <Grid container direction="row" justify="space-evenly" alignItems="center" spacing={3}>
            <Grid item xs={12}>
              <Paper style={{ margin: "10px 0px" }} elevation={3} className={(classes.paper, classes.paperProminantStyle)}>
                <h4>Drug and Alcohol Misuse Policy</h4>
              </Paper>
            </Grid>

            {/* PAGE 1 */}
            <Grid item xs={1}></Grid>
            <Grid item xs={10} style={{ marginBottom: "10px" }}>
              <Paper
                elevation={3}
                style={{ paddingLeft: "40px", paddingRight: "60px" }}
                className={(classes.heading, classes.paperProminantStyle)}
              >
                <Grid container direction="row" justify="space-between" alignItems="baseline" spacing={3}>
                  <Grid item xs={6}>
                    <Typography align="left" variant="subtitle2">
                      AWB Transport Inc
                      <br />
                      5751 La Venta Way
                      <br />
                      Sacramento, CA 95835
                      <br />
                      <br />
                      <br />
                      Effective Date: 7/20/2018
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography align="right" variant="subtitle2">
                      <br />
                      U.S. Department of Transportation
                      <br />
                      Federal Motor Carrier Safety Administration
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography align="center" variant="subtitle2">
                      FEDERAL MOTOR CARRIER SAFETY ADMINISTRATION (FMSCA)
                      <br />
                      <br />
                    </Typography>
                    <Typography align="justify" variant="subtitle2">
                      THIS POLICY APPLIES ONLY TO COMMERCIAL DRIVER'S LICENSE (CDL) HOLDERS AND OTHER DRIVERS AS INDICATED. THESE
                      PROVISIONS ONLY APPLY IF THE CDL IS REQUIRED FOR WORK PURPOSES.
                      <br />
                    </Typography>
                    <br />
                    <Typography align="left" variant="body1">
                      <b>A. General.</b>
                    </Typography>
                    <Typography align="justify" variant="body2">
                      <ol>
                        <li>
                          <b>
                            A complete copy of the anti-drug/alcohol misuse prevention procedures is available to all employees.
                            This policy only discusses the FMCSA provisions of the mandated drug and alcohol testing regulations
                            and how they relate to employees. Portions of this policy that exceed Department of Transportation
                            rules and regulations are in bold.
                          </b>
                        </li>
                        <li>
                          The provisions contained in the Company Anti-Drug/Alcohol Misuse Prevention Plan (AMPP) are applicable
                          to those Company employees who perform safety-sensitive trucking functions covered under 49 CFR Part
                          382. This policy will also be in effect for any employee who hold a Class B or C drivers license.
                          <b>
                            These employees will not be included in the DOT regulated random drug testing pool but will be in a
                            random pool of their own.
                          </b>
                        </li>
                        <li>
                          Company employees who only perform trucking functions must be aware of the general testing provisions
                          discussed in the Company policy and must be aware of the specific highway regulations as set forth in
                          this policy.
                        </li>
                        <li>
                          The Company recognizes that the misuse of drugs and alcohol in today's society is a major problem, which
                          has also found its way into the trucking industry. The purpose of this policy is to reduce highway
                          accidents that result from driver misuse of drugs and alcoholic substances, thereby reducing fatalities,
                          injuries, and property damage. The Department of Transportation, Federal Motor Carrier Safety
                          Administration, has established extensive regulations requiring testing under certain circumstances. In
                          light of the above, the Company has adopted this plan to specify the circumstances under which testing
                          may be required, the procedures for conducting such testing and the methods and procedures for complying
                          with the requirements of the Federal Motor Carrier Safety Administration regulations.
                        </li>
                        <li>
                          The Company will implement necessary and reasonable measures to maintain a work environment, free of
                          drugs and alcohol. Employees with drug and alcohol misuse problems are strongly encouraged to seek
                          assistance.
                        </li>
                        <li>
                          The Companies Designated Employee Representative is <b>Usman Khalid</b>
                        </li>
                        <li>
                          <b>
                            These policies and procedures are not intended to create a contract between the Company and its
                            employees. All employment with the Company is at-will” and can be terminated by the Company or the
                            employee for any reason or no reason.
                          </b>
                        </li>
                      </ol>
                    </Typography>
                    <Typography align="left" variant="body1">
                      <b>B. Applicability.</b>
                    </Typography>
                    <Typography align="justify" variant="body2">
                      <ol>
                        <li>
                          This information is applicable to every Company employee who operates a commercial motor vehicle in
                          interstate or intrastate commerce and is subject to the commercial driver license requirements of 49 CFR
                          Part 382.
                        </li>
                        <li>
                          For purposes of these regulations the Company is considered an employer with regard to the Federal Motor
                          Carrier Safety Administration alcohol regulations. As an employer who employ’s drivers, the Company must
                          comply with the requirements outlined herein as they apply to the employer and to drivers. All Company
                          employees who perform safety-sensitive trucking functions shall be subject to the drug and alcohol
                          misuse testing provisions.
                        </li>
                        <li>The following exceptions apply with regard to the Company and their drivers:</li>
                        <ol type="a">
                          <li>
                            When required to comply with the alcohol and /or controlled substances testing requirements of 49 CFR
                            Parts 653 and 654 of the Federal Transit Administration regulations; OR
                          </li>
                          <li>When granted a full waiver from the requirements of the commercial driver license program; OR</li>
                          <li>When granted an optional State waiver from the requirements of part 383 of this subchapter; OR</li>
                          <li>
                            When foreign domiciled operations, with respect to any driver whose place of reporting for duty (home
                            terminal) for commercial motor vehicle transportation services is located outside the territory of the
                            United States.
                          </li>
                        </ol>
                      </ol>
                    </Typography>
                    <Typography align="left" variant="body1">
                      <b>C. Policy.</b>
                      <br />
                      <b>ALCOHOL PROHIBITIONS</b>
                    </Typography>
                    <Typography align="justify" variant="body2">
                      <ol>
                        <li>
                          <b>Prohibited Alcohol</b>- The presence in the body, possession, use, distribution, dispensing, and/or
                          unlawful manufacture of alcohol or alcoholic products is not condoned while conducting Company business,
                          or while in work areas or Company vehicles on or off Company premises. No employee will work under the
                          influence of alcohol. It will be against the Company policy for any supervisor/manager that has actual
                          knowledge of a driver using a controlled substance or alcohol to permit the driver to perform or
                          continue to perform safety-sensitive functions.
                        </li>
                        <li>
                          <b>Drivers Subject to Alcohol Testing Covered Under This Plan</b>- Company drivers and contract drivers
                          under contract for 90 days or more in any period of 365 days, who perform safety sensitive trucking
                          functions covered under 49 CFR Parts 382 and 383, and who meet the definition of "Driver" in D.6. of
                          this section.
                        </li>
                        <li>
                          <b>Alcohol Prohibitions.</b>
                        </li>
                        <ol type="a">
                          <li>No driver shall be on duty, as defined in 395.2, if the driver uses alcohol.</li>
                          <li>
                            No driver shall be on duty, as defined in 395.2, if the driver tests positive for use of alcohol.
                          </li>
                          <li>
                            A person who tests positive for the use of alcohol is medically unqualified to operate a commercial
                            motor vehicle and will be not be permitted to perform covered functions and may be subject to
                            disciplinary action up to and including termination.
                          </li>
                          <li>
                            A person who refuses to be tested under the plan provisions shall not be permitted to operate a
                            commercial motor vehicle. Such refusal shall be treated as a positive alcohol test and subject the
                            driver to the restrictions contained in paragraph (c) above.
                          </li>
                          <li>No employee will consume alcohol (4) four hours prior to performing safety sensitive functions.</li>
                          <li>
                            It is against Company policy for a driver to consume alcohol within eight (8) hours after an accident
                            that requires a drug alcohol test.
                          </li>
                          <li>
                            It is against policy to allow any driver that has a Breath-Alcohol Content (BrAC) of .02 -039 grams
                            per 210 liters of breath to operate any vehicle. An employee with a BrAC of .02-.039 must be removed
                            from duty for one shift or 24 hours. Upon return to work the employee must have a BrAC below .02.
                          </li>
                          <li>
                            An employee with a BrAC of .04 grams per 210 liters of breath will be considered to be in violation of
                            this policy and the Department of Transportation rules, and will be subject to disciplinary action. An
                            employee with a BrAC of .04 or higher will be considered to be disqualified from driving.
                          </li>
                        </ol>
                      </ol>
                    </Typography>
                    <br />
                    <Typography align="justify" variant="body2">
                      <u>
                        Drug/Alcohol Misuse Prevention Plan herein sets forth the requirements of 49 CFR Parts 382 and 40. Those
                        areas of the plan that appear in bold and underlined print reflect this company? independent authority to
                        require additional provisions with regard to the alcohol testing procedures.
                      </u>
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={1}></Grid>
            {/* BUTTON Start */}
            <Grid item xs={2}></Grid>
            <Grid item xs={4}>
              <Button
                type="button"
                className="col-12"
                variant="contained"
                color="primary"
                onClick={() => {
                  props.handler[1]();
                }}
              >
                Back
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button type="submit" className="col-12" variant="contained" color="primary">
                Save This & Next
              </Button>
            </Grid>
            <Grid item xs={2}></Grid>
            {/* BUTTON End */}
          </Grid>
        </form>
        <AlertComponent
          duration={snackbarDuratuion}
          open={snackOpen}
          onClose={handleClose}
          severity={succesOrErrorBit}
          message="Accepted the Above Terms and Conditions"
        ></AlertComponent>
      </Container>
    </div>
  );
}
