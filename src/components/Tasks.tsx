import { Task } from "../types/types";
import styled from "styled-components";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export const Tasks = ({ task }: { task: Task }) => {
  const [displayDescription, setDisplayDescription] = useState<Boolean>(false);

  return (
    <Container draggable onDragStart={() => console.log("dragging")}>
      <TaskContainer>
        <b>{task.name}</b>{" "}
        <IconsContainer>
          <div onClick={() => setDisplayDescription(!displayDescription)}>
            {displayDescription ? <FiChevronUp /> : <FiChevronDown />}
          </div>
        </IconsContainer>
      </TaskContainer>
      {displayDescription && (
        <Accordion>
          <p>{task.description}</p>
        </Accordion>
      )}
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  border-left: 2px solid green;
  border-radius: 7px;
  margin-bottom: 3%;
  padding: 2%;
`;

const TaskContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Accordion = styled.div``;
