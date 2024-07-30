import React from 'react'
import {  Row } from 'react-bootstrap';
import ProductCard from '../Product/ProductCard';
import Pagination from "../../Components/Utility/Pagination";



const UserFavouriteProduct = () => {
  return (
    <div>
      <div className="admin-content-text">Favourites</div>
      <Row className='justify-content-start'>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </Row>
      <Pagination/>
    </div>
  );
}

export default UserFavouriteProduct