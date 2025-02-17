import React from "react";
import { Link } from "react-router-dom";

const UserSideBar = () => {
  return (
    <div className="sidebar">
      <div className="d-flex flex-column">
        <Link to="/user/allproducts" style={{ textDecoration: "none" }}>
          <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
            Orders management
          </div>
        </Link>
        <Link to="/user/favourite" style={{ textDecoration: "none" }}>
          <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
            Favourites
          </div>
        </Link>
        <Link to="/user/addresse" style={{ textDecoration: "none" }}>
          <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
            Addresses
          </div>
        </Link>

        <Link to="/user/profile" style={{ textDecoration: "none" }}>
          <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
            My profile
          </div>
        </Link>
      </div>
    </div>
  );
};

export default UserSideBar;
