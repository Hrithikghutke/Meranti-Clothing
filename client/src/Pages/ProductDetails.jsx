import React from "react";
import { AnnouncementBanner, Header, Loader } from "../Components";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../Actions/ProductAction";
import { Carousel } from "flowbite-react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetails({ match }) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );
  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  return (
    <div>
      <AnnouncementBanner />
      <Header />
      <div className="grid grid-cols-2 p-20">
        <div>
          <Carousel
            className="w-[80vh] h-[80vh] child:rounded-none"
            slideInterval={3000}
          >
            {product.images &&
              product.images.map((item, i) => (
                <img
                  src={item.url}
                  alt="image 1"
                  key={item.url}
                  className="carouselimg"
                />
              ))}
          </Carousel>
        </div>
        <div>
          <div>
            <h1 className="font-bold text-2xl uppercase font-robotoCondensed">
              Product Title
            </h1>
            <p className="text-paragraphColor text-base">Product Description</p>
          </div>
          <div>
            <h3>Select Size</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
