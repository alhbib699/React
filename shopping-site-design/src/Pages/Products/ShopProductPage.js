import React from 'react'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import { Col, Container, Row } from 'react-bootstrap'
import SearchCountResulte from '../../Components/Utility/SearchCountResulte';
import SideFilter from '../../Components/Utility/SideFilter';
import CardProductContainer from '../../Components/Product/CardProductContainer';
import Pagination from '../../Components/Utility/Pagination';

const ShopProductPage = () => {
  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryHeader />
      <Container>
        <SearchCountResulte title="400 produts" />
        <Row className='d-flex flex-row'>
          <Col sm="2" xs='2' md='1' className='d-flex'>
            <SideFilter />
          </Col>
          <Col sm="10" xs='10' md='11'>
            <CardProductContainer title="" btntitle=""/>
          </Col>
        </Row>

        <Pagination/>
      </Container>
    </div>
  );
}

export default ShopProductPage