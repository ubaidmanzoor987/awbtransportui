export const RequireError: string = "Required *";
export const states = [
  { value: "AA - Armed Forces America" },
  { value: "Armed Forces" },
  { value: "AP - Armed Forces Pacific" },
  { value: "AL - Alabama" },
  { value: "AK - Alaska" },
  { value: "AS - American Samoa" },
  { value: "AZ - Arizona" },
  { value: "AR - Arkansas" },
  { value: "CA - California" },
  { value: "CO - Colorado" },
  { value: "CT - Connecticut" },
  { value: "DC - District of Columbia" },
  { value: "DE - Delaware" },
  { value: "FL - Florida" },
  { value: "GA - Georgia" },
  { value: "GU - Guam" },
  { value: "HI - Hawaii" },
  { value: "ID - Idaho" },
  { value: "IL - Illinois" },
  { value: "IN - Indiana" },
  { value: "IA - Iowa" },
  { value: "KS - Kansas" },
  { value: "KY - Kentucky" },
  { value: "LA - Louisiana" },
  { value: "ME - Maine" },
  { value: "MD - Maryland" },
  { value: "MA - Massachusetts" },
  { value: "MI - Michigan" },
  { value: "MN - Minnesota" },
  { value: "MS - Mississippi" },
  { value: "MO - Missouri" },
  { value: "MT - Montana" },
  { value: "NE - Nebraska" },
  { value: "NH - New Hampshire" },
  { value: "NJ - New Jersey" },
  { value: "NM - New Mexico" },
  { value: "NY - New York" },
  { value: "NV - Nevada" },
  { value: "NC - North Carolina" },
  { value: "ND - North Dakota" },
  { value: "MP - Northern Mariana Islands" },
  { value: "OH - Ohio" },
  { value: "OK - Oklahoma" },
  { value: "OR - Oregon" },
  { value: "PA - Pennsylvania" },
  { value: "PUR - Puerto Rico" },
  { value: "RI - Rhode Island" },
  { value: "SC - South Carolina" },
  { value: "SD - South Dakota" },
  { value: "TN - Tennessee" },
  { value: "TX - Texas" },
  { value: "UT - Utah" },
  { value: "VT - Vermont" },
  { value: "VI - Virgin Islands" },
  { value: "VA - Virginia" },
  { value: "WA - Washington" },
  { value: "WV - West Virginia" },
  { value: "WI - Wisconsin" },
  { value: "WY - Wyoming" },
];

export const licenseType = [
  
  {
    value:
      "Class A: Combination (tractor plus trailer) vehicle of 26,001 pounds",
  },
  { value: "Class B: Single (straight) vehicle include trucks and buses" },
  {
    value:
      "Class C: Single vehicles include small buses, strecthed limousines , and non-commercial vehicles",
  },
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
  employmentHistorycompanyName:string;
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
  employmentHistorycompanyName: "",
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
  referenceCity: string;
  referenceState: string;
  referenceZipCode: string;
};

export let ReferenceDummyElement: tReferenceInfo = {
  referencefirstName: "",
  referencelastName: "",
  referenceCompany: "",
  referenceTitle: "",
  referencePhoneNumber: "",
  referenceAddress: "",
  referenceCity: "",
  referenceState: "",
  referenceZipCode: "",
};

export type tReferences = tReferenceInfo[];
//-----------References-----------

//-----------TrafficConvictions-----------
export type tTrafficConvictionInfo = {
  dateOfViolation: string;
  LocationOfViolation: string;
  ViolationCharge: string;
  ViolationPenalty?: number;
};

export let trafficConvictionDummyElement: tTrafficConvictionInfo = {
  dateOfViolation: "",
  LocationOfViolation: "",
  ViolationCharge: "",
  ViolationPenalty: undefined,
};

export type tTrafficConvictions = tTrafficConvictionInfo[];
//-----------TrafficConvictions-----------

export type EmploymentAccidentHistoryInfo = {
  dateOfAccident: string;
  NumberOfAccidents: string;
  LocationOfAccidents: string;
  numberofFatalities?: number;
  numberofPeopleleInjured?: number;
};

export let employmentAccidentHistoryDummyElement: EmploymentAccidentHistoryInfo = {
  dateOfAccident: "",
  NumberOfAccidents: "",
  LocationOfAccidents: "",
  numberofFatalities: undefined ,
  numberofPeopleleInjured: undefined,
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
  experiencenumberOfMiles?: number;
};

export type tDrivingExperiences = tDrivingExperience[];

export let drivingExperienceDummyElement: tDrivingExperience = {
  experienceclassofEquipment: "",
  experienceFromDate: "",
  experienceToDate: "",
  experiencenumberOfMiles: undefined,
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
  employmentHistorycompanyName:true,
  non_united_state_citizen:true,
  united_state_citizen:true,
  lawful_permanent_resident:true,
  alien_authorized:true,
  alien_registration_number:true,
  expiration_date:true,
  formi94_reg_number:true,
  foreign_passport_number:true,
  issuance_country:true,
  first_name: true,
  last_name: false,
  phone_number: true,
  fromDateAddress:true,
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
  applicantCollegeGrade: false,
  applicantPostGraduateGrade: false,
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
  ListanySafeDrivingAwards: true,
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
  licenceEndoresment: false,
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
  referenceCity: false,
  referenceState: false,
  referenceZipCode: false,
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
//   employmentHistorycompanyName:true,

//   nameOfPersonProvidingInformation: true,
//   nameOfPersonProvidingInformationTitle: true,
//   nameOfPersonProvidingInformationPhone: true,
//   nameOfPersonProvidingInformationDate: true,
//   referenceCity:true,
//   referenceState:true,
//   referenceZipCode:true,
//   fromDateAddress:true,
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
  applicantCollegeGrade: false,
  applicantPostGraduateGrade: false,
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
export let dummyAddrData = {
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
  companyName: "",
  companyAddress: "",
  companyCity: "",
  companyState: "",
  companyPostCode: "",
  applicationApplyDate: "2018-10-10",
  applicationApplyAsPosition: "Contractor",
  applicantfirstName: "",
  applicantLastName: "",
  applicantPhoneNumber: "111-111-1111 x1111",
  emergencyContactfirstName: "",
  emergencyContactlastName: "",
  emergencyContactNumber: "111-111-1111 x1111",
  age: 10,
  applicantdateofbirth: "2018-10-10",
  physicalExamExpirationDate: "2018-10-10",
  applicantAddresses: [dummyAddrData],
  everWorkedForCompany: "Yes",
  applicantSchoolGrade: "3",
  applicantCollegeGrade: "2",
  applicantPostGraduateGrade: "4",
  
  employmentHistory: [
    employmentHistoryDummyElement,
  ],
  employmentExperienceHistory: [
    drivingExperienceDummyElement,
  ],
  lastFiveYearStatesOperate: "",
  Listspecialcourses: "",
  ListanySafeDrivingAwards: "",
  employmentAccidentsHistory: [
    employmentAccidentHistoryDummyElement,
  ],
  violations: [trafficConvictionDummyElement],
  dateOfAccident: "",
  NumberOfAccidents: "",
  LocationOfAccidents: "",
  numberofFatalities: "",
  numberofPeopleleInjured: "",
  dateOfViolation: "2018-10-10",
  LocationOfViolation: "",
  ViolationCharge: "",
  ViolationPenalty: "",
  stateOfLicence: "",
  licenceNumber: "",
  licenceType: "",
  licenceEndoresment: "",
  licenceExpirationDate: "2018-10-10",
  deniedLicences: "",
  permitLicences: "",
  reasonforUnableToPerformActions: "",
  convictedofafelony: "",
  answerToAnyQuestion: "",
  referencefirstName: "",
  referencelastName: "",
  referenceCompany: "",
  referenceTitle: "",
  referencePhoneNumber: "111-111-1111 x1111",
  referenceAddress: "",
  signature: "",
  dateOfApplication: "2018-10-10",
  remarks: "",
};

export const print = (msg: string, obj: any) => {
  if (printDebug == false) return;
  console.log("PRINT : " + msg + " ");
  console.log(obj);
};

export const snackbarDuratuion: number = 2000;

export const getMaxDate = () => {
  let date = new Date();
  date.setFullYear(date.getFullYear() - 16);
  // max: "2020-01-01",
  // console.log("date.toLocaleDateString()");
  // console.log(date.toISOString().split("T")[0]);

  return date.toISOString().split("T")[0];
};


export const getMaxAgeLimit = () => {
  let date = new Date();
  date.setFullYear(date.getFullYear() - 80);
  // max: "2020-01-01",
  // console.log("date.toLocaleDateString()");
  // console.log(date.toISOString().split("T")[0]);

  return date.toISOString().split("T")[0];
}


export const getMinDateLimit = (fromDate:string) => {
  if(fromDate === "" || fromDate === undefined ) return "";
  let date = new Date(fromDate);
  date.setDate(date.getDate()+1);
  return date.toISOString().split("T")[0];
}