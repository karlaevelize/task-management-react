import { useState } from "react";
import styled from "styled-components";
import { Category } from "../types/types";
import { Tasks } from "./Tasks";

export const Categories = ({ category }: { category: Category }) => {
  const { name, tasks } = category;

  const [displayTasks, setDisplayTasks] = useState<Boolean>(true);

  return (
    <Container>
      <p>{name}</p>
      <div>{displayTasks && tasks.map((task) => <Tasks task={task} />)}</div>
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
