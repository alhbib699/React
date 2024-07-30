import React from "react";
import { Col, Row } from "react-bootstrap";

const AdminAddSubCategory = () => {

  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">Add New SubCategory</div>
        <Col sm="8">
          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="Subcategory name..."
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
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button className="btn-save d-inline mt-2 ">
            Add
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default AdminAddSubCategory;
