import React from "react";
import UnopDropdown from "unop-react-dropdown";
import sort from "../../images/sort.png";

const SearchCountResulte = ({ title }) => {
  const handler = () => {};
  return (
    <div className="d-flex justify-content-between pt-3 px-2">
      <div className="sub-tile">{title}</div>
      <div className="search-count-text d-flex ">
        <UnopDropdown
          onAppear={handler}
          onDisappearStart={handler}
          trigger={
            <p className="mx-1">
              <img
                width="20px"
                height="20px"
                className="ms-1"
                src={sort}
                alt=""
              />
              Sort by{" "}
            </p>
          }
          delay={0}
          align="CENTER"
          hover
        >
          <div className="card-filter">
            <div className="border-bottom card-filter-item">Best seller</div>
            <div className="border-bottom card-filter-item">Best rating </div>
            <div className="border-bottom card-filter-item">
              price from low to high
            </div>
            <div className=" card-filter-item">price from high to low</div>
          </div>
        </UnopDropdown>
      </div>
    </div>
  );
};

export default SearchCountResulte;
