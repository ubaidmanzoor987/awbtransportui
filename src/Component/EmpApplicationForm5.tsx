import { Button, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import styleClasses from "../Common/styleClasses";
import { update } from "../services/updateApi";
import { snackbarDuratuion , autoSubmit} from "../Common/CommonVariables";
import AlertComponent from "./SubComponents/AlertComponent";
import { useEffect } from "react";

type Props = { data?: any; handler?: any; setData: any };

export default function EmpApplicationForm5(props: Props) {
  const classes = styleClasses.useStyles();
  const Forms = useForm({
    defaultValues: props.data,
  });
  const { register, handleSubmit, errors, control,getValues } = Forms;
  const watchAll = getValues();

  useEffect(() => {
    window.scrollTo(0, 0);
            if(autoSubmit){
    let watchAll = getValues();
      onSubmit(watchAll );
    }
  }, []);

  //-------------SNACKBAR-------------
  const [succesOrErrorBit, setSuccesOrErrorBit] = useState("success");
  const [snackOpen, setSnackOpen] = React.useState(false);

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackOpen(false);
  //console.log("CLOSE AUTO");
  //console.log(succesOrErrorBit);

    if (succesOrErrorBit === "success") {
      // props.handler[0]();
    }
  };
  //-------------SNACKBAR-------------

  const onSubmit = async (data: any) => {
    //-------------SNACKBAR-------------
    // setSuccesOrErrorBit("success");
    // setSnackOpen(true);
    //-------------SNACKBAR-------------
    props.handler[0]();
  };

  return (
    <div>
      <Container style={{ backgroundColor: "#fafafa" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
            spacing={3}
          >
            {/* PAGE 2 */}
            <Grid item  xs={12} sm={12} md={10} style={{ marginBottom: "10px" }}>
              <Paper
                elevation={3}
                style={{ paddingLeft: "40px", paddingRight: "60px" }}
                className={(classes.heading, classes.paperProminantStyle)}
              >
                <Grid
                  container
                  direction="row"
                  justify="space-evenly"
                  alignItems="baseline"
                  spacing={3}
                >
                  <Grid item xs={12} sm={12} md={12}>
                    <input type="hidden" value="true" id="form5" name="form5" />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12}>
                    <Typography align="justify" variant="subtitle2">
                      <b>DRUG PROHIBITIONS</b>
                      <br />
                    </Typography>
                    <br />
                    <Typography align="justify" variant="body2">
                      <ol>
                        <li>
                          <u>Prohibited Drugs -</u> The presence in the body
                          (including the presence as a metabolite), possession,
                          use, distribution, dispensing, and/or unlawful
                          manufacture of prohibited drugs is not condoned while
                          conducting Company business, or while in work areas or
                          Company vehicles on or off Company premises. No
                          employee will work under the influence of prohibited
                          drugs. The following drugs are prohibited:
                          <b>
                            Marijuana, Cocaine, Opioids, Amphetamines,
                            Phencyclidine, 6AM, Ecstasy
                          </b>
                        </li>
                        <li>
                          <u>
                            Drivers Subject to Testing Covered Under This Plan
                          </u>{" "}
                          - Company drivers and contract drivers under contract
                          for 90 days or more in any period of 365 days, who
                          perform safety sensitive trucking functions covered
                          under 49 CFR Parts 382 and 383, and who meet the
                          definition of "Driver" in D.6. of this section.
                        </li>
                        <li>
                          <u>Drug Use Prohibitions</u>
                        </li>
                        <ol>
                          <li>
                            No driver shall be on duty, as defined in 395.2, if
                            the driver uses any controlled substance, except as
                            provided in 391.97 (prescribed drugs).
                          </li>
                          <li>
                            No driver shall be on duty, as defined in 395.2, if
                            the driver tests positive for use of controlled
                            substances, except as provided in 397.97 (prescribed
                            drugs).
                          </li>
                          <li>
                            A person who tests positive for the use of a
                            controlled substances as defined in 49 CFR Part 40,
                            is medically unqualified to operate a commercial
                            motor vehicle and will be suspended without pay.
                          </li>
                          <li>
                            A person who refuses to be tested under the plan
                            provisions shall not be permitted to operate a
                            commercial motor vehicle. Such refusal shall be
                            treated as a positive test and subject the driver to
                            the restrictions contained in paragraph (c) above.
                          </li>
                          <li>
                            <b>
                              Use of a prescription drug, where the prescribing
                              physician advises that it could impair the ability
                              of an employee to operate in a safety sensitive
                              manner must be reported to the employee’s
                              supervisor.
                            </b>
                          </li>
                        </ol>
                      </ol>
                    </Typography>
                    <Typography align="left" variant="body1">
                      <b>D. Definitions:</b>
                    </Typography>
                    <Typography align="justify" variant="body2">
                      <ol>
                        <li>
                          <b>"Alcohol"</b> means the intoxicating agent in
                          beverage alcohol, ethyl alcohol, or other low
                          molecular weight alcohols including methyl and
                          isopropyl alcohol.
                        </li>
                        <li>
                          <b>"Alcohol Concentration"</b> means the alcohol in a
                          volume of breath expressed in terms of grams of
                          alcohol per 210 liters of breath.
                        </li>
                        <li>
                          <b>"Alcohol Testing"</b> - testing conducted by a
                          Department of Transportation (DOT), certified
                          breath-alcohol technician using a DOT approved
                          breath-testing device.
                        </li>
                        <li>
                          <b>"Commercial Motor Vehicle"</b> - means a motor
                          vehicle or combination of motor vehicles used in
                          commerce to transport passengers or property if the
                          motor vehicle-
                        </li>
                        <ol>
                          <li>
                            Has a gross combination weight rating of 26,001 or
                            more pounds inclusive of a towed unit with a gross
                            vehicle weight rating of more than 10,000 pounds; or
                          </li>
                          <li>
                            Has a gross vehicle weight rating of 26,001 or more
                            pounds; or
                          </li>
                          <li>
                            Is designed to transport 16 or more passengers,
                            including the driver; or
                          </li>
                          <li>
                            Is of any size and is used in the transportation of
                            material found to be hazardous for the purposes of
                            the Hazardous Materials Transportation Act and which
                            require the motor vehicle to be placard under the
                            Hazardous Materials Regulations (CFR part 172,
                            subpart F).
                          </li>
                        </ol>
                        <li>
                          <b>“Controlled Substance”</b> - any substance
                          including those assigned by 21U.S.C. 802 and includes
                          all substances listed on Schedule I. through Schedule
                          V., as they may be revised from time to time (21 CFR
                          1308). Specifically for this policy a Controlled
                          Substance is one listed in Section 40.85 49 CFR part
                          382.
                        </li>
                        <li>
                          <b>“Driver”</b> - means any person who operates a
                          commercial motor vehicle. This includes, but is not
                          limited to: full time, regularly employed drivers;
                          casual, intermittent or occasional drivers; leased
                          drivers and independent, owner-operator contractors
                          who are either directly employed by or under lease to
                          an employer or who operate a commercial motor vehicle
                          at the direction of or with the consent of an
                          employer. For the purposes of pre-employment/pre-duty
                          testing only, the term driver includes a person
                          applying to an employer to drive a commercial motor
                          vehicle.
                        </li>
                        <li>
                          <b>“Drug Testing” or “Drug Test”</b> - scientific
                          analysis for the presence of drugs or their
                          metabolites in the human body.
                        </li>
                        <li>
                          <b>“DER”</b> (Designated Employee Representative) is
                          an individual identified by the employer as able to
                          receive communications and test results from service
                          agents and who is authorized to take immediate actions
                          to remove employees from safety-sensitive duties and
                          to make required decisions in the testing and
                          evaluation process. The individual must be an employee
                          of the Company and not be a service agent
                        </li>
                        <li>
                          <b>“Employee”</b>- individual or officer in the
                          service of the employer for compensation.
                        </li>
                        <li>
                          <b>“Employer”</b> - means any person (including the
                          United States, a State, District of Columbia or a
                          political subdivision of a State) who owns or leases a
                          commercial motor vehicle or assigns persons to operate
                          such a vehicle. The term employer includes an employer
                          agents, officers and representatives.
                        </li>
                        <li>
                          <b>“Interstate Commerce”</b> - means (1) any trade,
                          traffic, or transportation within the jurisdiction of
                          the United States between a place in a State and a
                          place outside of such State, including a place outside
                          of the United States, and (2) trade, traffic, and
                          transportation in the United States which affects any
                          trade, traffic, and transportation as described above
                          in this definition.
                        </li>
                        <li>
                          <b>"Medical Review Officer (MRO)"</b> – a licensed
                          physician responsible for receiving laboratory results
                          generated by an employer drug testing program who has
                          knowledge of substance abuse disorders and has
                          appropriate medical training to interpret and evaluate
                          an individual confirmed positive test result together
                          with his or her medical history and any other relevant
                          biomedical information.
                        </li>
                        <li>
                          <b>“Motor Carrier”</b> - means a for-hire motor
                          carrier or a private motor carrier of property. The
                          term “motor carrier” includes a motor carrier agents,
                          officers and representatives as well as employees
                          responsible for hiring, supervising, training,
                          assigning, or dispatching of drivers and employees
                          concerned with the installation, inspection, and
                          maintenance of motor vehicle equipment and/or
                          accessories.
                        </li>
                        <li>
                          <b>“On-Duty Time”</b> - means all time from the time a
                          driver begins to work or is required to be in
                          readiness to work until the time he/she is relieved
                          from work and all responsibility for performing work.
                          On duty time shall include:
                        </li>
                        <ol>
                          <li>
                            All time at a carrier or shipper plant, terminal,
                            facility, or other property, or on any public
                            property, waiting to be dispatched, unless the
                            driver has been relieved from duty by the motor
                            carrier;
                          </li>
                          <li>
                            All time inspecting equipment as required by 392.7
                            and 392.8 of this chapter or otherwise inspecting,
                            servicing, or conditioning any commercial motor
                            vehicle at any time;
                          </li>
                          <li>
                            All driving time as defined in the term driving time
                            in this section;
                          </li>
                          <li>
                            All time, other than driving time, in or upon any
                            commercial motor vehicle except time spent resting
                            in a sleeper berth as defined by the term sleeper
                            berth of this section;
                          </li>
                          <li>
                            All time loading or unloading a vehicle,
                            supervision, or assisting in the loading or
                            unloading, attending a vehicle being loaded or
                            unloaded, remaining in readiness to operate the
                            vehicle, or in giving or receiving receipts from
                            shipments loaded or unloaded;
                          </li>
                          <li>
                            All time spent performing the driver requirements of
                            392.40 and 392.41 of this chapter relating to
                            accidents;
                          </li>
                          <li>
                            All time repairing, obtaining assistance, or
                            remaining in attendance upon a disabled vehicle;
                          </li>
                        </ol>
                        <li>
                          <b>“On Duty or Safety Sensitive Function”</b> - all
                          time from the time a driver begins to work or is
                          required to be in readiness to work until the time
                          he/she is relieved from work and all responsibility
                          for performing work. This shall include:
                        </li>
                        <ol>
                          <li>All time driving.</li>
                          <li>
                            All time repairing, obtaining assistance, or
                            remaining in attendance upon a disabled vehicle.
                          </li>
                          <li>
                            All time other than driving time, in or upon any
                            commercial motor vehicle except time spent sleeping
                            or resting in a sleeper berth.
                          </li>
                          <li>
                            All time inspecting equipment or servicing a vehicle
                          </li>
                          <li>
                            All time at an employer or shipper plant, terminal,
                            facility or other property, or on any public
                            property, waiting to be dispatched, unless the
                            driver has been relieved from duty by the employer.
                          </li>
                        </ol>
                        <li>
                          <b>“Performing (a safety-sensitive function)”</b> -
                          means a driver is considered to be performing a
                          safety-sensitive function during any period in which
                          he/she is actually performing, ready to perform, or
                          immediately available to perform any safety-sensitive
                          functions.
                        </li>
                        <li>
                          <b>"Post-Accident Testing"</b> – is required when
                          there is an occurrence involving a commercial motor
                          vehicle operating on a public road in interstate or
                          intrastate commerce which results in the following:
                        </li>
                        <ol>
                          <li>a fatality; or</li>
                          <li>
                            and accident where a driver receives a moving
                            violation citation and one of the following occurs
                          </li>
                          <ol>
                            <li>
                              injury to a person who, as a result of the injury,
                              immediately receives medical treatment away from
                              the scene of the accident;
                            </li>
                            <li>
                              or one or more motor vehicles incurring disabling
                              damage as a result of the accident, requiring the
                              motor vehicle to be transported away from the
                              scene by a tow truck or other motor vehicle and
                              the driver receives a moving citation violation.
                            </li>
                          </ol>
                        </ol>
                        <li>
                          <b>“Prospective Employee”</b> - any individual who has
                          made a written or oral application to become an
                          employee of the Company.
                        </li>
                        <li>
                          <b>“Reasonable Suspicion" or "For Cause Testing”</b> -
                          an articulated belief, based on recorded specific
                          facts and reasonable inference drawn from those facts
                          that an employee is in violation of this policy.
                        </li>
                        <li>
                          <b>“Random Testing”</b> - unannounced drug testing of
                          an employee who was selected by using a method
                          uninfluenced by any personal characteristic other than
                          job category.
                        </li>
                        <li>
                          <b>“Refusal”</b> means that a driver:
                        </li>
                        <ol>
                          <li>
                            Fails to show up for any test within a reasonable
                            time after being directed to do so by the employer
                            or to remain at the testing site until the testing
                            process is complete. This includes the failure of an
                            employee (including an owner-operator) to appear for
                            a test when called by a Consortium/Third Party
                            Administrator.
                          </li>
                          <li>
                            Fails to provide a urine specimen for any drug test
                            require by the Act.
                          </li>
                          <li>
                            In the case of a directly observed or monitored
                            collection in a drug test, fails to permit the
                            observation of monitoring of the provision of a
                            specimen (Sec. Sec 40.76(k) and 40.69 (g) of this
                            title.
                          </li>
                          <li>
                            Fails to provide a sufficient amount of urine when
                            directed, unless it has been determined through a
                            required medical evaluation, that there was an
                            adequate medical explanation for the failure.
                          </li>
                          <li>
                            Fails to undergo an additional medical evaluation as
                            directed by the MRO as part of the verification
                            process or as directed by the DER concerning the
                            evaluation of the shy bladder procedures in part 40,
                            subpart I of this title.
                          </li>
                          <li>
                            Fails to cooperate with any part of the testing
                            process.
                          </li>
                          <li>
                            Fails or declines to take a second test the employer
                            has directed following a negative dilute result.
                          </li>
                        </ol>
                        <li>
                          <b>“Sample”</b> - any sample of urine, blood, breath,
                          saliva used for drug and/or alcohol testing.
                        </li>
                        <li>
                          <b>“Safety Sensitive Position”</b> - all employees who
                          possess Commercial Driver's Licenses (CDL's) and who
                          operate a vehicle with the following characteristics:
                        </li>
                        <ol>
                          <li>
                            Has a gross combination weight rating of 26,001 or
                            more pounds inclusive of a towed unit with a gross
                            vehicle weight rating of more than 10,000 pounds; or
                          </li>
                          <li>
                            Has a gross vehicle weight rating of 26,001 or more
                            pounds; or
                          </li>
                          <li>
                            Is designed to transport 16 or more passengers,
                            including the driver; or
                          </li>
                          <li>
                            Is of any size and is used in the transportation of
                            material found to be hazardous for the purposes of
                            the Hazardous Materials Transportation Act and which
                            require the motor vehicle to be placard under the
                            Hazardous Materials Regulations (CFR part 172,
                            subpart F).
                          </li>
                        </ol>
                      </ol>
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            {/* BUTTON Start */}
            <Grid item   xs={8} sm={7} md={4}>
              <Button
                type="button"
                className="col-8"
                variant="contained"
                color="primary"
                onClick={() => {
                  props.handler[1]();
                }}
              >
                Back
              </Button>
            </Grid>
            <Grid item xs={8} sm={7} md={4}>
              <Button
                onClick={()=>{props.handler[0]();}}
                className="col-8"
                variant="contained"
                color="primary"
              >
                Next
              </Button>
            </Grid>
     
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
