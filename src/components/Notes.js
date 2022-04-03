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

  console.log(myAllNotes);

  return (
    <Container className="d-flex ">
      {myAllNotes.map(function (eachText, index) {
        return (
          <Card key={index} className="m-2" style={{ width: "30%" }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Delete Note</Button>
            </Card.Body>
          </Card>
        );
      })}
      {/* {myAllNotes != 0 ? <p>notes are present</p> : <p>There is nothing</p>} */}
      {/* <Card className="m-2" style={{ width: "30%" }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Delete Note</Button>
        </Card.Body>
      </Card> */}
    </Container>
  );
};

export default Notes;
