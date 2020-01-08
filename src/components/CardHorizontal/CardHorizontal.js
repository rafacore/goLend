import React from "react";
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";
import "./style.css";

const CardHorizontal = ({
  image,
  model,
  series,
  variant,
  newPrice,
  priceFrom,
  year
}) => {
  return (
    <Card>
      <CardImg src={image} alt="Card image cap" />
      <CardBody>
        <CardTitle>
          {year},{model},{series}{" "}
        </CardTitle>
        <CardSubtitle>{variant}</CardSubtitle>
        <Row className="priceRow">
          <Col md="6">
            <CardText className="priceNew">
              New <span>$ {newPrice}</span> RRP
            </CardText>
          </Col>
          <Col md="6">
            <CardText className="priceFrom">
              From <span>$ {priceFrom}</span> per month
            </CardText>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};
CardHorizontal.propTypes = {
  image: PropTypes.string,
  year: PropTypes.string,
  model: PropTypes.string,
  series: PropTypes.string,
  variant: PropTypes.string,
  newPrice: PropTypes.number,
  priceFrom: PropTypes.number,

}

export default CardHorizontal;
