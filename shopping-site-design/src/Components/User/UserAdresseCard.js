import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import deleteicon from "../../images/delete.png";

const UserAdresseCard = () => {
  return (
    <div className="user-address-card my-3 px-3">
      <Row className="d-flex justify-content-between  ">
        <Col xs="1">
          <div className="p-2">Home</div>
        </Col>
        <Col xs="4" className="d-flex d-flex justify-content-end">
          <div className="d-flex p-2">
            <div className="d-flex mx-2">
              <Link to="/user/edit-address" style={{ textDecoration: "none" }}>
                <p className="item-delete-edit">
                  <i class="fa-solid fa-pen-to-square"></i> Edit
                </p>
              </Link>
            </div>
            <div className="d-flex ">
              <img
                alt=""
                className="ms-1 mt-2"
                src={deleteicon}
                height="17px"
                width="15px"
              />
              <p className="item-delete-edit"> Delete</p>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs="12">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "14px",
            }}
          >
            Turkey Adana 01
          </div>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col xs="12" className="d-flex">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            Phone number :
          </div>

          <div
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2"
          >
            05555555555
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default UserAdresseCard