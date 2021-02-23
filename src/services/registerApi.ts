import {SignUpState} from "../Component/SignUp";
import {Result} from "../interfaces/registerinterface";

export async function register(data: SignUpState ) {
    let res;
    try {
            res = await fetch("http://127.0.0.1:5000/api/register", {
            method:'PUT',
            body:JSON.stringify(data),
            headers:{
                'Content-Type':'application/json'
            }
            }) ;
            const resultData = await res.json() as Result;
            return resultData;
    } catch (ex) {
        console.log("exception", ex);
        return ex;
    }
}