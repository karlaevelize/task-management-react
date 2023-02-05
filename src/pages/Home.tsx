import data from "../data/data.json";
import styled from "styled-components";
import { useState } from "react";
import { Category } from "../types/types";
import { Categories } from "../components";

export const Home = () => {
  const { categories } = data;

  const [categoriesList, setCategoriesList] = useState<Category[]>(categories);

  return (
    <MainContainer>
      <h1>Tasks</h1>
      <Container>
        {categoriesList.map((category) => (
          <Categories category={category} />
        ))}
      </Container>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1%;
  width: 80vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  /* flex-wrap: no-wrap; */
  /* border: 1px solid green; */
  /* margin: 1%; */
  padding: 0.5%;
  justify-content: flex-start;

  @media (max-width: 700px) {
    flex-direction: column;
    /* width: 55vh; */
    /* min-width: 160%; */
  }
`;