import React, { useState } from "react";
import styled from "styled-components";

import "./App.css";

import RegisterForm from "./components/Form";
import { Card } from "./components/Card";

import dummyData from "./dummyData";

function App() {
  const [members, setMembers] = useState(dummyData);

  return (
    <div className="App">
      <RegisterForm members={members} setMembers={setMembers}></RegisterForm>

      <CardContainer>
        {members.map(member => (
          <Card key={member.name} member={member}></Card>
        ))}
      </CardContainer>
    </div>
  );
}

export default App;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 2rem 10%;
`;
