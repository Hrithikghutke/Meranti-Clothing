import { React, useState } from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const Product = ({ product }) => {
  const options = {
    edit: false,
    color: "rgb(20,20,20,0.1)",
    activeColor: "#6059f7",
    size: window.innerWidth < 600 ? 15 : 20,
    value: product.ratings,
    isHalf: true,
  };

  const [cartCount, setcartCount] = useState(0);

  return (
    <div className="px-3">
      <Link
        className="block h-[70vh] sm:h-[30vh] hover:brightness-50 duration-300"
        to={product._id}
      >
        <img className="w-full h-full " src={product.images[0].url} alt="img" />
      </Link>
      <div className="relative grid grid-cols-2 sm:grid-cols-1 py-3 px-0.5">
        <div>
          <h2 className="text-sm sm:text-[12px] capitalize text-headingColor tracking-widest sm:tracking-normal">
            {product.name}
          </h2>
          <p className="text-xs sm:text-[10px] text-paragraphColor tracking-wider">
            {`₹${product.price}`}
          </p>
        </div>
        <div className="absolute top-5 right-0 flex flex-col items-end justify-end sm:justify-between ">
          <MdOutlineAddShoppingCart
            onClick={() => setcartCount(cartCount + 1)}
            className="cursor-pointer z-10 text-lg sm:text-sm hover:text-primary duration-300"
          />
          <ReactStars {...options} />
        </div>
      </div>
    </div>
  );
};

export default Product;
