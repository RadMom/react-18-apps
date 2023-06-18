import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const params = useParams();

    return (
        <>
            <div>ProductDetails</div>
            <p>{params.productId}</p>
        </>
    );
};

export default ProductDetails;
