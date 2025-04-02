import React, { useContext } from "react";
import Cards from "../Card/Card";
import { Flex } from "@chakra-ui/react";
import {
  getBoardList,
  getListItemOfBoard,
} from "../../Utils/fetchingDataFunctions";
import { TransferData } from "../../../../App";

const PreviewBoard = () => {
  const data = useContext(TransferData);
  return (
    <>
      <Flex gap="4" wrap="wrap">
        {data.length > 0
          ? data.map((ele, ind) => {
              return <Cards cardName={ele.name} key={ind} id={ele.id} />;
            })
          : // <Text>Wait</Text>
            ""}
      </Flex>
    </>
  );
};

export default PreviewBoard;
