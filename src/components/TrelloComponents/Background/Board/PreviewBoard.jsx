import React, { useContext, useEffect, useState } from "react";
import Cards from "../ReusableComponents/Card";
import { Flex } from "@chakra-ui/react";
import {
  createBoard,
  getBoardList,
  getListItemOfBoard,
} from "../../Utils/fetchingDataFunctions";
import DialogBox from "../ReusableComponents/DialogBox";

const PreviewBoard = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    async function fetchBoard() {
      try {
        let res = await getBoardList();
        setdata(res.data);
      } catch (error) {
        console.log("Error in Preview Board UseEffect", error);
      }
    }
    fetchBoard();
  }, []);
  async function handleClick(name) {
    if (name == "") return;
    try {
      let response = await createBoard(name);
      if (response) {
        setdata((prev) => [...prev, response.data]);
      }
    } catch (error) {
      console.log(error, "Error in creating Board");
    }
  }
  return (
    <>
      <Flex gap="4" wrap="wrap">
        <DialogBox name="Add Board" handleClick={handleClick} />
        {data.length > 0
          ? data.map((ele, ind) => {
              return <Cards cardName={ele.name} key={ind} id={ele.id} />;
            })
          : ""}
      </Flex>
    </>
  );
};

export default PreviewBoard;
