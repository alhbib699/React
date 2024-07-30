import React from 'react'
import Slider from '../../Components/Home/slider'
import HomeCatogery from '../../Components/Home/HomeCatogery'
import CardProductContainer from '../../Components/Product/CardProductContainer'
import DisCountSection from '../../Components/Home/DiscountSection'
import BrandFeatuer from '../../Components/Brand/BrandFeatuer'


const HomePage = () => {


  return (
    <div className="font" style={{ minHeight: "670px" }}>
      <Slider />
      <HomeCatogery />
      <CardProductContainer title="Best Seller" btntitle="More" pathText="/products"/>
      <DisCountSection />
      <CardProductContainer title="Favorites" btntitle="More" pathText="/products"/>
      <BrandFeatuer title="Brands" btntitle="More" pathText="/allbrand" />
    </div>
  );
}

export default HomePage