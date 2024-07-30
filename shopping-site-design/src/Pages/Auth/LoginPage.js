import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div style={{ minHeight: "670px" }}>
      <Container style={{ minHeight: "680px" }}>
        <Row className="py-5 d-flex justify-content-center ">
          <Col sm="12" className="d-flex flex-column ">
            <label className="mx-auto title-login">Login</label>
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
            <button className="btn-login mx-auto mt-4">Login</button>
            <label className="mx-auto my-4">
              Don't have an account?{" "}
              <Link to="/register" style={{ textDecoration: "none" }}>
                <span style={{ cursor: "pointer" }} className="text-danger">
                  Register
                </span>
              </Link>
            </label>
          </Col>
          <label className="mx-auto my-4">
            <Link to="/admin/allproducts" style={{ textDecoration: "none" }}>
              <span style={{ cursor: "pointer" }} className="text-danger">
                Admin Login
              </span>
            </Link>
          </label>
          <label className="mx-auto my-4">
            <Link to="/user/allproducts" style={{ textDecoration: "none" }}>
              <span style={{ cursor: "pointer" }} className="text-danger">
                Users Login
              </span>
            </Link>
          </label>
        </Row>
      </Container>
    </div>
  );
}

export default LoginPage