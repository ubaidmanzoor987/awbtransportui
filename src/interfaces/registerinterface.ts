import {Address} from "../Types/types";

export interface Result {
    data: {
        addresses: Address[], 
        applicantAddresses: Address[],
        applicantdateofbirth: string,
        dateofBirth: string,
        physicalExamExpirationDate: string,
        employmentHistoryfrom: string,
        employmentHistoryTo: string,
        experienceFromDate: string,
        experienceToDate: string,
        //dateOfAccident: string,
        dateOfViolation: string,
        lastYearAddressfrom: string,
        lastYearAddressTo: string,
        isEditable: string,
        isDeleted: string
    }, 
    error: string,
    
}