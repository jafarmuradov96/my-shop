import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryProduct, getProducts } from "../../redux/productsSlice";
import Loading from "../Loading";
import Product from "./Product";
import ReactPaginate from "react-paginate";
import { useState } from "react";

const Products = ({category, sort}) => {

  const { products, productsStatus } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if(category) {
      dispatch(getCategoryProduct(category));
    } else {
      dispatch(getProducts());
    }
    
  }, [dispatch,category]);

  const [itemOffset, setItemOffset] = useState(0);


  const itemsPerPage = 6;
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);



  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div className="w-5/6">
      {productsStatus == "LOADING" ? (
        <Loading />
      ) : (
        <>
          <div className="flex flex-wrap">
            {currentItems?.sort((a,b) => sort == "increment" ? a.price - b.price : sort = "decrement" ? b.price - a.price : null).map((product, index) => (
              <Product key={index} product={product} />
            ))}
          </div>

          <ReactPaginate
          className="paginate"
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
          />
        </>
      )}
    </div>
  );
};

export default Products;
