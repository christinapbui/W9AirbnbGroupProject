import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
import PaginationLink from "./PaginationLink"

const ExperiencesList = () => {
  const [experiences, setExperiences] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [maxPageNum, setMaxPageNum] = useState(1)
  const { eid } = useParams();

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        `http://localhost:3000/experiences?page=${pageNum}`
      );
      const resp = await data.json();
      setExperiences(resp.data);
      setMaxPageNum(parseInt(resp.maxPageNum))
    }
    fetchData();
  }, [pageNum]); // the empty array [] makes it run only once (otherwise it will continue to GET on backend)

  const goNextPage = () => {
    setPageNum(pageNum + 1);
  };

  const goPrevPage = () => {
    setPageNum(pageNum - 1);
  };

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
              <Experience {...e} />
            ))}
          </Row>
        </Container>
        <PaginationLink disabled={pageNum === 1} handleClick={goPrevPage}>
          Previous Page</PaginationLink>
        <PaginationLink disabled={pageNum === maxPageNum} handleClick={goNextPage}>
          Next Page
        </PaginationLink>
      </section>
    </div>
  );
};

const Experience = ({ title, pictureUrl, country, duration, price, _id }) => (
  <Col>
    <Card style={{ width: "13rem", minHeight: "20rem", marginBottom: "10px" }}>
      <div className="imgBox">
        <a href={`/experience/${_id}`}>
          <Card.Img
            variant="top"
            style={{ height: "18rem", objectFit: "cover" }}
            src={pictureUrl}
            className="cardImg"
          />
        </a>
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
