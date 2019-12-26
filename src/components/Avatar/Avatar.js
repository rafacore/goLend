import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./style.css";

const Avatar = ({ image }) => {
  return (
    <Container>
      <Row>
        <Col>
          <img className="avatarImg" src={image} />
        </Col>
      </Row>
    </Container>
  );
};

export default Avatar;
