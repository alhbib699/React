import React from 'react'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import { Container } from 'react-bootstrap'
import ProductDetails from '../../Components/Product/ProductDetails'
import RateContainer from '../../Components/Rate/RateContainer'
import CardProductContainer from '../../Components/Product/CardProductContainer'

const ProductDetailesPage = () => {
  return (
    <div style={{minHeight:"670px"}}>
        <CategoryHeader/>
        <Container>
            <ProductDetails/>
            <RateContainer/>
            <CardProductContainer title="Suggesting for you"/>
        </Container>
    </div>
  )
}

export default ProductDetailesPage