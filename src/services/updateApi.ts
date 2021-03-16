import { LoginState } from "../Component/SignIn";
import { Result } from "../interfaces/registerinterface";
import { baseUrl } from "../shared/baseUrl";

export async function update(data: any) {
  let res;
  try {
    res = await fetch(baseUrl + "/api/update_record", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const resultData = (await res.json()) as Result;
    return resultData;
  } catch (ex) {
    console.log("exception", ex);
    return ex;
  }
}
