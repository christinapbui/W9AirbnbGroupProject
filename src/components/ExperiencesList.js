import React, { useState, useEffect } from "react";
import {
  Card,
  Button,
  Navbar,
  Row,
  Container,
  Col,
  Form,
  FormControl,
  Jumbotron,
} from "react-bootstrap";

const ExperiencesList = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // here we will get data from backend
      const data = await fetch("http://localhost:3000/experiences"); // fetching from our own API
      const experiences = await data.json();
      setExperiences(experiences);
    }
    fetchData();
  }, []); // the empty array makes it run only once (otherwise it will continue to GET on backend)

  return (
    <div>
      <nav id="navigation">
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
            <Form inline>
              <Button variant="outline-primary" href="/add">
                Host Your Own Experience
              </Button>
            </Form>
          </div>
        </Navbar>
      </nav>

      <div style={{ height: "50px" }}></div>
      <Jumbotron fluid className="jumbo">
        <Container style={{ marginTop: "10rem" }}>
          <h1>Online Experiences</h1>
          <p style={{ width: "30rem" }}>
            Unique activities to do from home, including cooking experiences
            with world-renowned chefs
          </p>
        </Container>
      </Jumbotron>
      <section className="container">
        <h1 style={{ padding: "10px", paddingTop: "30px" }}>
          Experiences List
        </h1>
        <Container>
          <Row md="3" lg="4" sm="2" xs="1">
            {experiences.map((e) => (
              <Experience {...e} /> // the "...e" is same as saying <Experience title={e.title} pictureUrl={e.pictureUrl}>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

const Experience = ({ title, pictureUrl, country, duration, price }) => (
  <Col>
    <Card style={{ width: "13rem", minHeight: "20rem", marginBottom: "10px" }}>
      <div className="imgBox">
        <Card.Img
          variant="top"
          style={{ height: "18rem", objectFit: "cover" }}
          src={pictureUrl}
          href="/ViewExpInfo"
          className="cardImg"
        />
      </div>
      <Card.Body style={{ borderStyle: "none" }}>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <section>
            {/* <p>{description}</p> */}
            <p className="cardText">
              <i
                class="fas fa-globe"
                style={{ fontSize: "14px", paddingRight: "5px" }}
              ></i>
              {country}
            </p>
            <p className="cardText">
              From <b>${price}</b>/person • {duration} hour
            </p>
          </section>
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
);

export default ExperiencesList;
