import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CartItem from '../../Components/Cart/CartItem';
import CartCheckOut from '../../Components/Cart/CartCheckOut';

const CartPage = () => {
  return (
    <Container style={{ minHeight: "670px" }}>
      <Row>Shop cart</Row>
      <Row className="d-flex justify-content-center">
        <Col xs="12" md="9">
            <CartItem/>
            <CartItem/>
            <CartItem/>
        </Col>
        <Col xs="6" md="3">
            <CartCheckOut/>
        </Col>
      </Row>
    </Container>
  );
}

export default CartPage