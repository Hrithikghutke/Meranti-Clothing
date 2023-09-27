import React from "react";
import { AnnouncementBanner, Header, Loader } from "../Components";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../Actions/ProductAction";
import { ShoppingCart } from "lucide-react";
import { Carousel } from "flowbite-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

function ProductDetails({ match }) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );

  console.log(product.ratings);
  const options = {
    edit: false,
    color: "rgb(20,20,20,0.1)",
    activeColor: "#936dab",
    size: window.innerWidth < 600 ? 20 : 22,
    value: product.ratings,
    isHalf: true,
  };

  // const [size, setsize] = useState("");

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  return (
    <div>
      <AnnouncementBanner />
      <Header />
      <div className="grid grid-cols-2 sm:grid-cols-1 py-20 sm:py-10 px-5">
        <div className="flex justify-center items-center mb-3">
          <Carousel
            className="w-[60vh] h-[80vh] sm:h-[40vh] child:rounded-none"
            slideInterval={3000}
          >
            {product.images &&
              product.images.map((item, i) => (
                <img
                  src={item.url}
                  alt="image 1"
                  key={item.url}
                  className="carouselimg "
                />
              ))}
          </Carousel>
        </div>
        <div>
          <div>
            <h1 className="font-semibold text-2xl ">{product.name}</h1>
            <p className="text-base capitalize">{product.description}</p>
            <div className="flex text-base capitalize">
              {loading ? "" : <ReactStars {...options} />}
            </div>
          </div>
          <div className="my-3">
            <h2 className="text-lg font-semibold">MRP : ₹ {product.price}/-</h2>
            <div>
              <button className="w-4">-</button>
              <input className="bg-grey text-center w-10" type="number" />
              <button className="w-4">+</button>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-1">Select Size</h3>
            <div className=" flex">
              <p className="size">S</p>
              <p className="size">L</p>
              <p className="size">XL</p>
              <p className="size">XXL</p>
            </div>
          </div>
          <div>
            <button className="flex w-1/2 mt-2 sm:w-full justify-center items-center bg-primary rounded-md px-5 py-2">
              <ShoppingCart className="text-white mr-2" />
              <span className="text-white font-semibold ">Add To Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
