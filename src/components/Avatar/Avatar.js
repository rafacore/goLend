import React from "react";
import PropTypes from 'prop-types';
import { Container, Row, Col } from "reactstrap";
import "./style.css";

const Avatar = ({ image }) => {
  return (
    <Container>
      <Row>
        <Col>
          <img className="avatarImg" src={image} alt="" />
        </Col>
      </Row>
    </Container>
  );
};
Avatar.propTypes = {
  image: PropTypes.string,
}

export default Avatar;
