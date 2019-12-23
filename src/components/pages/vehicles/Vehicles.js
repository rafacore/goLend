import React from 'react';
import Header from '../../Header/Header';
import CardHorizontal from '../../CardHorizontal/CardHorizontal';

import PostData from '../../../data/posts.json';
import YearData from '../../../data/years.json';
import { 
  Container,
  Row,
  Col,
  } from 'reactstrap';
import '../../styles/global';
import imgMi from '../../../assets/ser.jpg';
import './style.css'


function Vehicles() {
  
  return (
      <Container>
       <Header text="Let's find your car "/>
       <Row>
         <Col>
         {console.log(YearData.year)}
        {PostData.map((postDatail, index) => {
          
            return(
              <CardHorizontal 
              image={imgMi}
              model={postDatail.model}
              series={postDatail.series}
              variant={postDatail.variant}
              newPrice={postDatail.new_price}
              priceFrom={postDatail.from} 
              />
          
            )
        })}
        </Col>
        </Row>
    </Container>
  );
}

export default Vehicles;