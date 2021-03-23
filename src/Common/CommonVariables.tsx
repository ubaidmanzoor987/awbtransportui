export const RequireError: string = "Required *";
export const states = [
  { value: "Armed Forces America" },
  { value: "Armed Forces" },
  { value: "Armed Forces Pacific" },
  { value: "Alabama" },
  { value: "Alaska" },
  { value: "American Samoa" },
  { value: "Arizona" },
  { value: "Arkansas" },
  { value: "California" },
  { value: "Colorado" },
  { value: "Connecticut" },
  { value: "District of Columbia" },
  { value: "Delaware" },
  { value: "Florida" },
  { value: "Georgia" },
  { value: "Guam" },
  { value: "Hawaii" },
  { value: "Idaho" },
  { value: "Illinois" },
  { value: "Indiana" },
  { value: "Iowa" },
  { value: "Kansas" },
  { value: "Kentucky" },
  { value: "Louisiana" },
  { value: "Maine" },
  { value: "Maryland" },
  { value: "Massachusetts" },
  { value: "Michigan" },
  { value: "Minnesota" },
  { value: "Mississippi" },
  { value: "Missouri" },
  { value: "Montana" },
  { value: "Nebraska" },
  { value: "New Hampshire" },
  { value: "New Jersey" },
  { value: "New Mexico" },
  { value: "New York" },
  { value: "Nevada" },
  { value: "North Carolina" },
  { value: "North Dakota" },
  { value: "Northern Mariana Islands" },
  { value: "Ohio" },
  { value: "Oklahoma" },
  { value: "Oregon" },
  { value: "Pennsylvania" },
  { value: "Puerto Rico" },
  { value: "Rhode Island" },
  { value: "South Carolina" },
  { value: "South Dakota" },
  { value: "Tennessee" },
  { value: "Texas" },
  { value: "Utah" },
  { value: "Vermont" },
  { value: "Virgin Islands" },
  { value: "Virginia" },
  { value: "Washington" },
  { value: "West Virginia" },
  { value: "Wisconsin" },
  { value: "Wyoming" },
];
export type Address = {
  lastYearAddress: string;
  lastYearAddressCity: string;
  lastYearAddressState: string;
  lastYearAddressZipCode: string;
  lastYearAddressfrom: string;
  lastYearAddressTo: string;
};
export type Addresses = Address[];

export type EmploymentHistoryInfo = {
  employmentHistoryfrom: string;
  employmentHistoryTo: string;
  employmentHistorystatus: string;
  employmentHistoryposition: string;
  employmentHistoryaddress: string;
  employmentHistorycompanyPhone: string;
  employmentHistoryreasonForLeaving: string;
  employmentHistorysubjecttotheFMCSRs: string;
  employmentHistorydrugandalcoholTesting: string;
};

export let employmentHistoryDummyElement: EmploymentHistoryInfo = {
  employmentHistoryfrom: "",
  employmentHistoryTo: "",
  employmentHistorystatus: "",
  employmentHistoryposition: "",
  employmentHistoryaddress: "",
  employmentHistorycompanyPhone: "",
  employmentHistoryreasonForLeaving: "",
  employmentHistorysubjecttotheFMCSRs: "",
  employmentHistorydrugandalcoholTesting: "",
};

export type EmploymentHistories = EmploymentHistoryInfo[];

//-----------DriverLicense-----------

export type tDriverLicenseInfo = {
  stateOfLicence: string;
  licenceNumber: string;
  licenceType: string;
  licenceEndoresment: string;
  licenceExpirationDate: string;
};

export let driverLicenseDummyElement: tDriverLicenseInfo = {
  stateOfLicence: "",
  licenceNumber: "",
  licenceType: "",
  licenceEndoresment: "",
  licenceExpirationDate: "",
};

export type tDriverLicenses = tDriverLicenseInfo[];
//-----------DriverLicense-----------

//-----------References-----------

export type tReferenceInfo = {
  referencefirstName: string;
  referencelastName: string;
  referenceCompany: string;
  referenceTitle: string;
  referencePhoneNumber: string;
  referenceAddress: string;
};

export let ReferenceDummyElement: tReferenceInfo = {
  referencefirstName: "",
  referencelastName: "",
  referenceCompany: "",
  referenceTitle: "",
  referencePhoneNumber: "",
  referenceAddress: "",
};

export type tReferences = tReferenceInfo[];
//-----------References-----------

//-----------TrafficConvictions-----------
export type tTrafficConvictionInfo = {
  dateOfViolation: string;
  LocationOfViolation: string;
  ViolationCharge: string;
  ViolationPenalty: number;
};

export let trafficConvictionDummyElement: tTrafficConvictionInfo = {
  dateOfViolation: "2018-01-01",
  LocationOfViolation: "Default",
  ViolationCharge: "Default",
  ViolationPenalty: 10,
};

export type tTrafficConvictions = tTrafficConvictionInfo[];
//-----------TrafficConvictions-----------

export type EmploymentAccidentHistoryInfo = {
  dateOfAccident: string;
  NumberOfAccidents: string;
  LocationOfAccidents: string;
  numberofFatalities: number;
  numberofPeopleleInjured: number;
};

export let employmentAccidentHistoryDummyElement: EmploymentAccidentHistoryInfo = {
  dateOfAccident: "2018-01-01",
  NumberOfAccidents: "Default",
  LocationOfAccidents: "Default",
  numberofFatalities: 21,
  numberofPeopleleInjured: 123,
};

export type EmploymentAccidentHistories = EmploymentAccidentHistoryInfo[];

export type tViolation = {
  dateOfViolation: string;
  LocationOfViolation: string;
  ViolationCharge: string;
  ViolationPenalty: string;
};

export type tVoilations = tViolation[];

export type tDrivingExperience = {
  experienceclassofEquipment: string;
  experienceFromDate: string;
  experienceToDate: string;
  experiencenumberOfMiles: number;
};

export type tDrivingExperiences = tDrivingExperience[];

export let drivingExperienceDummyElement: tDrivingExperience = {
  experienceclassofEquipment: "Default",
  experienceFromDate: "2018-01-01",
  experienceToDate: "2018-01-01",
  experiencenumberOfMiles: 10,
};
export type Form1 = {
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  dateofBirth: string;
  socialSecurity: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  addresses: Addresses;
  fromDate: string;
  toDate: string;
  startTime: string;
  hearAbout: string;
  eligibletoWorkInUnitedState: string;
  willingForDrugTest: string;
  classAExperienceLevel: string;
};

type Dict = { [index: string]: boolean };

export let reqBits = {
  first_name: true,
  last_name: false,
  phone_number: true,
  email: false,
  dateofBirth: true,
  socialSecurity: true,
  address: true,
  city: false,
  state: false,
  zipCode: false,
  lastThreeYearResidenceCheck: true,
  addresses: true,
  lastYearAddress: true,
  lastYearAddressCity: false,
  lastYearAddressState: false,
  lastYearAddressZipCode: false,
  lastYearAddressfrom: true,
  lastYearAddressTo: true,
  startTime: true,
  hearAbout: false,
  eligibletoWorkInUnitedState: true,
  classAExperienceLevel: true,
  willingForDrugTest: true,
  //Form 2
  gender: false,
  veteranStatus: false,
  //Form 3
  companyName: true,
  companyAddress: true,
  companyCity: false,
  companyState: false,
  companyPostCode: false,
  applicationApplyDate: true,
  applicationApplyAsPosition: true,
  applicantfirstName: true,
  applicantLastName: true,
  applicantPhoneNumber: true,
  emergencyContactfirstName: true,
  emergencyContactlastName: true,
  emergencyContactNumber: true,
  age: true,
  applicantdateofbirth: true,
  physicalExamExpirationDate: true,
  applicantAddresses: true,
  everWorkedForCompany: true,
  applicantSchoolGrade: true,
  applicantCollegeGrade: true,
  applicantPostGraduateGrade: true,
  employmentHistoryfrom: true,
  employmentHistoryTo: true,
  employmentHistorystatus: true,
  employmentHistoryposition: true,
  employmentHistoryaddress: true,
  employmentHistorycompanyPhone: true,
  employmentHistoryreasonForLeaving: true,
  employmentHistorysubjecttotheFMCSRs: true,
  employmentHistorydrugandalcoholTesting: true,
  employmentExperienceHistory: true,
  experienceclassofEquipment: true,
  experienceFromDate: true,
  experienceToDate: true,
  experiencenumberOfMiles: true,
  lastFiveYearStatesOperate: true,
  Listspecialcourses: true,
  ListanySafeDrivingAwards: false,
  dateOfAccident: false,
  NumberOfAccidents: false,
  LocationOfAccidents: true,
  numberofFatalities: true,
  numberofPeopleleInjured: true,
  dateOfViolation: false,
  LocationOfViolation: false,
  ViolationCharge: true,
  ViolationPenalty: false,
  stateOfLicence: true,
  licenceNumber: true,
  licenceType: true,
  licenceEndoresment: true,
  licenceExpirationDate: true,
  deniedLicences: true,
  permitLicences: true,
  reasonforUnableToPerformActions: true,
  convictedofafelony: true,
  answerToAnyQuestion: true,
  referencefirstName: true,
  referencelastName: false,
  referenceCompany: false,
  referenceTitle: false,
  referencePhoneNumber: true,
  referenceAddress: true,
  signature: false,
  dateOfApplication: true,
  remarks: false,
  //FORM6

  alcoholTestExecutionDate: true,
  alcoholTestEmployeeFirstName: true,
  alcoholTestEmployeeLastName: false,
  alcoholTestEmployeeSignature: false,
  alcoholTestSecurityNumber: true,

  //FORM7
  employeePrintedName: false,
  employeeSSNNumber: false,
  employeeSignature: false,
  employeeDate: false,

  newEmployeerName: false,
  newEmployeerAddress: false,
  newEmployeerCity: false,
  newEmployeerState: false,
  newEmployeerpostalCode: false,
  newEmployeerphone: false,
  newEmployeerFax: false,
  newEmployeedesignatedEmployeeReprsentative: false,

  prevEmployeerName: false,
  prevEmployeerAddress: false,
  prevEmployeerCity: false,
  prevEmployeerState: false,
  prevEmployeerpostalCode: false,
  prevEmployeerphone: false,
  prevEmployeerFax: false,
  prevEmployeedesignatedEmployeeReprsentative: false,

  employeeAlcoholTestRateHigher: false,
  employeeverifiedDrugTest: false,
  employeerefuseTest: false,
  employeeotherViolations: false,
  prevEmployeeReportDrug: false,
  answeredYes: false,

  nameOfPersonProvidingInformation: false,
  nameOfPersonProvidingInformationTitle: false,
  nameOfPersonProvidingInformationPhone: false,
  nameOfPersonProvidingInformationDate: false,
};

//------------------------------------------------
//------------------------------------------------

// export const reqBits = {
//   first_name: true,
//   last_name: true,
//   phone_number: true,
//   email: true,
//   dateofBirth: true,
//   socialSecurity: true,
//   address: true,
//   city: true,
//   state: true,
//   zipCode: true,
//   lastThreeYearResidenceCheck: true,
//   addresses: true,
//   lastYearAddress: true,
//   lastYearAddressCity: true,
//   lastYearAddressState: true,
//   lastYearAddressZipCode: true,
//   lastYearAddressfrom: true,
//   lastYearAddressTo: true,
//   startTime: true,
//   hearAbout: true,
//   eligibletoWorkInUnitedState: true,
//   classAExperienceLevel: true,
//   willingForDrugTest: true,
//   //Form 2
//   gender: true,
//   veteranStatus: true,
//   //Form 3
//   companyName: true,
//   companyAddress: true,
//   companyCity: true,
//   companyState: true,
//   companyPostCode: true,
//   applicationApplyDate: true,
//   applicationApplyAsPosition: true,
//   applicantfirstName: true,
//   applicantLastName: true,
//   applicantPhoneNumber: true,
//   emergencyContactfirstName: true,
//   emergencyContactlastName: true,
//   emergencyContactNumber: true,
//   age: true,
//   applicantdateofbirth: true,
//   physicalExamExpirationDate: true,
//   applicantAddresses: true,
//   everWorkedForCompany: true,
//   applicantSchoolGrade: true,
//   applicantCollegeGrade: true,
//   applicantPostGraduateGrade: true,
//   employmentHistoryfrom: true,
//   employmentHistoryTo: true,
//   employmentHistorystatus: true,
//   employmentHistoryposition: true,
//   employmentHistoryaddress: true,
//   employmentHistorycompanyPhone: true,
//   employmentHistoryreasonForLeaving: true,
//   employmentHistorysubjecttotheFMCSRs: true,
//   employmentHistorydrugandalcoholTesting: true,
//   employmentExperienceHistory: true,
//   experienceclassofEquipment: true,
//   experienceFromDate: true,
//   experienceToDate: true,
//   experiencenumberOfMiles: true,
//   lastFiveYearStatesOperate: true,
//   Listspecialcourses: true,
//   ListanySafeDrivingAwards: true,
//   dateOfAccident: true,
//   NumberOfAccidents: true,
//   LocationOfAccidents: true,
//   numberofFatalities: true,
//   numberofPeopleleInjured: true,
//   dateOfViolation: true,
//   LocationOfViolation: true,
//   ViolationCharge: true,
//   ViolationPenalty: true,
//   stateOfLicence: true,
//   licenceNumber: true,
//   licenceType: true,
//   licenceEndoresment: true,
//   licenceExpirationDate: true,
//   deniedLicences: true,
//   permitLicences: true,
//   reasonforUnableToPerformActions: true,
//   convictedofafelony: true,
//   answerToAnyQuestion: true,
//   referencefirstName: true,
//   referencelastName: true,
//   referenceCompany: true,
//   referenceTitle: true,
//   referencePhoneNumber: true,
//   referenceAddress: true,
//   signature: true,
//   dateOfApplication: true,
//   remarks: true,
//   //FORM6

//   alcoholTestExecutionDate: true,
//   alcoholTestEmployeeFirstName: true,
//   alcoholTestEmployeeLastName: true,
//   alcoholTestEmployeeSignature: true,
//   alcoholTestSecurityNumber: true,

//   //FORM7
//   employeePrintedName: true,
//   employeeSSNNumber: true,
//   employeeSignature: true,
//   employeeDate: true,

//   newEmployeerName: true,
//   newEmployeerAddress: true,
//   newEmployeerCity: true,
//   newEmployeerState: true,
//   newEmployeerpostalCode: true,
//   newEmployeerphone: true,
//   newEmployeerFax: true,
//   newEmployeedesignatedEmployeeReprsentative: true,

//   prevEmployeerName: true,
//   prevEmployeerAddress: true,
//   prevEmployeerCity: true,
//   prevEmployeerState: true,
//   prevEmployeerpostalCode: true,
//   prevEmployeerphone: true,
//   prevEmployeerFax: true,
//   prevEmployeedesignatedEmployeeReprsentative: true,

//   employeeAlcoholTestRateHigher: true,
//   employeeverifiedDrugTest: true,
//   employeerefuseTest: true,
//   employeeotherViolations: true,
//   prevEmployeeReportDrug: true,
//   answeredYes: true,

//   nameOfPersonProvidingInformation: true,
//   nameOfPersonProvidingInformationTitle: true,
//   nameOfPersonProvidingInformationPhone: true,
//   nameOfPersonProvidingInformationDate: true,
// };
//------------------------------------------------
//------------------------------------------------

export let reqBitsKeys = {
  first_name: "first_name",
  last_name: "last_name",
  phone_number: "phone_number",
  email: "email",
  dateofBirth: "dateofBirth",
  socialSecurity: "socialSecurity",
  address: "address",
  city: "city",
  state: "state",
  zipCode: "zipCode",
  lastThreeYearResidenceCheck: "lastThreeYearResidenceCheck",
  addresses: "addresses",
  lastYearAddress: "lastYearAddress",
  lastYearAddressCity: "lastYearAddressCity",
  lastYearAddressState: "lastYearAddressState",
  lastYearAddressZipCode: "lastYearAddressZipCode",
  lastYearAddressfrom: "lastYearAddressfrom",
  lastYearAddressTo: "lastYearAddressTo",
  startTime: "startTime",
  hearAbout: "hearAbout",
  eligibletoWorkInUnitedState: "eligibletoWorkInUnitedState",
  classAExperienceLevel: "classAExperienceLevel",
  willingForDrugTest: "willingForDrugTest",
  //Form 2
  gender: "gender",
  veteranStatus: "veteranStatus",
  //Form 3
  companyName: "companyName",
  companyAddress: "companyAddress",
  companyCity: "companyCity",
  companyState: "companyState",
  companyPostCode: "companyPostCode",
  applicationApplyDate: "applicationApplyDate",
  applicationApplyAsPosition: "applicationApplyAsPosition",
  applicantfirstName: "applicantfirstName",
  applicantLastName: "applicantLastName",
  applicantPhoneNumber: "applicantPhoneNumber",
  emergencyContactfirstName: "emergencyContactfirstName",
  emergencyContactlastName: "emergencyContactlastName",
  emergencyContactNumber: "emergencyContactNumber",
  age: "age",
  applicantdateofbirth: "applicantdateofbirth",
  physicalExamExpirationDate: "physicalExamExpirationDate",
  applicantAddresses: "applicantAddresses",
  everWorkedForCompany: "everWorkedForCompany",
  applicantSchoolGrade: "applicantSchoolGrade",
  applicantCollegeGrade: "applicantCollegeGrade",
  applicantPostGraduateGrade: "applicantPostGraduateGrade",
  employmentHistoryfrom: "employmentHistoryfrom",
  employmentHistoryTo: "employmentHistoryTo",
  employmentHistorystatus: "employmentHistorystatus",
  employmentHistoryposition: "employmentHistoryposition",
  employmentHistoryaddress: "employmentHistoryaddress",
  employmentHistorycompanyPhone: "employmentHistorycompanyPhone",
  employmentHistoryreasonForLeaving: "employmentHistoryreasonForLeaving",
  employmentHistorysubjecttotheFMCSRs: "employmentHistorysubjecttotheFMCSRs",
  employmentHistorydrugandalcoholTesting:
    "employmentHistorydrugandalcoholTesting",
  employmentExperienceHistory: "employmentExperienceHistory",
  experienceclassofEquipment: "experienceclassofEquipment",
  experienceFromDate: "experienceFromDate",
  experienceToDate: "experienceToDate",
  experiencenumberOfMiles: "experiencenumberOfMiles",
  lastFiveYearStatesOperate: "lastFiveYearStatesOperate",
  Listspecialcourses: "Listspecialcourses",
  ListanySafeDrivingAwards: "ListanySafeDrivingAwards",
  dateOfAccident: "dateOfAccident",
  NumberOfAccidents: "NumberOfAccidents",
  LocationOfAccidents: "LocationOfAccidents",
  numberofFatalities: "numberofFatalities",
  numberofPeopleleInjured: "numberofPeopleleInjured",
  dateOfViolation: "dateOfViolation",
  LocationOfViolation: "LocationOfViolation",
  ViolationCharge: "ViolationCharge",
  ViolationPenalty: "ViolationPenalty",
  stateOfLicence: "stateOfLicence",
  licenceNumber: "licenceNumber",
  licenceType: "licenceType",
  licenceEndoresment: "licenceEndoresment",
  licenceExpirationDate: "licenceExpirationDate",
  deniedLicences: "deniedLicences",
  permitLicences: "permitLicences",
  reasonforUnableToPerformActions: "reasonforUnableToPerformActions",
  convictedofafelony: "convictedofafelony",
  answerToAnyQuestion: "answerToAnyQuestion",
  referencefirstName: "referencefirstName",
  referencelastName: "referencelastName",
  referenceCompany: "referenceCompany",
  referenceTitle: "referenceTitle",
  referencePhoneNumber: "referencePhoneNumber",
  referenceAddress: "referenceAddress",
  signature: "signature",
  dateOfApplication: "dateOfApplication",
  remarks: "remarks",
};

export let reqBitsViaStr: Dict = {
  first_name: true,
  last_name: false,
  phone_number: true,
  email: false,
  dateofBirth: true,
  socialSecurity: true,
  address: true,
  city: false,
  state: false,
  zipCode: false,
  lastThreeYearResidenceCheck: true,
  addresses: true,
  lastYearAddress: true,
  lastYearAddressCity: false,
  lastYearAddressState: false,
  lastYearAddressZipCode: false,
  lastYearAddressfrom: true,
  lastYearAddressTo: true,
  startTime: true,
  hearAbout: false,
  eligibletoWorkInUnitedState: true,
  classAExperienceLevel: true,
  willingForDrugTest: true,
  //Form 2
  gender: false,
  veteranStatus: false,
  //Form 3
  companyName: true,
  companyAddress: true,
  companyCity: false,
  companyState: false,
  companyPostCode: false,
  applicationApplyDate: true,
  applicationApplyAsPosition: true,
  applicantfirstName: true,
  applicantLastName: true,
  applicantPhoneNumber: true,
  emergencyContactfirstName: true,
  emergencyContactlastName: true,
  emergencyContactNumber: true,
  age: true,
  applicantdateofbirth: true,
  physicalExamExpirationDate: true,
  applicantAddresses: true,
  everWorkedForCompany: true,
  applicantSchoolGrade: true,
  applicantCollegeGrade: true,
  applicantPostGraduateGrade: true,
  employmentHistoryfrom: true,
  employmentHistoryTo: true,
  employmentHistorystatus: true,
  employmentHistoryposition: true,
  employmentHistoryaddress: true,
  employmentHistorycompanyPhone: true,
  employmentHistoryreasonForLeaving: true,
  employmentHistorysubjecttotheFMCSRs: true,
  employmentHistorydrugandalcoholTesting: true,
  employmentExperienceHistory: true,
  experienceclassofEquipment: true,
  experienceFromDate: true,
  experienceToDate: true,
  experiencenumberOfMiles: true,
  lastFiveYearStatesOperate: true,
  Listspecialcourses: true,
  ListanySafeDrivingAwards: false,
  dateOfAccident: false,
  NumberOfAccidents: false,
  LocationOfAccidents: true,
  numberofFatalities: true,
  numberofPeopleleInjured: true,
  dateOfViolation: false,
  LocationOfViolation: false,
  ViolationCharge: true,
  ViolationPenalty: false,
  stateOfLicence: true,
  licenceNumber: true,
  licenceType: true,
  licenceEndoresment: true,
  licenceExpirationDate: true,
  deniedLicences: true,
  permitLicences: true,
  reasonforUnableToPerformActions: true,
  convictedofafelony: true,
  answerToAnyQuestion: true,
  referencefirstName: true,
  referencelastName: false,
  referenceCompany: false,
  referenceTitle: false,
  referencePhoneNumber: true,
  referenceAddress: true,
  signature: false,
  dateOfApplication: true,
  remarks: false,
};

export type AddressErrorsList = [
  {
    lastYearAddress: boolean;
    lastYearAddressCity: boolean;
    lastYearAddressState: boolean;
    lastYearAddressZipCode: boolean;
    lastYearAddressfrom: boolean;
    lastYearAddressTo: boolean;
  }
];

export const WrongPatternError: string = "Wrong Pattern";
export let debug = false;
export let printDebug = true;
export let addr = {
  lastYearAddress: "",
  lastYearAddressCity: "",
  lastYearAddressState: "",
  lastYearAddressZipCode: "",
  lastYearAddressfrom: "",
  lastYearAddressTo: "",
};
export const startTimeVal = [
  { value: "Immediately" },
  { value: "Within 2 Weeks" },
  { value: "Within 1 Month" },
];

export const gender = [
  { value: "Male" },
  { value: "Female" },
  { value: "Other" },
];

export const form3DefaultValue = {
  companyName: "Default",
  companyAddress: "Default",
  companyCity: "Default",
  companyState: "Default",
  companyPostCode: "Default",
  applicationApplyDate: "2018-10-10",
  applicationApplyAsPosition: "Contractor",
  applicantfirstName: "Default",
  applicantLastName: "Default",
  applicantPhoneNumber: "111-111-1111 x1111",
  emergencyContactfirstName: "Default",
  emergencyContactlastName: "Default",
  emergencyContactNumber: "111-111-1111 x1111",
  age: 10,
  applicantdateofbirth: "2018-10-10",
  physicalExamExpirationDate: "2018-10-10",
  applicantAddresses: [addr],
  everWorkedForCompany: "Yes",
  applicantSchoolGrade: "3",
  applicantCollegeGrade: "2",
  applicantPostGraduateGrade: "4",
  employmentHistory: [
    employmentHistoryDummyElement,
    employmentHistoryDummyElement,
  ],
  employmentExperienceHistory: [
    drivingExperienceDummyElement,
    drivingExperienceDummyElement,
  ],
  lastFiveYearStatesOperate: "Default",
  Listspecialcourses: "Default",
  ListanySafeDrivingAwards: "Default",
  employmentAccidentsHistory: [
    employmentAccidentHistoryDummyElement,
    employmentAccidentHistoryDummyElement,
  ],
  violations: [trafficConvictionDummyElement],
  dateOfAccident: "Default",
  NumberOfAccidents: "Default",
  LocationOfAccidents: "Default",
  numberofFatalities: "Default",
  numberofPeopleleInjured: "Default",
  dateOfViolation: "2018-10-10",
  LocationOfViolation: "Default",
  ViolationCharge: "Default",
  ViolationPenalty: "Default",
  stateOfLicence: "Default",
  licenceNumber: "Default",
  licenceType: "Default",
  licenceEndoresment: "Default",
  licenceExpirationDate: "2018-10-10",
  deniedLicences: "Default",
  permitLicences: "Default",
  reasonforUnableToPerformActions: "Default",
  convictedofafelony: "Default",
  answerToAnyQuestion: "Default",
  referencefirstName: "Default",
  referencelastName: "Default",
  referenceCompany: "Default",
  referenceTitle: "Default",
  referencePhoneNumber: "111-111-1111 x1111",
  referenceAddress: "Default",
  signature: "Default",
  dateOfApplication: "2018-10-10",
  remarks: "Default",
};

export const print = (msg: string, obj: any) => {
  if (printDebug == false) return;
  console.log("PRINT : " + msg + " ");
  console.log(obj);
};

export const snackbarDuratuion: number = 2000;
