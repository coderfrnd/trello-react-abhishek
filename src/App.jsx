import { Button, HStack } from "@chakra-ui/react";
import React, { createContext, useContext, useEffect, useState } from "react";
import Navbar from "./components/TrelloComponents/NavbarComponent/Navbar";
import PreviewBoard from "./components/TrelloComponents/Background/Board/PreviewBoard";
import { Route } from "react-router";
import { Routes } from "react-router";
import List from "./components/TrelloComponents/Background/List/List";
import { getBoardList } from "./components/TrelloComponents/Utils/fetchingDataFunctions";

const TransferData = createContext();

const App = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    async function fetchBoard() {
      try {
        let res = await getBoardList();
        // console.log(res);
        setdata(res.data);
      } catch (error) {
        console.log("Error in Preview Board UseEffect", error);
      }
    }
    fetchBoard();
  }, []);
  return (
    <>
      <TransferData.Provider value={data}>
        <Navbar />
        <Routes>
          <Route index element={<PreviewBoard />} />
          <Route path="/board/:id" element={<List />} />
        </Routes>
      </TransferData.Provider>
    </>
  );
};

export default App;
export { TransferData };
