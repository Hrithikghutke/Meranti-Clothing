import React, { Fragment, useEffect } from "react";
import { Carousel } from "flowbite-react";

import {
  AnnouncementBanner,
  Header,
  Loader,
  Product,
  SearchBarHeader,
} from "../Components";
import { MetaData } from "../Constants";
import { getProduct } from "../Actions/ProductAction";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);
  useEffect(() => {
    if (error) {
      console.log(error);
      toast.error(error);
    }
    dispatch(getProduct());
  }, [dispatch, error]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="MerantiClothing" />
          <AnnouncementBanner />
          <Header />
          <SearchBarHeader />
          <Carousel
            className="h-[80vh] sm:h-[40vh] child:rounded-none"
            slideInterval={3000}
          >
            <img
              src="https://images.unsplash.com/photo-1542219550-2da790bf52e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80"
              alt="image 1"
              className="carouselimg"
            />
            <img
              src="https://images.unsplash.com/photo-1548768041-2fceab4c0b85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="image 2"
              className="carouselimg"
            />
            <img
              src="https://images.unsplash.com/photo-1605518215584-5ba74df5dfd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
              alt="image 3"
              className="carouselimg"
            />
          </Carousel>

          <h3 className="w-full mt-16 text-lg sm:mt-16 sm:text-sm  text-center text-black uppercase tracking-widest drop-shadow-md">
            -- New Arrivals --
          </h3>
          <div className="grid grid-cols-4 sm:grid-cols-2 mt-4 px-[50px] sm:px-[10px]">
            {products &&
              products.map((product) => (
                <Product key={product._id} product={product} />
              ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
