import {Result} from "../interfaces/registerinterface";
import {baseUrl} from "../shared/baseUrl";

export async function fileUploadApi(data: any ) {
  //console.log("data");
  //console.log(data);
    let res;
    try {
            res = await fetch(baseUrl+"/api/files/upload", {
            method:'POST',
            body:data,
            }) ;
            return res;
    } catch (ex) {
        //console.log("exception", ex);
        return ex;
    }
}