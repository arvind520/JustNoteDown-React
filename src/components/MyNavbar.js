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
  var { myAllNotes, setMyAllNotes } = props;
  // console.log(myAllNotes);

  const [searchTxt, setSearchTxt] = useState("");

  function handleSearch(e) {
    // console.log(e.target.value);
    setSearchTxt(e.target.value);
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    console.log(searchTxt);
  }

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
          <Form className="d-flex" onSubmit={handleOnSubmit}>
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchTxt}
              onChange={handleSearch}
            />
            <Button variant="outline-success" type="submit">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
