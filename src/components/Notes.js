import React from "react";
import { Button, Card, Container } from "react-bootstrap";

const Notes = (props) => {
  var { toggleSearch, setToggleSearch, myAllNotes, setMyAllNotes } = props;

  // let allNotes = localStorage.getItem("ReactNotes");
  // let notesArr;
  // if (allNotes == null) {
  //   notesArr = [];
  // } else {
  //   notesArr = JSON.parse(allNotes);
  // }

  const handleDelete = (index) => {
    // console.log(index);
    console.log(myAllNotes[index]);
    let elementToRemove = myAllNotes[index];

    let elementsToShow = [];

    let notes = localStorage.getItem("ReactNotes");
    if (notes == null) {
      notes = [];
    } else {
      notes = JSON.parse(notes);
    }
    notes.forEach((element) => {
      if (element != elementToRemove) {
        elementsToShow.push(element);
      }
    });

    if (toggleSearch) {
      setToggleSearch(!toggleSearch);
    }
    localStorage.setItem("ReactNotes", JSON.stringify(elementsToShow));
    setMyAllNotes(elementsToShow);
  };

  function handleShowAll() {
    console.log("u click on show all btn");
    setToggleSearch(!toggleSearch);
    let fetchAllNotes = localStorage.getItem("ReactNotes");
    let tempArr = [];
    if (fetchAllNotes == null) {
      tempArr = [];
    } else {
      tempArr = JSON.parse(fetchAllNotes);
    }
    setMyAllNotes(tempArr);
    setToggleSearch(false);
  }

  return (
    <>
      <Container className="notesContainer">
        {myAllNotes.length == 0 ? (
          <p className="text-warning ">
            Nothing to show! Please add your notes.{" "}
          </p>
        ) : (
          myAllNotes.map(function (eachText, index) {
            return (
              <Card key={index} className="m-2" style={{ width: "30%" }}>
                <Card.Body>
                  <Card.Title>Note {index + 1}</Card.Title>
                  <Card.Text>{eachText}</Card.Text>
                  <Button onClick={() => handleDelete(index)} variant="primary">
                    Delete Note
                  </Button>
                </Card.Body>
              </Card>
            );
          })
        )}
      </Container>
      {toggleSearch ? (
        <Button onClick={handleShowAll} variant="primary">
          Show All Notes
        </Button>
      ) : null}
    </>
  );
};

export default Notes;
