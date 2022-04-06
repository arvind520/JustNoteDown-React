import React, { useState } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";

const MyNavbar = (props) => {
  var { myAllNotes, setMyAllNotes, toggleSearch, setToggleSearch } = props;
  console.log(myAllNotes);

  const [searchTxt, setSearchTxt] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchTxt);
    let notesToShow = [];
    myAllNotes.forEach((element) => {
      if (element.includes(searchTxt)) {
        notesToShow.push(element);
      }
    });

    setMyAllNotes(notesToShow);
    setSearchTxt("");
    setToggleSearch(true);
  };
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">JND</Navbar.Brand>
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link active href="#home">
              Home
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchTxt}
              onChange={(e) => setSearchTxt(e.target.value)}
            />
            <Button
              type="submit"
              onClick={handleSubmit}
              variant="outline-success"
            >
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
