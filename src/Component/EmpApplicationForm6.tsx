import { Button, Grid, Paper, Typography, TextField } from "@material-ui/core";
import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import styleClasses from "../Common/styleClasses";
import { reqBits, RequireError } from "../Common/CommonVariables";
import { useForm } from "react-hook-form";
import drug_and_alcohol_policy_snapshot_1 from "../assets/images/drug and alcohol policy snapshot 1.jpg";
import SignatureCanvas from "react-signature-canvas";
import { update } from "../services/updateApi";
import { useRef } from "react";

type Props = { data?: any; handler?: any; setData: any };

export default function EmpApplicationForm6(props: Props) {
  const classes = styleClasses.useStyles();
  const { register, handleSubmit, errors } = useForm({
    defaultValues: props.data,
  });

  const sigPad = useRef<any>();
  let base64SignatureImage = "";

  const clearSigPad = () => {
    if (sigPad && sigPad.current) {
      sigPad.current?.clear();
      base64SignatureImage = "";
    }
  };

  const saveImage = () => {
    if (sigPad.current && !sigPad.current.isEmpty()) {
      base64SignatureImage = sigPad.current
        ?.getTrimmedCanvas()
        .toDataURL("image/png");
    }
  };

  const onSubmit = async (data: any) => {
    if (sigPad.current && sigPad.current.isEmpty()) return;
    {
      base64SignatureImage = sigPad.current
        .getTrimmedCanvas()
        .toDataURL("image/png");
    }
    data.alcoholTestEmployeeSignature = base64SignatureImage;
    data.user_name = props.data.user_name;
    const resdata = await update(data);
    console.log(
      "-------------------FORM 6 Submited Data and Response-------------------"
    );
    props.setData(resdata.data.data);
    props.handler[0]();
  };

  return (
    <div>
      <Container style={{ backgroundColor: "#fafafa" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
            spacing={3}
          >
            {/* PAGE 2 */}
            <Grid item xs={10} style={{ marginBottom: "10px" }}>
              <Paper
                elevation={3}
                style={{ paddingLeft: "40px", paddingRight: "60px" }}
                className={(classes.heading, classes.paperProminantStyle)}
              >
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="baseline"
                  spacing={3}
                >
                  <Grid item xs={12}>
                    <Typography align="justify" variant="subtitle2">
                      <b>E. Alcohol Testing.</b>
                      <br />
                    </Typography>
                    <br />
                    <Typography align="justify" variant="body2">
                      <ol>
                        <li>
                          <u>
                            <b>
                              Pre-Employment (Background Check Only – Alcohol
                              Testing is Optional).
                            </b>
                          </u>
                          The company must obtain and review the information
                          listed below from any employer for whom the driver
                          performed safety-sensitive functions in the previous
                          two years. The information must be obtained and
                          reviewed to later than 30 days after the driver
                          performs safety-sensitive functions (driving).
                          <ul>
                            <li>
                              Information of the driver's alcohol test in which
                              a breath alcohol concentration of 0.04 or greater
                              was indicated
                            </li>
                            <li>
                              Information on the driver’s-controlled substances
                              test in which a positive result was indicated.
                            </li>
                            <li>
                              Any refusal to submit to a required alcohol or
                              controlled substance test.
                            </li>
                          </ul>
                          The company must provide to each of the driver's
                          previous employers of the past two years a written
                          authorization from the driver for the release of the
                          required information. The company may not use a driver
                          to perform safety-sensitive functions if the employer
                          obtains information indicating the driver has tested
                          positive for controlled substances, tested at or above
                          .04 breath alcohol concentration, or refused to test
                          unless the employer has evidence the driver has been
                          evaluated by a SAP, completed any required counseling,
                          passed a return-to-duty test, and been subject to
                          follow-up testing.
                        </li>
                        <li>
                          <u>Random Testing</u>
                          <ul>
                            <li>
                              Employees in "covered" positions will be subject
                              to random testing at any time with no advance
                              notice. The random selection process will ensure
                              each employee the same fair and equal chance of
                              being selected.
                            </li>
                            <li>
                              An employee randomly selected will be notified by
                              his/her supervisor of the selection and instructed
                              to immediately go to the designated
                              alcohol-testing site.
                            </li>
                            <li>
                              Random testing will be conducted monthly and will
                              be administered at a 10% annualized rate. This
                              means that the total number of tests conducted
                              during any 12-month period will be equal to at
                              least 10 percent of the total pool of covered
                              employees.
                            </li>
                          </ul>
                        </li>
                        <li>
                          <u>Reasonable Suspicion.</u>
                        </li>
                        <ul>
                          <li>
                            An employee/driver shall submit to testing, for
                            reasonable suspicion, for the use of alcohol when
                            requested to do so by the Company.
                          </li>
                          <li>
                            The employee conduct must be witnessed by at least
                            one supervisor and company official. The supervisor
                            or witnesses must have received training in the
                            specific identification of actions, appearance,
                            behavior, or conduct of a commercial motor vehicle
                            driver, which are indicative of alcohol use.
                          </li>
                          <li>
                            The supervisor shall ensure that the employee is
                            transported to the alcohol-testing site.
                          </li>
                          <li>
                            If an employee refuses to submit to the alcohol test
                            or attempts to leave Company premises and is
                            impaired to the extent that he/she would present a
                            danger to either him/herself or others, local law
                            enforcement should be contacted immediately by the
                            Company representative.
                          </li>
                          <li>
                            While waiting for an employee's alcohol test
                            results, that employee will be removed from
                            performing safety-sensitive functions and, if the
                            test results are positive, may be subject to further
                            disciplinary action up to and including termination.
                            Specific disciplinary actions are described in
                            detail in the end of this policy
                          </li>
                        </ul>
                        <li>
                          <u>Post-Accident Testing.</u>
                          <ul>
                            <li>
                              A driver shall submit to an alcohol test within 2
                              hours (but not later than 8 hours) of a
                              determination by the Company officials that a test
                              is required and that circumstances indicate the
                              accident is reportable under the FMSCA
                              regulations. It must be determined that the driver
                              received a citation for a moving traffic violation
                              arising from the accident. A DOT reportable
                              accident is defined in 49 CFR Part 394.3 (Federal
                              Motor Carrier Safety Regulations Pocketbook, Form
                              2133) as;
                            </li>
                            <ul>
                              <li>
                                indicate the accident is reportable under the
                                FMSCA regulations. It must be determined that
                                the driver received a citation for a moving
                                traffic violation arising from the accident. A
                                DOT reportable accident is defined in 49 CFR
                                Part 394.3 (Federal Motor Carrier Safety
                                Regulations Pocketbook, Form 2133) as;
                              </li>
                              <ul>
                                <li>
                                  An occurrence involving a commercial motor
                                  vehicle operating on a public road in
                                  commerce: see below image
                                </li>
                              </ul>
                            </ul>
                          </ul>
                          <img
                            src={drug_and_alcohol_policy_snapshot_1}
                            style={{ paddingRight: "100px" }}
                          />
                          <ul style={{ listStyleType: "none" }}>
                            <li>
                              <ul>
                                <li>
                                  A driver who is seriously injured and cannot
                                  be tested at the time of the accident should
                                  provide the necessary authorization for
                                  obtaining hospital reports and other documents
                                  that would indicate whether there was any
                                  alcohol in his/her system.
                                </li>
                                <li>
                                  The results of a breath or blood test for the
                                  use of alcohol conducted by Federal, State, or
                                  Local law enforcement officials having
                                  independent authority to conduct such tests,
                                  shall be considered to meet the requirements
                                  of this section, provided such tests conform
                                  to the applicable Federal, State, or Local
                                  requirements. Company officials shall obtain
                                  such test results.
                                </li>
                                <li>
                                  The Company shall provide drivers with
                                  necessary information and procedures so that
                                  the driver will be able to meet the
                                  requirement as set forth in this section.
                                </li>
                                <li>
                                  While waiting for an employee's alcohol test
                                  results, that employee will be removed from
                                  performing safety-sensitive functions and, if
                                  the test results are positive, may be subject
                                  to further disciplinary action up to and
                                  including termination. Specific disciplinary
                                  actions are described in detail in the end of
                                  this policy.
                                </li>
                                <li>
                                  Employee Responsibility. As soon as
                                  practicable following an accident as defined
                                  in this plan, the employee shall make every
                                  attempt to contact his/her supervisor and the
                                  substance abuse program administrator.
                                </li>
                                <ul>
                                  <li>
                                    The employee will be given instructions for
                                    obtaining alcohol and substance abuse
                                    testing.
                                  </li>
                                  <li>
                                    An employee who is subject to post-accident
                                    testing must remain available for testing,
                                    or company may consider the employee to have
                                    refused to submit to testing.
                                  </li>
                                  <li>
                                    The employee subject to post-accident
                                    testing must refrain from consuming alcohol
                                    for eight hours following the accident, or
                                    until he or she submits to an alcohol test,
                                    whichever comes first.
                                  </li>
                                </ul>
                                <li>Company Responsibility.</li>
                                <ul>
                                  <li>
                                    Upon receiving a report of an accident, the
                                    company shall test the employee (if no a
                                    fatality) for alcohol and controlled
                                    substances as soon as practicable.
                                  </li>
                                </ul>
                                <li>
                                  <u>Return to Duty.</u>
                                </li>
                                <ul>
                                  <li>
                                    <u>
                                      The requirements for return-to-duty
                                      testing must be performed in accordance
                                      with 49 CFR Part 40, Subpart O and that
                                      information can be found in Section V of
                                      the Alcohol Misuse Prevention plan.
                                    </u>
                                  </li>
                                </ul>
                                <li>
                                  <u>Follow-up Testing.</u>
                                </li>
                                <ul>
                                  <li>
                                    <u>
                                      The requirements for follow-up testing
                                      must be performed in accordance with 49
                                      CFR Part 40, Subpart O and that
                                      information can be found in Section V of
                                      the Alcohol Misuse Prevention plan.
                                    </u>
                                  </li>
                                </ul>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ol>
                    </Typography>
                    <Typography align="left" variant="body1">
                      <b>F. Drug Testing.</b>
                    </Typography>
                    <Typography align="justify" variant="body2">
                      Dilute Specimens – If the Company receives a test result,
                      which is verified positive, but dilute, it will be treated
                      as a positive test.
                      <ol>
                        <li>
                          If the Company receives a test, which is negative and
                          dilute, it will not retest the employee.
                        </li>
                      </ol>
                      Invalid Tests- If the Company receives a test result,
                      which is determined to be invalid (49 CFR 40.23) it will
                      immediately have the employee retested. The employee will
                      be given no notification of the need to retest. The test
                      will be an observed specimen collection. No action will be
                      taken on the first test result.
                      <br />
                      <br />
                      Types of Drug Testing
                      <ol>
                        <li>
                          Pre-Employment Testing.
                          <ol>
                            <li>
                              The Company shall require a driver-applicant who
                              they intend to hire or use to be tested for the
                              use of controlled substance as a pre-qualification
                              condition.
                            </li>
                            <li>
                              A driver-applicant shall submit to controlled
                              substance testing as a pre-qualification
                              condition.
                            </li>
                            <li>
                              Prior to collection of a urine sample, a
                              driver-applicant shall be notified that the sample
                              will be tested for the presence of controlled
                              substances.
                            </li>
                            <li>
                              The Company may use a driver who is a regularly
                              employed driver of another motor carrier without
                              complying with paragraph 1.a. above, if the driver
                              meets the requirements of 391.65, &quot;Drivers
                              Furnished by other Motor Carriers&quot;.
                            </li>
                            <li>
                              The Company may use a driver who is not tested by
                              the Company provided they assures itself:
                              <ol>
                                <li>
                                  That the driver has participated in a drug
                                  testing program that meets the requirements
                                  under this Plan within the previous 30 days
                                  and,
                                </li>
                                <li>
                                  While participating in that program was either
                                  <ol>
                                    <li>
                                      Tested for controlled substances within
                                      the past 6 months (from the date of
                                      application with the Company) or
                                    </li>
                                    <li>
                                      Participated in the drug-testing program
                                      for the previous 12 months (from the date
                                      of application with the Company).
                                    </li>
                                  </ol>
                                </li>
                                <li>
                                  When the Company exercises either paragraph d
                                  or e above, the Company will contact the
                                  controlled substances testing program in which
                                  the driver participates or participated and
                                  will obtain the following information;
                                  <ol>
                                    <li>Name and address of the program.</li>
                                    <li>
                                      Verification that the driver participates
                                      or participated in the program.
                                    </li>
                                    <li>
                                      Verification that the program conforms to
                                      49 CFR Part 40.
                                    </li>
                                    <li>
                                      Verification that the driver is qualified
                                      under the rules of this part including
                                      that the driver has not refused to be
                                      tested for controlled substances.
                                    </li>
                                    <li>
                                      The date the driver was last tested for
                                      controlled substances.
                                    </li>
                                    <li>
                                      The results, positive or negative, of any
                                      test taken.
                                    </li>
                                  </ol>
                                </li>
                              </ol>
                            </li>
                          </ol>
                        </li>
                        <li>
                          Random Testing.
                          <ol>
                            <li>
                              Employees in &quot;covered&quot; positions will be
                              subject to random testing at any time with no
                              advance notice. The random selection process will
                              ensure each employee the same fair and equal
                              chance of being selected.
                            </li>
                            <li>
                              An employee randomly selected will be notified by
                              his/her supervisor of the selection and instructed
                              to immediately go to the designated collection
                              site.
                            </li>
                            <li>
                              Random testing will be conducted monthly and will
                              be administered at a 25% annualized rate. This
                              means that the total number of tests conducted
                              during any 12-month period will be equal to at
                              least 25 percent of the total pool of covered
                              employees.
                            </li>
                          </ol>
                        </li>
                        <li>
                          Reasonable Cause.
                          <ol>
                            <li>
                              An employee/driver shall submit to testing, for
                              reasonable cause, for the use of controlled
                              substances when requested to do so by the Company.
                            </li>
                            <li>
                              The conduct should be witnessed by at least two
                              supervisors or company officials, if feasible. If
                              not feasible, only one supervisor or company
                              official need witness the conduct. The witness or
                              witnesses must have received training in the
                              identification of actions, appearance, or conduct
                              of a commercial motor vehicle driver, which are
                              indicative of the use of a controlled substance.
                            </li>
                            <li>
                              The supervisor shall transport the employee to the
                              collection site.
                            </li>
                            <li>
                              If an employee refuses to submit to drug testing
                              or attempts to leave the Company? premises and is
                              impaired, in the opinion of a trained supervisor,
                              to the extent that he/she would present a danger
                              to either him/herself or others, local law
                              enforcement should be contacted immediately by the
                              supervisor.
                            </li>
                            <li>
                              While waiting for an employee's drug test results,
                              that employee will be removed from their
                              &quot;covered&quot; position until the Medical
                              Review Officer (MRO) confirms that the employee
                              tested negative for drugs.
                            </li>
                          </ol>
                        </li>
                        <li>
                          Post-Accident Testing.
                          <ol>
                            <li>
                              A driver shall provide a urine sample to be tested
                              for the use of controlled substances as soon as
                              possible, but no later than 32 hours, after a
                              reportable accident if the driver of the
                              commercial vehicle received a citation for a
                              moving traffic violation arising from the
                              accident. A DOT reportable accident is defined in
                              49 CFR Part 394.3 (Federal Motor Carrier Safety
                              Regulations Pocketbook, Form 2133) as;
                              <ol>
                                <li>
                                  An occurrence involving a commercial motor
                                  vehicle operating on a public road in
                                  commerce:
                                </li>
                              </ol>
                            </li>
                            <img
                              src={drug_and_alcohol_policy_snapshot_1}
                              style={{ paddingRight: "100px" }}
                            />
                          </ol>
                        </li>
                      </ol>
                      <ul style={{ listStyleType: "none" }}>
                        <li>
                          <ol start={2}>
                            <li>
                              A driver who is seriously injured and cannot
                              provide a specimen at the time of the accident
                              shall provide the necessary authorization for
                              obtaining hospital reports and other documents
                              that would indicate whether there were any
                              controlled substances in his/her system.
                            </li>
                            <li>
                              The Company shall provide drivers with necessary
                              information and procedures so that the driver will
                              be able to meet the requirement of paragraphs 5.a.
                              and 5.b. of this section.
                            </li>
                            <li>
                              While waiting for an employee's drug test results,
                              that employee will be removed from their
                              &quot;covered&quot; position until the Medical
                              Review Officer (MRO) confirms that the employee
                              tested negative for drugs.
                            </li>
                          </ol>
                        </li>
                      </ul>
                      <ol start={5}>
                        <li>Return to Duty.</li>
                        <ul>
                          <li>
                            (a) The requirements for return-to-duty testing must
                            be performed in accordance with 49 CFR Part 40,
                            Subpart O
                          </li>
                        </ul>
                        <li>Follow-up Testing.</li>
                        <ul>
                          <li>
                            The requirements for follow-up testing must be
                            performed in accordance with 49 CFR Part 40, Subpart
                            O and that information can be found in Section V of
                            the Alcohol Misuse Prevention plan.
                          </li>
                        </ul>
                      </ol>
                    </Typography>
                    <Typography align="left" variant="body1">
                      <b>
                        G. Employee Admission of Alcohol and Controlled
                        Substances Use. (The Company does not have a voluntary
                        admission program. This section is not applicable.)
                      </b>
                    </Typography>
                    <Typography align="justify" variant="body2">
                      <ol>
                        <li>
                          Employees who admit to alcohol misuse or controlled
                          substances use are not subject to the referral,
                          evaluation and treatment requirements of this part and
                          part 40 of this title, provided that:
                          <ol>
                            <li>
                              (a) The admission is in accordance with a written
                              employer-established voluntary self-identification
                              program or policy that meets the requirements of
                              paragraph (b) of this section;
                            </li>
                            <li>
                              (b) The driver does not self-identify in order to
                              avoid testing under the requirements of this part;
                            </li>
                            <li>
                              (c) The driver makes the admission of alcohol
                              misuse or controlled substances use prior to
                              performing a safety sensitive function (i.e.,
                              prior to reporting for duty); and
                            </li>
                            <li>
                              (d) The driver does not perform a safety sensitive
                              function until the employer is satisfied that the
                              employee has been evaluated and has successfully
                              completed education or treatment requirements in
                              accordance with the self-identification program
                              guidelines.
                            </li>
                          </ol>
                        </li>
                        <li>
                          A qualified voluntary self-identification program or
                          policy must contain the following elements:
                          <ol>
                            <li>
                              (a) It must prohibit the employer from taking
                              adverse action against an employee making a
                              voluntary admission of alcohol misuse or
                              controlled substances use within the parameters of
                              the program or policy and paragraph (a) of this
                              section;
                            </li>
                            <li>
                              (b) It must allow the employee sufficient
                              opportunity to seek evaluation, education or
                              treatment to establish control over the employee's
                              drug or alcohol problem;
                            </li>
                            <li>
                              (c) It must permit the employee to return to
                              safety sensitive duties only upon successful
                              completion of an educational or treatment program,
                              as determined by a drug and alcohol abuse
                              evaluation expert, i.e., employee assistance
                              professional, substance abuse professional, or
                              qualified drug and alcohol counselor;
                            </li>
                            <li>
                              (d) It must ensure that:
                              <ol>
                                <li>
                                  Prior to the employee participating in a
                                  safety sensitive function, the employee shall
                                  undergo a return to duty test with a result
                                  indicating an alcohol concentration of less
                                  than 0.02; and/or
                                </li>
                                <li>
                                  Prior to the employee participating in a
                                  safety sensitive function, the employee shall
                                  undergo a return to duty controlled substance
                                  test with a verified negative test result for
                                  controlled substances use; and
                                </li>
                              </ol>
                            </li>
                            <li>
                              (e) It may incorporate employee monitoring and
                              include non-DOT follow-up testing
                            </li>
                          </ol>
                        </li>
                      </ol>
                    </Typography>

                    <Typography align="left" variant="body1">
                      <b>H. Disciplinary Action.</b>
                    </Typography>
                    <Typography align="justify" variant="body2">
                      <ol>
                        <li>
                          Violation of Policy.
                          <ol>
                            <li>
                              a) Any driver with a verified positive
                              pre-employment drug test will not be hired. After
                              a Return to Duty clearance the driver may be
                              eligible for a new pre-employment after 30 days
                              and shows qualification to drive under a Return to
                              Duty authorization by SAP.
                            </li>
                            <li>
                              b) Any driver with a verified positive drug test
                              will be suspended from a safety sensitive duty and
                              subject to disciplinary action up to and including
                              termination.
                            </li>
                            <li>
                              c) If Driver is not terminated for positive drug
                              test the driver will be required to complete a
                              treatment and counseling program that meets the
                              requirements of the DOT for returning to duty (at
                              the employees own expense). They employee will
                              have to take and pass a return to duty test and
                              will be subject to a minimum of six (6)
                              unannounced tests in the first 12 months of
                              returning to duty.
                            </li>
                            <li>
                              d) Any driver with a positive alcohol test of
                              0.02-0.039 will be suspended with out pay for one
                              work shift or 24 hours and will be required to
                              have a negative alcohol test before returning to a
                              covered position.
                            </li>
                            <li>
                              e) Any employee who consumes alcohol or drugs
                              while “On-duty” will be terminated.
                            </li>
                            <li>
                              f) Any employee with an alcohol level of 0.04 or
                              greater will be subject to disciplinary action up
                              to and including termination from employment or
                              will be required to meet the return to duty
                              requirements listed in subsection (c).
                            </li>
                            <li>
                              g) Any transferring employee found in violation of
                              the Company policy will be subject to disciplinary
                              action up to and including termination from
                              employment.
                            </li>
                            <li>
                              h) Any attempt to adulterate, substitute, tamper
                              or refuse to test will be treated as a positive
                              test.
                            </li>
                          </ol>
                        </li>
                        <li>
                          Refusal, Adulterate or Substitute a Test.
                          <ol>
                            <li>
                              a) No employee shall adulterate, substitute or
                              refuse a test or to submit to a random,
                              reasonable-suspicion, post-accident, or follow-up
                              alcohol test.
                            </li>
                            <li>
                              b) An employee who refuses a return-to-duty test
                              is not in violation of the plan; however, such
                              refusal will result in not allowing the individual
                              to perform safety-sensitive functions and may
                              result in disciplinary action up to and including
                              termination of employment.
                            </li>
                            <li>
                              c) Employees who: (1) without a legitimate reason
                              fail to report to the alcohol testing site; or (2)
                              without a valid medical reason fail to provide an
                              adequate breath sample under this policy will be
                              suspended without pay and be subject to
                              disciplinary action up to and including
                              termination of employment.
                            </li>
                          </ol>
                        </li>
                        <li>
                          Return to Duty.
                          <ol>
                            <li>
                              a) An employee testing positive for alcohol may be
                              returned to a &quot;safety-sensitive&quot;
                              position after a return-to-duty test with an
                              alcohol concentration of less than 0.02.
                            </li>
                            <li>
                              b) After returning to work the employee will be
                              subject to: 1) unannounced follow-up testing, as
                              determined by the SAP and the Company officials;
                              and 2) the other required types of testing which
                              includes random.
                            </li>
                          </ol>
                        </li>
                        <li> 4. Contesting a Test Result.</li>
                        <li></li>
                        <li>
                          An employee will have 72 hours from the time a
                          positive drug test is reported to the company to
                          contest a positive drug test result.
                        </li>
                      </ol>
                    </Typography>

                    <Typography align="left" variant="body1">
                      <b>I. Alcohol Testing Overview.</b>
                    </Typography>
                    <Typography align="justify" variant="body2">
                      <ol>
                        <li>
                          Alcohol Testing Procedures. All collection,
                          transportation, testing procedures, test evaluation
                          measures, quality control measures, substance abuse
                          professionals, record keeping, and reporting of
                          alcohol test results will conform to the Department of
                          Transportation regulations as set forth in 49 CFR Part
                          40, Procedures for Transportation Workplace Drug and
                          Alcohol Testing Programs.
                        </li>
                      </ol>
                    </Typography>

                    <Typography align="left" variant="body1">
                      <b>J. Record Retention.</b>
                    </Typography>
                    <Typography align="justify" variant="body2">
                      <ul>
                        <li>
                          Record keeping.
                          <ul>
                            <li>
                              The Company will retain the following records for
                              a period of at least five (5) years:
                              <ul>
                                <li>
                                  Records of driver alcohol test results with
                                  results indicating a level of greater than
                                  0.02.
                                </li>
                                <li>
                                  Documentation of driver refusal to take
                                  required alcohol tests.
                                </li>
                                <li>Driver referral and evaluation records.</li>
                              </ul>
                            </li>
                            <li>
                              The Company will retain records regarding the
                              alcohol collection process for two years.
                            </li>
                            <li>
                              The Company will retain test records of drivers
                              with alcohol concentrations of less than 0.02 for
                              a minimum of one year.
                            </li>
                            <li>
                              The Company will retain records confirming
                              supervisory and employee training for at least
                              three (3) years.
                            </li>
                          </ul>
                        </li>
                        <li>Driver Qualification Files.</li>
                        <li>
                          These records are subject to the Company? current
                          divided record keeping authority and are to be
                          maintained at authorized record keeping locations.
                          Below is a list of information to be maintained in
                          these files regarding employee alcohol abuse.
                          <ul>
                            <li>
                              The name of the employee submitted to a alcohol
                              test;
                            </li>
                            <li>Date the alcohol test was conducted;</li>
                            <li>Location of the alcohol test;</li>
                            <li>Test category;</li>
                            <li>Results of the alcohol test.</li>
                          </ul>
                        </li>
                        <li>
                          Record Confidentiality.
                          <ul>
                            <li>
                              Except for the breath alcohol technician,
                              substance abuse professional, and designated
                              Company personnel with a need to know, the Company
                              will not release information regarding an
                              employee's alcohol use or rehabilitation/treatment
                              records without the express written consent of the
                              tested employee. The only exception is when
                              information must be released, regardless of
                              consent, to the Federal Motor Carrier Safety
                              Administrator to examine all records related to
                              the administration and results of controlled
                              substance testing performed under this program.
                            </li>
                            <li>
                              To maintain confidentiality, written records
                              regarding an employee's alcohol misuse and
                              rehabilitation will be stored in a secured
                              location. The employee's alcohol testing and/or
                              rehabilitation/treatment records will not be made
                              a part of the employee's personnel file.
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </Typography>

                    <Typography align="left" variant="body1">
                      <b>K. Responsibility.</b>
                    </Typography>
                    <Typography align="justify" variant="body2">
                      <ul>
                        <li>
                          Reservation of Rights - The Company reserves the right
                          to interpret, modify, and/or revise this policy in
                          whole or in part without notice. Nothing in this
                          policy is to be construed as an employment contract
                          nor does this alter an employee's employment at-will
                          status. The employee remains free to resign his/her
                          employment at any time for any or no reason, without
                          notice. Similarly, the Company reserves the right to
                          terminate any employee's employment, for any or no
                          reason, without notice.
                        </li>
                        <li>
                          Compliance with All Laws. This policy will be amended
                          from time to time to comply with changes in Federal
                          and State Laws.
                        </li>
                      </ul>
                    </Typography>
                    <Typography align="justify" variant="body2">
                      This policy is a general summary of the Company’s Drug and
                      Alcohol Misuse Prevention Policy for Commercial Drivers.
                      IF THERE IS ANY QUESTION OR CONFLICT BETWEEN WHAT IS SAID
                      IN THE POLICY AND THE LANGUAGE IN THE DOT REGULATIONS AS
                      CODIFIED AT 49 CFR PART 40 AND 382, THE DOT REGULATIONS
                      WILL PREVAIL.
                    </Typography>
                    <Typography align="center" variant="h6">
                      <br />
                      ACKNOWLEDGMENT AND AGREEMENT
                      <br />
                      WITH RESPECT TO DRUG AND ALCOHOL TESTING
                    </Typography>
                    <br />
                    <br />
                    <Typography align="justify" variant="body2">
                      I, the undersigned employee hereby certify that I have
                      been furnished with a copy of the DOT Alcohol and Drug
                      Testing Program, and that I have read and understand same.
                      I further certify that I have been provided with
                      informational material, education and training on the
                      dangers and problems of drug and alcohol misuse.
                    </Typography>
                    <br />
                    <br />
                    <Typography align="justify" variant="body2">
                      I am fully aware, and agree that I may be discharged or
                      otherwise disciplined for any violation by me of said DOT
                      Alcohol and Drug Policy, for any failure or refusal to
                      provide urine and/or breath specimens when requested by my
                      employer, for the failure or refusal to identify and
                      certify same, for the failure to cooperate with the forms
                      and other documents, and/or for any other Alcohol and Drug
                      Testing Program.
                    </Typography>
                    {/* SOME Text Field Remaing */}
                  </Grid>

                  <Grid
                    container
                    direction="row"
                    justify="space-evenly"
                    alignItems="baseline"
                    spacing={3}
                  >
                    <Grid item xs={5}>
                      <TextField
                        name="alcoholTestEmployeeFirstName"
                        variant="outlined"
                        size="small"
                        type="text"
                        label="Employee First Name"
                        className="col-12"
                        inputRef={register({
                          required: {
                            value: reqBits.alcoholTestEmployeeFirstName,
                            message: RequireError,
                          },
                        })}
                      ></TextField>
                    </Grid>
                    <Grid item xs={5}>
                      <TextField
                        name="alcoholTestEmployeeLastName"
                        variant="outlined"
                        size="small"
                        type="text"
                        label="Employee Last Name"
                        className="col-12"
                        inputRef={register({
                          required: {
                            value: reqBits.alcoholTestEmployeeLastName,
                            message: RequireError,
                          },
                        })}
                      ></TextField>
                    </Grid>
                    <Grid item xs={5}>
                      <TextField
                        name="alcoholTestSecurityNumber"
                        variant="outlined"
                        size="small"
                        type="text"
                        label="Social Security Number"
                        className="col-12"
                        inputRef={register({
                          required: {
                            value: reqBits.alcoholTestSecurityNumber,
                            message: RequireError,
                          },
                        })}
                      ></TextField>
                    </Grid>
                    <Grid item xs={5}>
                      <TextField
                        name="alcoholTestExecutionDate"
                        variant="outlined"
                        size="small"
                        type="date"
                        helperText="Executed on the date"
                        className="col-12"
                        inputRef={register({
                          required: {
                            value: reqBits.alcoholTestExecutionDate,
                            message: RequireError,
                          },
                        })}
                      ></TextField>
                    </Grid>
                    <Grid item xs={10}>
                      <Paper
                        elevation={3}
                        style={{ paddingLeft: "40px", paddingRight: "60px" }}
                        className={
                          (classes.heading, classes.paperProminantStyle)
                        }
                      >
                        <Typography align="left" variant="h6">
                          Employee Signature
                        </Typography>
                        <SignatureCanvas
                          penColor="black"
                          ref={sigPad}
                          canvasProps={{
                            width: 500,
                            height: 200,
                            className: "sigCanvas",
                          }}
                        />
                        <Grid
                          container
                          direction="row"
                          justify="space-between"
                          alignItems="baseline"
                          spacing={3}
                        >
                          <Grid item xs={3}></Grid>
                          <Grid item xs={3}>
                            <Button
                              type="button"
                              className="col-12"
                              variant="contained"
                              color="primary"
                              onClick={clearSigPad}
                            >
                              Clear
                            </Button>
                          </Grid>
                          <Grid item xs={3}>
                            <Button
                              className="col-12"
                              variant="contained"
                              color="primary"
                              onClick={saveImage}
                            >
                              Save
                            </Button>
                          </Grid>
                          <Grid item xs={3}></Grid>
                        </Grid>
                      </Paper>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            {/* BUTTON Start */}
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="baseline"
              spacing={3}
            >
              <Grid item xs={3}></Grid>
              <Grid item xs={3}>
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
              <Grid item xs={3}>
                <Button
                  type="submit"
                  className="col-12"
                  variant="contained"
                  color="primary"
                >
                  Save This & Next
                </Button>
              </Grid>
              <Grid item xs={3}></Grid>
            </Grid>
            {/* BUTTON End */}
          </Grid>
        </form>
      </Container>
    </div>
  );
}
