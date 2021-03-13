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
  employmentHistoryfrom: "2018-01-01",
  employmentHistoryTo: "Default",
  employmentHistorystatus: "Default",
  employmentHistoryposition: "Default",
  employmentHistoryaddress: "Default",
  employmentHistorycompanyPhone: "Default",
  employmentHistoryreasonForLeaving: "Default",
  employmentHistorysubjecttotheFMCSRs: "Default",
  employmentHistorydrugandalcoholTesting: "Default",
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
  stateOfLicence: "Default",
  licenceNumber: "Default",
  licenceType: "Default",
  licenceEndoresment: "Default",
  licenceExpirationDate: "Default",
};

export type tDriverLicenses = tDriverLicenseInfo[];
//-----------DriverLicense-----------

//-----------TrafficConvictions-----------
export type tTrafficConvictionInfo = {
  dateOfViolation: string;
  LocationOfViolation: string;
  ViolationCharge: string;
  ViolationPenalty: string;
};

export let trafficConvictionDummyElement: tTrafficConvictionInfo = {
  dateOfViolation: "Default",
  LocationOfViolation: "Default",
  ViolationCharge: "Default",
  ViolationPenalty: "Default",
};

export type tTrafficConvictions = tTrafficConvictionInfo[];
//-----------TrafficConvictions-----------

export type EmploymentAccidentHistoryInfo = {
  dateOfAccident: string;
  NumberOfAccidents: string;
  LocationOfAccidents: string;
  numberofFatalities: string;
  numberofPeopleleInjured: string;
};

export let employmentAccidentHistoryDummyElement: EmploymentAccidentHistoryInfo = {
  dateOfAccident: "Default",
  NumberOfAccidents: "Default",
  LocationOfAccidents: "Default",
  numberofFatalities: "Default",
  numberofPeopleleInjured: "Default",
};

export type EmploymentAccidentHistories = EmploymentAccidentHistoryInfo[];

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
  NatureOfAccidents: false,
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

export let reqBitsKeys = [
  { first_name: 0 },
  { last_name: 1 },
  { phone_number: 2 },
  { email: 3 },
  { dateofBirth: 4 },
  { socialSecurity: 5 },
  { address: 6 },
  { city: 7 },
  { state: 8 },
  { zipCode: 9 },
  { lastThreeYearResidenceCheck: 10 },
  { addresses: 11 },
  { lastYearAddress: 12 },
  { lastYearAddressCity: 13 },
  { lastYearAddressState: 14 },
  { lastYearAddressZipCode: 15 },
  { lastYearAddressfrom: 16 },
  { lastYearAddressTo: 17 },
  { startTime: 18 },
  { hearAbout: 19 },
  { eligibletoWorkInUnitedState: 20 },
  { classAExperienceLevel: 21 },
  { willingForDrugTest: 22 },
];

export const WrongPatternError: string = "Wrong Pattern";
export let debug = true;
export let addr = {
  lastYearAddress: "Default",
  lastYearAddressCity: "Default",
  lastYearAddressState: "Default",
  lastYearAddressZipCode: "Default",
  lastYearAddressfrom: "2018-01-01",
  lastYearAddressTo: "2018-01-01",
};
export const startTimeVal = [{ value: "Immediately" }, { value: "Within 2 Weeks" }, { value: "Within 1 Month" }];

export const gender = [{ value: "Male" }, { value: "Female" }, { value: "Other" }];
