import {baseUrl} from "../shared/baseUrl";
export async function get_all_users(data:any) {
    let res;
    try {
            res = await fetch(baseUrl+"/api/get_all_users", {
            method:'POST',
            body:JSON.stringify(data),
            headers:{
                'Content-Type':'application/json'
               }
            }) ;
            const resultData = await res.json();
            return resultData;
    } catch (ex) {
        //console.log("exception", ex);
        return ex;
    }
}