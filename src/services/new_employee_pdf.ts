import {baseUrl} from "../shared/baseUrl";

export async function new_employee_pdf(user_name: string ) {
    let res;
    try {
            res = await fetch(baseUrl+"/api/pdf/new_employee?user_name="+user_name, {
            method:'GET',
            });
            return res;
    } catch (ex) {
      //console.log("exception", ex);
        return ex;
    }
}