import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

const CategoryHeader = () => {
  return (
    <div className="cat-header">
      <Container>
        <Row>
          <Col className="d-flex justify-content-start py-2 flex-wrap">
            <div className="cat-text-header ">All</div>
            <div className="cat-text-header">Elektroic</div>
            <div className="cat-text-header">Clothes</div>
            <div className="cat-text-header">Food</div>
            <div className="cat-text-header">Discount</div>
            <div className="cat-text-header">Indirim</div>
            <div className="cat-text-header">Cars</div>
            <div className="cat-text-header">more</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CategoryHeader