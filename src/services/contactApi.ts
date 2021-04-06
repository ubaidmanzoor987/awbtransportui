import {LoginState} from "../Component/SignIn";
import {Result} from "../interfaces/registerinterface";
import {baseUrl} from "../shared/baseUrl";
import {processResult} from './commonresult';

export async function contactUs(data: any ) {
    let res;
    try {
            res = await fetch(baseUrl+"/api/contact_us", {
            method:'POST',
            body:JSON.stringify(data),
            headers:{
                'Content-Type':'application/json'
               }
            }) ;
            const resultData = await res.json() as Result;
            //console.log("resultData", resultData);
            if (resultData.data){
                processResult(resultData);
            }
            return resultData;
    } catch (ex) {
        //console.log("exception", ex);
        return ex;
    }
}