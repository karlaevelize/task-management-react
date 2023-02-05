import "./App.css";
import styled from "styled-components";
import { Home } from "./pages";
import { SideBar, TopBar } from "./components";

const App = () => {
  return (
    <AppContainer>
      <SideBar />
      <Home />
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* border: 2px solid blue; */
`;
