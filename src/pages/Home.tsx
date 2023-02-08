import data from "../data/data.json";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import { Category } from "../types/types";
import { Categories } from "../components";
import { API_URL } from "../config/constants";

export const Home = () => {
  const [categoriesList, setCategoriesList] = useState<Category[] | null>(null);

  const handleDrop = (categoryId: number, itemId: number) => {
    console.log("category drop id", categoryId);
  };

  const getCategories = async () => {
    const response = await axios.get(`${API_URL}/lists`);
    setCategoriesList(response.data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <MainContainer>
      <h1 style={{ color: "#1B1A3A" }}>Tasks</h1>
      <Container>
        {!categoriesList
          ? "Loading"
          : categoriesList
              .sort((a, b) => a.order - b.order)
              .map((category) => (
                <Categories
                  key={category.id}
                  category={category}
                  handleDrop={handleDrop}
                />
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
