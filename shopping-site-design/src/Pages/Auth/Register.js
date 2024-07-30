import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div style={{ minHeight: "670px" }}>
      <Container style={{ minHeight: "680px" }}>
        <Row className="py-5 d-flex justify-content-center ">
          <Col sm="12" className="d-flex flex-column ">
            <label className="mx-auto title-login">New account</label>
            <input
              placeholder="Username..."
              type="text"
              className="user-input mt-3 text-center mx-auto"
            />
            <input
              placeholder="Email..."
              type="text"
              className="user-input my-3 text-center mx-auto"
            />
            <input
              placeholder="Password..."
              type="password"
              className="user-input text-center mx-auto"
            />
            <button className="btn-login mx-auto mt-4">Register</button>
            <label className="mx-auto my-4">
              Already have account?{" "}
              <Link to="/register" style={{ textDecoration: "none" }}>
                <span style={{ cursor: "pointer" }} className="text-danger">
                  Click here
                </span>
              </Link>
            </label>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Register