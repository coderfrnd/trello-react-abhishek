import { ListUrl, TrialUrl, URL } from "./Baseurl";
import axios from "axios";
const key = import.meta.env.VITE_API_KEY;
const token = import.meta.env.VITE_TOKEN;
let combineKeyAndToken = `key=${key}&token=${token}`;
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
    const response = await axios.get(
      TrialUrl + `${id}/lists?` + combineKeyAndToken
    );
    return response;
  } catch (error) {
    console.log(error, "Error in getting board List Data");
  }
}
export async function getCardsOnEachList(id) {
  try {
    const response = await axios.get(
      ListUrl + `${id}/cards?` + combineKeyAndToken
    );
    return response;
  } catch (error) {
    console.log(error, "Error in Create Lists");
  }
}
export async function createCard(listId, name) {
  try {
    const response = await axios.post(
      `https://api.trello.com/1/cards?` +
        `idList=${listId}&` +
        `name=${name}&` +
        combineKeyAndToken
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error, "error in create card");
  }
}
export async function createBoard(name) {
  try {
    const response = await axios.post(
      `https://api.trello.com/1/boards/?` + `name=${name}&` + combineKeyAndToken
    );
    return response;
  } catch (error) {
    console.log(error, "error in create Board");
  }
}
export async function createList(boardId, name) {
  try {
    // https://api.trello.com/1/lists?name=AAA&idBoard=67ecbb6e17583b6e57780d9b&key=224222c708622fe63b911ff49a9c69fc&token=ATTA97ebce49028847f313c8cde9b5a6ced594e7ecd43975adda20da44b201462e6825AF93B0 x
    const response = await axios.post(
      `https://api.trello.com/1/lists/?` +
        `name=${name}&` +
        `idBoard=${boardId}` +
        "&" +
        combineKeyAndToken
    );
    return response;
  } catch (error) {
    console.log(error, "error in create List");
  }
}
export async function archeiveList(listId) {
  try {
    let response = await axios.put(
      "https://api.trello.com/1/lists/" +
        listId +
        "/?" +
        combineKeyAndToken +
        "&closed=true"
    );
    return response;
  } catch (error) {
    console.log(error, "Error in achrieveList");
  }
}
