import {Address} from "../Types/types";

export interface Result {
    data: {
        addresses: Address[], 
        applicantAddresses: Address[]
    }, 
    error: string
    
}