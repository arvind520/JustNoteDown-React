import React from "react";
import { Button, Card, Container } from "react-bootstrap";

const Notes = (props) => {
  var { myAllNotes, setMyAllNotes } = props;

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
    console.log(newArray.splice(index, 1));
    // console.log(newArray);
    localStorage.setItem("ReactNotes", JSON.stringify(newArray));
    console.log(localStorage);
    setMyAllNotes(newArray);
  };

  return (
    <Container className="notesContainer">
<<<<<<< Updated upstream
      {myAllNotes.length == 0 ? (
=======
      {myAllNotes.length === 0 ? (
>>>>>>> Stashed changes
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
  );
};

export default Notes;
