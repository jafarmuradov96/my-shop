import React, { useState } from "react";
import SliderSite from "../components/home/SliderSite";
import Sorting from "../components/home/Sorting";
import Categories from "../components/home/Categories";
import Products from "../components/home/Products";

const Home = () => {
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("");
  return (
    <div>
      <div className="flex items-center gap-2 my-10">
        <div className="w-1/2">
          <h2 className=" text-2xl">
            Lorem ipsum dolor sit hsdhs djdhs jsdjs amet consectetur adipisicing
            elit. Aliquid, numquam.
          </h2>
          <button className="px-10 py-3 my-6 cursor-pointer bg-orange-500 text-white rounded-full">
            See more
          </button>
        </div>
        <div className="w-1/2">
          <SliderSite />
        </div>
      </div>

      <div className="my-10">
        <Sorting setSort = {setSort}/>
        <div className="flex">
          <Categories setCategory = {setCategory}/>
          <Products category ={category} sort ={sort}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
