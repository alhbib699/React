import React from 'react'
import { Col, Row } from 'react-bootstrap';

const ProductText = () => {
  return (
    <div>
      <Row className="mt-2">
        <div className="cat-text">Elektronik :</div>
      </Row>
      <Row>
        <Col md="8">
          <div className="cat-title d-inline">
            iPhone XR memory card with 128 GB memory and supports 4G LTE
            technology with the FaceTime (Product) application
            <div className="cat-rate d-inline mx-3">4.5</div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-4">
          <div className="cat-text d-inline">Brand :</div>
          <div className="barnd-text d-inline mx-1">Samsung </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-1 d-flex">
          <div
            className="color ms-2 border"
            style={{ backgroundColor: "#E52C2C" }}
          ></div>
          <div
            className="color ms-2 border "
            style={{ backgroundColor: "white" }}
          ></div>
          <div
            className="color ms-2 border"
            style={{ backgroundColor: "black" }}
          ></div>
        </Col>
      </Row>

      <Row className="mt-4">
        <div className="cat-text">Specifications :</div>
      </Row>
      <Row className="mt-2">
        <Col md="10">
          <div className="product-description d-inline">
            It is characterized by the presence of a dual SIM card, a physical
            card and an e-SIM card. You can unlock your iPhone and log in to
            applications, accounts, etc. easily. The Face ID feature is the
            fastest and most secure for authentication via the facial
            fingerprint. It features the A12 Bionic chip, which is the smartest
            and most powerful chip in smartphones. It has formed more World
            Famous Cameras A new era of photography where the innovative ISP
            sensor and Neural Engine enable you to capture images like never
            before. A single lens camera that puts people in the foreground in
            sharp focus unlike the blurred background. Overview
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md="12">
          <div className="product-price d-inline px-3 py-3 border">
            34000 Lira
          </div>
          <div className="product-cart-add px-3 py-3 d-inline mx-3">
            Add to cart
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ProductText