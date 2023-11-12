import React, { useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../../../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const NavbarRight = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { itemCount } = useSelector(state => state.carts)
  console.log(itemCount, 'carts');

  useEffect(() => {
      dispatch(getCartTotal())
  },[dispatch])

  return (
    <div className="flex items-center gap-3">
      <div className=" flex items-center rounded-full bg-gray-200 px-4 py-3">
      <input type="text" placeholder="Axtar" className="bg-gray-200 rounded-full outline-none" />
      <AiOutlineSearch  size ={25}/>
      </div>
      <div onClick={ () => navigate("cart")} className="relative">
        <span className="absolute -top-3 -right-3 bg-red-600 text-white flex items-center justify-center rounded-full w-5 h-5">
          {itemCount}
        </span>
        <AiOutlineShoppingCart size={25} />
      </div>
    </div>
  );
};

export default NavbarRight;
