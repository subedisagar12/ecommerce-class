import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

function ProductList() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    axios({
      url: "https://nepaligardencms.creatudevelopers.com.np/api/v1/product/get",
      method: "GET",
    }).then((res) => {
      setAllProducts(res.data.products.data);
    });
  }, []);

  console.log("All Products", allProducts);

  return (
    <>
      <div className="row">
        {allProducts.map((product, index) => (
          <div className="col-3" key={index}>
            <ProductCard
              image={product.image}
              name={product.name}
              price={product.price}
              slug={product.slug}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductList;
