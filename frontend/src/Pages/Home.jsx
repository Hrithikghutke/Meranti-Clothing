import React, { Fragment, useEffect } from "react";

import { Header, CarouseL, Product, Loader } from "../Components";
import { MetaData } from "../Constants";
import { getProduct } from "../Actions/ProductAction";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, errors, products, productsCount } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="MerantiClothing" />

          <Header />

          <CarouseL />

          <h3 className="w-full mt-16 sm:mt-16 text-center text-black uppercase tracking-widest drop-shadow-md">
            New Arrivals
          </h3>
          <div className="grid grid-cols-4 sm:grid-cols-2 ">
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
