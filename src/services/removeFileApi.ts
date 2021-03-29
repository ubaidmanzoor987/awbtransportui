import { Result } from "../interfaces/registerinterface";
import { baseUrl } from "../shared/baseUrl";

export async function deleteFile(user_name: string, fileName: string) {
  let res;
  try {
    res = await fetch(baseUrl + "/api/delete_file?user_name="+user_name+'&'+`${fileName}=${fileName}&_time=${(new Date()).getTime()}`, {
      method: "GET",
    });
    const resultData = (await res.json()) as Result;
    // processResult(resultData.data);
    return resultData;
  } catch (ex) {
    //console.log("exception", ex);
    return ex;
  }
}
