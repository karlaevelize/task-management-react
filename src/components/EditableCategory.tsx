import { useEffect, useState } from "react";
import styled from "styled-components";
import { MdColorLens } from "react-icons/md";

export const EditableCategory = () => {
  const [name, setName] = useState<String>("Name");
  const [color, setColor] = useState<String>("black");

  console.log("color", color);

  return (
    <Container style={{ borderLeft: `2px solid ${color}` }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Input
          type="text"
          //@ts-ignore
          // value={name}
          placeholder="Write the name here"
          onChange={(e) => setName(e.target.value.toUpperCase())}
        />
        <InputColor
          type="color"
          onChange={(e: any) => {
            setColor(e.target.value);
            console.log(e.target.value);
          }}
        />
      </div>
      <button style={{ border: "none" }}>Add new list</button>
      {/* <div>
      {items && items.map((item) => <Tasks key={item.id} task={item} />)}
    </div> */}
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

const Input = styled.input`
  padding: 12px 20px;
  background-color: #f5f5f5;
  border: none;
`;

const InputColor = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 30px;
  height: 30px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &::-webkit-color-swatch {
    border-radius: 7px;
    border: none;
  }
`;
