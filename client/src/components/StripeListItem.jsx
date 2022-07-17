import React, { useState, memo, useRef } from "react";
import styled from "styled-components";
import { FaUserSlash } from "react-icons/fa";
import BookedButtonBox from "./BookedButtonBox";
import UserBlockButtonBox from "./UserBlockButtonBox";

function ListItem({ item, columnTemplete, keys, listName, id, handleClick }) {
  const userId = useRef(0);

  function stopCapturing(e) {
    userId.current = id;
    handleClick(userId.current);
    e.stopPropagation();
  }

  return (
    <ItemList onClick={stopCapturing} templete={columnTemplete}>
      {keys.map((key) => {
        return (
          <Item>
            {key === "role"
              ? item["businessNumber"] === null
                ? "User"
                : "Host"
              : item[key]}
          </Item>
        );
      })}
      {listName === "BOOK" ? <BookedButtonBox></BookedButtonBox> : ""}
    </ItemList>
  );
}
// 1fr 2fr 1fr 1fr 2fr 1fr 1.2fr;

const ItemList = styled.div`
  display: grid;

  grid-template-columns: ${(props) => props.templete};
  cursor: pointer;
  column-gap: 3px;
  border-bottom: 1px solid #bbd3f2;
  &:last-child {
    border-bottom: 2px solid #8daef2;
  }
  &:hover {
    background-color: lightgrey;
    &.Item {
      background-color: lightgrey;
    }
  }
`;
const Item = styled.div`
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 3.4rem;
  margin: 0;
`;

export default ListItem;
