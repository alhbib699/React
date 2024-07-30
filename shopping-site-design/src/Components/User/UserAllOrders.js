import React from "react";
import { Row } from "react-bootstrap";
import UserAllOrdersItem from "./UserAllOrdersItem";

const UserAllOrders = () => {
  return (
    <div>
      <div className="admin-content-text">All Orders</div>
      <Row className="justify-content-start">
        <UserAllOrdersItem />
        <UserAllOrdersItem />
        <UserAllOrdersItem />
      </Row>
    </div>
  );
};

export default UserAllOrders;
