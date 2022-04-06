import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import { Container } from "react-bootstrap";
import AddSection from "./components/AddSection";
import Notes from "./components/Notes";

const App = () => {
  //? Biggest problem in this project to handle search and delete the note and manage them correctly!
  // ! Fetching data
  let notes = localStorage.getItem("ReactNotes");
  let notesArr;
  if (notes == null) {
    notesArr = [];
  } else {
    notesArr = JSON.parse(notes);
  }
  //! Data
  const [myAllNotes, setMyAllNotes] = useState(notesArr);
  const [toggleSearch, setToggleSearch] = useState(false);

  return (
    <>
<<<<<<< Updated upstream
      <MyNavbar myAllNotes={myAllNotes} setMyAllNotes={setMyAllNotes} />
=======
      {/* //! Searching */}
      <MyNavbar
        toggleSearch={toggleSearch}
        setToggleSearch={setToggleSearch}
        myAllNotes={myAllNotes}
        setMyAllNotes={setMyAllNotes}
      />
>>>>>>> Stashed changes
      <Container className="my-3">
        {/* //! Adding new data */}
        <AddSection
          toggleSearch={toggleSearch}
          setToggleSearch={setToggleSearch}
          myAllNotes={myAllNotes}
          setMyAllNotes={setMyAllNotes}
        />
        <hr />
        <h1>Your Notes</h1>
        <hr />

        {/* //! Showing data */}
        <Notes
          toggleSearch={toggleSearch}
          setToggleSearch={setToggleSearch}
          myAllNotes={myAllNotes}
          setMyAllNotes={setMyAllNotes}
        />
      </Container>
    </>
  );
};

export default App;
