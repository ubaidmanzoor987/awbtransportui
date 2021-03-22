import {SignUpState} from "../Component/SignUp";
import {Result} from "../interfaces/registerinterface";
import {baseUrl} from "../shared/baseUrl";

export async function register(data: SignUpState ) {
    let res;
    try {
            res = await fetch(baseUrl+"/api/register", {
            method:'PUT',
            body:JSON.stringify(data),
            headers:{
                'Content-Type':'application/json'
            }
            }) ;
            const resultData = await res.json() as Result;
            return resultData;
    } catch (ex) {
        //console.log("exception", ex);
        return ex;
    }
}