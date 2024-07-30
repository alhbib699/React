import React from 'react'
import { Container, Row } from 'react-bootstrap'
import CategoryCard from './CategoryCard';
import clothe from "../../images/clothe.png";
import cat2 from "../../images/cat2.png";
import labtop from "../../images/labtop.png";
import sale from "../../images/sale.png";
import pic from "../../images/pic.png";



const AllCategoryContainer = ({data,loading}) => {

  return (
    <Container>
      <div className="admin-content-text mt-4 ">All Category</div>
      <Row className="my-2 d-flex justify-content-start">
        <CategoryCard title="Clothes " img={clothe} background="#F4DBA4" />
        <CategoryCard title="Animals " img={cat2} background="#F4DBA4" />
        <CategoryCard title="Laptops" img={labtop} background="#0034FF" />
        <CategoryCard title="Sales" img={sale} background="#F4DBA4" />
        <CategoryCard title="Clothes" img={clothe} background="#FF6262" />
        <CategoryCard title="Pics" img={pic} background="#F4DBA4" />
        <CategoryCard title="Clothes" img={clothe} background="#F4DBA4" />
        <CategoryCard title="Animals" img={cat2} background="#F4DBA4" />
        <CategoryCard title="Laptops" img={labtop} background="#0034FF" />
        <CategoryCard title="Sales" img={sale} background="#F4DBA4" />
        <CategoryCard title="Clothes" img={clothe} background="#FF6262" />
      </Row>
    </Container>
  );
}

export default AllCategoryContainer