import React from "react";
import { Link } from "react-router-dom";

function ProductCard(props) {
  // console.log(props.data);
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">Rs. {props.price}</p>
          <Link
            to={"/product_detail/" + props.slug}
            className="btn btn-primary"
          >
            View Details
          </Link>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
