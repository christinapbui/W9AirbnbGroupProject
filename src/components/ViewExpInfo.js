import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Navbar, Container, Row, Col, Badge, Button } from "react-bootstrap";

// this is to view an experience in detail
const ViewExpInfo = () => {
  const [expInfo, setExpInfo] = useState(null);
  const { eid } = useParams();
  useEffect(() => {
    async function fetchData() {
      const data = await fetch("http://localhost:5000/experiences/" + eid);
      const expInfo = await data.json();
      console.log("loggggg:", expInfo);
      setExpInfo(expInfo);
    }
    fetchData();
  }, []); // the empty array makes it run only once (otherwise it will continue to GET on backend)
  console.log(expInfo);
  return (
    <section>
      <Navbar bg="dark" variant="dark" className="navbarInfo">
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
      <Experience {...expInfo} />
    </section>
  );
};

const Experience = ({
  _id,
  title,
  pictureUrl,
  country,
  duration,
  price,
  city,
  maxGroupSize,
  language,
  description,
  host,
  whatToBring,
}) => (
  <div>
    <section style={{ backgroundColor: "black", color: "white" }}>
      <div className="container infoPage">
        <Container>
          <Row xl="2" lg="2" md="1" sm="1" xs="1">
            <Col xl={4}>
              <img
                src={pictureUrl}
                style={{ height: "18rem", maxWidth: "18rem", objectFit: "cover", objectPosition: "50 50" }}
              />
            </Col>
            <Col md={8}>
              <Button variant="danger">
                <Link to={`/${_id}/edit`}>Edit this experience</Link>
              </Button>
              <h4>Host: {host}</h4>
              <h5>What you'll do</h5>
              <p>{description}</p>
            </Col>
          </Row>
          <Row sm="2" xs="1" style={{ marginTop: "20px" }}>
            <Col md={4}>
              <div className="justify-content-center">
                <Badge variant="light">&#9658; Online Experience</Badge>
                <h2>{title}</h2>
                <p style={{ color: "#777777" }}>
                  <i class="fas fa-globe" style={{ paddingRight: "10px" }}></i>
                  {city}, {country}
                </p>
                <Badge variant="light">Starting from ${price} USD</Badge>
              </div>
            </Col>
            <Col md={8}>
              <p style={{ textAlign: "center" }}>
                <i
                  style={{ marginRight: "10px" }}
                  class="fas fa-tablet-alt"
                ></i>
                Book and join this experience from your computer, phone, or
                tablet.
              </p>
              <table className="infoTable" style={{ width: "100%" }}>
                <tr style={{ color: "#777777" }}>
                  <td>
                    <i class="far fa-clock"></i>
                  </td>
                  <td>
                    <i class="fas fa-user-friends"></i>
                  </td>
                  <td>
                    <i class="far fa-comment"></i>
                  </td>
                </tr>
                <tr style={{ color: "#777777" }}>
                  <td>Duration:</td>
                  <td>Max Group Size:</td>
                  <td>Hosted Language:</td>
                </tr>
                <tr>
                  <td>{duration}/hr</td>
                  <td>{maxGroupSize}</td>
                  <td>{language}</td>
                </tr>
              </table>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
    <section className="container">
      <Container style={{ marginTop: "30px", marginBottom: "30px"}}>
        <Row sm="2" xs="1">
          <Col md={4}>
            <h4>What to bring: {whatToBring}</h4>
          </Col>
          <Col md={8}>{whatToBring}</Col>
        </Row>
      </Container>
    </section>
  </div>
);

export default ViewExpInfo;
