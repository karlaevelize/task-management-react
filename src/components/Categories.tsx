import { useState } from "react";
import styled from "styled-components";
import { Category } from "../types/types";
import { Tasks } from "./Tasks";

export const Categories = ({
  category,
  handleDrop,
}: {
  category: Category;
  handleDrop: (categoryId: number, itemId: number) => void;
}) => {
  const { name, tasks, id } = category;

  return (
    <Container
      onDragEnter={() => {
        console.log(name, id);
        handleDrop(id, 1);
      }}
      onDragEnd={() => console.log("ended", name)}
    >
      <p>{name}</p>
      <div>
        {tasks.map((task) => (
          <Tasks task={task} />
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  border-left: 1px solid #e0e0e0;
  border-radius: 14px;
  padding: 1%;
  margin: 0.5%;
  /* min-width: 300px; */

  @media (min-width: 700px) {
    min-width: 350px;
    height: 85vh;
  }
`;
