import React, { useContext } from "react";
import Header from "../../Header/Header";
import CardHorizontal from "../../CardHorizontal/CardHorizontal";
import { useParams } from "react-router-dom";

import PostData from "../../../data/posts.json";

import { Container, Row, Col } from "reactstrap";
import "../../styles/global";
import imgMi from "../../../assets/ser.jpg";
import "./style.css";

function Vehicles() {
  let { year } = useParams();

  return (
    <Container>
      <Header text="Let's find your car " />
      <Row>
        <Col>
          {PostData.map((postDatail, index) => {
            return (
              <CardHorizontal
                image={imgMi}
                model={postDatail.model}
                year={year}
                series={postDatail.series}
                variant={postDatail.variant}
                newPrice={postDatail.new_price}
                priceFrom={postDatail.from}
              />
            );
          })}
        </Col>
      </Row>
    </Container>
  );
}

export default Vehicles;
