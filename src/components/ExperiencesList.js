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
import Rheostat from "rheostat"

const ExperiencesList = () => {
  const [experiences, setExperiences] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [maxPageNum, setMaxPageNum] = useState(1)
  const { eid } = useParams();
  const [minPrice, setMinPrice] = useState(1)
  const [maxPrice, setMaxPrice] = useState(1000)
  const [tempMinPrice, setTempMinPrice] = useState(1)
  const [tempMaxPrice, setTempMaxPrice] = useState(1000)
  // const [isDragging, setIsDragging] = useState(false) // this will be boolean

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        `http://localhost:5000/experiences?page=${pageNum}&minPrice=${minPrice}&maxPrice=${maxPrice}`
      );
      const resp = await data.json();
      setExperiences(resp.data);
      setMaxPageNum(parseInt(resp.maxPageNum))
    }
    fetchData();
  }, [pageNum, minPrice, maxPrice]); // the empty array [] makes it run only once (otherwise it will continue to GET on backend)

  const goNextPage = () => {
    setPageNum(pageNum + 1);
  };

  const goPrevPage = () => {
    setPageNum(pageNum - 1);
  };

  const handleChange = (e) => {
    setMinPrice(e.values[0])
    setMaxPrice(e.values[1])
  }

  const handleValuesUpdated = (e) => {
    setTempMinPrice(e.values[0])
    setTempMaxPrice(e.values[1])
  }

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
      <div>
        <Rheostat min={1} max={1000} value={[minPrice, maxPrice]} onChange={handleChange} onValuesUpdated={handleValuesUpdated} />
        <input type="text" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
        <p>Min Price: {tempMinPrice} - Max Price: {tempMaxPrice}</p>
        </div>
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
