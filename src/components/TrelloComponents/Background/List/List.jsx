import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getListItemOfBoard } from "../../Utils/fetchingDataFunctions";
import Cards from "../Card/Card";
import { Flex } from "@chakra-ui/react";

const List = () => {
  let { id } = useParams();
  const [listData, setlistData] = useState([]);
  useEffect(() => {
    async function getList() {
      let response = await getListItemOfBoard(id);
      setlistData(response.data);
    }
    getList();
  }, []);
  return (
    <>
      <Flex>
        {listData.map((ele, ind) => {
          return <Cards cardName={ele.name} key={ind} />;
        })}
      </Flex>
    </>
  );
};

export default List;
