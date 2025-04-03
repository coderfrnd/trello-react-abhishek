import React from "react";
import { Card } from "@chakra-ui/react";
import { Link } from "react-router";

const Cards = ({ cardName, id }) => {
  return (
    <>
      <Link to={`board/${id}`}>
        <Card.Root m="2" cursor="pointer">
          <Card.Body gap="1">
            <Card.Title mb="1">{cardName}</Card.Title>
          </Card.Body>
        </Card.Root>
      </Link>
    </>
  );
};

export default Cards;
