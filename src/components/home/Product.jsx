import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const navigate = useNavigate();


  return (
    <div onClick={() => navigate(`products/${product.id}`)} className="w-[320px] p-2 m-2 border rounded-md relative cursor-pointer">
        <div className="text-2xl absolute font-bold rounded-md top-0 right-0 bg-black text-white p-1">{product?.price} <span className="text-sm">AZN</span> </div>
        <img className="w-full h-[200px] object-contain m-auto" src={product?.image} alt="" />
        <div className="text-center">{product?.title}</div>
    </div>
  );
};

export default Product;
