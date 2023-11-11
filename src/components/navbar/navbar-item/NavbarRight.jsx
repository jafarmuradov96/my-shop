import React, { useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../../../redux/cartSlice";

const NavbarRight = () => {
  const dispatch = useDispatch();
  const { carts } = useSelector(state => state.carts)

  useEffect(()=> {
      dispatch(getCartTotal())
  }, [dispatch])

  console.log(carts, 'carts');
  return (
    <div className="flex items-center gap-3">
      <div className=" flex items-center rounded-full bg-gray-200 px-4 py-3">
      <input type="text" placeholder="Axtar" className="bg-gray-200 rounded-full outline-none" />
      <AiOutlineSearch  size ={25}/>
      </div>
      <div className="relative">
        <span className="absolute -top-3 -right-3 bg-red-600 text-white flex items-center justify-center rounded-full w-5 h-5">
          0
        </span>
        <AiOutlineShoppingCart size={25} />
      </div>
    </div>
  );
};

export default NavbarRight;
