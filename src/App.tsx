import "./App.css";
import styled from "styled-components";
import { Home } from "./pages";
import { SideBar } from "./components";
import { useState } from "react";

const App = () => {
  const [displayCard, setDisplayCard] = useState<Boolean>(true);

  return (
    <AppContainer>
      <SideBar setDisplayCard={setDisplayCard} displayCard={displayCard} />
      <Home displayCard={displayCard} />
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* border: 2px solid blue; */
`;
