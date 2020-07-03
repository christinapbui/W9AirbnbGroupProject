import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

const AddExperience = () => {
  const [title, setTitle] = useState("");
  const [country, setCountry] = useState("");
  const [price, setPrice] = useState(0);
  const [duration, setDuration] = useState(0);
  const [pictureUrl, setPictureUrl] = useState("");

  const createExperience = async (e) => {
    e.preventDefault();
    const experienceData = {
      title,
      country,
      price,
      duration,
      pictureUrl,
    };
    // to send this, send a POST request to API
    const newExperience = await fetch("http://localhost:3000/experiences", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(experienceData), 
    });
    setTitle("");
    setCountry("");
    setPrice(0);
    setDuration(0);
    setPictureUrl("");
  };

  return (
    <div>
      <Navbar bg="white" variant="light" className="navbar">
        <div className="container">
          <Navbar.Brand href="/">
            <img
              alt=""
              src="/logo.png"
              width="30"
              height="auto"
              className="d-inline-block align-center"
            />{" "}
            <span style={{ paddingLeft: "10px" }}>Online Experiences</span>
          </Navbar.Brand>
        </div>
      </Navbar>
      <div style={{ height: "50px" }}></div>
      <br />
      <h3>Create a New Experience</h3>
      <hr />
      <Form className="container inputForm" onSubmit={createExperience}>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="country">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="duration">
          <Form.Label>Duration</Form.Label>
          <Form.Control
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
          <Form.Text className="text-muted">Enter duration in hours</Form.Text>
        </Form.Group>

        <Form.Group controlId="pictureUrl">
          <Form.Label>Picture URL</Form.Label>
          <Form.Control
            type="text"
            value={pictureUrl}
            onChange={(e) => setPictureUrl(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddExperience;
