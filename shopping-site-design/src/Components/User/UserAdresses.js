import React from 'react'
import UserAdresseCard from './UserAdresseCard';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UserAdresses = () => {
  return (
    <div>
      <div className="admin-content-text">Addresses</div>
      <UserAdresseCard />
      <UserAdresseCard />
      <UserAdresseCard />

      <Row className="justify-content-center">
        <Col sm="5" className="d-flex justify-content-center">
          <Link to="/user/add-address" style={{ textDecoration: "none" }}>
            <button className="btn-add-address">Add new addresse</button>
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export default UserAdresses