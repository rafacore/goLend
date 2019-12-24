import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Header from "../../Header/Header";
import "../../styles/global";
import "./style.css";
import { Container, Row, Col, Button } from "reactstrap";

import YearsData from "../../../data/years.json";

function Years() {
  return (
    <Container>
      <Header text="What year model is the car ?" />
      <Row>
        <Col>
          <ul>
            {YearsData.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={`/vehicles/${item.year}`}>
                    <Button outline className="btn">
                      {item.year}
                    </Button>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Years;
