import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import parse from "html-react-parser";

function ProductDetailPage() {
  const params = useParams();
  const [detail, setDetail] = useState({});

  useEffect(() => {
    axios({
      url:
        "https://nepaligardencms.creatudevelopers.com.np/api/v1/product/get/" +
        params.productSlug,
      method: "GET",
    }).then((response) => {
      setDetail(response.data.data.product);
    });
  }, []);

  return (
    <>
      <img src={detail.image} />
      <h4>{detail.name}</h4>
      <p>{detail.price}</p>
      <p>{parse(detail.detail ? detail.detail : "")}</p>
      <p>{parse(detail.ingredeints ? detail.ingredeints : "")}</p>
    </>
  );
}

export default ProductDetailPage;
