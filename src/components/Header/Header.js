// import components 
import React from "react";
import Avatar from "../Avatar/Avatar";
import { Container, Row, Col } from "reactstrap";
// import css
import "./style.css";

const Header = ({ text, image }) => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="line"> </div>
          <Avatar image="https://png.pngtree.com/png-clipart/20190520/original/pngtree-vector-users-icon-png-image_4144740.jpg" />
          <h2>{text}</h2>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
