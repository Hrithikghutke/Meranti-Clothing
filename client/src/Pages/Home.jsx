import React, { Fragment, useEffect } from "react";
import {
  AnnouncementBanner,
  CarouseL,
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
      errorToast(error);
    }
    dispatch(
      getProduct(
        toast.success("Product Loaded Successfully", {
          position: toast.POSITION.BOTTOM_CENTER,
        })
      )
    );
  }, [dispatch]);

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
          <CarouseL />

          <h3 className="w-full mt-16 text-lg sm:mt-16 sm:text-sm  text-center text-black uppercase tracking-widest drop-shadow-md">
            -- New Arrivals --
          </h3>
          <div className="grid grid-cols-4 sm:grid-cols-2 mt-4 px-[50px] sm:px-[20px]">
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
