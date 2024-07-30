import React from 'react'
import CategoryCard from '../Category/CategoryCard';
import { Container, Row } from 'react-bootstrap';
import SubTitle from '../Utility/SubTitle';
import clothe from "../../images/clothe.png";
import cat2 from "../../images/cat2.png";
import labtop from "../../images/labtop.png";
import sale from "../../images/sale.png";
import pic from "../../images/pic.png";



const HomeCatogery = () => {

  return (
    <Container>
      <SubTitle title="Category" btntitle="More" pathText="/allcategory" />
      <Row className="my-2 d-flex justify-content-between">
        <CategoryCard title="clothes" img={clothe} background="#F4DBA4" />
        <CategoryCard title="animals" img={cat2} background="#F4DBA4" />
        <CategoryCard title="elektronic" img={labtop} background="#0034FF" />
        <CategoryCard title="sales" img={sale} background="#F4DBA4" />
        <CategoryCard title="clothes" img={clothe} background="#FF6262" />
        <CategoryCard title="pic" img={pic} background="#F4DBA4" />
      </Row>
    </Container>
  );
}

export default HomeCatogery