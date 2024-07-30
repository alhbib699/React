import React from 'react'
import { Row } from 'react-bootstrap';

const SideFilter = () => {
  return (
    <div className="mt-3">
      <Row>
        <div className="d-flex flex-column mt-2">
          <div className="filter-title">Category</div>
          <div className="d-flex mt-3">
            <input type="checkbox" value="" />
            <div className="filter-sub me-2 px-1"> All</div>
          </div>
          <div className="d-flex mt-2">
            <input type="checkbox" value="" />
            <div className="filter-sub me-2 px-1"> Devics</div>
          </div>
          <div className="d-flex mt-2">
            <input type="checkbox" value="" />
            <div className="filter-sub me-2 px-1">Clothes</div>
          </div>
          <div className="d-flex mt-2">
            <input type="checkbox" value="" />
            <div className="filter-sub me-2 px-1">Food</div>
          </div>
          <div className="d-flex mt-2">
            <input type="checkbox" value="" />
            <div className="filter-sub me-2 px-1">Indirims</div>
          </div>
        </div>

        <div className="d-flex flex-column mt-2">
          <div className="filter-title mt-3 px-1">Brands</div>
          <div className="d-flex mt-3">
            <input type="checkbox" value="" />
            <div className="filter-sub me-2 px-1">All</div>
          </div>
          <div className="d-flex mt-2">
            <input type="checkbox" value="" />
            <div className="filter-sub me-2 px-1">Apple</div>
          </div>
          <div className="d-flex mt-2">
            <input type="checkbox" value="" />
            <div className="filter-sub me-2 px-1">Samsung</div>
          </div>
        </div>

        <div className="filter-title my-3 px-1">Price</div>
        <div className="d-flex">
            
          <p className="filter-sub my-2 ">From:</p>
          <input
            className="m-2 text-center"
            type="number"
            style={{ width: "50px", height: "25px" }}
          />
        </div>
        <div className="d-flex">
          <p className="filter-sub my-2">To:</p>
          <input
            className="m-2 text-center"
            type="number"
            style={{ width: "50px", height: "25px" }}
          />
        </div>
      </Row>
    </div>
  );
}

export default SideFilter