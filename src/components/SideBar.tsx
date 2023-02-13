import { useState } from "react";
import styled from "styled-components";
import { AiOutlinePlusCircle } from "react-icons/ai";

export const SideBar = ({
  setDisplayCard,
  displayCard,
}: {
  setDisplayCard: (value: Boolean) => void;
  displayCard: Boolean;
}) => {
  return (
    <Container>
      <IconContainer onClick={() => setDisplayCard(!displayCard)}>
        <AiOutlinePlusCircle />
      </IconContainer>
      <IconInfo>Add new list</IconInfo>
    </Container>
  );
};

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex
  flex-direction: column;
  justify-content: flex-end;
  background-color: black;
  color: white;
  height: 100vh;
  width: 40px;
  position: sticky;
  top: 0;
  left: 0;
  /* margin-right: 100px; */
`;

const IconInfo = styled.div`
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
  width: 90px;
  padding: 8px;
  border-radius: 4px;
  opacity: 80%;
  visibility: hidden;
`;

const IconContainer = styled.div`
  cursor: pointer;
  margin: 25px 10px;

  &: hover + ${IconInfo} {
    visibility: visible;
  }
`;
