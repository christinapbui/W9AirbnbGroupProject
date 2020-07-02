import React, { useState, useEffect } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

export default function ExperienceCard(props) {
  const Experience = ({ title, pictureUrl, country, duration, price }) => (
    <Col>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={pictureUrl} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {/* <p>{description}</p> */}
            <p>{country}</p>
            <p>Starting from ${price} USD</p>
            <p>{duration} minutes</p>
          </Card.Text>
          <Button variant="primary">Explore</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
