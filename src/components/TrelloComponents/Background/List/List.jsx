import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  archeiveList,
  createList,
  getListItemOfBoard,
} from "../../Utils/fetchingDataFunctions";
import { Flex } from "@chakra-ui/react";
import ListCard from "../ReusableComponents/ListCard";
import DialogBox from "../ReusableComponents/DialogBox";

const List = () => {
  let { id } = useParams();
  const [listData, setlistData] = useState([]);
  useEffect(() => {
    async function getList() {
      let response = await getListItemOfBoard(id);
      setlistData(response.data);
    }
    getList();
  }, [id]);
  async function handleCreateList(name) {
    if (name == "") return;
    try {
      let response = await createList(id, name);
      setlistData((prev) => [...prev, response.data]);
    } catch (error) {
      console.log(error, "Error in creating Lists");
    }
  }
  async function handleDeleteList(id) {
    try {
      let response = await archeiveList(id);
      if (response) {
        setlistData((prev) => prev.filter((ele) => ele.id != response.data.id));
        alert("successfully deleted");
      }
    } catch (error) {
      console.log(error, "Error in deletion list");
    }
  }
  return (
    <>
      <Flex w="100%">
        <DialogBox name="ADD Lists" handleClick={handleCreateList} />
        {listData.map((ele, ind) => {
          return (
            <ListCard
              listName={ele.name}
              key={ind}
              id={ele.id}
              handleDeleteList={handleDeleteList}
            />
          );
        })}
      </Flex>
    </>
  );
};

export default List;
