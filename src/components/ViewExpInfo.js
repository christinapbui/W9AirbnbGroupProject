import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Navbar, Container, Row, Col, Badge } from "react-bootstrap";

// this is to view an experience in detail
const ViewExpInfo = () => {
  const [expInfo, setExpInfo] = useState(null);
  const { eid } = useParams();
  useEffect(() => {
    async function fetchData() {
      const data = await fetch("http://localhost:3000/experiences/" + eid);
      const expInfo = await data.json();
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

const Experience = ({ title, pictureUrl, country, duration, price }) => (
  <section style={{ backgroundColor: "black", color: "white" }}>
    <div className="container infoPage">
      <Container>
        <Row sm="2" xs="1">
          <Col>
            <img
              src={pictureUrl}
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
          </Col>
          <Col>Test Text</Col>
        </Row>
        <Row sm="2" xs="1">
          <Col className="justify-content-center">
            <Badge variant="light">Online Experience</Badge>{" "}
            <h2>{title}</h2>
          </Col>
          <Col>Text 2</Col>
        </Row>
      </Container>

      <h3>{country}</h3>
      <h4>Starting from ${price} USD</h4>
      <h4>{duration} minutes</h4>
    </div>
  </section>
);

export default ViewExpInfo;
