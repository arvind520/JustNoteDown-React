import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import { Container } from "react-bootstrap";
import AddSection from "./components/AddSection";
import Notes from "./components/Notes";

const App = () => {
  const [myAllNotes, setMyAllNotes] = useState([]);
  return (
    <>
      <MyNavbar />
      <Container className="my-3">
        <AddSection myAllNotes={myAllNotes} setMyAllNotes={setMyAllNotes} />

        <hr />
        <h1>Your Notes</h1>
        <hr />

        <Notes myAllNotes={myAllNotes} setMyAllNotes={setMyAllNotes} />
      </Container>
    </>
  );
};

export default App;
