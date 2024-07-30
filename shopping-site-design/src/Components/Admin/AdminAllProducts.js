import React from "react";
import AdminAllProductCard from "./AdminAllProductCard";
import { Row } from "react-bootstrap";

const AdminAllProducts = () => {
  return (
    <div>
      <div className="admin-content-text">Product management</div>
      <Row className="justify-content-start">
        <AdminAllProductCard />
        <AdminAllProductCard />
        <AdminAllProductCard />
        <AdminAllProductCard />
      </Row>
    </div>
  );
};

export default AdminAllProducts;
