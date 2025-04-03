import { Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "./components/TrelloComponents/NavbarComponent/Navbar";
import PreviewBoard from "./components/TrelloComponents/Background/Board/PreviewBoard";
import { Route } from "react-router";
import { Routes } from "react-router";
import List from "./components/TrelloComponents/Background/List/List";
import ListCards from "./components/TrelloComponents/Background/List/InsideList";

const App = () => {
  return (
    <>
      <Box pt="60px">
        <Navbar />
        <Routes>
          <Route index element={<PreviewBoard />} />
          <Route path="/board/:id" element={<List />} />
          <Route path="/lists/:id" element={<ListCards />} />
        </Routes>
      </Box>
    </>
  );
};

export default App;
