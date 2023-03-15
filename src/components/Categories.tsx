import { useState } from "react";
import styled from "styled-components";
import { Category, CategoryPick } from "../types/types";
import { Tasks } from "./Tasks";
import { BsTrash } from "react-icons/bs";

export const Categories = ({
  category,
  handleDrop,
  deleteCategory,
}: {
  category: Category;
  handleDrop?: (categoryId: number, itemId: number) => void;
  deleteCategory: (id: number) => void;
}) => {
  const { name, items, id, color } = category;
  // console.log("category", category);

  return (
    <Container
      style={{ borderLeft: `2px solid ${color}` }}
      // onDragEnter={() => {
      //   console.log(name, id);
      //   handleDrop(id, 1);
      // }}
      // onDragEnd={() => console.log("ended", name)}
    >
      <TitleContainer>
        <TitleItem>
          <b>{name.toLocaleUpperCase()}</b>
        </TitleItem>
        <TitleItem
          onClick={() => deleteCategory(id)}
          style={{ cursor: "pointer" }}
        >
          <BsTrash />
        </TitleItem>
      </TitleContainer>
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

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TitleItem = styled.p`
  color: #212427;
  margin-right: 3px;
`;
