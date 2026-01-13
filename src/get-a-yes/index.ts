/* app imports */
import { API_ROOT } from "../shared/index.js";
import { TAPIResponse } from "../types/index.js";

/* types */
type TOutput = TAPIResponse;

/* module */
async function getAYes(): Promise<TOutput> {
  try  {
    /* setup */
    const API_URL = `${API_ROOT}/yes`;

    /* fetch */
    const response = await fetch(API_URL);

    /* check and return */
    if (!response.ok) {
      throw new Error("Get A Yes: Sorry, Something Went Wrong");
    } else {
      const { reason } = await response.json();
      return {
        code: "api-ok",
        message: "No errors encountered, check payload",
        payload: { affirmation: reason }
      };
    }
  } catch (error) {
    console.error(error);
    return {
      code: "api-fail",
      message: "Oops, something went wrong!",
      payload: null,
    };
  }
}

/* exports */
export { getAYes };
