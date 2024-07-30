import React from 'react'
import { Container, Row , Col } from 'react-bootstrap';
import laptops from '../../images/laptops.png'

const DisCountSection = () => {
  return (
    <Container>
      <Row className="discount-backcolor my-3  mx-2 d-flex text-center align-items-center">
        <Col sm="6">
          <div className="discount-title">
            Discount up to 30% on laptops
          </div>
        </Col>
        <Col sm="6">
          <img className="dicount-img" src={laptops} alt="" />
        </Col>
      </Row>
    </Container>
  );
}

export default DisCountSection