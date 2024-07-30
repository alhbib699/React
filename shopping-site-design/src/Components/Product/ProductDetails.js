import React from "react";
import { Col, Row } from "react-bootstrap";
import ProductGallery from "./ProductGallery";
import ProductText from "./ProductText";

const ProductDetails = () => {
  return (
    <div>
      <Row className="py-3 d-flex flex-row">
        <Col lg="4">
            <ProductGallery/>
        </Col>
        <Col lg="8">
            <ProductText/>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetails;
