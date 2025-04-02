import React from "react";
import { Avatar, Button, Card, For, Stack } from "@chakra-ui/react";
import { Link } from "react-router";

const Cards = ({ cardName, handleClick, id }) => {
  return (
    <>
      <Link to={`board/${id}`}>
        <Card.Root width="300px" m="4">
          <Card.Body gap="2">
            <Card.Title mb="2">{cardName}</Card.Title>
          </Card.Body>
        </Card.Root>
      </Link>
    </>
  );
};

export default Cards;
