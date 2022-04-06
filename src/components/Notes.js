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
    let newArray = [...myAllNotes];
    // console.log(newArray.splice(index, 1));
    let elementToRemove = newArray.splice(index, 1);
    //* Since there is delete btn then there should be a note.
    let localStorageNotes = JSON.parse(localStorage.getItem("ReactNotes"));
    let elementToShow = [];
    localStorageNotes.forEach((element) => {
      if (element != elementToRemove) {
        elementToShow.push(element);
      }
    });
    // console.log(newArray);
    localStorage.setItem("ReactNotes", JSON.stringify(elementToShow));
    console.log(localStorage);
    setMyAllNotes(elementToShow);
    setToggleSearch(false);
  };

  const handleShowAll = () => {
    let notes = localStorage.getItem("ReactNotes");
    setToggleSearch(false);
    if (notes == null) {
      setMyAllNotes([]);
    } else {
      setMyAllNotes(JSON.parse(notes));
    }
  };

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
              <Card key={index} className="m-2 " style={{ width: "30%" }}>
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
        <Button
          onClick={handleShowAll}
          variant="secondary"
          className="showAllBtn m-2"
        >
          Show All Notes
        </Button>
      ) : null}
    </>
  );
};

export default Notes;
