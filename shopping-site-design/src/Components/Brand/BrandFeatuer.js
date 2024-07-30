import React from "react";
import { Container, Row} from "react-bootstrap";
import SubTitle from "../Utility/SubTitle";
import BrandCard from "./BrandCard";
import brand1 from "../../images/brand1.png";
import brand2 from "../../images/brand2.png";
import brand3 from "../../images/brand3.png";
// import brand1 from "/shopping-site-design/src/images/brand1.png";
// import brand2 from "/shopping-site-design/src/images/brand2.png";
// import brand3 from "/shopping-site-design/src/images/brand3.png"; 


const BrandFeatuer = ({ title, btntitle, pathText }) => {



  return (
    <Container>
      <SubTitle title={title} btntitle={btntitle} pathText="/allbrand" />
      <Row className="d-flex my-1 justify-content-start">
        <BrandCard img={brand1} />
        <BrandCard img={brand2} />
        <BrandCard img={brand3} />
        <BrandCard img={brand2} />
        <BrandCard img={brand1} />
        <BrandCard img={brand3} />
      </Row>
    </Container>
  );
};

export default BrandFeatuer;
