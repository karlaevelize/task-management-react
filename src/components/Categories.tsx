import { useState } from "react";
import styled from "styled-components";
import { Category, CategoryPick } from "../types/types";
import { Tasks } from "./Tasks";

export const Categories = ({
  category,
  handleDrop,
}: {
  category: Category;
  handleDrop?: (categoryId: number, itemId: number) => void;
}) => {
  const { name, items, id, color } = category;

  return (
    <Container
      style={{ borderLeft: `2px solid ${color}` }}
      // onDragEnter={() => {
      //   console.log(name, id);
      //   handleDrop(id, 1);
      // }}
      // onDragEnd={() => console.log("ended", name)}
    >
      <p style={{ color: "#212427", marginLeft: "3px" }}>
        <b>{name.toLocaleUpperCase()}</b>
      </p>
      <div>
        {items && items.map((item) => <Tasks key={item.id} task={item} />)}
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  /* border-left: 2px solid green; */
  color: #616161;
  border-radius: 14px;
  padding: 1%;
  margin: 0.5%;
  /* min-width: 300px; */

  @media (min-width: 700px) {
    min-width: 350px;
    height: 85vh;
  }
`;
