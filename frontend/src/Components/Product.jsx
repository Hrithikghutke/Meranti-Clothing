import React from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const options = {
  edit: false,
  color: "rgb(20,20,20,0.1)",
  activeColor: "#6059f7",
  size: window.innerWidth < 600 ? 10 : 20,
  value: 4.5,
  isHalf: true,
};

const Product = ({ product }) => {
  return (
    <Link className="p-10 hover:brightness-50 duration-300" to={product._id}>
      <img className="w-full " src={product.image[0].url} alt="img" />

      <div className="grid grid-cols-2 sm:grid-cols-1 px-0.5 py-3 sm:py-1.5">
        <div>
          <h2 className="text-sm sm:text-[12px] capitalize text-headingColor tracking-widest sm:tracking-normal">
            {product.name}
          </h2>
          <p className="text-xs sm:text-[10px] text-paragraphColor tracking-wider">
            {product.price}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row-reverse sm:py-1 items-end justify-end sm:justify-between ">
          <MdOutlineAddShoppingCart className="text-lg sm:text-sm hover:text-primary duration-300" />
          <ReactStars {...options} />
        </div>
      </div>
    </Link>
  );
};

export default Product;
