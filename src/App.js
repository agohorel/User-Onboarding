import React, { useState } from "react";
import "./App.css";

import RegisterForm from "./components/Form";

function App() {
  const [members, setMembers] = useState([]);

  return (
    <div className="App">
      <RegisterForm members={members} setMembers={setMembers}></RegisterForm>

      {members.map(member => (
        <div key={member.name}>
          <p>{member.name}</p>
          <p>{member.email}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
