import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";

const AddSection = (props) => {
  var { myAllNotes, setMyAllNotes } = props;
  // console.log(myAllNotes);
  const [text, setText] = useState("");

  let handleChange = (e) => {
    setText(e.target.value);
  };

  function addBtn() {
    // let notes = localStorage.getItem("ReactNotes");
    // let notesArr;
    // if (notes == null) {
    //   notesArr = [];
    // } else {
    //   //! we are parsing since localStorage store the string therefore we are converting stringArray to array
    //   notesArr = JSON.parse(notes);
    // }
    // notesArr.push(text);
    // //! Since we have to store the array in string
    // localStorage.setItem("ReactNotes", JSON.stringify(notesArr));

    //!Since on click on Add there is no response so we are adding our notes to localStorage at last
    setMyAllNotes([...myAllNotes, text]);
    setText("");
  }

  return (
    <>
      <h1>Welcome to Just Write Down</h1>
      <Card style={{ width: "30%" }}>
        <Card.Body>
          <Card.Title>Add a Note</Card.Title>
          <Form.Control
            as={"textarea"}
            placeholder={"Add your note here"}
            rows={5}
            value={text}
            onChange={handleChange}
          ></Form.Control>
          <Button onClick={addBtn} variant="primary" className="my-2">
            ADD
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default AddSection;
