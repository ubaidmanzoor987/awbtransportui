import {Result} from "../interfaces/registerinterface";
import {baseUrl} from "../shared/baseUrl";

export async function fileUploadApi(data: any ) {
    let res;
    try {
            res = await fetch(baseUrl+"/api/files/upload", {
            method:'POST',
            body:data,
            }) ;
            const resultData = await res.json() as Result;
            return resultData;
    } catch (ex) {
        console.log("exception", ex);
        return ex;
    }
}