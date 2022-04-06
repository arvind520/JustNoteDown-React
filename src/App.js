import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import { Container } from "react-bootstrap";
import AddSection from "./components/AddSection";
import Notes from "./components/Notes";

const App = () => {
  let notes = localStorage.getItem("ReactNotes");
  let notesArr;
  if (notes == null) {
    notesArr = [];
  } else {
    notesArr = JSON.parse(notes);
  }
  const [myAllNotes, setMyAllNotes] = useState(notesArr);
  const [toggleSearch, setToggleSearch] = useState(false);

  return (
    <>
      <MyNavbar
        myAllNotes={myAllNotes}
        setMyAllNotes={setMyAllNotes}
        toggleSearch={toggleSearch}
        setToggleSearch={setToggleSearch}
      />

      <Container className="my-3">
        <AddSection
          myAllNotes={myAllNotes}
          setMyAllNotes={setMyAllNotes}
          toggleSearch={toggleSearch}
          setToggleSearch={setToggleSearch}
        />

        <hr />
        <h1>Your Notes</h1>
        <hr />

        <Notes
          myAllNotes={myAllNotes}
          setMyAllNotes={setMyAllNotes}
          toggleSearch={toggleSearch}
          setToggleSearch={setToggleSearch}
        />
      </Container>
    </>
  );
};

export default App;
