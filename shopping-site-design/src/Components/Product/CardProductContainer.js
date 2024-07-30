import React from 'react'
import { Container, Row } from 'react-bootstrap';
import ProductCard from './ProductCard';
import SubTitle from '../Utility/SubTitle';

const CardProductContainer = ({ title, btntitle , pathText}) => {
  return (
    <Container>
      <SubTitle title={title} btntitle={btntitle} pathText={pathText} />
      <Row className="d-flex my-2 justify-content-between">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Row>
    </Container>
  );
};

export default CardProductContainer