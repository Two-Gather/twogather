import React, { useState, memo } from "react";
import styled from "styled-components";
import { FaUserSlash } from "react-icons/fa";
import BookedButtonBox from "./BookedButtonBox";
import UserBlockButtonBox from "./UserBlockButtonBox";

function ListItem({ item, columnTemplete, keys, listName }) {
  return (
    <ItemList templete={columnTemplete}>
      {keys.map((key) => {
        return <Item>{item[key]}</Item>;
      })}
      {listName === "BOOK" ? (
        <BookedButtonBox></BookedButtonBox>
      ) : listName === "USER" ? (
        <UserBlockButtonBox></UserBlockButtonBox>
      ) : (
        ""
      )}
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
