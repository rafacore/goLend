import React from "react";
import Header from "../../components/Header/Header";
import CardHorizontal from "../../components/CardHorizontal/CardHorizontal";
import { useParams } from "react-router-dom";
import PostData from "../../data/posts.json";
import { Container, Row, Col } from "reactstrap";
import "../../assets/styles/global";
import carPic from "../../assets/car.jpeg";
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
                key={index}
                image={carPic}
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
      <Row>
      
      <p>*Excludes on road and govermment costs</p>
      </Row>
    </Container>
  );
}

export default Vehicles;
