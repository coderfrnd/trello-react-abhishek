import { TrialUrl, URL } from "./Baseurl";
import axios from "axios";
const key = import.meta.env.VITE_API_KEY;
const token = import.meta.env.VITE_TOKEN;
export async function getBoardList() {
  try {
    const response = await axios.get(URL);
    return response;
  } catch (error) {
    console.log(error, "Error in getting board Data");
  }
}
export async function getListItemOfBoard(id) {
  try {
    console.log(TrialUrl + `${id}/lists?key=${key}&token=${token}`);
    const response = await axios.get(
      TrialUrl + `${id}/lists?key=${key}&token=${token}`
    );
    return response;
  } catch (error) {
    console.log(error, "Error in getting board Data");
  }
}
