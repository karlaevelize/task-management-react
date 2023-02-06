import styled from "styled-components";
import { AiOutlinePlusCircle } from "react-icons/ai";

export const SideBar = () => {
  return (
    <Container>
      <div style={{ margin: "15px" }}>
        <AiOutlinePlusCircle />
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex
  flex-direction: column;
  background-color: black;
  color: white;
  height: 100vh;
  width: 40px;
  position: sticky;
  top: 0;
  left: 0;
  /* margin-right: 100px; */
`;
