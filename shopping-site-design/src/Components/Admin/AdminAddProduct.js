import React from "react";
import { Col, Row } from "react-bootstrap";
import Multiselect from "multiselect-react-dropdown";
import add from "../../images/add.png";
import avatar from "../../images/avatar.png";

// import avatar from "/shopping-site-design/src/images/avatar.png";

const AdminAddProduct = () => {

  const onSelect = () => {
    
  };
  const onRemove = () => {
    
  };
  const options = [
    { name: "First Cat ", id: 1 },
    { name: "Second Cat", id: 2 },
  ];


  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">Add new product </div>
        <Col sm="8">
          <div className="text-form pb-2">Product photos.. </div>

          <img src={avatar} alt="" height="100px" width="120px" />

          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="Product name"
          />
          <textarea
            className="input-form-area p-2 mt-3"
            rows="4"
            cols="50"
            placeholder="Product description... "
          />
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="Price befor discount "
          />
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="Price after discount "
          />
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="availeble amount"
          />
          <select
            name="languages"
            id="lang"
            className="select input-form-area mt-3 px-2 "
          >
            <option value="val">Choose Category</option>
            <option value="val">First Cat </option>
            <option value="val2">Second Cat </option>
            <option value="val2">Third Cat</option>
            <option value="val2">Fourth Cat</option>
          </select>

          <Multiselect
            className="mt-2 text-end"
            placeholder="SubCategory "
            options={options}
            onSelect={onSelect}
            onRemove={onRemove}
            displayValue="name"
            style={{ color: "red" }}
          />
          <select
            name="brand"
            id="brand"
            className="select input-form-area mt-3 px-2 "
          >
            <option value="val">Barnds</option>
            <option value="val2">First brand</option>
            <option value="val2">Second brand</option>
            <option value="val2">Third brand</option>
          </select>
          <div className="text-form mt-3 "> Available colors</div>
          <div className="mt-1 d-flex">
            <div
              className="color ms-2 border  mt-1"
              style={{ backgroundColor: "#E52C2C" }}
            ></div>
            <div
              className="color ms-2 border mt-1 "
              style={{ backgroundColor: "white" }}
            ></div>
            <div
              className="color ms-2 border  mt-1"
              style={{ backgroundColor: "black" }}
            ></div>

            <img
              src={add}
              alt=""
              width="30px"
              height="35px"
              style={{ cursor: "pointer" }}
            />
            
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button  className="btn-save d-inline mt-2 ">
            Add product
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default AdminAddProduct;
