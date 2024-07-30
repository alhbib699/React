import React from "react";
import AllCategoryContainer from "../../Components/Category/AllCategoryContainer";
import Pagination from "../../Components/Utility/Pagination";


const AllCategoryPage = () => {

  return (
    <div style={{ minHeight: "670px" }}>
      <AllCategoryContainer />
      <Pagination  />
    </div>
  );
};

export default AllCategoryPage;
